// Activity 4: Using Third-Party Modules

// Task 6: Install a third-party module (e.g., lodash) using npm.
import _ from "lodash";
import axios from "axios";

const arr = [1, 4, 5, 6, 7, 8];

console.log(_.shuffle(arr));

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
