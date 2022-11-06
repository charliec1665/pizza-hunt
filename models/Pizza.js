const { Schema, model } = require('mongoose');

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
      default: Date.now // will add current time if no data is added
    },
    size: {
      type: String,
      default: 'Large'
    },
    toppings: [] // indicates 'Array' as the data type, could also use the word 'Array'
  });

// create the Pizza model using the PizzaSchema
  const Pizza = model ('Pizza', PizzaSchema);

//   export the Pizza model
module.exports = Pizza;