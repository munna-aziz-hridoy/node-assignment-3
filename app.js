const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const userRouters = require("./routes/userRoutes");
const rootDir = require("./utilities/rootDir");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

app.use("/users", userRouters);

module.exports = app;
