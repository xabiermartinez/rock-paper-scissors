module.exports = () => {
    return function () {
        let moves = [];
        let result = [];

        return Object.freeze({
            getMoves: () => moves,
            getResult: () => result,
            setResult: (updatedResult) => {
                result = updatedResult;
            },
            addMove: (newMove) => {
                moves.push(newMove);
            }
        });
    };
};
