var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", (_req, res) => res.sendFile(__dirname + "/index.html"));

io.on("connection", socket => console.log("a user connected"));

http.listen(3000, () => console.log("App listening on port 3000"));
