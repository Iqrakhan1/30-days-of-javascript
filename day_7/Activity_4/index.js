// Activity 4: The this Keyword
// Task 7: Add a method using this.


let book = {
    "title" :"book1",
    "authot":"abcd",
    "year":"2013"

}


book.getTitleAndYear = function(){
    return `book is ${this.title}, published in ${this.year}`;
}

console.log(book.getTitleAndYear());