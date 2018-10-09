const User = require('./connectors');

module.exports = {
    Query: {
        users(_, args) {
            return User.findAll({where: args});
        },
    },

    Mutation: {
        addUser(_, args) {
            return User.create(args);
        },
        login: async (_, args) => {
            return User.findOne({where: args}).then( (response) => {
                return { message: `Hello ${response.firstname} ${response.lastname}`};
            }).catch(error => {
                return {message: `Invalid email address or password.`}
            })
        }
    }
};