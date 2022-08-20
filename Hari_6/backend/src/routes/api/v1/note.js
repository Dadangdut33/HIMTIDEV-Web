const express = require("express");
const router = express.Router();
const { getNotes, getOneNote, createNote, updateNotes, deleteNote } = require("../../../controller/note");

// const authMiddleware = (req,res,next) => {
//   if (req.session.user) {
//     next();
//   } else {
//     res.status(401).json({
//       message: "User is not logged in",
//       success: false,
//     });
//   }
// }

// router.use(authMiddleware);
router.get("/", getNotes);
router.post("/", createNote);
router.get("/:_id", getOneNote);
router.put("/:_id", updateNotes);
router.delete("/:_id", deleteNote);

module.exports = router;
