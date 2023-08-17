let a = 10;       //declaring the variable a and assigning the value 10.
console.log(a);

a = "hello";      //here assigning new values.
console.log(a);

/*

let a = 10;      //here if we try to re-declare the variable a, then it will throw error,
                 //because let keyword doesn't allow to re-declare any variable that was already declared earlier.
                 //It doesn't matter that with which keyword it was declared earlier either with var or let.
                 //if it is declared earlier then simply let won't allow to re-declare it.
                 //we can only re-assign a new value to it of any type.

var x=10;

let x=20;       //error (saying "Identifier 'x' has already been declared")

*/

a = 20.45;
console.log(a);