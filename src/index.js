const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://root:goufix@goufixgraph-neij1.mongodb.net/week10?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(res => console.log("Connected to db!"))
  .catch(e => console.log(e));

app.use(express.json());
app.use(routes);

app.listen(3333);
