//Adding Values in array


let arr = [10, 20, 30];


//printing array
console.log(arr);

//printing array values.
for (const val of arr) {
    console.log(val);
}

//modify array values

arr[0] = 1;
arr[2] = 3;


//printing array
console.log(arr);

//printing array values.
for (const val of arr) {
    console.log(val);
}


//add new value to array without using any methods

let arr1 = [1, 2, 3, 4, 5];

console.log(arr1);

//here length of array is 5 if we want to add new element(means 6th element) in array, then we can add it in last only directly

//adding element at 6th position means at index 5
arr1[5] = 6;

console.log(arr1);


//we can add as much elements as we want.

//adding element at 7th position means at index 6
arr1[6] = 7;


//adding element at last position means at index (length_of_array)

arr1[arr1.length] = 10;

// printing array arr1
console.log(arr1);

//printing values of array arr1.
console.log('Length of arr1 is ' + arr1.length);

for (const val of arr1) {
    console.log(val);
}




//Deleting Values/Elements from array 
//we can delete that value by using delete keyword



let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//printing all the values of array
console.log('printing value of original array');
for (const val of array) {
    console.log(val);
}

//deleting an element from array
//here the value of index 0 is deleted.
delete array[0];


console.log('printing value of array after deleting the value of index 0');
console.log(array);
//printing all the values of array
for (const val of array) {
    console.log(val);
}

//we can delete any value from array by using index

delete array[5]

console.log('printing value of array after deleting the value of index 0');
console.log(array);
//printing all the values of array
for (const val of array) {
    console.log(val);
}