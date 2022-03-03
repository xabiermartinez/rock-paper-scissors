const options = [ "rock", "paper", "scissors" ];

module.exports = ({ getRandomInt }) =>
    () => ({
        name: "Bot",
        move: options[getRandomInt(options.length-1)]
    });
