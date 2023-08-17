/*
            
            Operators          	    Description

                ==          	Compares the equality of two operands without considering type.
                ===         	Compares equality of two operands with type.
                !=          	Compares inequality of two operands.
                !==             Compares inequality of two operands with type.
                >               Returns a boolean value true if the left-side value is greater than the right-side value; otherwise, returns false.
                <           	Returns a boolean value true if the left-side value is less than the right-side value; otherwise, returns false.
                >=          	Returns a boolean value true if the left-side value is greater than or equal to the right-side value; otherwise, returns false.
                <=          	Returns a boolean value true if the left-side value is less than or equal to the right-side value; otherwise, returns false.
        */


let a, b;


a = 10;
b = 20;

console.log("a == b", a == b);

a = 10;
b = "10";
console.log("a == b", a == b);
console.log("a === b", a === b);

console.log("a != b", a != b);

console.log("a !== b", a !== b);

a = 10;
b = 20;

console.log("a > b", a > b);

console.log("a < b", a < b);

console.log("a >= b", a >= b);

console.log("a <= b", a <= b);