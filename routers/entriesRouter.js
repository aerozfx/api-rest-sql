const express = require("express");
const router = express.Router();
const {
  getEntries,
  createEntry,
  updateEntry,
  deleteEntry,
} = require("../controller/entriesApiController.js");

router.get("/", getEntries);
router.post("/", createEntry);
router.put("/", updateEntry);
router.delete("/", deleteEntry);

module.exports = router;
