const express = require("express");
const router = express.Router();
const { createUser } = require("../../../controller/user");
const { login, logout, checkLoggedIn } = require("../../../controller/auth");

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

router.post("/login", limiter, login);
router.post("/register", createUser);
router.delete("/logout", logout);
router.get("/check", checkLoggedIn);

module.exports = router;
