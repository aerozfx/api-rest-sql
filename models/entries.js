const queries = require("./queries/entries.queries.js");
const pool = require("../utils/db_sql.js");

const getEntriesByEmail = async (email) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getEntriesByEmail, [email]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const getAllEntries = async () => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getAllEntries);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const createEntry = async (entry) => {
  const { title, content, email, category } = entry;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.createEntry, [
      title,
      content,
      email,
      category,
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const updateEntry = async (entry) => {
  const { title, content, category, newTitle } = entry;
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.updateEntry, [
      newTitle,
      content,
      category,
      title,
    ]);
    result = data.rowCount;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const deleteEntry = async (title) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = client.query(queries.deleteEntry, [title]);
    result = (await data).rowCount;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

module.exports = {
  getEntriesByEmail,
  getAllEntries,
  createEntry,
  updateEntry,
  deleteEntry,
};
