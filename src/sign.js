const readlineSync = require("readline-sync");

let amount = Number(readlineSync.question("\nEnter a number: "));

const min = Number.MIN_SAFE_INTEGER
const max = Number.MAX_SAFE_INTEGER

if (max < amount < min) {
  console.log("\nInvalid.");
}else if (amount > 0) {
    console.log("\nPositive.");
  } else if (amount < 0) {
    console.log("\nNegative.");
  }else if (Number.isNaN(amount)) {
    console.log("\nInvalid.");
  }else {
  console.log("\nZero.");
}
