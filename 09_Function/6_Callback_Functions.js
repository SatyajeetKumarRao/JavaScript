//Callback function :- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.


//Method 1
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}


function calculate(x, y, callback) {
    return (callback(x, y));
}

console.log(calculate(50, 20, add));
console.log(calculate(50, 20, sub));


//Method 2
const addition = (a, b) => a + b;

const subtraction = (a, b) => a - b;

function calc(x, y, fun_name) {
    return fun_name(x, y);
}

console.log(calc(30, 25, addition));
console.log(calc(23, 10, subtraction));


//Method 3

function operation(a, b, op_name) {

    return op_name(a, b);

}

const res = operation(10, 20, function (a, b) {
    return a + b;
})

console.log(res);

//or

const operation1 = (a, b, op_name) => op_name(a, b);

const res1 = operation1(100, 120, (a, b) => a + b);

console.log(res1);