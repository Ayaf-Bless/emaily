require("dotenv");
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();
console.log(process.env.GOOGLE_CLIENT_SECRET);
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost/callback",
    },
    function () {}
  )
);

app.get("/", (req, res) => {
  res.send({ hi: "hello" });
});

app.listen(5000, () => {
  console.log(`app is running 5000`);
});
