var express = require("express");
var app = express();

app.get("/", (_req, res) => res.sendFile(__dirname + "/index.html"));

app.listen(3000, () => console.log("App listening on port 3000"));
