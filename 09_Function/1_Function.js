

/*Functions In JavaScript

    Syntax: - 

    function function_name(parameters) {

        statements;

        return value/variable/expression;
    }

        1. function with no argument and no return type
        2. function with argument but no return type.
        3. function with no argument but return type.
        4. function with argument and return type.
        
*/


//1. function with no argument and no return type

function add() {
    let a = 10;
    let b = 20;

    let c = a + b;

    console.log('Addition of two numbers ' + c);
}

add();


//2. function with argument but no return type.

function printMsg(msg) {

    console.log(msg);
}

printMsg("Welcome To JavaScript");

let a = "Hey Satyajeet Kumar Rao";

printMsg(a);


//3. function with no argument but return type.

function area() {

    let l = 10;
    let b = 20;

    let rec_area = l * b;

    return rec_area;

}

console.log("Area Of Rectangle : - ", area());


//4. function with argument and return type.

function sqArea(side) {

    let sq_area = side * side;

    return sq_area;

}

console.log("Area Of Square : - ", sqArea(11));



//Function with default value

//example 1

function name(fname = "Satyajeet", lname = "Kumar") {

    console.log("Hello " + fname + " " + lname);

}

name("Rohan", "Raj");

name();

name("shivam");


//example 2

function addition(a = 0, b = 0) {

    let sum = a + b;
    return sum;
}

console.log(addition());
console.log(addition(10, 5));
