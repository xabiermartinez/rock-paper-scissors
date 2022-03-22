let games = [];
module.exports = () =>
    ({
        clean: () => {
            games = [];
        },
        write: game => {
            games.push(game);
            return games;
        },
        read: () => games,
    });
