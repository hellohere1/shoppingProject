const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    validate(value) {
      if (value.length < 6) throw new Error("password not long enough");
    },
  },
  shoppingLists: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  partners: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const User = mongoose.model("User", usersSchema);

module.exports = User;
