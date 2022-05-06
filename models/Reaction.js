const { Schema, Types } = require('mongoose');
var moment = require('moment');

const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
        get: formatDate,
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
  }
);

// Getter function to format the date before query
function formatDate() {
    // return createdAt.toDateString();
    const dateValue = moment(this.createdAt).format('MMMM Do YYYY, h:mm:ss a');
    return dateValue;
};

module.exports = reactionSchema;