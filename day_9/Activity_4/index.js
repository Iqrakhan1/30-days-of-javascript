// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

let image = document.querySelector(".web-img");

image.setAttribute("src", "./image.png");

// Task 8: Add and remove a CSS class to/from an HTML element.

const para1 = document.querySelector(".para1");
const para2 = document.querySelector(".para2");

const css = para1.getAttribute("style");

para1.removeAttribute("style");
para2.setAttribute("style", css);
