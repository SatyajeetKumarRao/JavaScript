/*
The for-of loop in JavaScript is a loop that go through items in a collection one by one, where the collection can be an array, string, set, map, or anything that's iterable.
For example, if we have an array of numbers, a for-of loop can go through each number in order and print it. 
The loop will visit each item and execute the code block for each one. 

The for-of loop wil work with only iterable objects like arrays, strings, sets, or maps.
It doesn't work with Objects.

for-of loop give 'value' of array.

Syntax:--
            for(var/let/const variable_name of array_var/String/etc.){

                statements....
            }
*/

//for-of loop using array

let states = ["delhi", "bihar", "jharkhand", "goa", "uttrakhand"];

for (const val of states) {
    console.log(val);
}

//for-of loop using string
let str = "Satyajeet";

for (const item of str) {

    console.log(item);
}