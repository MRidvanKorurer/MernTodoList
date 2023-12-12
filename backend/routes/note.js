const express = require("express");
const noteController = require("../controllers/note");

const router = express.Router();

router.get("/", noteController.getAllNote);

router.get("/:id", noteController.getSingleNote);

router.post("/", noteController.createNote);

router.put("/:id", noteController.updateNote);

router.delete("/:id", noteController.deleteNote);

module.exports = router;
