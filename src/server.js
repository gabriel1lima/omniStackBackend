const express = require("express");
const mongoose = require("mongoose");
const urlConnectMongo = require("./config/urlConnectMongo");

const app = express();

mongoose.connect(urlConnectMongo, {
  useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

app.listen(3333);
