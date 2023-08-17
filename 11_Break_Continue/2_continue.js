/*
      the continue statement immediately returns to the condition of the loop. 
      This enables us to skip specific iterations of the loop without exiting the entire loop.
      
      Syntax:-        continue;
  */


//printing only odd numbers.

for (let a = 1; a < 10; a++) {

    if (a % 2 == 0) {
        continue;
    }

    console.log(a);

}
