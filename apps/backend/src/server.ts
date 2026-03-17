import "dotenv/config";
import express from "express";
import cors from "cors";
import tasksRoutes from "./routes/tasks";
import { setupSwagger } from "./lib/swagger";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/tasks", tasksRoutes);

// Swagger setup
setupSwagger(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));