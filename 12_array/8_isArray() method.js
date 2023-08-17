
//isArray() : - The Array.isArray() static method determines whether the passed value is an Array. If the passed values is array then it will return true otherwise false.
//



let arr = [10, 20, 30, 40];

console.log(arr);

let check = Array.isArray(arr);

console.log(check);

arr = "satyajeet";

if (Array.isArray(arr)) {
    console.log("It is an array");
} else {
    console.log("Not an array");
}
