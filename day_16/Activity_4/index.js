// Activity 4: Recursive Search

// - Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function sort(arr) {
  return arr.sort((a, b) => a - b);
}
function binarySearch(arr, target, left = arr[0], right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
}
arr1 = sort([2, 3, 4, 5, 6, 9, 8]);
console.log("binary search : " + binarySearch(arr1, 9));
console.log("binary search : " + binarySearch(arr1, 4));
console.log("binary search : " + binarySearch(arr1, 5));

// - Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases

function countoccurrences(arr, target, index = 0, count = 0) {
  if (index >= arr.length) {
    return count;
  }
  if (arr[index] === target) {
    count++;
  }
  return countoccurrences(arr, target, index + 1, count);
}

console.log(
  "number of occurrences : " +
    countoccurrences([2, 4, 2, 8, 2, 5, 2, 6, 7, 2, 3], 2)
);
