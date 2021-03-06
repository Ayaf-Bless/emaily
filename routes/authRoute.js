const router = require("express").Router();
const passport = require("passport");

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/auth/google/callback", passport.authenticate("google"));

router.get("/api/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});

router.get("/api/me", (req, res) => {
  return res.send(req.user);
});

module.exports = router;
