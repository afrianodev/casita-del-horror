import { assertDbConfigured } from "../db/pool.js";
import { HttpError } from "../utils/httpError.js";

function assertIds({ userId, movieId }) {
  if (!Number.isInteger(userId) || userId <= 0) {
    throw new HttpError(400, "Invalid userId");
  }
  if (!Number.isInteger(movieId) || movieId <= 0) {
    throw new HttpError(400, "Invalid movieId");
  }
}

export async function getFavoritesByUser(userId) {
  assertDbConfigured();

  if (!Number.isInteger(userId) || userId <= 0) {
    throw new HttpError(400, "Invalid userId");
  }

  // TODO: traer favoritas reales desde DB.
  return [];
}

export async function addFavorite({ userId, movieId }) {
  assertDbConfigured();
  assertIds({ userId, movieId });

  // TODO: insertar favorita real en DB.
  return {
    user_id: userId,
    movie_id: movieId,
    created_at: new Date().toISOString(),
  };
}

export async function removeFavorite({ userId, movieId }) {
  assertDbConfigured();
  assertIds({ userId, movieId });

  // TODO: eliminar favorita real en DB.
  return;
}
