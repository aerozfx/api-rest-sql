const authors = require("../models/authors.js");

const getAuthors = async (req, res) => {
  let result;
  if (req.query.email) {
    result = await authors.getAuthorByEmail(req.query.email);
  } else {
    result = await authors.getAuthors();
  }
  res.status(200).json(result);
};

const createAuthor = async (req, res) => {
  let data = req.body;
  let result = await authors.createAuthor(data);
  res.status(201).json({
    message: `Usuario creado ${data.email}`,
  });
};

const updateAuthor = async (req, res) => {
  let data = req.body;
  let result = await authors.updateAuthor(data);
  res.status(200).json({
    messsage: `Usuario actualizado: ${data.email}`,
  });
};

const deleteAuthor = async (req, res) => {
  let email = req.query.email;
  let result = await authors.deleteAuthor(email);
  res.status(200).json({
    message: `Se ha borrado ${email}`,
  });
};

module.exports = {
  getAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
