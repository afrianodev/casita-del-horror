import { HttpError } from "../utils/httpError.js";

/**
 * Middleware placeholder para futura autenticacion.
 * Por ahora solo permite pasar.
 */
export function requireAuth(_req, _res, next) {
  // TODO: validar JWT/sesion y setear req.user
  next();
}

export function requireSameUserOrAdmin(req, _res, next) {
  const currentUserId = req.user?.id;
  const requestedUserId = Number(req.params.userId);

  if (!currentUserId || Number.isNaN(requestedUserId)) {
    throw new HttpError(401, "Unauthorized");
  }

  if (currentUserId !== requestedUserId && req.user?.role !== "admin") {
    throw new HttpError(403, "Forbidden");
  }

  next();
}
