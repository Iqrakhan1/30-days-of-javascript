// Activity 2: Searching Algorithms

// • Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

function linerSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log(` Target ${target} at Index: ${i}`);
      return i;
    }
  }
  console.log("Liner Search not Found");
  return -1;
}

linerSearch([8, 7, 6, 5, 4, 3, 2, 10], 3);
// • Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

function BinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      console.log(`Binary Search target ${target} found at ${mid} `);
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log("Target not found");
  return -1;
}

BinarySearch([2, 3, 4, 5, 6, 7, 8, 12, 13, 5], 12);
