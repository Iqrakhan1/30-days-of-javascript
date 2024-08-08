// Activity 4: Getters and Setters

// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
  set fullname(NewFullName) {
    const [firstname, lastname] = NewFullName.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const person1 = new Person("Iqra", "Khan");
console.log(person1.fullname);

// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

person1.fullname = "Iqra khan";

console.log("update name from setter method :- " + person1.fullname);
