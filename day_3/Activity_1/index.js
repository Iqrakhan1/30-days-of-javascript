//Day 3  control structures

//Activity 1 If-else statements

//Task 1 check positive nagative and zero

function NumberedCheck(number) {
  if (number > 0) {
    console.log(number + " Number is positve ");
  } else if (number < 0) {
    console.log(number + " Number is Nagative ");
  } else {
    console.log(number + " Number is Zero ");
  }
}

NumberedCheck(10);
NumberedCheck(-9);
NumberedCheck(0);

//Task 2 check elagible to vote

let age = 21;

if (age >= 18) {
  console.log("Eligible to Vote");
} else {
  console.log("Not Eligible to Vote");
}


