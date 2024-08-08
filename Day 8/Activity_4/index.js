// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

console.log("Task 7:");
function products(num1, num2 = 1) {
  return num1 * num2;
}

console.log("with second parameter calling: " + products(4, 6));
console.log("without second parameter: " + products(23));

console.log("-------------------------------------------------");
