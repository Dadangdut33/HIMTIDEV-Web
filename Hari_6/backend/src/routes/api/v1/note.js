const express = require("express");
const router = express.Router();
const { getNotes, getOneNote, createNote, updateNotes, deleteNote } = require("../../../controller/note");

router.get("/", getNotes);
router.post("/", createNote);
router.get("/:_id", getOneNote);
router.put("/:_id", updateNotes);
router.delete("/:_id", deleteNote);

module.exports = router;
