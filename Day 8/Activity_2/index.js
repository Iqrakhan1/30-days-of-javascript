// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
console.log("Task 3:");
let arrayDestructuring = [23, 45, 67, 90, 67];

let [firstElement, secondElement] = arrayDestructuring;

console.log(firstElement);
console.log(secondElement);

console.log("----------------------------------------------");

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

console.log("Task 4:");
let book = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  publicationYear: 1951,
};

const { title, author } = book;

console.log("Book title :" + title);
console.log("Book author :" + author);

console.log("----------------------------------------------");
