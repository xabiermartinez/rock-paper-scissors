const getWinner = moves => {
    const hasRock = moves.some(move => move.move === "rock");
    const hasScissor = moves.some(move => move.move === "scissors");
    const hasPaper = moves.some(move => move.move === "paper");

    let winner;
    if (hasRock && hasScissor) {
        winner = moves.find(move => move.move === "rock").name;
    }
    if (hasPaper && hasRock) {
        winner = moves.find(move => move.move === "paper").name;
    }
    if (hasScissor && hasPaper) {
        winner = moves.find(move => move.move === "scissors").name;
    }

    return winner;
};

const getResult = moves => {
    const moveTypes = moves.map(move => move.move);
    const tie = moveTypes[0] === moveTypes[1];
    if (tie) {
        return { tie, winner: "none" };
    }

    return {
        tie,
        winner: getWinner(moves)
    };
};

module.exports = () => {
    return function (moves) {
        if (moves.length !== 2) {
            throw new Error("calculateResult needs 2 moves.");
        }

        return getResult(moves);
    };
};
