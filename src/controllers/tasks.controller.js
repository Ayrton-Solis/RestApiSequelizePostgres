import { Task } from "../models/Task.js";

export const getTask = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

export const createTask = async (req, res) => {
  try {
    const { name, done, projectId } = req.body;
    const newTask = await Task.create({
      name,
      done,
      projectId
    });
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({
      where: { id }
    });
    task.set(req.body);
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (task === null) {
      res.status(404).json({ message: 'Task does not exists' });
    } else {
      await task.destroy({
        where: { id }
      });
    };
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (task === null) {
      res.status(404).json({ message: 'Task does not exists' });
    } else {
      res.json(task);
    };
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};