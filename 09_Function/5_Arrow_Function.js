
//Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions.


/*
//step-1
//normal anonymous function

const print_msg = function () {
    console.log("Hello Buddy");
}

print_msg();
*/

/*
//step-2
//remove 'function' keyword from anonymous function and add => just after the parameter parenthesis and before the curly braces starts.

const print_msg = () => {
    console.log("Hello Buddy");
}

print_msg();

//now it is an arrow function 
//but we can simplify it more
*/

//step-3
//if we have only one line inside function body then we don't need to write {}(curly braces).
//we can write it in single line.

const print_msg = () => console.log("Hello Buddy");

print_msg();


//---------------------------------------------------------------------------------------------------

/*
                        //Arrow function with no argument and no return type

const demo = () => console.log("Hey");
demo();
*/


/*
                        //Arrow function with argument and no return type

const demo = (name) => console.log("Hey " + name);
demo("satyajeet");
*/


/*

//Arrow function with no argument but has return type

const demo = () => {
    return ("Dummy Message");
};

console.log(demo());

//if an Arrow function has only one statement and that statement is return statement then we don't need to write return also. 

const dummy = () => "Hello";
console.log(dummy());

*/


//Arrow function with argument and return type

//example 1
const add = (a, b) => a + b;
console.log(add(10, 20));

//example 2
const fact = (num) => {
    let temp = 1;
    for (let i = 1; i <= num; i++) {
        temp *= i;
    }
    return temp;
}

console.log(fact(5));
