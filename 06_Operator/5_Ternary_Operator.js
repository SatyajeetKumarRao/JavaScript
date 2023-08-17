//Syntax       (condition) ? True statement: False Statement


let a = 10;
let b = 20;

let c = (a > b) ? true : false;

console.log(c);




c = (a > b && a < 10) ? "condition is true" : "condition is false";

console.log(c);



//Which number is largest
a = 14;
b = 21;
c = 15;

let d = (a > b && a > c) ? a : (b > c) ? b : c;

console.log("Largest Number is = ", d);