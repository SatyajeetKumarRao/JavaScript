
//Function Declaration/Named Function: These are named functions that we can call both before and after the function is declared, due to function hoisting.


//example 1

add(); //called before the function is declared

function add() {
    let a = 10;
    let b = 20;

    let c = a + b;

    console.log('Addition of two numbers ' + c);
}

add(); //called after the function is declared


//example 2
printMsg("Welcome To JavaScript"); //called before the function is declared

function printMsg(msg) {

    console.log(msg);
}

let a = "Hey Satyajeet Kumar Rao";

printMsg(a); //called after the function is declared



//example 3

console.log("Area Of Square : - ", sqArea(6)); //called before the function is declared


function sqArea(side) {

    let sq_area = side * side;

    return sq_area;

}

console.log("Area Of Square : - ", sqArea(11)); //called after the function is declared