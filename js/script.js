import { MOVES, NUMBER_OF_MOVES } from "./config.js";
import { isArgumentsValid, isUserMoveValid } from "./validation.js";
import { calculateHMAC, generateKey } from "./generateKey.js";
import { generateDataForTable } from "./tableGeneration.js";
import { createInterface } from "readline";

import crypto from "crypto";
import { table } from "table";
import { determineWinner } from "./determineWinner.js";

if (isArgumentsValid(MOVES)) {
  createMenu();
}

function createMenu() {
  const KEY = generateKey();
  const computerMoveIndex = crypto.randomInt(NUMBER_OF_MOVES);
  const computerMove = MOVES[computerMoveIndex];
  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const HMAC = calculateHMAC(KEY, computerMove);
  console.log(`\nHMAC: ${HMAC}`);

  renderMenu(MOVES);

  readline.question("Enter your move: ", (userInput) => {
    if (parseInt(userInput, 10) === 0) {
      readline.close();
      process.exit(0);
    } else if (userInput === "?") {
      console.log(table(generateDataForTable()));
    } else {
      const userChoice = parseInt(userInput, 10) - 1;

      if (!isUserMoveValid(userChoice)) {
        console.log("Invalid move. Please try again!");
        readline.close();
        createMenu();
        return;
      }

      const result = determineWinner(MOVES[userChoice], computerMove);

      console.log(`Your move: ${MOVES[userChoice]}`);
      console.log(`Computer move: ${computerMove}`);
      switch (result.toLowerCase()) {
        case "draw":
          console.log(`${result}`);
          break;
        default:
          console.log(`You ${result.toLowerCase()}`);
          break;
      }
      console.log(`HMAC key: ${KEY}`);
    }
    readline.close();
    createMenu();
  });
}

function renderMenu(argsArray) {
  console.log("Menu: ");
  argsArray.forEach((arg, index) => {
    console.log(`${++index} - ${arg.toLowerCase()}`);
  });
  console.log("0 - exit");
  console.log("? - help\n");
}
