const express = require("express");
const router = express.Router();
const { createUser } = require("../../../controller/user");
const { login, logout, checkLoggedIn } = require("../../../controller/auth");

router.post("/login", login);
router.post("/register", createUser);
router.delete("/logout", logout);
router.get("/check", checkLoggedIn);

module.exports = router;
