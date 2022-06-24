const express = require("express");
const path = require("path");
const rootDir = require("../utilities/rootDir");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "users.html"));
});

router.get("/add-users", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "addUser.html"));
});

router.post("/add-user", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
