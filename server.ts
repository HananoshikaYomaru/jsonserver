import jsonServer from "json-server";
import express from "express";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(express.static("public"));
server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running on", "http://localhost:3000");
});
