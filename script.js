class Name {
    constructor(Rose, Tulip, Daisy, SunFlower) {
        this.flowers = [
            { name: Rose, color: "Red", season: "Spring", isFragrant: true },
            { name: Tulip, color: "Pink", season: "Summer", isFragrant: true },
            { name: Daisy, color: "White", season: "Fall", isFragrant: false },
            { name: SunFlower, color: "Yellow", season: "Summer", isFragrant: false }
        ];
    }

    displayOptions() {
        let options = "Select a Flower:\n";
        this.flowers.forEach((flower, index) => {
            options += `${index + 1}. ${flower.name}\n`;
        });
        return options;
    }

    displayDetails(index) {
        const flower = this.flowers[index];
        const detailsDiv = document.getElementById('flower-details');

        if (flower) {
            const details = `
                <p>Flower: ${flower.name}</p>
                <p>The ${flower.name} blooms in ${flower.season}.</p>
                <p>The ${flower.name} is ${flower.isFragrant ? "Fragrant" : "Not Fragrant"}.</p>
                <p>The ${flower.name} has a beautiful ${flower.color} color.</p>
            `;
            detailsDiv.innerHTML = details;
        } else {
            detailsDiv.innerHTML = "<p>Invalid selection, please choose a valid flower.</p>";
        }
    }

    promptUser() {
        const options = this.displayOptions();
        const answer = prompt(options);
        const index = parseInt(answer, 10) - 1;
        this.displayDetails(index);
    }
}


const flowerNames = new Name("Rose", "Tulip", "Daisy", "SunFlower");
flowerNames.promptUser();
