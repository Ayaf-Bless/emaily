const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/userModel");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      const user = await User.findOne({ googleId: profile.id });
      if (!user) {
        const newUser = await User.create({ googleId: profile.id });
        done(null, newUser);
      }
      done(null, user);
    }
  )
);
