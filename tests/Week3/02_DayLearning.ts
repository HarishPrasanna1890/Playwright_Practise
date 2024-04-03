
// Typeassert concept - Assigning the datatype at the compile time. Similar to typecasting but it does in run time.
let statuscode:any = 201;
let statuscodenum:number = statuscode as number;
console.log(statuscodenum);

let response:any ="success"
let responsetype:string = (<string>response);

