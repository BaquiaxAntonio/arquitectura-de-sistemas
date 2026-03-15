"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.createTask = exports.getTasks = void 0;
const prisma_1 = require("../lib/prisma");
// Obtener todas las tareas
const getTasks = async (req, res) => {
    try {
        const tasks = await prisma_1.prisma.task.findMany({
            orderBy: { id: "desc" }
        });
        res.json(tasks);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching tasks" });
    }
};
exports.getTasks = getTasks;
// Crear tarea
const createTask = async (req, res) => {
    try {
        const { title } = req.body;
        if (!title)
            return res.status(400).json({ error: "Title is required" });
        const task = await prisma_1.prisma.task.create({
            data: { title }
        });
        res.json(task);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error creating task" });
    }
};
exports.createTask = createTask;
// Eliminar tarea
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma_1.prisma.task.delete({
            where: { id: Number(id) }
        });
        res.json({ message: "Task deleted" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error deleting task" });
    }
};
exports.deleteTask = deleteTask;
//# sourceMappingURL=tasksController.js.map