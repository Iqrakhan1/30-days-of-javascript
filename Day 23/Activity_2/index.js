// Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Function to merge k sorted linked lists
var mergeKLists = function (lists) {
  let minHeap = new MinHeap();
  for (let list of lists) {
    while (list) {
      minHeap.push(list.val);
      list = list.next;
    }
  }

  let dummy = new ListNode();
  let current = dummy;

  while (minHeap.size() > 0) {
    current.next = new ListNode(minHeap.pop());
    current = current.next;
  }

  return dummy.next;
};

// MinHeap class for managing heap operations
class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(val) {
    this.heap.push(val);
    this.heap.sort((a, b) => a - b);
  }
  pop() {
    return this.heap.shift();
  }
  size() {
    return this.heap.length;
  }
}

// Utility function to print linked list
function printList(node) {
  let result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  console.log(result.join(" -> "));
}

// Test cases
function testMergeKLists() {
  // Test Case 1
  let l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
  let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  let l3 = new ListNode(2, new ListNode(6));
  let lists = [l1, l2, l3];
  let mergedList = mergeKLists(lists);
  console.log("Test Case 1:");
  printList(mergedList); // Expected Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

  // Test Case 2
  lists = [];
  mergedList = mergeKLists(lists);
  console.log("Test Case 2:");
  printList(mergedList); // Expected Output: (empty list)

  // Test Case 3
  l1 = new ListNode(1);
  l2 = new ListNode(2);
  lists = [l1, l2];
  mergedList = mergeKLists(lists);
  console.log("Test Case 3:");
  printList(mergedList); // Expected Output: 1 -> 2
}

// Run the test cases
testMergeKLists();
