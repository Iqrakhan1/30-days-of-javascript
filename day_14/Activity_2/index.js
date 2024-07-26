// Activity 2: Class Inheritance

// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
// Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("Iqra Khan", 22);
person1.greet(); // Log the greeting message

// Student class extending Person
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return `Student ID: ${this.studentId}`;
  }
}

const student1 = new Student("Student 1", 22, "R298765");
console.log(student1.getStudentId()); // Log the student ID
