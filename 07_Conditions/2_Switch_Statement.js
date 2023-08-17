/*

          switch statement is also like if-else-if conditional statement
          it execute the only one condition out of multiple conditions
          But it is convenient than if..else..if because it can be used with numbers, characters etc.


          Syntax:-

          switch (condition) {
              case value1:
              statements;
              break;

              case value2:
              statements;
              break;

              case value3:
              statements;
              break;

              default:
              statements;
          }

    */
let day = 1;

switch (day) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Invalid Day Number");
}


let grade = 'c';

switch (grade) {
  case 'a':
    console.log("Grade A: Excellent");
    break;
  case 'b':
    console.log("Grade B: Good");
    break;
  case 'c':
    console.log("Grade C: Bad");
    break;
  case 'f':
    console.log("Grade f: Fail");
    break;
  default:
    console.log("Invalid Grade");
}