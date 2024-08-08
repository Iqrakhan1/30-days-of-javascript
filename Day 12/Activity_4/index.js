// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

let promise1 = new Promise((resolve, reject) => {
  let randomNumber = Math.random();
  if (randomNumber > 0.5) {
    resolve("Promise resolve Succsesfully");
  } else {
    reject(new Error("promise rejected"));
  }
});
promise1
  .then((message) => {
    console.log("Using then and catch: " + message);
  })
  .catch((error) => {
    console.log("Error : " + error.message);
  });

//   Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function errorhandelfunction() {
  try {
    let value = await promise1;

    console.log("From Async function :" + value);
  } catch (e) {
    console.log("Error: " + e.message);
  }
}

errorhandelfunction();
