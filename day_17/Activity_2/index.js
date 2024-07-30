// Activity 2: Stack

// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
  constructor() {
    this.item = [];
  }
  push(element) {
    this.item.push(element);
  }
  pop() {
    if (this.item.length === 0) return "Stack empty";
    return this.item.pop();
  }
  peek() {
    if (this.item.length === 0) {
      return "stack Empty";
    }
    return this.item.length - 1;
  }
  isEmpty() {
    return this.item.length === 0;
  }
}

const elm = new Stack();

elm.push(9);
elm.push(7);
elm.push(8);
elm.push(6);
elm.push(5);
elm.push(4);
elm.push(3);
elm.push(2);

console.log(elm);
// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

function reverceString(str) {
  const stack = new Stack();

  for (let char of str) {
    stack.push(char);
  }
  let reversedStr = "";
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}

const originalString = "Hello world!";
console.log(reverceString(originalString));
