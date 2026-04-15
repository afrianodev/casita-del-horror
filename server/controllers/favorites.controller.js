import * as favoritesService from "../services/favorites.service.js";

export async function listFavoritesByUser(req, res, next) {
  try {
    const userId = Number(req.params.userId);
    const favorites = await favoritesService.getFavoritesByUser(userId);
    res.json({ favorites });
  } catch (err) {
    next(err);
  }
}

export async function addFavorite(req, res, next) {
  try {
    const userId = Number(req.params.userId);
    const movieId = Number(req.params.movieId);
    const favorite = await favoritesService.addFavorite({ userId, movieId });
    res.status(201).json({ favorite });
  } catch (err) {
    next(err);
  }
}

export async function removeFavorite(req, res, next) {
  try {
    const userId = Number(req.params.userId);
    const movieId = Number(req.params.movieId);
    await favoritesService.removeFavorite({ userId, movieId });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
