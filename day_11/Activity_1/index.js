// Task 1: Create a promise that resolves with a message after a 2-second timeout and logs the message to the console.

const mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolve after 2 seconds");
  }, 2000);
});

mypromise.then((message) => {
  console.log(message);
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handles the error using .catch()

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promiss rejected ");
  }, 2000);
});

promise2
  .then((mg) => {
    console.log(mg);
  })
  .catch((err) => {
    console.log(err);
  });
