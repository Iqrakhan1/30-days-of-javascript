// Activity 2: Recursion with Arrays

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sumArray(arr) {
  if (arr.length == 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

console.log(" sum of arr[9,5,6,7,8,2,3,4,7 ] : " + sumArray([9, 5, 6, 4, 7]));
// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxOfarray(arr) {
  if (arr.length == 0) return -Infinity;

  const restMax = maxOfarray(arr.slice(1));
  return arr[0] > restMax ? arr[0] : restMax;
}

console.log("max of array : " + maxOfarray([3, 5, 6, 10, 45, 67, 2, 6, 8]));
console.log("max of array : " + maxOfarray([3, 4, 7, 67, 66, 234]));
console.log("max of array : " + maxOfarray([23, 45, 556, 6, 234, 5]));
