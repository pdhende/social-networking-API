const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

module.exports = {
    // method to get all the thoughts
    getAllThoughts(req, res) {
        // console.log('get all thoughts')
        Thought.find({})
            .then((thoughts) => {
                // console.log(thoughts);
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
            // console.log(thought);
            if (!thought) {
                res.status(404).json({ message: 'Thought not found!' });
            } else {
                res.json(thought)
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    },

    // method to post a new thought, also associate thought to user
    addNewThought(req, res) {
        let thoughtId;
        Thought.create(req.body)
            .then((thought) => {
                thoughtId = thought._id;
                // console.log(thoughtId);
                // res.json(thought);
                // })
                // .catch((err) => res.status(500).json(err));
                // console.log(req.body);
                User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thoughtId } },
                    { runValidators: true, new: true })
                    .then((user) => {
                        // console.log(user);
                        if (!user) {
                            res.status(404).json({ message: 'User not found' });
                        } else {
                            res.json(user);
                        }
                    }).catch((err) => res.status(500).json(err));
            }).catch((err) => res.status(500).json(err));
    },

    // method to update thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true })
            .then((thought) => {
                if (!thought) {
                    res.status(404).json({ message: 'Thought not found!' });
                } else {
                    res.json(thought);
                }
            }).catch((err) => res.status(500).json(err));
    },

    // method to delete thought by Id
    deleteThought(req, res) {
        Thought.deleteOne({ _id: req.params.id })
            .then((thought) => {
                if (!thought) {
                    res.status(404).json({ message: 'Thought not found!' });
                } else {
                    res.json(thought);
                }
            }).catch((err) => res.status(500).json(err));
    },

    // method to create/add a reaction to a thought
    addNewReaction(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$addToSet: { reactions: req.body}},
            {runValidators: true, new: true}
        ).then((thought) => {
            if (!thought) {
                res.status(404).json({ message: 'Thought not found!' });
            } else {
                res.json(thought);
            }
        }).catch((err) => res.status(500).json(err));
    },

    // method to delete a reaction associated with a thought
    deleteReaction(req, res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: {reaction: {reactionId : req.params.rId}}},
            {runValidators: true, new: true}
        ).then((thought) => {
            if (!thought) {
                res.status(404).json({ message: 'Thought not found!' });
            } else {
                res.json(thought);
            }
        }).catch((err) => res.status(500).json(err));
    }
};