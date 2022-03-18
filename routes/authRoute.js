const router = require("express").Router();
const { route } = require("express/lib/application");
const passport = require("passport");

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/auth/google/callback", passport.authenticate("google"));

router.get("/api/me", (req, res) => {
  return res.send(req.user);
});

module.exports = router;
