// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM.

let h1 = document.getElementById("heading1");

h1.remove();

// Task 6: Remove the last child of a specific HTML element.

const fruits = document.querySelector(".fruits");

fruits.removeChild(fruits.lastElementChild);
