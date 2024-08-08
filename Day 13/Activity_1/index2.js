// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

import { add, person } from "./index1.js";

console.log("---------------Task 1------------------");

console.log(add(34, 67));

console.log("---------------------------------------");

// • Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

console.log("---------------Task 2------------------");

person.greet();
console.log("---------------------------------------");
