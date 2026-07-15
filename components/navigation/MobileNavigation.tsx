"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Trabajo", href: "/work" },
  { name: "Servicios", href: "/services" },
  { name: "Proceso", href: "/process" },
  { name: "Contacto", href: "/contact" },
];

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 flex flex-col justify-between bg-background px-6 pb-10 pt-24 desktop:hidden"
        >
          <nav className="flex flex-1 flex-col justify-center">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    delay: 0.08 + index * 0.06,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block font-display text-[15vw] font-800 uppercase leading-[1.02] tracking-[-0.03em] transition-colors duration-200 ${
                      pathname === item.href ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="flex items-end justify-between border-t border-border pt-6">
            <a
              href="mailto:hello@quickpages.com"
              className="font-display text-small font-500 uppercase tracking-[0.12em] text-secondary"
            >
              hola@quickpages.com
            </a>
            <span className="font-display text-small font-500 uppercase tracking-[0.2em] text-muted">
              Paris · MX
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
