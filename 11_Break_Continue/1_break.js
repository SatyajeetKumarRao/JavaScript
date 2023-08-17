/*
            The break statement terminates the current loop or switch statement.
            When break; is encountered, the program breaks out of the innermost switch or looping statement and continues executing the next statement

            __uses of break

            -break in loop
            -break in switch statements
            -break in labeled blocks

            syntax:-            break;
        
        */

//example break in loop


for (let i = 1; i < 100; i++) {

    if (i == 5) {

        break;
    }

    console.log(i + " HEY...");
}


//example -break in switch statements

function testbreak(a) {
    switch (a) {
        case 1:
            console.log("You are good");
            break;
        case 2:
            console.log("you are bad");
            break;
        default:
            console.log("Invalid");
    }

}

testbreak(1);



//example -break in labeled blocks


label1: {
    label2: {
        let i = 1;
        while (true) {

            if (i == 5) {
                break label2;
            }

            console.log(i + " Welcome.");
            i++;
        }
    }
    console.log("Thanks");
}