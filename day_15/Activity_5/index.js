// Activity 5: Memoization

// • Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(func) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = func(...args);
      cache.set(key, result);
      return result;
    }
  };
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3)); // Logs: 5
console.log(memoizedAdd(2, 3)); // Logs: 5 (from cache)

// • Task 8: Create a memoized version of a function that calculates the factorial of a number.

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));
