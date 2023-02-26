const ShoppingLists = require("../models/ShoppingList");
const { Mongoose } = require("mongoose");
const { ObjectID } = require("mongodb");
const { remove } = require("../models/ShoppingList");

const getShoppingList = async ({ id }) => {
  try {
    const shopping = await ShoppingLists.findById(id);
    return shopping;
  } catch (e) {
    return e;
  }
};

const addToShoppingList = async ({ id, item }) => {
  try {
    let shopList = await getShoppingList({ id });
    shopList.items = [...shopList.items, item];
    const result = await ShoppingLists.findByIdAndUpdate(
      {
        _id: id,
      },
      { items: shopList.items }
    );
    return result;
  } catch (err) {
    return err;
  }
};
const updateBought = async (items) => {
  try {
    if (Array.isArray(items)) {
      items.map(async ({ id, itemID, isBought }) => {
        const shoppingList = await ShoppingLists.findById(id);
        await shoppingList.items.map((item) => {
          if (item.itemName == itemID) {
            item.isBought = isBought;
          }
        });
        const resp = await shoppingList.save().then("the success is big?");
        return resp;
      });
    }
  } catch (err) {
    return err;
  }
};

const deleteItem = async ({ listId, itemId }) => {
  try {
    let shopList = await getShoppingList({ id: listId });
    shopList.items.forEach((itemInside) => {
      if (itemInside._id == itemId) {
        const index = shopList.items.indexOf(itemInside);
        shopList.items.splice(index, 1);
      }
    });
    const result = await shopList.save().then(console.log("good"));
    return result;
  } catch (err) {
    return err;
  }
};

const createShoppingList = async ({ itemName, quantity, isBought, id }) => {
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
  createShoppingList,
  getShoppingList,
  updateBought,
  deleteItem,
};
