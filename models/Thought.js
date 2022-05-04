const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
var moment = require('moment');

// Created a thoughtSchema which will be used to create the User model
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 128,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        get: formatDate, //Getter function to format date
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema], //Reactions array from reactionSchema
},
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
    }
);

function formatDate() {
    // return createdAt.toDateString();
    const dateValue = moment(this.createdAt).format('MMMM Do YYYY, h:mm:ss a');
    return dateValue;
};

// Virtual to get the count of the user's friends(array length)
thoughtSchema.virtual('reactionCount')
.get(function () {
    return `${this.reactions.length}`;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;