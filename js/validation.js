import { NUMBER_OF_MOVES } from "./config.js";

const MIN_NUMBER_OF_STRINGS = 3;

export function isArgumentsValid(argsArray) {
  if (argsArray.length >= MIN_NUMBER_OF_STRINGS) {
    if (argsArray.length % 2 !== 0) {
      if (isStringsNotRepeated(argsArray)) {
        return true;
      } else {
        console.log(
          "The strings shouldn't be repeated. For example, Rock Paper Scissors.",
        );
        return false;
      }
    } else {
      console.log(
        "The number of strings must be odd. For example, Rock Paper Scissors.",
      );
      return false;
    }
  } else {
    console.log(
      "The number of strings be greater than or equal to 3. For example, Rock Paper Scissors.",
    );
    return false;
  }
}

function isStringsNotRepeated(argsArray) {
  const seen = new Set();
  for (const item of argsArray) {
    if (seen.has(item)) {
      return false;
    }
    seen.add(item);
  }
  return true;
}

export function isUserMoveValid(userMove) {
  return !(isNaN(userMove) || userMove < 0 || userMove > NUMBER_OF_MOVES);
}
