// Activity 4: Assertions and Boundaries
// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

const regex7 = /^\w+/;
const str7 = "Hello, this is a test. String";
const matches7 = str7.match(regex7);
console.log(matches7); // ["Hello"]

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches

const regex8 = /\w+.$/;
const str = "This is check tha last word od string.";

const matches8 = str.match(regex8);
console.log(matches8);
