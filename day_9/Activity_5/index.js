// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.

const p = document.querySelector(".p1");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  p.innerText = "Text after button clicked";
});

//Task 10: Add a mouseover event listener to an element that changes its border color.

const h1 = document.querySelector(".m-over");

h1.addEventListener("mouseover", function () {
  h1.style = "border-style: solid; border-color:red;";
});

h1.addEventListener("mouseout", () => {
  h1.style = "background-color:none;";
});
