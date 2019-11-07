const readlineSync = require("readline-sync");

let first_Number = Number(readlineSync.question("\nEnter three numbers: \n\n"));
let second_Number = Number(readlineSync.question(""));
let third_Number = Number(readlineSync.question(""));

if (Number.isNaN(first_Number)) {
  console.log("\nInvalid.");
}
if (Number.isNaN(second_Number)) {
  console.log("\nInvalid.");
}
if (Number.isNaN(third_Number)) {
  console.log("\nInvalid.");
}
if(first_Number < Number.MIN_SAFE_INTEGER || first_Number > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.");
  }
  else if (second_Number < Number.MIN_SAFE_INTEGER || second_Number > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.");
  }
  else if (third_Number < Number.MIN_SAFE_INTEGER || third_Number > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.");
  }
  else if ((third_Number>second_Number) && (second_Number>first_Number)) {
    console.log("\nStrictly increasing.");
  }
  else if ((third_Number>second_Number) && (second_Number==first_Number)){
    console.log("\nIncreasing");
  }
  else if ((second_Number>first_Number) && (third_Number==second_Number)){
    console.log("\nIncreasing");
  }
  else if ((third_Number==second_Number) && (first_Number==second_Number)) {
    console.log("\nEqual.");
  }
  else if ((second_Number<first_Number) && (third_Number==second_Number)){
    console.log("\nDecreasing");
  }
  else if ((second_Number==first_Number) && (second_Number>third_Number)) {
    console.log("\nDecreasing");
  }
  else if ((third_Number<second_Number) && (second_Number<first_Number)) {
    console.log("\nStrictly descreasing.");
  }
  else if ((second_Number<first_Number) && (second_Number<third_Number)) {
    console.log("\nUnordered.");
  }
  else if ((third_Number<second_Number) && (second_Number>first_Number)){
    console.log("\nUnordered.");
  }
  else if ((third_Number>second_Number) && (first_Number>second_Number)) {
    console.log("\nUnordered.");
  }
