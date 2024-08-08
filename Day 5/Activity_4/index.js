//Activity 4 Fuction parameters and default value

//Task 7 product of two number  and provide defult value sec0nd number 

function products(num1 , num2 = 8)
{
    return  num1 * num2;

}
console.log(products(7 , 9));

console.log(products(2));



//Task 8 Greet masssage with name and age 


let greet = (name , age = 20)=>{
    console.log(`Hello ${name}, your age is ${age}`);

}

greet("muskan" , 21);
greet("Iqra");
