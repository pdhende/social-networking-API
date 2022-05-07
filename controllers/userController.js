const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
    // method to get all users
    getUsers(req, res) {
        User.find({})
            .select('-__v')
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    // method to get a single user based on Id
    getUserById(req, res) {
        User.findById({
            _id: req.params.id
        }).select('-__v')
            .then((user) => {
                if (!user) {
                    res.status(404).json({ message: 'User not found!' });
                } else {
                    res.json(user);
                }
            }).catch((err) => res.status(500).json(err));
    },

    // method to add a new user
    addNewUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    // method to update a user 
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true } // setting runValidators to true means it runs validation on the properties before the update happens. Setting new: true means it returns the updated record.
        ).then((user) => {
            if (!user) {
                res.status(404).json({ message: 'User not found!' });
            } else {
                res.json(user);
            }
        }).catch((err) => res.status(500).json(err));
    },

    // method to delete a user based on Id
    deleteUser(req, res) {
        console.log("in delete")
        User.findByIdAndDelete({
            _id: req.params.id
        }).then((user) => {
            if (!user) {
                res.status(404).json({ message: 'User not found!' });
            } else {
                Thought.deleteMany({ _id: { $in: user.thoughts } }); //Delete the thoughts associated to this user
            }
        }).then(() => res.json({ message: 'User was deleted' }))
        .catch((err) => res.status(500).json(err));
    },

    // method to add a friend to users friend list
    addNewFriend(req, res){
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$addToSet: {friends : req.params.friendId}},
            {runValidators: true, new: true}
        ).then((user) => {
            if (!user) {
                res.status(404).json({ message: 'User not found!' });
            } else {
                res.json(user);
            }
        }).catch((err) => res.status(500).json(err));
    },

    // method to delete a friend from a users friend list
    deleteFriend(req, res){
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: {friends : req.params.friendId}},
            {new: true}
        ).then((user) => {
            if (!user) {
                res.status(404).json({ message: 'User not found!' });
            } else {
                res.json(user);
            }
        }).catch((err) => res.status(500).json(err));
    }
};