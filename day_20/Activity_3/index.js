// Activity 3: Understanding SessionStorage
// Task 5: Save a string value to sessionStorage and retrieve it
sessionStorage.setItem("mySession", "Hello , from session Storage");

const retriveseesiondata = sessionStorage.getItem("mySession");

console.log(retriveseesiondata);

// Task 6: Save an object to sessionStorage by converting it to a JSON string

const myobj = {
  name: "Iqra Khan",
  age: "22",
  rollnum: "1234567890",
};

sessionStorage.setItem("mySession", JSON.stringify(myobj));

const retriveData = JSON.parse(sessionStorage.getItem("mySession"));

console.log(retriveData);
