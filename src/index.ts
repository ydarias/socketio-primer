var express = require("express");
var app = express();

app.get("/", (_req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => console.log("App listening on port 3000"));
