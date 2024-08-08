// Function to find the length of the shortest transformation sequence
var ladderLength = function (beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0; // endWord must be in the word list

  let queue = [[beginWord, 1]]; // queue of [currentWord, currentLength]
  let visited = new Set();
  visited.add(beginWord);

  while (queue.length > 0) {
    let [word, length] = queue.shift();

    if (word === endWord) return length;

    for (let i = 0; i < word.length; i++) {
      let originalChar = word[i];
      for (let c = "a".charCodeAt(0); c <= "z".charCodeAt(0); c++) {
        let newChar = String.fromCharCode(c);
        if (newChar === originalChar) continue;

        let newWord = word.slice(0, i) + newChar + word.slice(i + 1);

        if (wordSet.has(newWord) && !visited.has(newWord)) {
          visited.add(newWord);
          queue.push([newWord, length + 1]);
        }
      }
    }
  }

  return 0; // No transformation sequence found
};

// Test cases
function testLadderLength() {
  // Test Case 1
  let beginWord = "hit",
    endWord = "cog",
    wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
  console.log("Test Case 1:", ladderLength(beginWord, endWord, wordList)); // Expected Output: 5 (hit -> hot -> dot -> dog -> cog)

  // Test Case 2
  (beginWord = "hit"),
    (endWord = "cog"),
    (wordList = ["hot", "dot", "dog", "lot", "log"]);
  console.log("Test Case 2:", ladderLength(beginWord, endWord, wordList)); // Expected Output: 0 (no possible transformation)

  // Test Case 3
  (beginWord = "a"), (endWord = "c"), (wordList = ["a", "b", "c"]);
  console.log("Test Case 3:", ladderLength(beginWord, endWord, wordList)); // Expected Output: 2 (a -> c)

  // Edge Case 1: Same begin and end word
  (beginWord = "a"), (endWord = "a"), (wordList = ["a"]);
  console.log("Edge Case 1:", ladderLength(beginWord, endWord, wordList)); // Expected Output: 1

  // Edge Case 2: Empty word list
  (beginWord = "a"), (endWord = "c"), (wordList = []);
  console.log("Edge Case 2:", ladderLength(beginWord, endWord, wordList)); // Expected Output: 0
}

// Run the test cases
testLadderLength();
