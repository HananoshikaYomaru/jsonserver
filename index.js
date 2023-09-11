const express = require("express");
const app = express();
const cors = require("cors");
const jsonServer = require("json-server");
const port = process.env.PORT || 3001;

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

/**
 * Middlewares
 */
app.use(express.static("public"));
app.use(cors());

/**
 * Routes
 */
app.get("/", (req, res) => {
  res.send("heelo");
});

server.use(middlewares);
server.use(router);
app.use(server);

app.listen(port, () => {
  console.log("============================");

  console.log(`Server started ✨`);
  console.log(`local: http://localhost:${port}`);

  console.log("============================");
});

module.exports = app;
