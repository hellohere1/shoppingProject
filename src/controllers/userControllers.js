const { ObjectID } = require("mongodb");
const { Mongoose } = require("mongoose");
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
    let userList = await getUser({ id });
    console.log("the userlist: ", userList.shoppingLists);
    const response = await User.findByIdAndUpdate(
      { _id: id },
      { shoppingLists: [...userList.shoppingLists, listId] }
    );
    if (response) return response;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getUser,
  addList,
};
