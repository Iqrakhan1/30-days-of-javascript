// Activity 3: String Algorithms

// • Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
function charCount(str) {
  let count = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  console.log("characters count", count);
  return count;
}
charCount("hello");
// • Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

function longestSubstring(str) {
  let maxLength = 0;
  let start = 0;
  let charIndexMap = {};

  for (let end = 0; end < str.length; end++) {
    let char = str[end];
    if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
      start = charIndexMap[char] + 1;
    }
    charIndexMap[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  console.log("Length of longest Unique Substring:", maxLength);
  return maxLength;
}

// Example usage
longestSubstring("aaa bb cccc ddd "); // Output: 5
