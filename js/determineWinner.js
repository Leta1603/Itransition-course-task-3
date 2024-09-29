import {MOVES, NUMBER_OF_MOVES} from "./config.js";

const HALF_OF_MOVES = Math.floor(NUMBER_OF_MOVES / 2);

export function determineWinner(userMove, computerMove) {
    const userIndex = MOVES.indexOf(userMove);
    const computerIndex = MOVES.indexOf(computerMove);

    if (userIndex === computerIndex) {
        return "Draw";
    }

    if (
        (computerIndex - userIndex + NUMBER_OF_MOVES) % NUMBER_OF_MOVES <=
        HALF_OF_MOVES
    ) {
        return "Lose"; // Компьютер победил
    } else {
        return "Win"; // Пользователь победил
    }
}