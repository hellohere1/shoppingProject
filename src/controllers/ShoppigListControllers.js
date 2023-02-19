const ShoppingLists = require("../models/ShoppingList");

const getShoppingList = async ({ id }) => {
  try {
    return await ShoppingLists.findById(id);
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

const updateBought = async ({ id, itemID, isBought }) => {
  let shopList = await getShoppingList({ id });
  // const result = shopList.updateOne({ itemName: itemID }, { isBought });
  // console.log("the result of the upate to is bought: ", result);
  const shoppingList = await ShoppingLists.findById(id);
  console.log("the shopping list", shoppingList);
  shoppingList.items.map((item) => {
    if (item.itemName == itemID) {
      item.isBought = isBought;
    }
  });
  const thethingIdidntwant = await ShoppingLists.findByIdAndUpdate(
    { id },
    { items: [shoppingList.items] }
  );
  console.log("the response of the uodate: ", thethingIdidntwant);
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
};
