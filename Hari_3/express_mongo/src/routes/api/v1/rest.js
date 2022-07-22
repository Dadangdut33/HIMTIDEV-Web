const express = require("express");
const router = express.Router();

// GET
router.get("/endpoint", (req, res) => {
	res.json({
		message: `REST Hello - GET ${req.query.pesan}`,
	});
});

router.post("/endpoint", (req, res) => {
	res.json({
		message: `REST Hello - POST ${req.body.pesan}`,
	});
});

router.put("/endpoint", (req, res) => {
	res.json({
		message: `REST Hello - PUT ${req.body.pesan}`,
	});
});

router.delete("/endpoint", (req, res) => {
	res.json({
		message: `REST Hello - DELETE ${req.body.pesan}`,
	});
});

module.exports = router;
