let browser:string= "Chrome";
browser = "safari";
console.log(browser);

let companyName = "TestLeaf";
companyName = "Qeagle"

/* Type Inference

1. Inplicit type inference - When the compailer infers/defines the datatype
2. Explicit type inference - When you define the datatype explicitly */

/* TS types:
1. Basic types : string, number, 
2. Arrays
3. enums
4. any --> flexible datatype - it can be either number, string, boolean
5. void
*/

/**
 * Annotaions in TS
 * 
 * let variableName:type --> explicitly mentioning the type--> Annotations
 * 
 * 
 * How to custom Types
 */


type stringOrNumber = string|number;
//let varName:type = value
let value:stringOrNumber = "TypeScript";
value = 123;
const compName = "Testleaf";
//compName = "Qeagle"


type supportedBrowsers = "Chrome"|"Firefox"|"Webkit"|121;
function invokeBrowser(browserName:supportedBrowsers):void {
    if(browserName==="Chrome"){
        console.log("Execute Login Test");
        
    }
    else{
        console.log("Execute Add To Cart Test");
        
    }

}
invokeBrowser("Chrome");



//Intersection --> &

type Employee = {id:number, empName:string};
type Department= {department: string};
type Team = Employee & Department;
let team: Team = {id: 1003,empName: "Vidya", department: "QA"};
console.log(team);

//Classwork
type BrowserName = 'chrome' | 'firefox' |'webkit'
type BrowserVersion = 125 | 126 | 127
type Browser1 = BrowserName & BrowserVersion;
//let BrowserType: Browser1 = {}


// Define the type for user registration
type UserRegistration = {
    name: string,
    age: number,
    email: string,
    isActive: boolean
};

// Initialize an array of user registrations
let userRegistrations: UserRegistration[] = [
    {
        name: "Shynoob",
        age: 26,
        email: "shynoob@gmail.com",
        isActive: true
    },
    {
        name: "John",
        age: 30,
        email: "john@example.com",
        isActive: false
    },
    // Add more objects as needed
];

//How to access property values
/*
1. Dot notation
2. Square notation
*/
