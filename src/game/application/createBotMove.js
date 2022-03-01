const options = [ "rock", "paper", "scissors" ];

module.exports = ({ getRandomInt }) => {
    return function () {
        return options[getRandomInt(options.length-1)];
    };
};
