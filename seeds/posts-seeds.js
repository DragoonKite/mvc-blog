const {Post} = require('../models');

const postdata = [
    {
        title: "Test post number 1",
        post_contents: "SDFGSDFG SDFG sdfgsdgfsdfg sdfg.",
        user_id: 1
    },
    {
        title: "Test post number 2",
        post_contents: "dfgwergdfg aqedrfghqertg.",
        user_id: 2
    },
    {
        title: "Test post number 3",
        post_contents: "aertg aefgqergqera ytrsaedfgbwrsethy.",
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;