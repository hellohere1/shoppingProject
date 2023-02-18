const ShoppingLists = require("../models/ShoppingList");

const getShoppingList = async ({ id }) => {
  try {
    return await ShoppingLists.findById(id);
  } catch (e) {
    return e;
  }
};

const addToShoppingList = async ({ itemName, quantity, isBought, id }) => {
  try {
    const addedid = await ShoppingLists.create({
      itemName,
      quantity,
      isBought,
    });
    console.log("the id:", addedid);
  } catch (err) {
    return err;
  }
};

module.exports = {
  addToShoppingList,
  getShoppingList,
};
