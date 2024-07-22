// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body.

let div = document.createElement("div");
div.innerHTML = "Creating new div by javascript.....";
document.body.appendChild(div);

// Task 4: Create a new li element and add it to an existing ul list.

let newli = document.createElement("li");

newli.textContent = "New list item";

const ul = document.getElementById("list");

ul.appendChild(newli);
