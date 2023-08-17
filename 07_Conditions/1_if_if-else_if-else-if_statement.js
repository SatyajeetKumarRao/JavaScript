/*The JavaScript Conditional statement is used to execute the code whether condition is true or false. 
        There are three forms of if statement in JavaScript.

        If Statement
        If else statement
        if else if statement
        
        */




//if statement:- ------------------------------------------------------------------

/*only executes if condition is true

    syntax: - 

    if(condition) {

        true block 
        statements;
    }

*/


let a = 20;

if (a > 10) {
    console.log("hello");
}


//example
let age = 28;

if (age >= 18) {
    console.log("You are Mature");
}


if (age < 18) {
    console.log("You are Kid");
}




//if-else statement:- ------------------------------------------------------------------

/*if condition is true then true block statements will execute otherwise false block statements will execute.
 
    syntax: - 
 
    if(condition) {
 
        true block 
        statements;
    }
 
    else {
 
        false block 
        
        statements;
    }
 
*/


let b = 20;

if (b > 30) {
    console.log("hello");
}
else {

    console.log("Bye");

}


//example
let num = 17;

if (num % 2 == 0) {
    console.log("Number is Even");
}

else {
    console.log("Number is Odd");
}





//if-else-if statement:- ------------------------------------------------------------------

/*if condition_1 is true then condition_1 true block statements will execute.
if condition_1 is false then it go to else part of condition_1 and again check for condition_2.
if condition_2 is true then condition_2 true block statements will execute.
if all conditions will become false then it go to else part and false block statements will execute.
 
    syntax: - 
 
    if(condition_1) {
 
        condition_1 true block 
 
        statements;
    }
 
    else if(condition_2){
 
        condition_2 true block 
        
        statements;
    }
 
    else {
 
        false block 
        
        statements;
 
    }
 
*/


let c = 45;

if (c > 60) {
    console.log("good");
}

else if (c > 40) {
    console.log("average");
}

else if (c > 33) {
    console.log("bad");
}

else {
    console.log("very bad");
}




//example
let per = 85;

if (per >= 80 && per <= 100) {
    console.log("Excellent");
}
else if (per >= 60 && per < 80) {
    console.log("Ist Division");
}
else if (per >= 45 && per < 60) {
    console.log("IInd Division");
}
else if (per >= 33 && per < 45) {
    console.log("IIIrd Division");
}
else if (per >= 0 && per < 33) {
    console.log("fail");
}
else {
    console.log("Invalid Marks Percentage");
}

