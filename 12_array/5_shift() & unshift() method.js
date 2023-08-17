
//1. shift() :- The shift() method removes the element at the first element (zeroth index) and shifts the values at consecutive indexes down, then returns the removed value.  This method changes the length of the array. If the length property is 0, undefined is returned.

//shift() and pop() both perform tha same operation that is remove element from the array, but the main difference is the shift() removes the element from the beginning position of array and pop() removes the element from the last position of the array.

console.log("\n\nSHIFT METHOD\n");

let arr = [10, 20, 30, 40, 50];

//printing original array
console.log(arr);

//using shift method
arr.shift()


//printing array after shift
console.log(arr);

let val = arr.shift();

//printing array after shift and the value that is removed
console.log('array:- ', arr, 'removed value:- ', val);




let arr1 = ["apple", "mango", "banana", "orange", "strawberry"];

//printing original array
console.log(arr1);

//using shift method
arr1.shift()


//printing array after shift
console.log(arr1);

val = arr1.shift();

//printing array after shift and the value that is removed
console.log('array:- ', arr1, 'removed value:- ', val);





//2. unshift() :- The unshift() method inserts the given values to the beginning of an array-like object and returns the new length of the array.

//unshift() and push() method both perform the similar operation that is add new elements in the array but the main difference is unshift() add new elements in the beginning position in array and push() add the elements in the last position of array.


console.log("\n\nUNSHIFT METHOD\n");

arr = [10, 20, 30, 40, 50];

//printing original array
console.log(arr);

//using unshift method to add new element in the array
arr.unshift(5);

console.log(arr);

//we can insert multiple element in array also 
let length = arr.unshift(1, 2, 3);  //unshift returns length of array after insertion. 

console.log('Array: - ', arr, 'Length after inserting new elements: -', length);



//ex 2
arr1 = ["apple", "mango", "banana", "orange", "strawberry"];

//printing original array
console.log(arr1);

arr1.unshift("pineapple");

console.log(arr1);

//insert an array 
arr1.unshift(["cherry", "dragon fruit"]);

console.log(arr1);