const readlineSync = require("readline-sync");

let amount = Number(readlineSync.question("\nEnter a number: "));

if (Number.MAX_SAFE_INTEGER < amount || amount > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.\n");
}else if (amount > 0) {
    console.log("\nPositive.\n");
  }else if (amount < 0) {
    console.log("\nNegative.\n");
  }else if (Number.isNaN(amount)) {
    console.log("\nInvalid.\n");
  }else {
  console.log("\nZero.\n");
}
