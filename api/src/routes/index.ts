import express from "express";
const router = express.Router();

import ProjectsRoutes from "./projects";

router.use("/projects", ProjectsRoutes);

export = router;
