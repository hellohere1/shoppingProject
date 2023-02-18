const mongoose = require("mongoose");
const ShoppingListsSchema = new mongoose.Schema({
  items: [
    {
      itemName: {
        type: String,
        trim: true,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      isBought: {
        type: Boolean,
        required: true,
      },
    },
  ],
});

const ShoppingList = mongoose.model("ShoppingList", ShoppingListsSchema);

module.exports = ShoppingList;
