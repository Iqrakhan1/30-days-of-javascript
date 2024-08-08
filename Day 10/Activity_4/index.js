const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form);
  const formData = new FormData(form);
  formData.forEach((key, value) => {
    console.log(key, value);
  });
});

//Task 8 Add a change event listener to a select dropdown that displays the sleceted value in a paragragh.
const select = document.getElementById("mySelect");

const para = document.getElementById("para");

select.addEventListener("change", () => {
  para.innerText = "Select value : " + select.value;
});
