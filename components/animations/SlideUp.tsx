"use client";

import { motion } from "framer-motion";

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  scale?: number;
  blur?: number;
  className?: string;
}

export function SlideUp({
  children,
  delay = 0,
  duration = 0.8,
  distance = 50,
  scale = 0.98,
  blur = 0,
  className = "",
}: SlideUpProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: distance,
        scale: scale,
        filter: blur > 0 ? `blur(${blur}px)` : "none",
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-100px" }}
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
