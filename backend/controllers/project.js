const mongoose = require("mongoose");

//get all projects:
const getProjects = async (req, res) => {
  res.json({
    mssg: "Hello world!!!!",
  });
};

//get a project:
const getProject = async (req, res) => {};

//post a project:
const addProject = async (req, res) => {};

//update a project:
const updateProject = async (req, res) => {};

//delete a project:
const deleteProject = async (req, res) => {};

module.exports = {
  getProjects,
  getProject,
  addProject,
  updateProject,
  deleteProject,
};
