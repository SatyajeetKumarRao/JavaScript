// slice() :- The slice() method returns a 'shallow' copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

//syntax: -  let temp_array = array.slice(start_index_value, end_index_value);

console.log("Slice Method: - ");
let fruits = ["apple", "banana", "mango", "grapes", "orange", "peach"];

console.log('original array : - ', fruits);

let arr = fruits.slice(1, 4);

console.log(fruits);    //[ 'apple', 'banana', 'mango', 'grapes', 'orange', 'peach' ]
console.log(arr);       //[ 'banana', 'mango', 'grapes' ]



arr = fruits.slice(2);
console.log("slice from index 2 to last index : - ", arr);


//we can pass negative index values also.

//Index    -6        -5        -4       -3        -2        -1
//Array [ 'apple', 'banana', 'mango', 'grapes', 'orange', 'peach' ]

arr = fruits.slice(-5);
console.log(arr);

arr = fruits.slice(-4, -1);
console.log(arr);







//splice() : - The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements.

/*syntax: -  array.splice(start_index_number, number_of_element_to_delete, values_to_be_added);


    splice(start)
    splice(start, deleteCount)
    splice(start, deleteCount, item0)
    splice(start, deleteCount, item0, item1)
    splice(start, deleteCount, item0, item1, …, itemN)


*/

console.log("Splice Method: - ");



fruits = ["apple", "banana", "mango", "grapes"];

console.log('Original Array:- ', fruits);

// new values will be added from index 2 
fruits.splice(2, 0, "guava");

/*
Index: -      0         1        2        3
Array: -  ["apple", "banana", "mango", "grapes"];

here '2' represent that new values will be inserted at index value 2 mean in place of 'mango' , 'guava' will be inserted.

'0' represent that no element will be deleted means when an element is added at any index then the current element of that index and all other elements after that index will be shifted.

*/

console.log('New Array : - ', fruits);


//we can add multiple elements also

fruits.splice(3, 0, "pineapple", "blue berry");

console.log('New Array Again: - ', fruits);



fruits.splice(4, 1, "papaya");
/*
Index: -      0         1        2          3           4            5        6
Array: - [ 'apple', 'banana', 'guava', 'pineapple', 'blue berry', 'mango', 'grapes' ]

here '4' represent that new values will be inserted at index value 4 mean in place of 'blue berry' , 'papaya' will be inserted.

'1' represent that 1 element will be deleted means when an element is added at any index then the current element of that index will be deleted or we can say that it will be replaced with new element.
*/
console.log('New Array (Inserting and removing): - ', fruits);


fruits.splice(3, 2, "watermelon");
/*
Index: -      0         1        2          3           4            5        6
Array: - [ 'apple', 'banana', 'guava', 'pineapple', 'papaya', 'mango', 'grapes' ]

here '3' represent that new values will be inserted at index value 3 mean in place of 'pineapple' , 'watermelon' will be inserted.

'2' represent that 2 element will be deleted means when an element is added at any index then 2 elements from the that index will be deleted then new element will be added.
*/
console.log('New Array (Inserting 1 and removing 2): - ', fruits);


fruits.splice(3, 2, "muskmelon", "litchi", "pomegranate");

console.log('New Array (Inserting 3 and removing 2): - ', fruits);






//with the help if splice() we can remove thw elements also from an array

fruits.splice(2, 2);

console.log('Fruit Array (removed 2 elements from index 2): - ', fruits);

fruits.splice(3);

console.log('Fruit Array (removed all elements from index 3): - ', fruits);




//we can pass negative index values also
fruits.splice(-1, 0, "strawberry");

console.log('Fruit Array (removed all elements from index 3): - ', fruits);


//if we pass only start index value as parameter then all the values from that index will be deleted.
fruits.splice(3);

console.log(fruits);