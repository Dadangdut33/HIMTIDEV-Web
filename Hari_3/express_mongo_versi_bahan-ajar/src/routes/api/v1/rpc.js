const express = require("express");
const router = express.Router();

// GET
router.get("/get", (req, res) => {
	res.json({
		message: `RPC Hello - GET ${req.query.pesan}`,
	});
});

router.post("/post", (req, res) => {
	res.json({
		message: `RPC Hello - POST ${req.body.pesan}`,
	});
});

router.put("/put", (req, res) => {
	res.json({
		message: `RPC Hello - PUT ${req.body.pesan}`,
	});
});

router.delete("/delete", (req, res) => {
	res.json({
		message: `RPC Hello - DELETE ${req.body.pesan}`,
	});
});

module.exports = router;
