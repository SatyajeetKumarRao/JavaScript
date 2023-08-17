/*

        Arithmetic Operator is used to perform operation on Numeric Data

            Operator          Description

                +              Addition 
                -              Subtraction 
                *              Multiplication 
                **             Exponentiation 
                /              Division 
                %              Modulus (Remainder) 
                ++             Increment 
                --             Decrement

        */


let a = 14;
let b = 5;
let c;


//Addition ----------------------------------------------------------------------------------------------
c = a + b;

console.log(c);



//Subtraction ----------------------------------------------------------------------------------------------
c = a - b;

console.log(c);



//Multiplication ----------------------------------------------------------------------------------------------
c = a * b;

console.log(c);



//Exponentiation ----------------------------------------------------------------------------------------------
c = a ** b;

console.log(c);



//Division ----------------------------------------------------------------------------------------------
c = a / b;

console.log(c);



//Modulus (Remainder) ----------------------------------------------------------------------------------------------
c = a % b;

console.log(c);



//Increment ----------------------------------------------------------------------------------------------
a++;        //it means a = a + 1;   here, now value of a is 15

console.log(a);


/*
    this will work on expression
    1. Pre-Increment    -   value will be incremented first then other operations will be performed.
    2. Post-Increment   -   first operations will be performed, then value will be incremented.
*/

// 1. Pre-Increment
c = ++a;

console.log(c);


// 2. Post-Increment
c = a++;

console.log(c);

console.log(a)




//Decrement ----------------------------------------------------------------------------------------------
b--;        //it means b = b - 1;   here, now value of b is 4

console.log(b);


/*
    this will work on expression
    1. Pre-Decrement    -   value will be Decremented first then other operations will be performed.
    2. Post-Decrement   -   first operations will be performed, then value will be Decremented.
*/

// 1. Pre-Decrement
c = --b;

console.log(c);


// 2. Post-Decrement
c = b--;

console.log(c);

console.log(b);
