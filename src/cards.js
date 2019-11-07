const readlineSync = require("readline-sync");

let card = readlineSync.question("\n\nEnter a playing card: ");
card = card.toLowerCase();
let output = "";
let real_Card = true;

if (card.length != 2) {
    real_Card = false;
  }
    else if (card.charAt(0) == "2") {
      output = "\nTwo of ";
    }
    else if (card.charAt(0) == "3") {
      output = "\nThree of ";
    }
    else if (card.charAt(0) == "4") {
      output = "\nFour of ";
    }
    else if (card.charAt(0) == "5") {
      output = "\nFive of ";
    }
    else if (card.charAt(0) == "6") {
      output = "\nSix of ";
    }
    else if (card.charAt(0) == "7") {
      output = "\nSeven of ";
    }
    else if (card.charAt(0) == "8") {
      output = "\nEight of ";
    }
    else if (card.charAt(0) == "9") {
      output = "\nNine of ";
    }
    else if (card.charAt(0) == "t") {
      output = "\nTen of ";
    }
    else if (card.charAt(0) == "j") {
      output = "\nJack of ";
    }
    else if (card.charAt(0) == "q") {
      output = "\nQueen of ";
    }
    else if (card.charAt(0) == "k") {
      output = "\nKing of ";
    }
    else if (card.charAt(0) == "a") {
      output =  "\nAce of ";
    }
else {
  real_Card = false;
}

if (card.charAt(1) == "c") {
  output += "Clubs.\n";
  }
  else if (card.charAt(1) == "d") {
    output += "Diamonds.\n";
  }
  else if (card.charAt(1) == "h") {
    output += "Hearts.\n";
  }
  else if (card.charAt(1) == "s") {
    output += "Spades.\n";
  }
else {
  real_Card = false;
}

if (real_Card == true) {
  console.log(output);
}
else {
  console.log("\ninvalid.\n")
}
