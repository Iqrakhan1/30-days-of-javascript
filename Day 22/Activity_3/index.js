// Function to find the maximum area of water that can be contained
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    let minHeight = Math.min(height[left], height[right]);
    let width = right - left;
    maxWater = Math.max(maxWater, minHeight * width);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
};

// Test cases
function testMaxArea() {
  // Test Case 1
  let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  console.log("Test Case 1:", maxArea(height)); // Expected Output: 49

  // Test Case 2
  height = [1, 1];
  console.log("Test Case 2:", maxArea(height)); // Expected Output: 1

  // Test Case 3
  height = [4, 3, 2, 1, 4];
  console.log("Test Case 3:", maxArea(height)); // Expected Output: 16

  // Edge Case 1: All heights are the same
  height = [5, 5, 5, 5, 5];
  console.log("Edge Case 1:", maxArea(height)); // Expected Output: 20

  // Edge Case 2: Only one height
  height = [1];
  console.log("Edge Case 2:", maxArea(height)); // Expected Output: 0
}

// Run the test cases
testMaxArea();
