const seedUsers = require('./users-seeds');
const seedPosts = require('./posts-seeds');
const seedComments = require('./comments-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUsers();
    console.log('--------------');
    await seedPosts();
    console.log('--------------');
    await seedComments();
    console.log('--------------');
};

seedAll();