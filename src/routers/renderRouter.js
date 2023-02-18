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
          id: user.shoppingLists[0],
        }))
      : (shoppingListUser = null);
    user?.shoppingLists.length > 0
      ? res.render("pages/shoppingList", {
          shoppingLists: shoppingListUser.items,
          id: req.params.id,
        })
      : res.render("pages/shoppingList", {
          shoppingLists: [],
          id: req.params.id,
        });
  } catch (e) {
    res.send(e);
  }
});

router.get("/history/:id", (req, res) => {
  res.render("pages/history", { history, items });
});

// router.post("/login", async ({ body }, res) => {
//   const result = body.username === "admin" && body.password === "admin";
//   const response = {
//     result,
//   };
//   res.send(response);
// });

module.exports = router;
