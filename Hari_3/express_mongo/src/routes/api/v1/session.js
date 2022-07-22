const express = require("express");
const router = express.Router();
const userModel = require("../../../models/user");

router.post("/login", async (req, res) => {
	const { username, password } = req.body;

	const user = await userModel.findOne({ username });
	console.log("a");

	if (!user) {
		return res.status(401).json({
			data: null,
			message: "User or password is false",
			success: false,
		});
	}
	// check password
	if (user.password === password) {
		req.session.user = username;
		return res.status(200).json({
			data: null,
			message: "Login success",
			success: true,
		});
	} else {
		console.log("c");
		return res.status(401).json({
			data: null,
			message: "User or password is false",
			success: false,
		});
	}
});

router.get("/logout", (req, res) => {
	if (req.session && req.session.user) {
		req.session.destroy();
		res.redirect("/");
	} else {
		res.status(401).json({
			data: null,
			message: "Already logged out",
			success: false,
		});
	}
});

router.get("/check", (req, res) => {
	if (req.session && req.session.user) {
		res.send("Logged in");
	} else {
		res.send("Not logged in");
	}
});

module.exports = router;
