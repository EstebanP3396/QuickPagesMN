export const ANIMATION_TIMING = {
  micro: { min: 150, max: 250 },
  smallReveal: { min: 300, max: 500 },
  sectionReveal: { min: 500, max: 700 },
  pageTransition: { min: 600, max: 900 },
  heroEntrance: { min: 800, max: 1200 },
} as const;

export const EASING = {
  easeOut: "easeOut",
  easeInOut: "easeInOut",
} as const;
