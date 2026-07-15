"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function IntroLoader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Lock scroll while the loader is visible
    document.body.style.overflow = "hidden";

    let current = 0;
    const interval = setInterval(() => {
      // Ease-out increment so the counter decelerates near 100
      const step = Math.max(1, Math.round((100 - current) / 12));
      current = Math.min(100, current + step);
      setCount(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 450);
      }
    }, 55);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="px-6 text-center"
          >
            <span className="font-display text-[16vw] font-900 leading-none tracking-[-0.05em] text-primary tablet:text-[140px]">
              QP
            </span>
          </motion.div>

          <div className="absolute bottom-10 left-0 right-0 flex items-end justify-between px-6 tablet:px-12">
            <span className="font-display text-small font-500 uppercase tracking-[0.35em] text-muted">
              QuickPages
            </span>
            <span className="font-display text-[15vw] font-900 leading-none tracking-[-0.04em] text-primary tablet:text-[80px]">
              {String(count).padStart(3, "0")}
            </span>
          </div>

          {/* progress line */}
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-primary/40"
            initial={{ width: "0%" }}
            animate={{ width: `${count}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
