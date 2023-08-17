//Immediately Invoked Function Expressions (IIFE): These are functions that are executed as soon as they are defined.
//An Immediately Invoked Function Expression (IIFE) is a function expression that is defined and executed immediately after its creation. It is wrapped in parentheses to make it an expression and followed by an additional set of parentheses to invoke it:

/*
Syntax:- 
        (function(parameters) {
            // code to be executed
        })(arguments);
*/

//example 1
(function () {
    let a = 10, b = 10.5;
    console.log(a + b);
})();


//example 2
(function (x, y) {
    console.log(x + y);
})(10, 20);

//example 3
(function print_msg() {
    console.log("Welcome");

})();