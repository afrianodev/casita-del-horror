export function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function isValidEmail(value) {
  if (typeof value !== "string") {
    return false;
  }

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return EMAIL_RE.test(value.trim());
}
