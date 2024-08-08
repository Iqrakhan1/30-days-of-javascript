// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
console.log("Task 8:");
let username = "Iqra";
let age = 22;
let obj = {
  username,
  age,
  greet: function () {
    return `Hello ${this.username}, you age is ${this.age}`;
  },
};

console.log(obj.greet());
console.log("--------------------------------------");

// Task 9: Create an object with computed property names based on variables and log the object to the console.

console.log("Task 9:");

let propName = "usernames";
let propAge = "age2";
let propClass = "education";

let usernames = "iqra";
let age2 = 22;
let education = "M. tech";

let obj2 = {
  [propName]: usernames,
  [propAge]: age2,
  [propClass]: education,
};

console.log(obj2);

console.log("--------------------------------------");
