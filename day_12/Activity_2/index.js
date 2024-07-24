// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

function trycatchfinallyblock() {
  try {
    console.log("try Block run ");
    console.log(undefine);
  } catch (e) {
    console.log("catch block run ");
    console.log("error : " + e.message);
  } finally {
    console.log("finally block");
  }
}

trycatchfinallyblock();
