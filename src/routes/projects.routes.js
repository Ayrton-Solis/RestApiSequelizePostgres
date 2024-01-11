import { Router } from "express";
import { getProjects, createProjects, updateProject, deleteProject, getProjectById, getProjectTasks } from "../controllers/projects.controller.js";

const router = Router();


router.get('/projects', getProjects);
router.post('/projects', createProjects);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);
router.get('/projects/:id', getProjectById);
router.get('/projects/:id/tasks', getProjectTasks);


export default router;


