document
  .getElementById("localStorageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    localStorage.setItem("userdata", JSON.stringify({ name, email }));
    displayLocalStorage();
  });
function displayLocalStorage() {
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  if (userdata) {
    document.getElementById(
      "localStorageData"
    ).textContent = `Name : ${userdata.name},
      Email : ${userdata.email}`;
  }
}

//Task 4
document.addEventListener("DOMContentLoaded", function () {
  displayLocalStorage();
  console.log("Before removal:", localStorage.getItem("userdata"));
  localStorage.removeItem("userdata");
  console.log("After removal:", localStorage.getItem("userData"));
});
