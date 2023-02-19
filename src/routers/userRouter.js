const express = require("express");
const { getUser, addList } = require("../controllers/userControllers");
const router = new express.Router();
const User = require("../models/Users");

router.post("/users", async ({ body }, res) => {
  try {
    console.log("the user", body);
    const user = new User(body);
    await user.save().then(console.log("saved user"));
  } catch (e) {
    console.log(e);
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const user = await getUser({ id: req.params.id });
    user ? res.send(user) : res.send({});
  } catch (e) {
    res.send(e);
  }
});

router.post("/users/addShopping/:id", async (req, res) => {
  try {
    const user = await getUser({ id: req.params.id });
    const updateresult = await addList({
      id: req.params.id,
      listId: req.body.shopinglist,
    });
    console.log("the update: ", updateresult);
    if (updateresult) res.send(updateresult);
  } catch (err) {
    res.send(err);
  }
});

router.patch("/users/:id", async ({ body }, res) => {
  try {
    const user = await getUser({ id: req.params.id });
    const { updates } = body;
    for (key in updates) {
      if (Array.isArray(updates[key])) {
        user[key] = [...user[key], ...updates[key]];
      } else {
        user[key] = updates[key];
      }
    }
    await user.save();
    res.send(user);
  } catch (e) {
    res.send(e);
  }
});

router.post("/login", async ({ body }, res) => {
  try {
    const user = await User.findOne({ email: body.email });
    if (user?.password === body.password) {
      res.send({
        result: user._id,
      });
    } else {
      res.send({ result: null });
    }
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
