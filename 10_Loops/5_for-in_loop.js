/*
The for-in loop in JavaScript is a special loop used to go through properties of an object or elements of an array, one by one.
The loop will visit each property or element in the object or array, and execute the code block for each one
for-in loop will work with both array and object.

for-in loop give 'key' or 'indices' of object or array.

Syntax:-    
            for(var/let/const variable_name in array_var/object_var){

                statements....
            }

*/

//for-in loop using object
let sites = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook"
}

//it will print only keys
for (const n in sites) {

    console.log(n);
}


//it will print values of keys
for (const n in sites) {

    console.log(sites[n]);
}