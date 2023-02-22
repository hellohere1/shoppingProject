const express = require("express");
const { getUser } = require("../controllers/userControllers");
const {
  getShoppingList,
  createShoppingList,
  addToShoppingList,
  updateBought,
} = require("../controllers/ShoppigListControllers");
const router = new express.Router();
const ShoppingList = require("../models/ShoppingList");

router.post("/newShopping/:id", async ({ body }, res) => {
  try {
    const Shopinglist = new ShoppingList(body);
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

router.post("/additem/:id", async ({ body }, res) => {
  try {
    const result = await addToShoppingList(body);
    if (result) res.send({ result });
  } catch (err) {
    res.send(err);
  }
});

router.post("/updateBought/:id", async ({ body }, res) => {
  try {
    return await updateBought(body);
  } catch (err) {
    res.send(err);
  }
});

router.get("/getList/:id", async (req, res) => {
  try {
    const theList = await getShoppingList({ id: req.params.id });
    res.send({ result: theList });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
