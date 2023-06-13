const express = require("express");
const app = express();
const router = require("./routers/entriesRouter.js");
const authorsRouter = require("./routers/authorsRouter.js");
const port = 3000;

app.use(express.json()); // Habilita que podamos enviar JSON por el body

app.get("/", (req, res) => {
  res.send("hola!");
});
app.use("/api/entries", router);
app.use("/api/authors", authorsRouter);
app.listen(port, () => {
  `Server corriendo en el puerto ${port}`;
});
