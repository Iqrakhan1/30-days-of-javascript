// Activity 5: Graceful Error Handling in Fetch
let data = fetch("https://invalidUrl.com");

data
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log("error in then catch() block : ", error.message);
  });

//   Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchdata() {
  try {
    let data2 = await fetch("https://invalidUrl.com");
    console.log(await data2.json());
  } catch (err) {
    console.log("Error in fetching data from async function " + err.message);
  }
}

fetchdata();
