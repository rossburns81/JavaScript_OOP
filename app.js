console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, numPets, residence, hobbies) {
        this.name = name;
        this.numPets = numPets;
        this.residence = residence;
        this.hobbies = hobbies;
}

info() {
    console.log(`${this.name} has ${this.numPets} pet(s), lives in ${this.residence}, and enjoys ${this.hobbies}`);
}

greeting(name) {
    console.log("Hello ${name}!");
    }
}

class Coder extends Person {
    constructor(name, numPets, residence, hobbies) {
        super(name, numPets, residence, hobbies);

        this.occupation = ("Full Stack Web Developer");
    }

    greeting(name) {
        console.log(`Hello ${name}! I'm a ${this.occupation}.`)
    }
}

let person = new Person("John", 3, "Vestavia", ["running", "camping", "hiking"]);
let coder = new Coder ("Ross", 2, "Hoover", ["cars", "sports", "music", "coding"]);

person.info();
coder.info();

coder.greeting(person.name);