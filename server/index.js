const dotEnv = require("dotenv");
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
dotEnv.config({ path: "./config.env" });

const app = express();
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "google/callback",
    },
    (accessToken, refreshToken, profile, cb)  => {
      console.log(accessToken);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google")
);

app.get("/", (req, res) => {
  res.send({ hi: "hello" });
});

app.listen(5000, () => {
  console.log(`app is running 5000`);
});
