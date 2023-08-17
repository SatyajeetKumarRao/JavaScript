//An array is a special variable, which can hold more than one value:
//An array can hold any type of value 



//way to create array in JS---------------------------------------------------------------------------------------------


//first way
let arr = [10, 20, 30, 40];

//console.log(arr);;

let arr1 = [10, "20", "satyajeet", true, null];

//console.log(arr1);

//Second way
let arr2 = [];    //here array can be of any length, depending on the number of elements that we insert in this array.

arr2[0] = 1;        //assigning value 
arr2[1] = 2;        //assigning value 
arr2[2] = "hey";    //assigning value 

//console.log(arr2);


//third way
//--------------------
let arr3 = new Array(); //here array can be of any length, depending on the number of elements that we insert in this array.

arr3[0] = 10;
arr3[1] = 20;
arr3[2] = 30;

//console.log(arr3);

//-----------------------------
let arr4 = new Array(3);

arr4[0] = 100;
arr4[1] = 200;
arr4[2] = 300;

//console.log(arr4);

//----------------------
let arr5 = new Array(11, 120, 35, 45);
//console.log(arr5);



//Multi Dimensional array

let md_arr = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]];

//console.log(md_arr);

let md_arr1 = [
    ["satyajeet", "aniket", "aman"],
    [50, 55, 57],
    [true, true, false]];

//console.log(md_arr1);


//How to access array Values-----------------------------------------------------------------------------------

let num_array = [10, 20, 30, 40, 50];

// console.log(num_array[1]);

// console.log(num_array[0]);

// console.log(num_array[7]);  //if we will try to access array index that is not available in array the it will give undefined.


//2. using Loop

//for loop
for (let i = 0; i < 4; i++) {
    //console.log(num_array[i]);
}

//for-of loop

for (let i of num_array) {
    //console.log(i);
}

//for-in loop
for (let i in num_array) {
    //console.log(num_array[i]);
}