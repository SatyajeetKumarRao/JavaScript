
let marks = {
    ram: 98,
    shyam: 70,
    aman: 80
}


console.log("printing the values of marks object");
//using for loop

console.log("using for loop");
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log(`Marks of ${Object.keys(marks)[i]} = ${marks[Object.keys(marks)[i]]}`);
}



//using for-in loop
console.log("\nusing for-in loop");
for (const i in marks) {
    console.log(`Marks of ${i} = ${marks[i]}`);
}
