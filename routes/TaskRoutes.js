import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTask,
  updateTask,
} from "../controllers/taskController.js";

const taskRoutes = Router();

taskRoutes.post("/create-task", createTask);
taskRoutes.get("/get-tasks", getAllTask);
taskRoutes.delete("/delete-task/:id", deleteTask);
taskRoutes.put("/update-task/:id", updateTask);

export default taskRoutes;
