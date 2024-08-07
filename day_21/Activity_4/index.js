// Activity 4: Merge Two Sorted Lists
// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.

//difine list node
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// function to merge two sorted linked lists
var margeLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let current = dummy;

  //while both list are not empty
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 != null ? list1 : list2;
  return dummy.next;
};

//function to ptint list
function printList(node) {
  let values = [];
  while (node !== null) {
    values.push(node.val);
    node = node.next;
  }
  console.log(values.join("-> "));
}

// Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// Create a few test cases with linked lists and log the merged list.

let list1 = new ListNode(1, new ListNode(3, new ListNode(4, new ListNode(5))));
let list2 = new ListNode(2, new ListNode(4, new ListNode(6)));
console.log("Test Case 1 :");
printList(margeLists(list1, list2)); // Output: 2->2->3->4->4->6->9

list1 = new ListNode(1, new ListNode(2, new ListNode(4, new ListNode(5))));

list2 = new ListNode(3, new ListNode(6, new ListNode(8)));

console.log("Test Case 2 :");

printList(margeLists(list1, list2)); // Output: 1->2->3->4->4->5->6->8

// Test case 3
list1 = new ListNode(2, new ListNode(5, new ListNode(8)));
list2 = new ListNode(1, new ListNode(3, new ListNode(7)));
console.log("Test Case 3:");
printList(margeLists(list1, list2));
