const { Schema, Types } = require('mongoose');
const moment = require('moment');

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
      get: dateVal => formatRDate(dateVal), //Getter function to format date
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
function formatRDate(dtVal) {
  const dateValue = moment(dtVal).format('MMMM Do YYYY, h:mm:ss a');
  return dateValue;
};

module.exports = reactionSchema;