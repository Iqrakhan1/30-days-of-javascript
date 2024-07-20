//Activity 3 Array methods (Intermideate)

//Task 7 map method 

let number = [2,3,4,5,6,];

let doublenumber = number.map(number => number *2 );
console.log(doublenumber);

console.log("-----------------------------------------------");




//Task 8 filter method to check even number 

let numbers2= [1,2,3,4,5,6];

let even = numbers2.filter(function(numbers2 ){
   return numbers2%2==0;
})

console.log("filter ");
console.log(even);

console.log("-----------------------------------------------");

//Task9 // its store value in accumulator 


let arr3 = [1,4,5,6,8,9,10];

let sum = arr3.reduce((acc, currentval)=>{
   return acc + currentval;

}, 10);

console.log(sum);
