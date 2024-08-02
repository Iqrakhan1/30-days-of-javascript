// Activity 1: Understanding LocalStorage
// Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
localStorage.setItem("myString", "Hello LocalStorage!");

const retrievedString = localStorage.getItem("myString");
console.log(retrievedString);

// Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

const myObj = {
  name: "Iqra Khan",
  age: 22,
  rollnum: 23232323,
};

localStorage.setItem("myObj", JSON.stringify(myObj));

const getdata2 = JSON.parse(localStorage.getItem("myObj"));
console.log(getdata2);
