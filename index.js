const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "hello" });
});

app.listen(3000, () => {
  console.log("app is running");
});
