// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
console.log("task 4");

class customError extends Error {
  constructor(message) {
    super(message);
    this.message = "Custom Error";
  }
}

function checkvalue(value) {
  if (value < 0) {
    throw new customError("value cannot be negative");
  }
  return value;
}

try {
  let result = checkvalue(-5);
  console.log(result);
} catch (error) {
  if (error instanceof customError) {
    console.log("Error : ", error.message);
  } else {
    console.log("An unexpected error occurred ", error.message);
  }
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
console.log("task 5");

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "validates";
  }
}

function validatesInput(input) {
  if (typeof input !== "string" || input.trim() === "") {
    throw new ValidationError("Input must be non-empty");
  }
}
try {
  let userInput = "";
  console.log("Validate Input:" + validatesInput(userInput));
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Error from validates", error.message);
  } else {
    console.log("An unexpected error occurred: " + error.message);
  }
}
