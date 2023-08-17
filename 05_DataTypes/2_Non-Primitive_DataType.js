//Object datatype

/*
    Array       ->      ["keyboard", "Mouse", "Monitor", "Printer", "Scanner"]
    Object      ->      {name: "Sam", roll: 10, fee: 10245.25, course: "MCA", present: true }
*/

let a = ["keyboard", "Mouse", "Monitor", "Printer", "Scanner"];

console.log(a, " = ", typeof a);


let b = {
    name: "Sam",
    roll: 10,
    fee: 10245.25,
    course: "MCA",
    present: true
}


console.log(b, " = ", typeof b);



console.log(b["name"], " = ", typeof b["name"]);



console.log(b["fee"], " = ", typeof b["fee"]);