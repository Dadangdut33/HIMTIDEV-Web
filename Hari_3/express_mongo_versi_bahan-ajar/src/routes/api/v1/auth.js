const express = require("express");
const router = express.Router();
const { login } = require("../../../controller/user");

const username = "john";
const password = "12345";

// router.post("/login", (req, res) => {
// 	// validate request
// 	if (req.body.username === username && req.body.password === password) {
// 		req.session.user = req.body.username;
// 		console.log(req.session);
// 		res.status(200).json({
// 			message: "Login Success",
// 		});
// 	} else {
// 		res.status(401).json({
// 			message: "Login Failed wrong username or password",
// 		});
// 	}
// });

router.post("/login", login);

router.get("/register", (req, res) => {
	res.status(200).json({
		message: "Register Success",
	});
});

module.exports = router;
