//Var wil be declared in global/functional level... 
//If it declared inside a block(loop), it will be considered as golbal declaration only.
var greet = 'Morning'  //Global declaration
if(1==1){
    var greet = 'Evening'
}

function add(a,b)
{
    var greet = 'Afternoon'//Inside the function
    return a+b
}
let sum = add(2,3)
console.log(sum)
console.log(greet);

//let can be declared in both global and block levels{}
let greet1 = 'Morning'  //Global declaration
if(1==1){
    let greet1 = 'Evening123'
    console.log(greet1);
}

function add(a,b)
{
    let greet1 = 'Afternoon'//Inside the function
    return a+b
}
let sum1 = add(2,3)
console.log(sum1)
console.log(greet1);