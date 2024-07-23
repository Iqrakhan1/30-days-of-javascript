// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data from server 1");
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data from server 2");
  }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data from server 3");
  }, 3000);
});

promise1
  .then((message1) => {
    console.log(message1);
    return promise2;
  })
  .then((message2) => {
    console.log(message2);
    return promise3;
  })
  .then((message3) => {
    console.log(message3);
  })
  .catch((err) => {
    console.log(err.message);
  });
