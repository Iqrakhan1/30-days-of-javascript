// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const p = document.querySelector(".content");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  p.innerText = "Content after click";
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.

const img = document.querySelector(".image");

img.addEventListener("dblclick", () => {
  img.classList.toggle("hidden");
});
