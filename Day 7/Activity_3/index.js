// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

let library = {
   
    "name":"bhopal library",
     book:[
        {'title':"book1",
        'author':"abcd",
        "year":"1967"
        },
        {'title':"book2",
            'author':"xyz",
            "year":"2020",
        },
        {'title':"book3",
            'author':"pqrs",
            "year":"2001"
    }
    ]
}

console.log(library.book);

// Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(library.name);


const booktitles = (library.book.map(book => book.title));

console.log(booktitles);