const Router = require("express").Router();
const { login, signup } = require("../controllers/user");

//Login
Router.post("/login", login);

//Signup
Router.post("/signup", signup);

module.exports = Router;
