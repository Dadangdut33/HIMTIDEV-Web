const express = require("express");
const router = express.Router();
const { login, createUser } = require("../../../controller/user");

router.post("/login", login);
router.get("/register", createUser);

module.exports = router;
