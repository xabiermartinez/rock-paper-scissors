module.exports = () => {
    return function (max) {
        return Math.floor(Math.random() * (max+1));
    };
};
