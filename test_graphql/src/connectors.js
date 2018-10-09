const Sequelize = require('sequelize');

const db = new Sequelize(process.env.TENANT, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

const UserModel = db.define('user', {
    firstname: { type: Sequelize.STRING },
    lastname: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    is_active: { type: Sequelize.ENUM('YES', 'NO'),defaultValue: 'YES'},
}, {
    timestamps: false
});

db.sync();

const User = db.models.user;

module.exports = User;