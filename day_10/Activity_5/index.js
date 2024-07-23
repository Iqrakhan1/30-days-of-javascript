//  ask 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list = document.querySelector("#list");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements

const Addbtn = document.querySelector(".child-btn");

const parent = document.querySelector(".parent");

Addbtn.addEventListener("click", () => {
  const addlist = document.createElement("div");

  addlist.textContent = "new Child";
  parent.appendChild(addlist);
});
