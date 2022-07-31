const express = require("express");
const mongoose = require("mongoose");
const ProjectRouter = require("./routes/projects");
const UserRouter = require("./routes/user");
const cors = require("cors");
require("dotenv").config();

//creating app:
const app = express();

//middlewares:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/api/projects", ProjectRouter);
app.use("/api/user", UserRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
