"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

const clipPaths = {
  up: "inset(0 0 100% 0)",
  down: "inset(100% 0 0 0)",
  left: "inset(0 100% 0 0)",
  right: "inset(0 0 0 100%)",
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, clipPath: clipPaths[direction] }}
      whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
