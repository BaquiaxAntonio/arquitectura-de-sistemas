"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasksController_1 = require("../controllers/tasksController");
const router = (0, express_1.Router)();
router.get("/", tasksController_1.getTasks);
router.post("/", tasksController_1.createTask);
router.delete("/:id", tasksController_1.deleteTask);
exports.default = router;
//# sourceMappingURL=tasks.js.map