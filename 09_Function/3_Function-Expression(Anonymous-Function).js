/*
    Function Expression/Anonymous Function: This is an anonymous function (function without a name) assigned to a variable. The function can be called using the variable name.

    Syntax:

    var/let/const varName = function(parameters) {
        // code to be executed
    }

*/



//example 1
const message = function () {
    console.log("Welcome To JS");
}

message();



//example 2

const add = function (a, b) {
    console.log("Addition of " + a + " & " + b + " = " + (a + b));
}

add(10, 20);



//example 3 
const multi = function (a, b) {
    console.log(`Multiplication of ${a} & ${b} = ${a * b}`);
    return a * b; //it will return some value
}

let a = multi(10, 20);

console.log(a);
