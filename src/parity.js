const readlineSync = require("readline-sync");

let amount = Number(readlineSync.question("\nEnter an integer: "));

if (amount % 2 == 0) {
  console.log("\nEven.\n");
  }
  else if (amount % 2 == 1){
    console.log("\nOdd.\n");
  }else {
      console.log("\nInvalid.\n");
    }
