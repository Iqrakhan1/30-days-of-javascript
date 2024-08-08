// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

let input = document.querySelector(".input1");

input.addEventListener("keydown", (e) => {
  console.log(`key press : ${e.key}`);
});

//  Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
let input2 = document.querySelector(".input2");
let para = document.querySelector(".para");

input2.addEventListener("keyup", () => {
  para.innerText = `${input2.value}`;
});
