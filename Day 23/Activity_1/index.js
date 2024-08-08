// Function to find the median of two sorted arrays
var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length,
    n = nums2.length;
  let i = 0,
    j = 0;
  let merged = [];

  while (i < m || j < n) {
    if (i === m) {
      merged.push(nums2[j++]);
    } else if (j === n) {
      merged.push(nums1[i++]);
    } else if (nums1[i] < nums2[j]) {
      merged.push(nums1[i++]);
    } else {
      merged.push(nums2[j++]);
    }
  }

  let len = merged.length;
  if (len % 2 === 0) {
    return (merged[len / 2 - 1] + merged[len / 2]) / 2;
  } else {
    return merged[Math.floor(len / 2)];
  }
};

// Test cases
function testFindMedianSortedArrays() {
  // Test Case 1
  let nums1 = [1, 3],
    nums2 = [2];
  console.log("Test Case 1:", findMedianSortedArrays(nums1, nums2)); // Expected Output: 2

  // Test Case 2
  (nums1 = [1, 2]), (nums2 = [3, 4]);
  console.log("Test Case 2:", findMedianSortedArrays(nums1, nums2)); // Expected Output: 2.5

  // Test Case 3
  (nums1 = [0, 0]), (nums2 = [0, 0]);
  console.log("Test Case 3:", findMedianSortedArrays(nums1, nums2)); // Expected Output: 0

  // Edge Case 1: One empty array
  (nums1 = []), (nums2 = [1]);
  console.log("Edge Case 1:", findMedianSortedArrays(nums1, nums2)); // Expected Output: 1

  // Edge Case 2: Both arrays empty
  (nums1 = []), (nums2 = []);
  console.log("Edge Case 2:", findMedianSortedArrays(nums1, nums2)); // Expected Output: NaN (depending on implementation)
}

// Run the test cases
testFindMedianSortedArrays();
