// Activity 2: Reverse Integer
// Task 2: Solve the "Reverse Integer" problem on LeetCode.

// Write a function that takes an integer and returns it with its digits reversed.
// Handle edge cases like negative numbers and numbers ending in zero.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rev = 0;

  while (x !== 0) {
    let lastDigit = x % 10;

    x = (x / 10) | 0;

    if (
      rev > (2 ** 31 - 1) / 10 ||
      +(rev === (2 ** 31 - 1) / 10 && lastDigit > 7)
    ) {
      return 0;
    }
    if (rev < -(2 ** 31) / 10 || (rev === -(2 ** 31) / 10 && lastDigit < -8)) {
      return 0;
    }
    rev = rev * 10 + lastDigit;
  }
  return rev;
};
// console.log(reverse(345));

// Log the reversed integers for a few test cases.
let testCases = [
  { input: 123, expected: 321 },
  { input: -123, expected: -321 },
  { input: 120, expected: 21 },
  { input: 0, expected: 0 },
  { input: 1534236469, expected: 0 }, // Overflow case
];

testCases.forEach((testCase, index) => {
  let result = reverse(testCase.input);
  console.log(`Test Case ${index + 1}:`);
  console.log(`Input: ${testCase.input}`);
  console.log(`Output: ${result}`);
  console.log(`Expected: ${testCase.expected}`);
  console.log(result === testCase.expected ? "Pass" : "Fail");
  console.log("--------------------");
});
