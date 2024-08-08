// Day 12: Error Handling

// Activity 1: Basic Error Handling with Try-Catch

console.log("Task 1:");
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

try {
  console.log(user1);
} catch (e) {
  console.log("Error occor " + e.message);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divides(numinator, denominator) {
  if (denominator === 0) {
    throw new Error("Cant divided by zero.");
  }
  return numinator / denominator;
}

try {
  let result = divides(120, 10);
  console.log("Result " + result);
} catch (e) {
  console.log("Error occor" + e.message);
}
