// Activity 1: Two Sum
// Task 1: Solve the "Two Sum" problem on LeetCode.

// task 1 Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
};

//Log the indices for a few test cases.

console.log(twoSum([1, 3, 4, 6, 7], 5));
console.log(twoSum([3, 7, 4, 2, 5], 9));
console.log(twoSum([3, 7, 4, 2, 5], 15));
