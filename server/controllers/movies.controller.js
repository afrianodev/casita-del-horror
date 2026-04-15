import * as moviesService from "../services/movies.service.js";

export async function listMovies(_req, res, next) {
  try {
    const movies = await moviesService.getMovies();
    res.json({ movies });
  } catch (err) {
    next(err);
  }
}

export async function getMovieById(req, res, next) {
  try {
    const movie = await moviesService.getMovieById(Number(req.params.movieId));
    res.json({ movie });
  } catch (err) {
    next(err);
  }
}

export async function createMovie(req, res, next) {
  try {
    const movie = await moviesService.createMovie(req.body ?? {});
    res.status(201).json({ movie });
  } catch (err) {
    next(err);
  }
}
