const express = require("express");

const {getJoke} = require("../controller/user.controller");

const router = express.Router();

router.get("/dadjoke", getJoke )

module.exports = { userRouter: router };