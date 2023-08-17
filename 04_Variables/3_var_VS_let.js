
/*
    1.  -variable declared with var has function-scoped.
        -variable declared with var is available throughout the function in which it is declared
        -variable is declared with var, can be redeclare
        -var variables are initialized with undefined when hoisted. 
        -Therefore, a var variable can be used before its declaration without causing an error, although the value will be undefined.

        
        

    2.  -variable declared with let has block scope.
        -variable declared with let is only available within the block where it is declared
        -there is no any scope of that variable outside that block.
        -if we try to access it outside that block we will get error.
        -variable is declared with let, so it cannot be redeclare
        -let variables aren't initialized when hoisted. 
        -This means that if you try to use a let variable before it's declared, you'll get a ReferenceError. This area is called the "Temporal Dead Zone."
*/

//Global 

var a = 10;
let b = 20;

console.log("Global variable a and b ");
console.log(a);
console.log(b);

{
    //Block

    console.log("Accessing Global variable a and b inside block and doing re-assignment");
    a = 30;
    b = 40;

    console.log(a);
    console.log(b);


    console.log("Block Variable a1 and b1");

    var a1 = 50;
    let b1 = 60;

    console.log(a1);
    console.log(b1);

}

console.log("Accessing Block Variable outside block area");
console.log(a1);     //variable a1 is accessible outside the block because it has global scope

/*
console.log(b1);     //ReferenceError: b1 is not defined 
                        //b1 variable is not Accessible outside the block
                        //but a1 variable is Accessible outside the block also 

*/
