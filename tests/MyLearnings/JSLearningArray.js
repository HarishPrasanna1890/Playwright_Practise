
//let mark = new Array(20,40,60,80,100)

let marks = [20,40,60,80,100]
console.log(marks[2]);
marks[2]=75 // Inserts at anywhere
console.log(marks); // [ 75, 40, 60, 80, 100 ]
console.log(marks.length)
marks.push(100); //Inserts at the last
console.log(marks);
marks.pop() // Deletes at the end
console.log(marks);
marks.unshift(99) // Inserts at the first
console.log(marks);


console.log (marks.indexOf(75)); //To find the position in the array
console.log(marks.includes(120)); // To check whether this value present in array,
// if value is not there it throws false.
let score = [80,82,84,86,88,90,92,94,96,98,100]
IndividualScore = score.slice(5,10)
console.log(IndividualScore); //To break the array into two sections.

//To print the values in the array
for(let i=0; i<score.length;i++){
    console.log(score[i]);
}
console.log('************Reduce*****************')
// To sum all the numbers in array

let sum=0;
for(let j=0; j<score.length; j++){
    sum = sum+score[j]; //80+162+246......
}
console.log(sum);
// Using reduce method in an array
let total = score.reduce((sum,mark)=>sum+mark,0)
console.log(total);

console.log('***************Filter*************************')
// Create a new array with even numbers of Pass array 
let pass = [91,92,93,94,95,96,97,98,99]
let EvenArray = []
for(let i=0; i<pass.length; i++){
    if(pass[i]%2 == 0){
        EvenArray.push(pass[i])
    }
}
console.log(EvenArray)
// Using filter method in an array
let FilterWithEvenNum = pass.filter(pass=>pass%2 == 0)
console.log(FilterWithEvenNum);

//Map
let Mutiply3Value = FilterWithEvenNum.map(map=>map*3)
console.log(Mutiply3Value)

// Filter/Map/Reduce in single statement
let Goals = [20,21,22,23,24,25,26,27,28,29,30]
let FinalValue = Goals.filter(Goals=>Goals%2 ==0).map(Goals=>Goals*3).reduce((sum,val)=>sum+val,0)
console.log(FinalValue);

let fruits =['Mango','Pomo','Orange','Grapes','Chikku','Apple']
console.log(fruits.sort())
fruits.reverse


let numbers=[7,8,3,56,23,9,32]
//numbers.sort(((a,b)=> a-b)) //ascending
numbers.sort((a,b)=>b-a)
console.log(numbers)
