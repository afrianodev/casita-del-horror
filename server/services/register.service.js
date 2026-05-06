import bcrypt from "bcryptjs";
import { assertDbConfigured, pool } from "../db/pool.js";
import { HttpError } from "../utils/httpError.js";

const BCRYPT_ROUNDS = 10;

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

/**
 * @param {{ name: string; email: string; password: string }} input
 */
export async function registerUser({ name, email, password }) {
  assertDbConfigured();

  const normalizedEmail = normalizeEmail(email);
  const existing = await pool.query(
    "SELECT id FROM users WHERE email = $1 LIMIT 1",
    [normalizedEmail]
  );

  if (existing.rows.length > 0) {
    throw new HttpError(409, "Email already registered");
  }

  const passwordHash = await bcrypt.hash(password, BCRYPT_ROUNDS);

  try {
    const result = await pool.query(
      `INSERT INTO users (name, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, name, email, created_at`,
      [name.trim(), normalizedEmail, passwordHash]
    );

    return result.rows[0];
  } catch (err) {
    if (err && typeof err === "object" && err.code === "23505") {
      throw new HttpError(409, "Email already registered");
    }
    throw err;
  }
}
