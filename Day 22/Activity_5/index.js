// Function to group anagrams
var groupAnagrams = function (strs) {
  let map = new Map();

  for (let str of strs) {
    let sortedStr = str.split("").sort().join("");
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }
    map.get(sortedStr).push(str);
  }

  return Array.from(map.values());
};

// Test cases
function testGroupAnagrams() {
  // Test Case 1
  let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
  console.log("Test Case 1:", groupAnagrams(strs)); // Expected Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

  // Test Case 2
  strs = [""];
  console.log("Test Case 2:", groupAnagrams(strs)); // Expected Output: [[""]]

  // Test Case 3
  strs = ["a"];
  console.log("Test Case 3:", groupAnagrams(strs)); // Expected Output: [["a"]]

  // Edge Case 1: All anagrams
  strs = ["abc", "acb", "bca", "cab", "cba", "bac"];
  console.log("Edge Case 1:", groupAnagrams(strs)); // Expected Output: [["abc","acb","bca","cab","cba","bac"]]

  // Edge Case 2: No anagrams
  strs = ["abc", "def", "ghi"];
  console.log("Edge Case 2:", groupAnagrams(strs)); // Expected Output: [["abc"],["def"],["ghi"]]
}

// Run the test cases
testGroupAnagrams();
