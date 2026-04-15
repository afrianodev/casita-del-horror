import { Router } from "express";
import authRoutes from "./auth.routes.js";
import usersRoutes from "./users.routes.js";
import moviesRoutes from "./movies.routes.js";
import favoritesRoutes from "./favorites.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", usersRoutes);
router.use("/movies", moviesRoutes);
router.use("/favorites", favoritesRoutes);

export default router;
