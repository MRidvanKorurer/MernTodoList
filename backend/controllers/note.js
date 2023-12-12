const Note = require("../models/note");

module.exports.getAllNote = async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json({
      status: "OK",
      notes,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports.getSingleNote = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Hatalı id!" });
    }
    const note = await Note.findById(id);

    res.status(200).json({
      status: "OK",
      note,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports.createNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newNote = await Note.create({ title, description });

    res.status(200).json({
      status: "OK",
      newNote,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports.updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updateNote = await Note.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    res.status(200).json({
      status: "OK",
      updateNote,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports.deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteNote = await Note.findByIdAndDelete(id);

    res.status(200).json({
      status: "OK",
      deleteNote,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
