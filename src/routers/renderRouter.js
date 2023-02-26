const express = require("express");
const { getUser } = require("../controllers/userControllers");
const { getShoppingList } = require("../controllers/ShoppigListControllers");
const router = new express.Router();

router.get("/", (req, res) => {
  res.render("pages/index");
});

router.get("/shoppingList/:id", async (req, res) => {
  try {
    const user = await getUser({ id: req.params.id });
    let shoppingListUser;

    user?.shoppingLists.length > 0
      ? (shoppingListUser = await getShoppingList({
          id: user.shoppingLists[user.shoppingLists.length - 1],
        }))
      : (shoppingListUser = null);
    user?.shoppingLists.length > 0
      ? res.render("pages/shoppingList", {
          shoppingLists: shoppingListUser.items,
          id: req.params.id,
          listID: shoppingListUser._id,
        })
      : res.render("pages/shoppingList", {
          shoppingLists: [],
          id: req.params.id,
          listID: null,
        });
  } catch (e) {
    res.send(e);
  }
});

router.get("/history/:id", async (req, res) => {
  const user = await getUser({ id: req.params.id });
  let listOfLists = [];
  await user.shoppingLists.map(async (item) => {
    listOfLists.push(item);
  });
  res.render("pages/history", { id: req.params.id, idList: listOfLists });
});

module.exports = router;
