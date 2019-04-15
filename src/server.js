const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const urlConnectMongo = require("./config/urlConnectMongo");
const cors = require("cors");

const app = express();

app.use(cors())
const server = require('http').Server(app)
const io = require('socket.io')(server);

io.on('connection', socket => {
  socket.on('connectionRoom', box => {
    socket.join(box);
  })
})

mongoose.connect(urlConnectMongo, {
  useNewUrlParser: true
});

app.use((req, res, next) => {
  req.io = io;
  
  return next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use(require("./routes"));

server.listen(3333);
