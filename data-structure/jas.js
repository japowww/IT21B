import { studentName } from './name.js';
import { studentAge } from './age.js';
import { studentOccupation } from './occupation.js';
import { studentMajor } from './major.js';


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


class Student extends Person {
    constructor(name, age, occupation, major) {
        super(name, age, occupation);
        this.major = major;
    }

    getMajor() {
        return this.major;
    }

    displayInfo() {
        return `<strong>Name:</strong> ${this.getName()}<br>
                <strong>Age:</strong> ${this.getAge()}<br>
                <strong>Occupation:</strong> ${this.getOccupation()}<br>
                <strong>Major:</strong> ${this.getMajor()}`;
    }
}


const student = new Student(studentName, studentAge, studentOccupation, studentMajor);


document.getElementById('student-info').innerHTML = student.displayInfo();
console.log(`Name: ${studentName}`);
console.log(`Name: ${studentAge}`);
console.log(`Name: ${studentOccupation}`);
console.log(`Name: ${studentMajor}`);