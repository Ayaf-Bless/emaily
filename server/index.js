const dotEnv = require("dotenv");
const express = require("express");
dotEnv.config({ path: "./config.env" });
const authRouter = require("./routes/authRoute");
require("./services/passport");

const app = express();

app.use(authRouter);

app.listen(5000, () => {
  console.log(`app is running 5000`);
});
