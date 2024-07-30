// Day 18: Algorithms

// Tasks/Activities:

// Activity 1: Sorting Algorithms

// • Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubblesort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log("Bubble sorted Array :", arr);
}

bubblesort([2, 4, 5, 6, 7, 12, 4, 1, 2, 3]);
// • Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  console.log("Selection Sorted array : ", arr);
}

selectionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);

// • Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(
  "QuickSort Array :",
  quickSort([12, 13, 24, 25, 5, 6, 7, 8, 9, 2, 44])
);
