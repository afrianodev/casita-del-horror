import { assertDbConfigured } from "../db/pool.js";
import { HttpError } from "../utils/httpError.js";

export async function getUsers() {
  assertDbConfigured();

  // TODO: traer usuarios reales desde DB.
  return [];
}

export async function getUserById(userId) {
  assertDbConfigured();

  if (!Number.isInteger(userId) || userId <= 0) {
    throw new HttpError(400, "Invalid userId");
  }

  // TODO: buscar usuario real en DB.
  throw new HttpError(404, "User not found");
}
