// Function to find the length of the longest substring without repeating characters
var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let left = 0,
    maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(map.get(s[right]) + 1, left);
    }
    map.set(s[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

// Function to log the length of the longest substring for different test cases
function testLengthOfLongestSubstring() {
  // Test Case 1: "abcabcbb"
  let s = "abcabcbb";
  console.log("Test Case 1:", lengthOfLongestSubstring(s)); // Expected Output: 3

  // Test Case 2: "bbbbb"
  s = "bbbbb";
  console.log("Test Case 2:", lengthOfLongestSubstring(s)); // Expected Output: 1

  // Test Case 3: "pwwkew"
  s = "pwwkew";
  console.log("Test Case 3:", lengthOfLongestSubstring(s)); // Expected Output: 3

  // Edge Case 1: Empty string
  s = "";
  console.log("Edge Case 1:", lengthOfLongestSubstring(s)); // Expected Output: 0

  // Edge Case 2: String with all unique characters
  s = "abcdefghijklmnopqrstuvwxyz";
  console.log("Edge Case 2:", lengthOfLongestSubstring(s)); // Expected Output: 26
}

// Run the test cases
testLengthOfLongestSubstring();
