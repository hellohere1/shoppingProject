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
    const response = await User.findByIdAndUpdate(
      { _id: id },
      { shoppingLists: [...userList.shoppingLists, listId] }
    );
    if (response) return response;
  } catch (err) {
    return err;
  }
};

const addPartner = async ({ id, partnerId }) => {
  try {
    let user = await getUser({ id });
    console.log("the idd", id);
    let partner = await User.findOne({ name: partnerId }).then(
      console.log("found")
    );
    console.log("the partner: ", user);
    if (partner) {
      const response = await User.findByIdAndUpdate(
        { _id: id },
        { partners: [...user.partners, partner._id] }
      );
      if (response) return response;
      else return null;
    }
  } catch (err) {
    return err;
  }
};
module.exports = {
  getUser,
  addList,
  addPartner,
};
