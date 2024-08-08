// Function to find all unique triplets that sum to zero
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

// Test cases
function testThreeSum() {
  // Test Case 1
  let nums = [-1, 0, 1, 2, -1, -4];
  console.log("Test Case 1:", threeSum(nums)); // Expected Output: [[-1,-1,2],[-1,0,1]]

  // Test Case 2
  nums = [0, 0, 0, 0];
  console.log("Test Case 2:", threeSum(nums)); // Expected Output: [[0,0,0]]

  // Test Case 3
  nums = [-1, 0, 1, 0];
  console.log("Test Case 3:", threeSum(nums)); // Expected Output: [[-1,0,1]]

  // Edge Case 1: No valid triplets
  nums = [1, 2, 3, 4, 5];
  console.log("Edge Case 1:", threeSum(nums)); // Expected Output: []

  // Edge Case 2: Large array with no valid triplets
  nums = Array.from({ length: 1000 }, (_, i) => i + 1);
  console.log("Edge Case 2:", threeSum(nums)); // Expected Output: []
}

// Run the test cases
testThreeSum();
