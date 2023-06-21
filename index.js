const express = require("express");
const app = express();
const helmet = require("helmet");
const router = require("./routers/entriesRouter.js");
const authorsRouter = require("./routers/authorsRouter.js");
const port = 3001;

app.use(express.json()); // Habilita que podamos enviar JSON por el body
app.use(helmet());

app.get("/", (req, res) => {
  res.status(200).send(`<h2>Estos son algunos de los endpoints</h2>
  <ul>
  <li><a href="/api/entries">/api/entries</a></li>
  <li><a href="/api/authors">/api/authors</a></li>
  </ul>`);
});
app.use("/api/entries", router);
app.use("/api/authors", authorsRouter);
app.listen(port, () => {
  `Server corriendo en el puerto ${port}`;
});
