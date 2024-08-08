// Day 13: Modules
// Tasks/Activities:

// Activity 1: Creating and Exporting Modules

// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

export const add = (num1, num2) => {
  return num1 + num2;
};

// • Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script. Activity 2: Named and Default Exports
export const person = {
  name: "iqra",
  age: "22",
  greet() {
    console.log(`Hello ${this.name}, your age is ${this.age}`);
  },
};
