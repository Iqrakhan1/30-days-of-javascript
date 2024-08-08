// Day 16: Recursion

// Tasks/Activities:

// Activity 1: Basic Recursion

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

console.log("factorial is : " + factorial(5));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function nthfib(num) {
  if (num <= 1) return 1;
  return nthfib(num - 1) + nthfib(num - 2);
}

console.log("nthfib is : " + nthfib(9));
