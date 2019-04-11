const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const urlConnectMongo = require("./config/urlConnectMongo");

const app = express();

mongoose.connect(urlConnectMongo, {
  useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use(require("./routes"));

app.listen(3333);
