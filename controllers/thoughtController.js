const { ObjectId } = require('mongoose').Types;
const { Thought } = require('../models');

module.exports = {
    // method to get all the thoughts
    getAllThoughts(req, res) {
        console.log('get all thoughts')
        Thought.find({})
            .then((thoughts) => {
                console.log(thoughts);
            res.json(thoughts);
        })
            .catch((err) => {
                console.log(err);
                 res.status(500).json(err)
                });
    },
};