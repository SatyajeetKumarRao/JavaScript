//Array Methods


//1. sort() method sort the array in alphabetic order ---------------------------------------------------------------------------------------------
//sort() method doesn't return anything
let sname = ["rohan", "sam", "mohan", "raman", "abhishek", "satyam", "bob", "lucky"];

console.log('printing original array \n ', sname);

//sorting array in alphabetic order
sname.sort();


console.log('printing array after sorting \n', sname);




//if we have an array that contains only numbers then sort() method doesn't work properly because if sort method used alone then it will cast the elements to string then it perform sorting operation.

let num = [11, 2, 13, 56, 100, 1, 45, 90, 76];


console.log('printing original array \n ', num);

//sorting array
num.sort();


console.log('printing array after sorting \n', num);



/* to perform sorting on Arrays of Numbers we can do it as.

in order to correctly sort numerical data, we need to pass a comparison function to the sort() method. This function should take two arguments and return a negative, zero, or positive value, depending on the arguments.

In this case, the comparison function is (a, b) => a - b, which is an arrow function. When a and b are two elements being compared:

If a - b is less than 0, a is sorted to be a lower index than b.
If a - b is equal to 0, nothing changes.
If a - b is greater than 0, b is sorted to be a lower index than a.
So the sort function with the comparator (a, b) => a - b effectively sorts an array of numbers in ascending order.

*/

num = [11, 2, 13, 56, 100, 1, 45, 90, 76]; //reassigning the original array.

num.sort((a, b) => a - b)


console.log('printing array after sorting \n', num);










//2. reverse() method reverse the array.
//reverse() method doesn't return anything


sname = ["rohan", "sam", "mohan", "raman", "abhishek", "satyam", "bob", "lucky"];


console.log('printing original array \n ', sname);

//reversing the array
sname.reverse();

console.log('printing reversed original array \n ', sname);



//sorting array in alphabetic order
sname.sort();

console.log('printing array after sorting \n', sname);



//reversing the sorted array
sname.reverse();

console.log('printing reversed array \n', sname);





num = [11, 2, 13, 56, 100, 1, 45, 90, 76];


console.log('printing original array \n ', num);

//reversing array
num.reverse();


console.log('printing reversed array \n', num);