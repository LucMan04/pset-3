const readlineSync = require("readline-sync");

let amount = Number(readlineSync.question("\nEnter a number: "));



if (amount > 0) {
    console.log("Positive.");
  } else if (amount < 0) {
    console.log("Negative.");
  }else if (Number.isNaN(amount)) {
    console.log("Invalid.");
  }else {
  console.log("Zero.");
}
