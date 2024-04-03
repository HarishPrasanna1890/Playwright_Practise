let age=10;

if(true){
   let age=20;
    console.log(age);
}
console.log(age);

console.log('************************');

// functions or methods
const person1 ={    // Object declaration
    names:'Harish',
    Age:'33',
}
const person2 ={    // Object declaration
    names:'Jancy',
    Age:'30',
}
function printName(names){  // Function declaration
console.log(names)
}
printName(person1.names) // calling the function
printName(person2.names)

console.log('************************');

function getFullName(firstName, lastName){
    const name = firstName+" "+lastName;
    return name;
}

const entireName = getFullName('Harish', 'Jancy')
console.log(entireName);


console.log("*****************************************")

function empDetails(Fname, exp, salary){
    const emp1= [Fname+' '+exp+' '+salary]
    return emp1;
}
const empValue = empDetails('Harish','9.4',150000)
console.log(empValue)
