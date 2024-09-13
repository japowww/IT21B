const readline = require('readline');

class Name {
    constructor(Rose, Tulip, Daisy, SunFlower) {
        this.flowers = [
            { name: Rose, color: "Red", season: "Spring", fragrance: "Strong" },
            { name: Tulip, color: "Pink", season: "Summer", fragrance: "Mild" },
            { name: Daisy, color: "White", season: "Fall", fragrance: "None" },
            { name: SunFlower, color: "Yellow", season: "Summer", fragrance: "Mild" }
        ];
    }

    displayOptions() {
        console.log("Select a Flower:");
        this.flowers.forEach((flower, index) => {
            console.log(`${index + 1}. ${flower.name}`);
        });
    }

    displayDetails(index) {
        const flower = this.flowers[index];
        if (flower) {
            console.log(`Flower:  ${flower.name}:`);
            console.log(`The ${flower.name} blooms in ${flower.season}`);
            console.log(`The ${flower.name} fragrance is ${flower.fragrance}`);
            console.log(`The ${flower.name} has a beautiful ${flower.color} color`);
        } else {
            console.log("Invalid selection, please choose a valid flower.");
        }
    }

    promptUser() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        this.displayOptions();

        rl.question('Enter the number of the flower you want to choose: ', (answer) => {
            const index = parseInt(answer, 10) - 1;
            this.displayDetails(index);
            rl.close();
        });
    }
}

const flowerNames = new Name("Rose", "Tulip", "Daisy", "SunFlower");
flowerNames.promptUser();
