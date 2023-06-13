const express = require("express");
const {
  getAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controller/authorsApiController.js");
const authorsRouter = express.Router();

authorsRouter.get("/", getAuthors);
authorsRouter.post("/", createAuthor);
authorsRouter.put("/", updateAuthor);
authorsRouter.delete("/", deleteAuthor);

module.exports = authorsRouter;
