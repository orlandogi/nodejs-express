import express from "express";
import morgan from "morgan";

import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
import cors from "cors";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors())
// Routes
app.use("/", indexRoutes);
app.use("/api", employeesRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
