// Activity 5: Comparing LocalStorage and SessionStorag
// Task 9: Save a value to both localStorage and sessionStorage

const localStoragedata = localStorage.setItem(
  "localdata",
  "Hello this is local data"
);
const sessionStoragedata = sessionStorage.setItem(
  "sessiondata",
  "hello from session storage"
);

console.log(localStorage.getItem("localdata"));
console.log(sessionStorage.getItem("sessiondata"));
// Task 10: Clear all data from both localStorage and sessionStorage
function cleardata() {
  localStorage.clear();
  sessionStorage.clear();
  console.log("Data cleared");
}

cleardata();
console.log(localStorage.getItem("localdata"));
console.log(sessionStorage.getItem("sessiondata"));
