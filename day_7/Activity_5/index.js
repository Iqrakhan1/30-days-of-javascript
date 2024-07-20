// Activity 5: Object Iteration

// Task 8: Iterate over properties with for...in.


let book = {
    "title" :"book1",
    "authot":"abcd",
    "year":"2013"

}

for( let key in book){
    console.log(key + ": " + book[key]);
}



// Task 9: Use Object.keys and Object.values.



console.log("keys: ", Object.keys(book));
console.log("value", Object.values(book));