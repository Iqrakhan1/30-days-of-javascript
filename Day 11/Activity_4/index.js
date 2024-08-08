// Activity 4: Fetching Data from an API

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((responce) => responce.json())
  .then((json) => console.log(json));

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function asyncdatafatch() {
  try {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(await data.json());
  } catch (err) {
    console.log(err);
  }
}

asyncdatafatch();
