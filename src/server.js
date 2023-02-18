const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const renderRouter = require("./routers/renderRouter");
const ShoppingListRouter = require("./routers/ShoppingListRouter");
const ShoppingList = require("./models/ShoppingList");
require("./mongodb/db");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.unsubscribe(express.urlencoded({ extended: true }));

app.use(cors({ credentials: true, origin: "http://localhost:5050" }));
app.use(express.json());
app.use(renderRouter);
app.use(userRouter);
app.use(ShoppingListRouter);

const items = {
  1: "sugar",
  2: "flour",
};

const shoppingLists = [
  {
    id: 1,
    quantity: 1,
    isBought: false,
  },
  {
    id: 2,
    quantity: 5,
    isBought: true,
  },
];

const history = [
  { id: 1, quantity: 1, isBought: false },
  { id: 2, quantity: 2, isBought: true },
];

module.exports = app;
