// indexOf() : - The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present. The indexOf() method compares searchElement to elements of the array using strict equality (the same algorithm used by the === operator).

/*
    Syntax: - 

        indexOf(searchElement)

        indexOf(searchElement, fromIndex)

*/

let arr = [10, 20, 11, 10, 30, 40, 20];

console.log(arr);

let index = arr.indexOf(30);

console.log(index);

arr = ["satyajeet", "aman", "rahul", "aniket", "ujjwal", "aryan", "rahul"]
console.log(arr);

index = arr.indexOf("rahul")    //it will check from beginning of array list and return the index value where the element is found first.
console.log(index);

index = arr.indexOf("rahul", 3);    //it will check from index value 3 of array list and return the index value where the given element is found first.
console.log(index);

index = arr.indexOf("ram");     //here it will return -1 because the given elements does not exits. 
console.log(index);



//lastIndexOf() : -  The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex. The lastIndexOf() method compares searchElement to elements of the array using strict equality (the same algorithm used by the === operator). 

/*
    Syntax: - 

        lastIndexOf(searchElement)
        lastIndexOf(searchElement, fromIndex)

*/

console.log(arr);

index = arr.lastIndexOf("aman");
console.log(index);

index = arr.lastIndexOf("rahul");
console.log(index);

index = arr.lastIndexOf("rahul", 5);
console.log(index);

index = arr.lastIndexOf("ram");
console.log(index);