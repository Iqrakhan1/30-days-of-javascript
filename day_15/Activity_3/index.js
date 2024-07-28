// Activity 3: Closures in Loops

// • Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
const arrayfunc = [];

for (let i = 0; i < 10; i++) {
  arrayfunc.push(function () {
    console.log(i);
  });
}

arrayfunc.forEach((func) => func());
