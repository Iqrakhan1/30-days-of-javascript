// Function to solve the N-Queens problem
var solveNQueens = function (n) {
  let result = [];
  let board = Array.from({ length: n }, () => Array(n).fill("."));

  function backtrack(row) {
    if (row === n) {
      result.push(board.map((r) => r.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = "Q";
        backtrack(row + 1);
        board[row][col] = ".";
      }
    }
  }

  function isValid(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
      if (col - (row - i) >= 0 && board[i][col - (row - i)] === "Q")
        return false;
      if (col + (row - i) < n && board[i][col + (row - i)] === "Q")
        return false;
    }
    return true;
  }

  backtrack(0);
  return result;
};

// Test cases
function testSolveNQueens() {
  // Test Case 1: 4-Queens
  let n = 4;
  let solutions = solveNQueens(n);
  console.log("Test Case 1:", solutions); // Expected Output: Multiple solutions, e.g., [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

  // Test Case 2: 8-Queens
  n = 8;
  solutions = solveNQueens(n);
  console.log("Test Case 2:", solutions.length); // Expected Output: 92 (number of solutions)

  // Edge Case 1: 1-Queen
  n = 1;
  solutions = solveNQueens(n);
  console.log("Edge Case 1:", solutions); // Expected Output: [["Q"]]

  // Edge Case 2: 2-Queens (No solution)
  n = 2;
  solutions = solveNQueens(n);
  console.log("Edge Case 2:", solutions); // Expected Output: []

  // Edge Case 3: 3-Queens (No solution)
  n = 3;
  solutions = solveNQueens(n);
  console.log("Edge Case 3:", solutions); // Expected Output: []
}

// Run the test cases
testSolveNQueens();
