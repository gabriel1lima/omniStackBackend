const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
try { var urlConnectMongo = require("./config/urlConnectMongo") } catch (error) {}

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

mongoose.connect(urlConnectMongo || process.env.URL_MONGO, {
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

server.listen(process.env.PORT || 3333, function(){
  console.log("Express server listening on port %d", this.address().port);
});
