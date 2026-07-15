export const SPACING = {
  8: "8px",
  16: "16px",
  24: "24px",
  32: "32px",
  40: "40px",
  48: "48px",
  64: "64px",
  80: "80px",
  96: "96px",
  128: "128px",
  160: "160px",
} as const;

export type Spacing = keyof typeof SPACING;
