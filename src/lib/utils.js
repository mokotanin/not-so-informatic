function toClassName(value) {
  if (!value) return ""
  if (typeof value === "string") return value
  if (Array.isArray(value)) return value.map(toClassName).filter(Boolean).join(" ")
  if (typeof value === "object") {
    return Object.entries(value)
      .filter(([, include]) => Boolean(include))
      .map(([className]) => className)
      .join(" ")
  }
  return ""
}

export function cn(...values) {
  return values.map(toClassName).filter(Boolean).join(" ")
}
