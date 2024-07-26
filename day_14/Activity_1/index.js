// Day 14: Classes

// Tasks/Activities:

// Activity 1: Class Definition

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getgreeting() {
    return `Hello, my name is ${this.name} and my age is ${this.age} `;
  }
  updateAge(newage) {
    this.age = newage;
    console.log(`Update Age: ${this.age}`);
  }
}

const person1 = new person("Iqra khan", 22);

console.log(person1.getgreeting());

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
person1.updateAge(21);
