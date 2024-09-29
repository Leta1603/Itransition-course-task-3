import {MOVES, NUMBER_OF_MOVES} from "./config.js";
import {determineWinner} from "./determineWinner.js";

export function generateDataForTable() {
    let firstRow = [],
        data = [];
    firstRow.push("v PC\\User >");

    MOVES.forEach((move) => {
        firstRow.push(move);
    });

    data.push(firstRow);

    for (let i = 0; i < NUMBER_OF_MOVES; i++) {
        let row = [];
        row.push(MOVES[i]);
        for (let j = 0; j < NUMBER_OF_MOVES; j++) {
            let result = determineWinner(MOVES[j], MOVES[i]);
            row.push(result);
        }
        data.push(row);
    }

    return data;
}