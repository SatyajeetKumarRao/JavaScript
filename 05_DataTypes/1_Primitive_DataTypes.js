
/*
There are total 7 primitive data types in javascript

NN BB SS U

null
number
boolean
bigInt
string
symbol
undefined
 
*/


//String DataType ----------------------------------------------------------------------------------------------

/*
    "Hello"         ->String
    'welcome'       ->String
    'Y'             ->String
    "N"             ->String
    "20"            ->String
*/


console.log("--String datatype--");

let a = "Hello";

console.log(a, " ", typeof a);


a = 'welcome';

console.log(a, " ", typeof a);


a = 'Y';

console.log(a, " ", typeof a);


a = "N";

console.log(a, " ", typeof a);


a = "20"

console.log(a, " ", typeof a);




//Number DataType ----------------------------------------------------------------------------------------------------

/*
    10              ->  integer                 ->  Number
    20.5            ->  float                   ->  Number
    0o125 / 0O777   ->  in octal(0o/0O)         ->  Number      (base - 8) (allowed digits (0-7) only)
    0x123 / 0xface  ->  in hexadecimal(0x/0X)   ->  Number      (base - 16) (allowed digits (0-9) & (a-f) only)
    0b1010 / 0B1111 ->  in binary(0b/0B)        ->  Number      (base - 2) (allowed digits (0-1) only)
    10.2e23         ->  in exponential          ->  Number      (floating pointer number with exponential.)
 
    10_00_000 / 10_00_00.9_8  //number can be separated using underscore, but only one underscore is allowed
 
    Infinity / -Infinity    ->  Number
 
 
*/

console.log("--Number datatype--");

let b = 10;     //integer number

console.log(b, " ", typeof b);


b = 20.5;   //float number

console.log(b, " ", typeof b);


b = 0o777;  //octal number (base - 8)

console.log(b, " ", typeof b);


b = 0xface;  //hexadecimal number (base - 16)

console.log(b, " ", typeof b);


b = 0b1010; //binary number    

console.log(b, " ", typeof b);


b = 10.23e23;   //floating pointer number with exponential.

console.log(b, " ", typeof b);


b = 10_00_000;  //number can be separated using underscore, but only one underscore is allowed

console.log(b, " ", typeof b);


b = 10_00_00.9_8;

console.log(b, " ", typeof b);


b = Infinity;   //special type of number
//or l = 10 / 0;    //Infinity

console.log(b, " ", typeof b);



b = -Infinity;  //special type of number
//or l1 = -10.0 / 0; //-Infinity

console.log(b, " ", typeof b);





//BigInt DataType ------------------------------------------------------------------------------------
/*
    10245780n           ->  BigInt      (any integer number suffixed win 'n' only. NOT 'N')
    BigInt(10247954)    ->  BigInt      (integer number is converted into BinInt)
 
    BigInt only support integer numbers.
 
    BigInt is used to ensure the precision of very big number.
 
*/

console.log("--BigInt datatype--");

let c = 10245780n;

console.log(c, " ", typeof c);


c = BigInt(10247954);

console.log(c, " ", typeof c);



//boolean DataType ---------------------------------------------------------------------------------------

console.log("--Boolean datatype--");

let d = true;   //it may be true or false only
console.log(d, " ", typeof d);


d = false;
console.log(d, " ", typeof d);



//null DataType -----------------------------------------------------------------------------------------

console.log("--Null datatype--");

let e = null;
console.log(e, " ", typeof e);



//undefined DataType ------------------------------------------------------------------------------------
/*
    if we declare a variable and doesn't assign any value to it, then the variable will become undefined.
    or we can assign undefined value explicitly also to make it undefined.
*/

console.log("--Undefined datatype--");

let f;

console.log(f, " ", typeof f);


f = undefined;

console.log(f, " ", typeof f);



//Symbol DataType ---------------------------------------------------------------------------------------

console.log("--Symbol datatype--");

let g = Symbol("This is Symbol");

// console.log(g, " ", typeof g);
// 

console.log(g, " ", typeof g);