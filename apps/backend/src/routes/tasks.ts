import { Router } from "express";
import { getTasks, createTask, deleteTask } from "../controllers/tasksController";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.delete("/:id", deleteTask);

export default router;