// Activity 2: Character Classes and Quantifiers
// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

const capitalLetterregex = /\b[A-Z][a-z]*/g;
const string = "Alice and Bob are attending the conference in New York.";

const matches = string.match(capitalLetterregex);
console.log("Start with capital latters :- " + matches);
// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

const digitsregex = /\d+/g;
const string1 = "The results are 42, 98, and 123";

const matches1 = string1.match(digitsregex);
console.log("contain with numbers :- " + matches1);
