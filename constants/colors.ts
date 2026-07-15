export const COLORS = {
  background: "#FAFAF8",
  surface: "#FFFFFF",
  surfaceAlt: "#F5F5F4",
  surfaceBlue: "#EEF5FB",
  surfaceGray: "#F4F6F8",
  surfaceNavy: "#10233F",
  surfaceDark: "#0A0F1A",
  primary: "#111111",
  secondary: "#666666",
  border: "#E7E7E7",
  accent: "#1E3A5F",
  accentLight: "#3B82F6",
  accentSoft: "#93C5FD",
} as const;

export type Color = keyof typeof COLORS;
