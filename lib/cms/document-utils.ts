import type { JsonValue } from "@/lib/cms/types";

function isObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function mergeCmsValues<T>(fallback: T, value: unknown): T {
  if (Array.isArray(value)) return value as T;
  if (!isObject(fallback) || !isObject(value)) {
    return (value === undefined || value === null ? fallback : value) as T;
  }
  const merged: Record<string, unknown> = {};
  for (const [key, fallbackValue] of Object.entries(fallback)) {
    merged[key] = key in value ? mergeCmsValues(fallbackValue, value[key]) : fallbackValue;
  }
  return merged as T;
}

export function setAtPath(value: JsonValue, path: (string | number)[], next: JsonValue): JsonValue {
  if (!path.length) return next;
  const [head, ...rest] = path;
  if (Array.isArray(value)) {
    const copy = [...value];
    copy[Number(head)] = setAtPath(copy[Number(head)], rest, next);
    return copy;
  }
  const object = { ...(value as Record<string, JsonValue>) };
  object[String(head)] = setAtPath(object[String(head)], rest, next);
  return object;
}
