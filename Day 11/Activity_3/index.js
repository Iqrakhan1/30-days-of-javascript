// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolve");
  }, 2000);
});

async function waitforPromise() {
  try {
    const value = await promise1;
    console.log(value);
  } catch (err) {
    console.log(err);
  }
}

waitforPromise();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise rejected after 2 sec");
  }, 2000);
});

async function rejectfuntion() {
  try {
    let value2 = await promise2;
    console.log(value2);
  } catch (error) {
    console.log(error);
  }
}
rejectfuntion();
