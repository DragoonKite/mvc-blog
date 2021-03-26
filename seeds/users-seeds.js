const {User} = require('../models');

const userData =[
    {
        username: "admin",
        email: "admin@mail.mail",
        password: "admin123"
    },
    {
        username: "TestUser",
        email: "testuser@mail.mail",
        password: "testuser123"
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;