// Activity 3: Static Methods and Properties

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
  static genericGreeting() {
    return "This is a generic greeting method";
  }
}
const person1 = new Person("student", 22);

person1.greet();

console.log(Person.genericGreeting());

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students

class Student extends Person {
  static totalStudents = 0;

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.totalStudents++;
  }
  getStudentId() {
    return this.studentId;
  }

  static getTotalStudents() {
    return `Total Students : ${this.totalStudents} students`;
  }
}

const student1 = new Student("first ", 23, "R26876876");
const student2 = new Student("second", 23, "R2876768");

console.log(Student.getTotalStudents());
