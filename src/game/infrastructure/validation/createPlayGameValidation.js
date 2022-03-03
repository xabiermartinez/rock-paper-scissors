const Joi = require("joi");

const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    move: Joi.string().valid("rock", "paper", "scissors").required()
});

module.exports = () =>
    ({ body }) => {
        const validation = schema.validate(body);
        if (validation.error) {
            return { validates: false, error: validation.error.details[0].message };
        }
        return { validates: true };
    };
