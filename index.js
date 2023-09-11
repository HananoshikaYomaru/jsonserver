const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 3001;

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

app.listen(port, () => {
  console.log("============================");

  console.log(`Server started ✨`);
  console.log(`local: http://localhost:${port}`);

  console.log("============================");
});

module.exports = app;
