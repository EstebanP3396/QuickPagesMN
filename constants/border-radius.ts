export const BORDER_RADIUS = {
  button: "14px",
  card: "16px",
  container: "20px",
  input: "14px",
  image: "16px",
} as const;

export type BorderRadius = keyof typeof BORDER_RADIUS;
