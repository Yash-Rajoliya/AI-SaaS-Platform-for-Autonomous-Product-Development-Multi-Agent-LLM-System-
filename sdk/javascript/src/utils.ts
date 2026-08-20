export function isObject(
  value: unknown
): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value)
  );
}

export function buildUrl(
  base: string,
  path: string
): string {
  return `${base.replace(/\/$/, "")}/${path.replace(
    /^\//,
    ""
  )}`;
}

export function serializeQuery(
  query: Record<string, unknown>
): string {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([k, v]) => {
    if (v !== undefined && v !== null) {
      params.append(k, String(v));
    }
  });

  return params.toString();
}

export function generateRequestId(): string {
  return crypto.randomUUID();
}