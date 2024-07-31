// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

const regex = /(JavaScript)/g;
const str =
  "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.JavaScript is easy to learn.This tutorial will teach you JavaScript from basic to advanced.";

let matches;
matches = str.match(regex);
console.log(matches);

// Task 2: Write a regular expression to match all digits in a string. Log the matches.

const regex2 = /\d/g;
const str2 =
  "The year is 2024, and this is day 19 of the challenge. The score was 85 out of 100.";
const match2 = str2.match(regex2);
console.log(match2);
