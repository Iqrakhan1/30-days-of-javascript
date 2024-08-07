// Function to calculate the amount of trapped rain water
var trap = function (height) {
  if (height.length === 0) return 0;

  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let water = 0;

  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
};

// Test cases
function testTrap() {
  // Test Case 1
  let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  console.log("Test Case 1:", trap(height)); // Expected Output: 6

  // Test Case 2
  height = [4, 2, 0, 3, 2, 5];
  console.log("Test Case 2:", trap(height)); // Expected Output: 9

  // Test Case 3
  height = [1, 0, 2];
  console.log("Test Case 3:", trap(height)); // Expected Output: 1

  // Edge Case 1: No bars
  height = [];
  console.log("Edge Case 1:", trap(height)); // Expected Output: 0

  // Edge Case 2: Flat terrain
  height = [2, 2, 2, 2];
  console.log("Edge Case 2:", trap(height)); // Expected Output: 0
}

// Run the test cases
testTrap();
