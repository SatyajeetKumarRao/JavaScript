

//concat() : - The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

//Note:-  concat() method perform shallow copy.


let a = [10, 20, 30];

let b = [40, 50, 60, 70];


let c = a.concat(b);


console.log(a);

console.log(b);

console.log(c);


a = [10, 20, 30];

b = [40, 50, 60, 70];

c = [80, 90, [100, 110, 120]];

//we can pass multiple array to concat
let d = a.concat(b, c);

console.log(d);






//join(): - The join() method creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.


let fruits = ["apple", "banana", "mango", "grapes", "orange", "peach"];

let str = fruits.join("_");

console.log(fruits);
console.log(str);


//If the array has only one item, then that item will be returned without using the separator.

let arr = ["hey"];
str = arr.join("-");

console.log(arr);
console.log(str);


//If an element is undefined / null, it is converted to an empty string instead of the string "null" or "undefined".

let test = [null, "hello", "hey", undefined, "bye"];

str = test.join("-");

console.log(test);
console.log(str);
