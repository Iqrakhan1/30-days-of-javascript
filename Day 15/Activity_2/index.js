// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function uniqueIdGen() {
  lastId = 0;
  return function () {
    lastId += 1;
    return lastId;
  };
}

const uniqueId = uniqueIdGen();

console.log("unique id is " + uniqueId());
console.log("unique id is " + uniqueId());
console.log("unique id is " + uniqueId());
console.log("unique id is " + uniqueId());

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function greet(name) {
  return function () {
    console.log(`Hello, Welcome ${name}`);
  };
}

const greetings = greet("Tamzeem");
greetings();
