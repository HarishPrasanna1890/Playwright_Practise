let day = 'saturday '
console.log(day.length); //9

let subday = day.slice(0,4) //satu
console.log(subday);

console.log(day[3]); //u

const splitdays = day.split('u'); //Spliting sat rday
console.log(splitdays[0]);
console.log(splitdays[1]);
console.log(splitdays[1].length);
console.log(splitdays[1].trim().length)

let date = '23'
let newDate = '30'
const diff = parseInt(newDate)-parseInt(date) //String to number
console.log(diff);
diff.toString() //From number to string


let newQuote = day+ "is good day. In God All days are good days only" //String concat using '+' symbol
console.log(newQuote)
let val = newQuote.indexOf('day') //To find the indexof (number) on a string
console.log(val);
console.log(newQuote.indexOf('day',6))

let count = 0; // Write program to find number of occurances of the string 'Day'
let value = newQuote.indexOf('day');
while(value!== -1){
    count++
    value = newQuote.indexOf('day',value+1)
}
console.log(count)