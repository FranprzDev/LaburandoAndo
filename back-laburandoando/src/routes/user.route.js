const express = require("express");

const userRouter = express.Router();

userRouter.post("/create", () => {
    console.log("Create User");
})

userRouter.get("/find-all", () => {
    console.log("Find All Users");
});


userRouter.put("/update/:id", () => {
    console.log("Update User");

    /* Supongo que se puede actualizar unicamente password & mail */ 
});

/* Corresponden a comments y stars respectivamente */

userRouter.put("/comment", () => {
    console.log("Add comment");
});

userRouter.put("/rate", () => {
    console.log("Add rate");
});

module.exports = userRouter;