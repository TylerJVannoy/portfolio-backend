const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo connection successfully established");
});

const messagesRouter = require("./routes/messages");

app.use("/messages", messagesRouter);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
