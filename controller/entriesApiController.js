const {
  getEntriesByEmail,
  getAllEntries,
  createEntry: createEntryWithId,
  updateEntry: updateEntryWithContent,
  deleteEntry: deleteEntryByTitle,
} = require("../models/entries.js");

const getEntries = async (req, res) => {
  let entries;
  if (req.query.email) {
    entries = await getEntriesByEmail(req.query.email);
  } else {
    entries = await getAllEntries();
  }
  res.status(200).json(entries);
};

const createEntry = async (req, res) => {
  const newEntry = req.body;
  const response = await createEntryWithId(newEntry);
  res.status(200).json({
    items_created: response,
    data: newEntry,
  });
};

const updateEntry = async (req, res) => {
  const newEntry = req.body;
  const response = await updateEntryWithContent(newEntry);
  res.status(200).json({
    item_edited: response,
    data: newEntry,
  });
};

const deleteEntry = async (req, res) => {
  const title = req.query.title;
  const response = await deleteEntryByTitle(title);
  res.status(200).json({
    message: `Se ha borrado la entry ${title}`,
  });
};
module.exports = {
  getEntries,
  createEntry,
  updateEntry,
  deleteEntry,
};
