const express = require("express");
const router = express.Router();
const { getUsers, getOneUser, createUser, updateUser, deleteUser } = require("../../../controller/user");

router.get("/", getUsers);
router.get("/:_id", getOneUser);
router.post("/", createUser);
router.put("/:_id", updateUser);
router.delete("/:_id", deleteUser);

module.exports = router;
