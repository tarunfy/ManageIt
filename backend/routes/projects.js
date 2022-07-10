const Router = require("express").Router();
const {
  getProject,
  getProjects,
  deleteProject,
  updateProject,
  addProject,
} = require("../controllers/project");

Router.get("/", getProjects);
Router.get("/:id", getProject);
Router.post("/", addProject);
Router.patch("/:id", updateProject);
Router.delete("/:id", deleteProject);

module.exports = Router;
