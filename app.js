const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.get("/", function(req, res) {
  console.log("Server is running at port 3000.");
  res.send("<h1>App is running.</h1>");
});

app.listen(3000);
