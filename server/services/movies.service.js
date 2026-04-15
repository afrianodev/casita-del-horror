import { assertDbConfigured } from "../db/pool.js";
import { HttpError } from "../utils/httpError.js";
import { isNonEmptyString } from "../utils/validators.js";

export async function getMovies() {
  assertDbConfigured();

  // TODO: traer peliculas reales desde DB.
  return [];
}

export async function getMovieById(movieId) {
  assertDbConfigured();

  if (!Number.isInteger(movieId) || movieId <= 0) {
    throw new HttpError(400, "Invalid movieId");
  }

  // TODO: buscar pelicula real en DB.
  throw new HttpError(404, "Movie not found");
}

export async function createMovie(input) {
  assertDbConfigured();

  if (!isNonEmptyString(input?.title)) {
    throw new HttpError(400, "Title is required");
  }

  // TODO: insertar pelicula real en DB.
  return {
    id: 0,
    title: input.title.trim(),
    external_id: input.external_id ?? null,
    created_at: new Date().toISOString(),
  };
}
