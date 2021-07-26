const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(require("./routes/clothes.route"));
app.use(require("./routes/phones.route"));
app.use(require("./routes/computers.route"));

mongoose
  .connect("mongodb+srv://into:code@cluster0.peqll.mongodb.net/clothes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("успех"))
  .catch(() => console.log("провал"));

app.listen(3010, () => {
  console.log("Server has been started");
});
