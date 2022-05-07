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
// method to get a single thought based on the ID
    getThoughtById(req, res) {
        Thought.findById({
            _id: req.params.id
        }).then((thought) => {
            console.log(thought);
            if(!thought){
                res.status(404).json({ message: 'Thought not found!'});
            }else {
                res.json(thought)
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    },
};