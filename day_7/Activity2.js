// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method
let book = {
    title: "Achieve Your Dream",
    author: "Ratore",
    year: 1946
};

// Add a method to return a string with the book's title and author
book.methodcalling = function methodcalling() {
    return `Book "${this.title}" by ${this.author}`;
};

console.log(book.methodcalling());  



// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object
book.methodwithparameter = function methodwithparameter(newYear) {
    this.year = newYear;
    return this;  
};

console.log(book.methodwithparameter(2023));  
