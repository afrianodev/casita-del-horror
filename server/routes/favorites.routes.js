import { Router } from "express";
import * as favoritesController from "../controllers/favorites.controller.js";

const router = Router();

router.get("/users/:userId", favoritesController.listFavoritesByUser);
router.post("/users/:userId/:movieId", favoritesController.addFavorite);
router.delete("/users/:userId/:movieId", favoritesController.removeFavorite);

export default router;
