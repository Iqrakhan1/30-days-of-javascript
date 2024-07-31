// Activity 5: Practical Applications
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
const password = "Passw0rd!";
const isValidPassword = regex.test(password);
console.log(isValidPassword); // true
// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
let regexurl = /(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
const url = "https://www.example.com";
const checkUrl = regexurl.test(url);
console.log(checkUrl);
