module.exports = () => {
    return function ({ name }) {
        if (!name) {
            throw new Error("User must have a name.");
        }

        return Object.freeze({
            getName: () => name,
            setName: (newName) => {
                name = newName;
            }
        });
    };
};
