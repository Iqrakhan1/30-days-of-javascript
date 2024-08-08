// Activity 1: Linked List

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  remove() {
    if (this.head === null) return;
    if (this.head.next === null) {
      this.head = null;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
  }
  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();

list.add(3);
list.add(7);
list.add(9);
list.add(1);
list.add(2);
list.add(6);
list.add(5);
list.display();

list.remove();

console.log("After removing last node:");
list.display();
