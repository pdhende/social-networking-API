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
        // get: dateValue => moment(dateValue).format('MMMM Do YYYY, h:mm:ss a'),
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
  // console.log(dtVal);
    const dateValue = moment(dtVal).format('MMMM Do YYYY, h:mm:ss a');
    // const dateValue = dtVal.toUTCString();
    return dateValue;
};

module.exports = reactionSchema;