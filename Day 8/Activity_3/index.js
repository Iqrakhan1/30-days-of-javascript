// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
console.log("Task 5");
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let newArray = [...arr1, ...arr2];

console.log(newArray);
console.log("----------------------------------------------");

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
console.log("Task 6:");
function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

let number = [9, 8, 7, 6, 5, 4, 3, 2];

console.log(sum(...number));

console.log("----------------------------------------------");
