/*
1. Create a function named `checkOddOrEven` that takes a number as a parameter  

2. Use an `if` statement to check if the number is divisible by 2 
    Hint: if the remainder when divided by 2 is 0, then the num is even

3. Declare and initialize the variable  

4. Call the function and print the result

*/

let num = 20;
function checkOddOrEven(num){

    if(num%2==0){
        console.log("The given number is even: " +num)
    }
    else{
        console.log("The given number is Odd: " +num)
    }
}

checkOddOrEven(num)