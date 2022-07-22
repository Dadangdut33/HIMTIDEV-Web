const express = require("express");
const router = express.Router();
const { getAllusers, getOneUser, createUser, updateUser, deleteUser } = require("../../../controllers/user");

router.get("/", getAllusers);
router.get("/:username", getOneUser);
router.post("/", createUser);
router.put("/:username", updateUser);
router.delete("/:username", deleteUser);

module.exports = router;
