const dotEnv = require("dotenv");
const express = require("express");
dotEnv.config({ path: "./config.env" });
const authRouter = require("./routes/authRoute");
const mongoose = require("mongoose");
require("./services/passport");

mongoose
  .connect("mongodb://127.0.0.1:27017/emaily")
  .then((r) => console.log("DB connected"));
const app = express();
app.use(authRouter);

app.listen(5000, () => {
  console.log(`app is running 5000`);
});
