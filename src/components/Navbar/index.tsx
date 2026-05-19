"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, ChevronDown, Menu, X } from "lucide-react";
import { useShop } from "../../context/ShopContext";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";
import { NAV_LINKS } from "./data";

export default function Navbar() {
  const { cartCount, setIsOpen } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6"
      >
        <div
          className={cn(
            "flex items-center justify-between w-full max-w-7xl px-6 py-3 sm:px-10 sm:py-4 transition-all duration-700 border",
            isScrolled
              ? "bg-white/80 backdrop-blur-2xl border-slate-100 rounded-full shadow-xl"
              : "bg-transparent border-transparent",
          )}
        >
          <div className="flex items-center gap-16">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-light tracking-[0.5em] text-slate-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skins<span className="text-accent-brand">O</span>ins
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="group relative flex items-center gap-1 cursor-pointer"
                >
                  {link.children ? (
                    <>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600 group-hover:text-slate-900 transition-colors">
                        {link.label}
                      </span>
                      <ChevronDown
                        size={10}
                        className="text-slate-300 group-hover:rotate-180 transition-transform"
                      />
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform group-hover:translate-y-0 translate-y-4">
                        <div className="bg-white/95 backdrop-blur-2xl border border-slate-100 p-8 min-w-[280px] rounded-[2rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)]">
                          <div className="grid grid-cols-1 gap-6">
                            {link.children.map((child, idx) => (
                              <motion.div
                                key={child.label}
                                initial={{ opacity: 0, x: -10 }}
                                whileHover={{ x: 5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <Link
                                  href={child.href}
                                  className="group/item flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-slate-500 hover:text-slate-900 transition-colors"
                                >
                                  {child.label}
                                  <div className="w-1 h-1 bg-accent-brand rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[10px] uppercase tracking-[0.3em] text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsOpen(true);
              }}
              className="relative p-2 text-slate-900 hover:text-accent-brand transition-colors"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 sm:w-[22px] sm:h-[22px]" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-brand text-[8px] font-black flex items-center justify-center rounded-full text-white ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-900 hover:text-accent-brand transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" strokeWidth={1.5} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-white/95 backdrop-blur-2xl z-40 pt-28 px-8 pb-10 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="space-y-8 mt-4">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="space-y-4">
                  {link.children ? (
                    <>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold block">
                        {link.label}
                      </span>
                      <div className="pl-4 grid grid-cols-1 gap-4 border-l border-slate-100">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-xs uppercase tracking-[0.2em] text-slate-600 hover:text-slate-900 transition-colors block"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm uppercase tracking-[0.3em] text-slate-800 hover:text-slate-900 transition-colors block font-light"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
