const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
const Q = 0.25;
const D = 0.1;
const N = 0.05;
const P = 0.01;



let amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("\nInvalid.");
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid.");
} else {

let quarters = Math.floor(amount/Q)
  let q_Amount = amount % Q
let dimes = Math.floor(q_Amount/D)
  let d_Amount = q_Amount % D
let nickles = Math.floor(d_Amount/N)
  let n_Amount = d_Amount % N
let pennies = Math.ceil(n_Amount/P)


console.log("\n"+quarters+" quarters, "+dimes+" dimes, "+nickles+" nickles, and "+pennies+" pennies.\n");
}
