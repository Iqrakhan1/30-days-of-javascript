// Activity 5: Valid Parentheses
// Task 5: Solve the "Valid Parentheses" problem on LeetCode.

// Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
// A string is valid if open brackets are closed in the correct order.
var isvalid = function (s) {
  const stack = [];
  const map = {
    "(": ")", //key and values
    "[": "]",
    "{": "}",
  };
  for (let char of s) {
    if (char in map) {
      stack.push(map[char]);
    } else {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// Log the result for a few test cases.
console.log(isvalid("{}"));
console.log(isvalid("()[]{}")); // true
console.log(isvalid("(]")); // false
console.log(isvalid("([)]")); // false
console.log(isvalid("{[]}")); // true
