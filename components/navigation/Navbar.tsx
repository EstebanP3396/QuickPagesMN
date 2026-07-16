"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNavigation } from "./MobileNavigation";

const navItems = [
  { name: "Trabajo", href: "/work" },
  { name: "Servicios", href: "/services" },
  { name: "Proceso", href: "/process" },
  { name: "Contacto", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-desktop px-6 tablet:px-12">
          <div className="flex h-16 items-center justify-between tablet:h-20">
            <Link
              href="/"
              className="group relative z-50 font-display text-small-lg font-800 uppercase tracking-[-0.02em] text-primary"
            >
              QuickPages<span className="text-secondary">®</span>
            </Link>

            <div className="hidden items-center gap-10 desktop:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative font-display text-small font-500 uppercase tracking-[0.12em] transition-colors duration-300 ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-primary transition-transform duration-300 origin-left ${
                      pathname === item.href
                        ? "w-full scale-x-100"
                        : "w-full scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </div>

            <div className="hidden desktop:block">
              <a
                href="mailto:estecodez.dev@gmail.com"
                className="group flex items-center gap-2 font-display text-small font-500 uppercase tracking-[0.12em] text-primary"
              >
                <span className="inline-block h-2 w-2 animate-blink rounded-full bg-primary" />
                estecodez.dev@gmail.com

              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 flex flex-col items-end gap-1.5 p-2 desktop:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`block h-px bg-primary transition-all duration-300 ${
                  isMobileMenuOpen ? "w-6 translate-y-[7px] rotate-45" : "w-6"
                }`}
              />
              <span
                className={`block h-px bg-primary transition-all duration-300 ${
                  isMobileMenuOpen ? "w-6 opacity-0" : "w-4"
                }`}
              />
              <span
                className={`block h-px bg-primary transition-all duration-300 ${
                  isMobileMenuOpen ? "w-6 -translate-y-[7px] -rotate-45" : "w-5"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
