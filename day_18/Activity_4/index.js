// Activity 4: Array Algorithms

// • Task 8: Write a function to rotate an array by k positions. Log the rotated array.

function rotateArray(arr, k) {
  k = k % arr.length;
  arr = arr.slice(-k).concat(arr.slice(0, -k));
  console.log("Rotate Array : ", arr);
  return arr;
}
rotateArray([2, 4, 5, 6, 7, 8, 9, 10], 2);
// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  console.log("Merged Array:", merged);
  return merged;
}

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
mergeSortedArrays(arr1, arr2);
