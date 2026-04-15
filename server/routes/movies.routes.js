import { Router } from "express";
import * as moviesController from "../controllers/movies.controller.js";

const router = Router();

router.get("/", moviesController.listMovies);
router.get("/:movieId", moviesController.getMovieById);
router.post("/", moviesController.createMovie);

export default router;
