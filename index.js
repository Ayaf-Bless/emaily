const dotEnv = require("dotenv");
dotEnv.config({ path: "./config.env" });
const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const authRouter = require("./routes/authRoute");
const mongoose = require("mongoose");
require("./services/passport");

mongoose
  .connect("mongodb://127.0.0.1:27017/emaily")
  .then(() => console.log("DB connected"));

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(authRouter);

app.listen(5000, () => {
  console.log(`app is running 5000`);
});
