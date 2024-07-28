function outerFunction() {
  let outervalue = "This is outer function";

  function innerFunction() {
    console.log(outervalue);
  }
  return innerFunction;
}

const inner = outerFunction();
inner();

// Task 2: Closure with Private Counter

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getValue: function () {
      return count;
    },
  };
}

const counter = createCounter();

counter.increment();
console.log("counter = " + counter.getValue());
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log("counter = " + counter.getValue());
