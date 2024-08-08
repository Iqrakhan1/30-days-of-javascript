class Queue {
  constructor() {
    this.items = []; // Use 'items' to store queue elements
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the first element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Return the first element from the queue without removing it
  front() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0];
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(20);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.size()); // Output: 5
console.log(queue.front()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.front()); // Output: 20
console.log(queue.dequeue()); // Output: 20
console.log(queue.isEmpty()); // Output: false

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

function printersimulate() {
  const printerQueue = new Queue();
  printerQueue.enqueue("Task1");
  printerQueue.enqueue("Task2");
  printerQueue.enqueue("Task3");
  printerQueue.enqueue("Task4");
  printerQueue.enqueue("Task5");
  printerQueue.enqueue("Task6");

  while (!printerQueue.isEmpty()) {
    console.log(`Processing: ${printerQueue.dequeue()}`);
  }
}

printersimulate();
