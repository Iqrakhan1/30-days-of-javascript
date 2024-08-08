let para = document.querySelector(".para");

// Task 3: Add a mouseover event listener to an element that changes its background color.
para.addEventListener("mouseover", () => {
  para.style = "background-color: red; ";
});

// Task 4: Add a mouseout event listener to an element that resets its background color.
para.addEventListener("mouseout", () => {
  para.style = "background-color:none;";
});
