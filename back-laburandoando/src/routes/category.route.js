const express = require("express");
const { createCategory } = require("../controllers/category.controller");

// const { body, param } = require("express-validator");
const { expressValidations } = require("../middlewares/common.validations");
// const { verifyJWT } = require("../middlewares/auth.validations");

/* Recordar el verifyjwt */

const categoryRouter = express.Router();

categoryRouter.post("/create", [], expressValidations, createCategory);

categoryRouter.get("/find-all", () => {
  console.log("Find All Categories");
});

categoryRouter.get("/find-by-name/:name", () => {
  console.log("Find Category By Name");
});

module.exports = categoryRouter;
