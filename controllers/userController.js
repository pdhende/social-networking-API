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
            if(!user){
                res.status(404).json({ message: 'User not found!'});
            }else{
                res.json(user);
            }
        }).catch((err) => res.status(500).json(err));
    }
};