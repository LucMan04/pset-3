const readlineSync = require("readline-sync");

const grade = Number(readlineSync.question("\nEnter a grade: "));

const MIN = 0
const MAX = 100

if (Number.isNaN(grade)) {
  console.log("\nInvalid.");
}else if (100 >= grade && grade >= 90) {
  console.log("\nYou received an A.");
}else if (90 > grade && grade >= 80) {
  console.log("\nYou received a B.");
}else if (80 > grade && grade >= 70) {
  console.log("\nYou received a C.");
}else if (70 > grade && grade >= 60) {
  console.log("\nYou received a D.");
}else if (60 > grade && grade >= 0) {
  console.log("\nYou received a F.");
}else {
  console.log("Invalid.");
}
