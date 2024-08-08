// Activity 3: Grouping and Capturing

// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
let phoneregex = /\((\d{3})\) (\d{3})-(\d{4})/;
const string = "My number is (123) 456-7890.";
const matches = string.match(phoneregex);
console.log(matches);
// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

let regex = /(\w+)@([\w.]+)/;
const str = "Contact me at john.doe@example.com.";
const matched = str.match(regex);
console.log(matched);
