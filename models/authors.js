const queries = require("./queries/authors.queries.js");
const pool = require("../utils/db_sql.js");

const getAuthors = async () => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.getAllAuthors);
    result = data.rows;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const getAuthorByEmail = async (email) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.getAuthorByEmail, [email]);
    result = data.rows;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const createAuthor = async (entry) => {
  let { name, surname, email, image } = entry;
  let client, result;
  try {
    client = await pool.connect();
    let data = await client.query(queries.createAuthor, [
      name,
      surname,
      email,
      image,
    ]);
    result = data.rows;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const updateAuthor = async (entry) => {
  let { newName, newSurname, newEmail, newImage, email } = entry;
  let client, result;
  try {
    client = await pool.connect();
    let data = await client.query(queries.updateAuthor, [
      newName,
      newSurname,
      newEmail,
      newImage,
      email,
    ]);
    result = data.rows;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const deleteAuthor = async (email) => {
  let client, result;
  try {
    client = await pool.connect();
    let data = await client.query(queries.deleteAuthor, [email]);
    result = data.rows;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

let authors = {
  getAuthors,
  getAuthorByEmail,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};

module.exports = authors;
