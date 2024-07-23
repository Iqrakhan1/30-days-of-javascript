// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

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

Promise.all([promise1, promise2, promise3])
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("One of the promise rejected");
  });

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

Promise.race([promise1, promise2, promise3]) //ts only resolve single first promise of all promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("One of the promise rejected");
  });
