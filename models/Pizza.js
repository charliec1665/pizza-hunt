const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// not necessary to import special datatypes because the data will adhere to built-in javascript datatypes
const PizzaSchema = new Schema({
    pizzaName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now, // will add current time if no data is added
      get: (createdAtVal) => dateFormat(createdAtVal)
    },
    size: {
      type: String,
      default: 'Large'
    },
    toppings: [], // set as an empty array
    comments: [
      {
        type: Schema.Types.ObjectId, // expect an object id
        ref: 'Comment' // data comes from Comment model
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false // virtual that Mongoose returns and we don't need
  }
);

// get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function() {
  return this.comments.reduce((total, comment) => total + comment.replies.length + 1, 0);
});

// create the Pizza model using the PizzaSchema
  const Pizza = model ('Pizza', PizzaSchema);

//   export the Pizza model
module.exports = Pizza;