const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

// Created a thoughtSchema which will be used to create the User model
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 128,
    },
    createdOn: {
        type: Date,
        default: Date.now(),
        get: dateVal => formatTDate(dateVal), //Getter function to format date
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

// getter function to format the date
function formatTDate(dtVal) {
    const dateValue = moment(dtVal).format('MMMM Do YYYY, h:mm:ss a');
    return dateValue;
};

// Virtual to get the count of the user's friends(array length)
thoughtSchema.virtual('reactionCount')
    .get(function () {
        return `${this.reactions.length}`;
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;