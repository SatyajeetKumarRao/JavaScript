//includes() : - The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false.

/*
    Syntax: - 
        
        includes(searchElement)
        includes(searchElement, fromIndex)

*/

let uname = ["satyajeet", "aman", "rahul", "aniket", "ujjwal", "aryan", "rahul"];

console.log(uname);

let val = uname.includes("aman"); //this value is available in array so it will return true.

console.log(val);

val = uname.includes("shyam"); //this value is not available in array so it will return false.
console.log(val);


let num = [10, 20, 11, 10, 30, 40, 20];

console.log(num);

val = num.includes(10); //here value 10 is present so it will return true.
console.log(val);

val = num.includes(10, 4);      //here value 10 is not present at index 4 and after that index so it will return false.
console.log(val);