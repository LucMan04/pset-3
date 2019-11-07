const readlineSync = require("readline-sync");
const year = Number(readlineSync.question("\nEnter a year: "));

if (Number.isNaN(year)) {
  console.log("\nInvalid.");
  if (year < 0 || year > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.");
    if (year%4 == 0) {
      console.log("\n" + year + " is a leap year. ");
    }
    else if (year%400 == 0) {
      console.log("\n" + year + " is a leap year. "); }
    else {
      console.log("\n" + year + " is not a leap year. ")
    }
  }
  else {
console.log("\nInvalid.")
  }
}
