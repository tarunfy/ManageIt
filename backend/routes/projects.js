const Router = require("express").Router();
const {
  getProject,
  getProjects,
  deleteProject,
  updateProject,
  addProject,
} = require("../controllers/project");

Router.get("/", getProjects);

module.exports = Router;
