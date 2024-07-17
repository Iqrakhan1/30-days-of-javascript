//Activity 5  Higher order function 

//Test 9 take function and number , amd call the function many time 


function repeatfunction(fun, times ){
    for(let i = 1 ; i<=times; i++){
        fun();
    }
}

function sayhello(){
    console.log("hello");

}

repeatfunction(sayhello,3);



console.log("---------------------------------");

//Task 10 write a higher-order function that takes two function and a value, applies the first function to the value, and then applies the second to the result


function higherorder(fun1 , fun2 ,value ){
    return fun2(fun1(value));
}

function addone(x){
    return x+1;
}
function squr(x){
    return x*x;
}


console.log(higherorder(addone ,squr   , 5));  //first add one then multiplay 
