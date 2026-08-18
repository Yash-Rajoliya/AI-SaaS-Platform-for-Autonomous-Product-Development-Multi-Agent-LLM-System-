export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isRequired(value) {
  return value !== undefined &&
    value !== null &&
    value !== "";
}

export function minLength(value, min) {
  return String(value).length >= min;
}