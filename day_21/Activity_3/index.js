// Activity 3: Palindrome Number
// Task 3: Solve the "Palindrome Number" problem on LeetCode.

// Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // Negative numbers and numbers ending in 0 that are not 0 cannot be palindromes
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversed = 0;
  let original = x;

  while (x > 0) {
    let lastDigit = x % 10;
    reversed = reversed * 10 + lastDigit;
    x = (x / 10) | 0; // Integer division
  }

  return original === reversed;
};

console.log(isPalindrome(-121)); // true

// Log the result for a few test cases, including edge cases like negative numbers.
let testCases = [
  { input: 121, expected: "true" },
  { input: -121, expected: "false" },
  { input: 12021, expected: "true" },
  { input: 10, expected: "false" },
  { input: 1534236469, expected: "false" }, // Overflow case
];

testCases.forEach((testCase, index) => {
  let result = isPalindrome(testCase.input);
  console.log(`Test Case ${index + 1}:`);
  console.log(`Input: ${testCase.input}`);
  console.log(`Output: ${result}`);
  console.log(`Expected: ${testCase.expected}`);

  console.log("--------------------");
});
