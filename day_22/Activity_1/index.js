// Day 22: LeetCode Medium

// Activity 1: Add Two Numbers
// • Task 1: Solve the "Add Two Numbers" problem on LeetCode.

// • Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let res = dummy;
  let total = 0,
    carry = 0;

  while (l1 || l2 || carry) {
    total = carry;

    if (l1) {
      total += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      total += l2.val;
      l2 = l2.next;
    }
    let num = total % 10;
    carry = Math.floor(total / 10);
    dummy.next = new ListNode(num);
    dummy = dummy.next;
  }
  return res.next;
};

// Function to print linked list
function printList(node) {
  let result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  console.log(result.join(" -> "));
}

// • Create a few test cases with linked lists and log the sum as a linked list.

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let result = addTwoNumbers(l1, l2);
console.log("Test Case 1:");
printList(result); // Expected Output: 7 -> 0 -> 8

// Test Case 2: 0 + 0
l1 = new ListNode(0);
l2 = new ListNode(0);
result = addTwoNumbers(l1, l2);
console.log("Test Case 2:");
printList(result); // Expected Output: 0

// Test Case 3: 9999999 + 9999
l1 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
    )
  )
);
l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
result = addTwoNumbers(l1, l2);
console.log("Test Case 3:");
printList(result);
