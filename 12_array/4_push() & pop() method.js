
//1. push() :- The push() method adds the specified elements to the end of an array and returns the new length of the array.

let arr = [11, 20, 30, 15];

console.log(arr);

let length = arr.push(25);

console.log(arr, length);


//we can push multiple element also
length = arr.push(30, 31, 32);

console.log(arr, length);


let arr_str = ["apple", "car", "bell", "cat"];

console.log(arr_str);

length = arr_str.push("tom");

console.log(arr_str, length);


//we can insert an array also
length = arr_str.push(["monkey", "dog", "zebra"]);

console.log(arr_str, length);


//2. pop() :- The pop() method removes the last element from an array and returns that element. This method changes the length of the array. If the length property is 0, undefined is returned

let a = [10, 11, 9, 17, 21, 15];

console.log("Original Array :- ", a);

let popped = a.pop();

console.log("Array after pop :- ");

console.log(a, popped);

popped = a.pop();

console.log("Array after pop again:- ");

console.log(a, popped);

let b = [10];

console.log(b.pop());
console.log(b.length);
console.log(b.pop());
