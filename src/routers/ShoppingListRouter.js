const express = require("express");
const { getUser } = require("../controllers/userControllers");
const {
  getShoppingList,
  addToShoppingList,
} = require("../controllers/ShoppigListControllers");
const router = new express.Router();
const ShoppingList = require("../models/ShoppingList");

router.post("/addShopping/:id", async ({ body }, res) => {
  try {
    console.log("the data: ", body.items);
    const Shopinglist = new ShoppingList(body);
    // console.log(Shopinglist);
    const tryi = await Shopinglist.save().then(
      console.log("the shopping list was saved")
    );
    await Shopinglist.updateOne({ itmes: body.items }).then(
      console.log("the list was updated")
    );
    res.send({ result: tryi._id });
  } catch (err) {
    res.send(err);
  }
});

router.post("/additem/:id", async ({ body }, res) => {});

module.exports = router;
