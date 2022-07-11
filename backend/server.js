const express = require("express");
const mongoose = require("mongoose");
const ProjectRouter = require("./routes/projects");
const cors = require("cors");
require("dotenv").config();

//creating app:
const app = express();

//middlewares:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    allowedHeaders: true,
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use("/api/projects", ProjectRouter);

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
