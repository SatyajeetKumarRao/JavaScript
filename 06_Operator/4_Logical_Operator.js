/*

            Operator       Name      Example                             Description

                &&	    and     (x < 10 && y > 1) is true            AND returns true if both operands are truthy, otherwise it returns false.
                ||	    or      (x == 5 || y == 5) is false          If any of its arguments are true, it returns true, otherwise it returns false.
                !	    not     !(x == y) is true                    Converts the operand to boolean type: true/false. Returns the inverse value.	

        */

let a = 20;
let b = 30;


//&& and
console.log(a >= 10 && a <= b);


// || or
console.log(a >= b || a == 20);


// ! Not
console.log(!false);
console.log(!true);

console.log(!(a >= b || a == 20));