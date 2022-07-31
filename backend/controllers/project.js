const mongoose = require("mongoose");
const ProjectModel = require("../models/Project");

//get all projects:
const getProjects = async (req, res) => {
  const { userId } = req.params;

  try {
    const projects = await ProjectModel.find({
      userId,
    });

    if (!projects) {
      return res.status(401).json({ error: "No projects found" });
    }

    res.status(200).json({ projects });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

//get a project:
const getProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such project" });
  }

  try {
    const project = await ProjectModel.findById(id);

    if (!project) {
      return res.status(401).json({ error: "No project found" });
    }

    res.status(200).json({ project });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

//post a project:
const addProject = async (req, res) => {
  const { name, description, repoLink, liveDemo, userId } = req.body;

  const emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }

  if (!description) {
    emptyFields.push("description");
  }

  if (!repoLink) {
    emptyFields.push("repoLink");
  }

  if (!liveDemo) {
    emptyFields.push("liveDemo");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    const project = await ProjectModel.create({
      name,
      description,
      repoLink,
      liveDemo,
      userId,
    });

    res.status(201).json({
      project,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update a project:
const updateProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No project found" });
  }

  try {
    const updatedProject = await ProjectModel.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );

    if (!updatedProject) {
      return res.status(404).json({ err: "No project found" });
    }

    res.status(200).json({ project: updatedProject });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//delete a project:
const deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No project found" });
  }

  try {
    const deletedProject = await ProjectModel.findOneAndDelete({
      _id: id,
    });

    if (!deletedProject) {
      return res.status(404).json({ error: "No project found" });
    }

    res.status(200).json({ project: deletedProject });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getProjects,
  getProject,
  addProject,
  updateProject,
  deleteProject,
};
