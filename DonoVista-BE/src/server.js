// const express = require("express");
import express from "express";

const app = express();

const hostname = "localhost";
const port = 1995;

app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});

app.listen(port, hostname, () => {
  console.log(
    `hello Duong Dono, I'm running on - http://${hostname}:${port}`
  );
});
