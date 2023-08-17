/*
            1. const means constant 
            2. It means the value once assigned to the variable at the time of declaration,
                we can't change it's value or we can't re-declare the variable.
            3. It is mandatory to assign the value to the variable at the time of declaration, otherwise we will get error.

        */

const a = 10;

console.log(a);

//a = 20;    //TypeError: Assignment to constant variable

//const a = 20;    //SyntaxError: Identifier 'a' has already been declared

//const b;  //SyntaxError: Missing initializer in const declaration


const b = "Hello";

console.log(b);


