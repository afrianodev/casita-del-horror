import { assertDbConfigured } from "../db/pool.js";

/**
 * @param {{ name: string; email: string; password: string }} input
 */
export async function registerUser({ name, email }) {
  assertDbConfigured();

  // TODO: hash password y guardar usuario en DB.
  return {
    id: 0,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    created_at: new Date().toISOString(),
  };
}

/**
 * @param {{ email: string; password: string }} input
 */
export async function loginUser({ email }) {
  assertDbConfigured();

  // TODO: validar password y emitir token/sesion.
  return {
    user: {
      id: 0,
      email: email.trim().toLowerCase(),
    },
    token: "pending-token-implementation",
  };
}
