// Activity 5: Dynamic Programming (Optional)

// • Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
function fibonacci(n) {
  let memo = [0, 1];
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  console.log("Fibonacci Sequence:", memo);
  return memo;
}

fibonacci(9);
// • Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

function knapsack(weights, values, capacity) {
  let n = weights.length;
  let dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  console.log("Knapsack Maximum Value:", dp[n][capacity]);
  return dp[n][capacity];
}

let weights = [1, 2, 3, 5];
let values = [10, 20, 30, 50];
let capacity = 7;
knapsack(weights, values, capacity); // Output: 80
