const { ObjectID } = require("mongodb");
const User = require("../models/Users");

const getUser = async ({ id }) => {
  try {
    return await User.findById(id);
  } catch (e) {
    return e;
  }
};
const addList = async ({ id, listId }) => {
  try {
    return await User.findByIdAndUpdate(
      { _id: id },
      { shoppingLists: [listId] }
    );
  } catch (err) {
    return err;
  }
};

module.exports = {
  getUser,
  addList,
};
