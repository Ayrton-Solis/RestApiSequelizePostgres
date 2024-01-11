import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProjects = async (req, res) => {
  const { name, priority, description } = req.body;
  try {
    const newProject = await Project.create({
      name,
      priority,
      description
    });

    res.json(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  };
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;
    const project = await Project.findByPk(id);
    if (project === null) {
      return res.status(404).json({ message: 'Project does not exists' });
    } else {
      project.name = name
      project.priority = priority
      project.description = description
      project.save();
      res.json(project);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.destroy({
      where: {
        id
      }
    });
    res.send('Mission sucess');
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (project === null) {
      return res.status(404).json({ message: 'Project does not exists' })
    } else {
      res.json(project);
    };
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjectTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await Task.findAll({
      where: { projectId: id }
    });
    if (tasks.length === 0) {
      res.status(404).json({ message: 'ProjectId does not existsThis project does not exist or does not contain tasks' });
    } else {
      res.json(tasks);
    }
  } catch (error) {
    res.json(500).json({ message: error.message });
  };
};