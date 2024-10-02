import { studentName } from './name.js';
import { studentAge } from './age.js';
import { studentOccupation } from './occupation.js';
import { studentMajor } from './major.js';

// Person class with encapsulated private fields
class Person {
    #name;
    #age;
    #occupation;

    constructor(name, age, occupation) {
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    getOccupation() {
        return this.#occupation;
    }
}

// Student class that extends Person and adds a major
class Student extends Person {
    constructor(name, age, occupation, major) {
        super(name, age, occupation);
        this.major = major;
    }

    getMajor() {
        return this.major;
    }

    // Display student information
    displayInfo() {
        return `Name: ${this.getName()}<br>
                Age: ${this.getAge()}<br>
                Occupation: ${this.getOccupation()}<br>
                Major: ${this.getMajor()}`;
    }
}

// Create a student instance using the imported values
const student = new Student(studentName, studentAge, studentOccupation, studentMajor);

// Display the student's information inside the div with id 'student-info'
document.getElementById('student-info').innerHTML = student.displayInfo();
console.log( `Name: ${studentName} `);
console.log( `Name: ${studentAge} `);
console.log( `Name: ${studentOccupation} `);
console.log( `Name: ${studentMajor} `);