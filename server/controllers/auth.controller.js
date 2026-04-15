import * as authService from "../services/auth.service.js";
import { HttpError } from "../utils/httpError.js";
import { isNonEmptyString, isValidEmail } from "../utils/validators.js";

export async function register(req, res, next) {
  try {
    const { name, email, password } = req.body ?? {};

    if (!isNonEmptyString(name)) {
      throw new HttpError(400, "Name is required");
    }
    if (!isValidEmail(email)) {
      throw new HttpError(400, "A valid email is required");
    }
    if (typeof password !== "string" || password.length < 8) {
      throw new HttpError(400, "Password must be at least 8 characters");
    }

    const user = await authService.registerUser({ name, email, password });
    res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body ?? {};

    if (!isValidEmail(email) || typeof password !== "string") {
      throw new HttpError(400, "Invalid credentials payload");
    }

    const session = await authService.loginUser({ email, password });
    res.json(session);
  } catch (err) {
    next(err);
  }
}
