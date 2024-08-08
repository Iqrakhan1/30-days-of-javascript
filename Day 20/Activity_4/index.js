// Activity 4: Using SessionStorage

// Task 7: Create a simple form to save user input to sessionStorage

document
  .getElementById("inputform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    sessionStorage.setItem("seesionData", JSON.stringify({ name, email }));
    displaySessiondata();
  });
function displaySessiondata() {
  const displayData = JSON.parse(sessionStorage.getItem("seesionData"));
  if (displayData) {
    document.getElementById(
      "userdata"
    ).textContent = `Name: ${displayData.name} , Email: ${displayData.email}`;
    // console.log(displayData.name, displayData.email);
  }
}

document.addEventListener("DOMContentLoaded", displaySessiondata);

// Task 8: Remove an item from sessionStorage
console.log(`Before removal : `, sessionStorage.getItem("seesionData"));
sessionStorage.removeItem("seesionData");
console.log(`After removal : `, sessionStorage.getItem("seesionData"));
