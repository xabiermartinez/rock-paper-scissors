module.exports = ({ inMemoryDb }) =>
    async () => {
        let body, statusCode;

        const headers = { "Content-Type": "application/json" };

        try {
            body = {
                games: inMemoryDb.read()
            };
            statusCode = 200;
        } catch (e) {
            body = { error: e.message };
            statusCode = 500;
        }

        return { headers, statusCode, body };
    };
