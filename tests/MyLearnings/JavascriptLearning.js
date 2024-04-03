console.log("Hello world")



let req=true
console.log(typeof(req));

console.log(!req)  //Not operator only for boolean

let a1
console.log(a1); // undefined

let a2 = null
console.log(a2); //null

let a=4;
console.log(a)
console.log(typeof(a));
let b= 45
console.log(b)
console.log(typeof(b));
//const c='Harish'
let c ='Harish'
console.log(typeof(c))
//let c = a+b;  It didnt work because We cannot redeclare variable with ‘let’ keyword but it is possible with ‘var’
c = a+b; //Reassigning the value is possible in let i.e 'c' is string but we reassign it to number by adding the value
//var c=a+b this will work with var keyword
console.log(c) 


const flag = true
if(!flag){  // Here the expression only becomes false but still the flag is true only because it is declared as const
    console.log('Condition satified')
}
else{
    console.log(flag)
    console.log('condition not satified')
}

let i=0;
while(i<10){
    i++
    console.log(i);
}

console.log('**************');

//From 1 to 100, give the common multiples of 2 and 5
for(let k=1; k<=100; k++){
    if(k%2==0 && k%5==0 ){
        console.log(k);
    }
}
console.log('**************');
//From 1 to 100, give the common multiples of 2 and 5 upto 3 values only
let n = 0;
for(let k=1; k<=100; k++){
    if(k%2 == 0 && k%5 == 0){
        n++
        console.log(k)   
        if(n == 3)
        break
    }    
}


