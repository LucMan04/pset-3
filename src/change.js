const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
const Q = 0.25;
const D = 0.1;
const N = 0.05;
const P = 0.01;
let numberQ = 0;
let numberD = 0;
let numberN = 0;
let numberP = 0;


let amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("\nInvalid");
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid");
} else {
  
  }
}
console.log(+numberQ+" quarters, "+numberD+" dimes, "+numberN+" nickles, and "+numberP+" pennies.");
