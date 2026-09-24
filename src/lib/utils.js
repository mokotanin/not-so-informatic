import { cx } from "class-variance-authority"

export function cn(...inputs) {
  return cx(inputs)
}
