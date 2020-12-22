const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("", (req, res) => {
  res.send("it works");
});

app.post("/pdf", (req, res) => {
  console.log(req.body);
  res.status(201).json({ message: "pdf created" });
});

app.listen(3000, () => {
  console.log("server is running");
});
