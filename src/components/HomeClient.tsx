"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ChevronRight,
  ShoppingBag,
  Sparkles,
  Beaker,
} from "lucide-react";
import Link from "next/link";
import { PRODUCTS } from "../constants";
import { cn } from "../lib/utils";
import Marquee from "./Marquee";
import { HERO_SLIDES } from "../app/data.js";

export default function HomeClient() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="bg-gradient-to-br from-white via-white to-accent-brand/20 min-h-screen text-slate-900 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-brand/30 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-brand/20 blur-[120px] rounded-full" />
      </div>

      <section className="relative min-h-screen lg:h-screen pt-28 pb-16 lg:py-0 flex items-center z-10">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 sm:space-y-10"
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3">
                  <div className={cn("h-px w-12", HERO_SLIDES[index].color)} />
                  <span className="text-[10px] uppercase tracking-[0.5em] text-slate-400 font-bold">
                    Featured Collection
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-tight text-slate-900 leading-[0.95] sm:leading-[0.9]">
                  {HERO_SLIDES[index].title} <br />
                  <span className="italic font-serif text-luxury-slate">
                    {HERO_SLIDES[index].subtitle}
                  </span>
                </h1>
                <p className="text-sm sm:text-base lg:text-xl text-slate-500 font-light max-w-md leading-relaxed">
                  {HERO_SLIDES[index].desc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
                <Link
                  href="/shop"
                  className="group px-8 py-4 sm:px-12 sm:py-5 bg-luxury-dark text-white font-bold rounded-full text-[10px] sm:text-[11px] uppercase tracking-[0.2em] hover:bg-luxury-slate transition-all duration-500 flex items-center justify-center sm:justify-start gap-3 w-full sm:w-auto"
                >
                  {HERO_SLIDES[index].btnText}
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <div className="flex items-center justify-center sm:justify-start gap-3 mt-2 sm:mt-0">
                  {HERO_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={cn(
                        "h-1 transition-all duration-500 rounded-full",
                        i === index ? "w-12 bg-slate-900" : "w-3 bg-slate-200",
                      )}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="relative flex justify-center items-center mt-8 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-full lg:h-full lg:max-w-lg aspect-square"
              >
                <div className="absolute inset-0 bg-accent-brand/10 blur-[100px] rounded-full" />
                <img
                  src={HERO_SLIDES[index].image}
                  alt="Hero Product"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <button
          onClick={next}
          className="absolute right-4 bottom-4 sm:right-12 sm:bottom-12 p-4 sm:p-6 rounded-full border border-slate-200 bg-white/80 backdrop-blur-xl hover:bg-slate-900 hover:text-white transition-all group z-20 shadow-lg"
        >
          <ArrowRight
            size={28}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </section>

      <div className="relative z-10 py-10 border-y border-slate-100 bg-white/50 backdrop-blur-md">
        <Marquee />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 space-y-48 py-32">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="h-px w-8 bg-slate-200" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-accent-brand font-bold">
              Signature Series
            </span>
            <div className="h-px w-8 bg-slate-200" />
          </div>
          <h2 className="text-6xl md:text-8xl font-light text-slate-900 tracking-tighter">
            Curated{" "}
            <span className="italic font-serif text-luxury-slate">
              Excellence
            </span>
          </h2>
        </div>

        {PRODUCTS.slice(0, 3).map((product, idx) => (
          <div
            key={product.id}
            className={cn(
              "flex flex-col md:flex-row items-center gap-24",
              idx % 2 !== 0 && "md:flex-row-reverse",
            )}
          >
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full md:w-1/2 relative group"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[4rem] bg-white border border-slate-100 relative z-10 shadow-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-luxury-dark text-white p-10 rounded-full shadow-2xl z-20 cursor-pointer border-[8px] border-white hover:bg-accent-brand transition-colors">
                <ShoppingBag size={28} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full md:w-1/2 space-y-12"
            >
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-widest text-accent-brand font-black">
                  {product.category}
                </span>
                <h3 className="text-5xl md:text-7xl font-light text-slate-900 leading-[1.1] tracking-tight">
                  {product.name}
                </h3>
                <p className="text-4xl font-serif text-luxury-slate">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <p className="text-slate-500 text-xl font-light leading-relaxed max-w-lg">
                {product.description}
              </p>
              <Link
                href={`/product/${product.id}`}
                className="inline-flex items-center gap-6 px-12 py-6 border border-slate-200 rounded-full text-[10px] uppercase tracking-widest font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all group shadow-sm"
              >
                Discover Product
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        ))}
      </section>

      <section className="relative py-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-slate-100 shadow-2xl">
              <img
                src="/assets/routine.png"
                alt="Routine"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-slate-200" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-accent-brand font-bold">
                  Scientific Excellence
                </span>
              </div>
              <h2 className="text-7xl md:text-8xl font-light text-slate-900 leading-[1] tracking-tighter">
                Beauty Tailored <br />
                <span className="italic font-serif text-luxury-slate">
                  To Your DNA.
                </span>
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-6 px-14 py-7 bg-luxury-dark text-white font-bold rounded-full text-[10px] uppercase tracking-widest hover:bg-accent-brand transition-all duration-500 shadow-xl"
            >
              Book Your Analysis
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-48 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-slate-100 bg-white shadow-sm">
              <Beaker size={14} className="text-accent-brand" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-bold">
                The Heritage
              </span>
            </div>
            <h2 className="text-7xl md:text-9xl font-light leading-[0.9] tracking-tighter text-slate-900">
              Purity in <br />
              <span className="italic font-serif text-luxury-slate">
                Every Essence.
              </span>
            </h2>
            <div className="grid grid-cols-2 gap-16 pt-12 border-t border-slate-100">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-6xl font-light text-slate-900 tracking-tighter">
                  100%
                </span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent-brand font-black">
                  Traceable Origin
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-6xl font-light text-slate-900 tracking-tighter">
                  Zero
                </span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent-brand font-black">
                  Synthetics Used
                </p>
              </motion.div>
            </div>
          </motion.div>

          <div className="relative flex justify-center items-center h-[600px]">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2, scale: [0.5, 1.5] }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute border border-accent-brand/20 rounded-full"
                  style={{
                    width: `${40 + i * 20}%`,
                    height: `${40 + i * 20}%`,
                  }}
                />
              ))}
              <div className="w-40 h-40 bg-white shadow-2xl rounded-full flex items-center justify-center border border-slate-100">
                <Sparkles size={48} className="text-accent-brand" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
