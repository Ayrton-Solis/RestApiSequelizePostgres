import { Router } from "express";
import { createTask, deleteTask, getTask, getTaskById, updateTask } from "../controllers/tasks.controller.js";

const router = Router();

router.get('/tasks', getTask);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);
router.get('/tasks/:id', getTaskById);

export default router;
