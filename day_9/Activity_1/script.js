let p = document.getElementById(paragraph);

p.innerText = "This element selt by id in javaScript";

//Task 2: Select an HTML element by its class and change its background color.
document.addEventListener("DOMContentLoaded", (event) => {
  let elementsByClass = document.getElementsByClassName("box");

  if (elementsByClass.length > 0) {
    elementsByClass[0].style.backgroundColor = "blue";
  }
});
