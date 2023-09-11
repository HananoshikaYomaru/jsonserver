const express = require("express");
const cors = require("cors");
const jsonServer = require("json-server");
const port = process.env.PORT || 3001;
const server = jsonServer.create();
const router = jsonServer.router("public/db.json");
const middlewares = jsonServer.defaults();

/**
 * Middlewares
 */
server.use(express.static("public"));
server.use(cors());

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);

server.listen(port, () => {
  console.log("============================");

  console.log(`Server started ✨`);
  console.log(`local: http://localhost:${port}`);

  console.log("============================");
});

module.exports = server;
