//Activity 4 Array itration

//Task 10 itrate array using for loop 


let arr= [4,5,6,7,8,9,10];


console.log("using for loop ");
for(let i =0 ; i<arr.length; i++)
{
    process.stdout.write(arr[i] + " ");
}
console.log();
console.log("-------------------------------------");


//Task 11 for each loop to itrate array 
console.log("using forEach loop ");

arr.forEach(function(elements) {
    process.stdout.write(elements + " ");
});

console.log();
console.log("-------------------------------------");
