require("dotenv").config();

const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("adarsh");
});
app.get("/login", (req, res) => {
  res.send("<h1>hhhhiiii</h1>");
});
app.get("/yt", (req, res) => {
  res.send("<h1>hello youtube</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
