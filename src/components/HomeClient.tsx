"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Sparkles,
  Beaker,
  Truck,
  RefreshCw,
  Gift,
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

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const extendedProducts = [
    ...PRODUCTS,
    ...(PRODUCTS.length > 0 ? PRODUCTS : []),
    ...(PRODUCTS.length > 0 ? PRODUCTS : []),
  ].slice(0, 5);

  const extendedNewArrivals = [
    ...PRODUCTS,
    ...(PRODUCTS.length > 0 ? PRODUCTS : []),
  ].slice(0, 4);

  const extendedSets = [
    ...PRODUCTS,
    ...(PRODUCTS.length > 0 ? PRODUCTS : []),
  ].slice(0, 4);

  return (
    <div className="bg-soft-white min-h-screen text-luxury-dark overflow-x-hidden pointer-events-auto">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-brand/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-brand/10 blur-[120px] rounded-full" />
      </div>

      <section className="relative pt-24 pb-12 z-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 items-center"
            >
              <div className="absolute inset-0 lg:relative lg:col-span-7 h-full w-full">
                <img
                  src={HERO_SLIDES[index].image}
                  alt={HERO_SLIDES[index].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:hidden" />
              </div>

              <div className="relative lg:col-span-5 px-8 sm:px-12 lg:px-16 py-8 z-10 flex flex-col justify-center h-full space-y-4 sm:space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-accent-brand font-black">
                    {HERO_SLIDES[index].subtitle}
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-luxury-dark leading-tight mt-1">
                    {HERO_SLIDES[index].title}
                  </h1>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 font-light max-w-sm leading-relaxed">
                  {HERO_SLIDES[index].desc}
                </p>
                <div>
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-luxury-dark text-white hover:bg-accent-brand transition-colors duration-300 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold"
                  >
                    {HERO_SLIDES[index].btnText}
                    <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 hover:bg-luxury-dark hover:text-white transition-all duration-300 z-30 shadow-sm cursor-pointer pointer-events-auto"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 hover:bg-luxury-dark hover:text-white transition-all duration-300 z-30 shadow-sm cursor-pointer pointer-events-auto"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 transition-all duration-300 rounded-full cursor-pointer pointer-events-auto",
                  i === index ? "w-8 bg-luxury-dark" : "w-2 bg-slate-300",
                )}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10 py-6 border-y border-slate-100 bg-white/50 backdrop-blur-md">
        <Marquee />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center mb-12 space-y-2">
          <div className="h-px w-12 bg-accent-brand/50" />
          <h2 className="text-3xl sm:text-4xl font-light text-luxury-dark tracking-tight text-center">
            Best <span className="italic font-serif text-luxury-slate">Sellers</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {extendedProducts.map((product, i) => (
            <div
              key={`${product.id}-best-${i}`}
              className="group bg-white rounded-3xl border border-slate-100/80 p-3 sm:p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative"
            >
              <div className="absolute top-4 left-4 z-20 bg-accent-brand text-white text-[9px] font-bold px-2 py-1 rounded-full">
                -20%
              </div>

              <div className="aspect-square w-full rounded-2xl overflow-hidden relative bg-soft-white mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white font-bold bg-luxury-dark/90 px-4 py-2 rounded-full">
                    Coming Soon
                  </span>
                </div>
              </div>

              <div className="space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">
                    {product.category}
                  </span>
                  <h3 className="text-xs sm:text-sm font-medium text-luxury-dark line-clamp-2 min-h-[40px] mt-1 group-hover:text-luxury-slate transition-colors">
                    {product.name}
                  </h3>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-slate-400 line-through text-[10px] sm:text-xs">
                      ${(product.price * 1.2).toFixed(2)}
                    </span>
                    <span className="text-sm font-semibold text-luxury-slate">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>

                  <button className="w-full py-2.5 bg-soft-white group-hover:bg-luxury-dark text-luxury-dark group-hover:text-white border border-slate-200/60 group-hover:border-luxury-dark rounded-xl text-[9px] uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                    <ShoppingBag size={12} />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col items-center mb-12 space-y-2">
          <div className="h-px w-12 bg-accent-brand/50" />
          <h2 className="text-3xl sm:text-4xl font-light text-luxury-dark tracking-tight text-center">
            New <span className="italic font-serif text-luxury-slate">Arrivals</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {extendedNewArrivals.map((product, i) => (
            <div
              key={`${product.id}-new-${i}`}
              className="group bg-white rounded-3xl border border-slate-100/80 p-3 sm:p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative"
            >
              <div className="absolute top-4 left-4 z-20 bg-luxury-slate text-white text-[9px] font-bold px-2 py-1 rounded-full">
                New
              </div>

              <div className="aspect-square w-full rounded-2xl overflow-hidden relative bg-soft-white mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white font-bold bg-luxury-dark/90 px-4 py-2 rounded-full">
                    Coming Soon
                  </span>
                </div>
              </div>

              <div className="space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">
                    {product.category}
                  </span>
                  <h3 className="text-xs sm:text-sm font-medium text-luxury-dark line-clamp-2 min-h-[40px] mt-1">
                    {product.name}
                  </h3>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-sm font-semibold text-luxury-slate block">
                    ${product.price.toFixed(2)}
                  </span>

                  <button className="w-full py-2.5 bg-soft-white group-hover:bg-luxury-dark text-luxury-dark group-hover:text-white border border-slate-200/60 group-hover:border-luxury-dark rounded-xl text-[9px] uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                    <ShoppingBag size={12} />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-white border-y border-slate-100 py-20 my-16">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl font-light leading-snug tracking-tight text-luxury-dark">
            Skins<span className="text-accent-brand font-medium">Oins</span>{" "}
            <span className="font-serif italic text-luxury-slate">
              With Your Skin Feel The Difference
            </span>
          </h2>
          <p className="text-sm text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
            Formulated with clinical precision and botanical intelligence. We prioritize clean, 
            earth-friendly science to target barrier repair and longevity, giving your skin natural cellular harmony.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 pt-6">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-full border border-slate-100 flex items-center justify-center bg-soft-white">
                <Sparkles className="text-accent-brand" size={24} />
              </div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-luxury-slate">
                Cruelty Free
              </span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-full border border-slate-100 flex items-center justify-center bg-soft-white">
                <Beaker className="text-accent-brand" size={24} />
              </div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-luxury-slate">
                Clinical Lab Tested
              </span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-full border border-slate-100 flex items-center justify-center bg-soft-white">
                <Sparkles className="text-accent-brand" size={24} />
              </div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-luxury-slate">
                100% Organic
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col items-center mb-12 space-y-2">
          <div className="h-px w-12 bg-accent-brand/50" />
          <h2 className="text-3xl sm:text-4xl font-light text-luxury-dark tracking-tight text-center">
            Exclusive <span className="italic font-serif text-luxury-slate">Ritual Sets</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {extendedSets.map((product, i) => (
            <div
              key={`${product.id}-set-${i}`}
              className="group bg-white rounded-3xl border border-slate-100/80 p-3 sm:p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative"
            >
              <div className="absolute top-4 left-4 z-20 bg-accent-brand text-white text-[9px] font-bold px-2 py-1 rounded-full">
                Set Offer
              </div>

              <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden relative bg-soft-white mb-4">
                <img
                  src={i % 2 === 0 ? "/assets/p2.jpeg" : "/assets/p1.jpeg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white font-bold bg-luxury-dark/90 px-4 py-2 rounded-full">
                    Coming Soon
                  </span>
                </div>
              </div>

              <div className="space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">
                    Complete Treatment
                  </span>
                  <h3 className="text-xs sm:text-sm font-medium text-luxury-dark line-clamp-2 min-h-[40px] mt-1">
                    {product.name} Ritual Collection
                  </h3>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-slate-400 line-through text-[10px] sm:text-xs">
                      ${(product.price * 1.5).toFixed(2)}
                    </span>
                    <span className="text-sm font-semibold text-luxury-slate">
                      ${(product.price * 1.15).toFixed(2)}
                    </span>
                  </div>

                  <button className="w-full py-2.5 bg-soft-white group-hover:bg-luxury-dark text-luxury-dark group-hover:text-white border border-slate-200/60 group-hover:border-luxury-dark rounded-xl text-[9px] uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                    <ShoppingBag size={12} />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Barrier Care", img: "/assets/p1.jpeg" },
            { title: "Anti-Wrinkle", img: "/assets/p2.jpeg" },
            { title: "Deep Hydration", img: "/assets/p3.jpeg" },
            { title: "Blemish Control", img: "/assets/p4.jpeg" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden group border border-slate-100 shadow-sm cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 via-luxury-dark/30 to-transparent flex flex-col justify-end p-6 z-10 text-center">
                <h4 className="text-sm sm:text-base font-medium text-white tracking-wider uppercase mb-1">
                  {item.title}
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-accent-brand">
                  Explore Ritual &rarr;
                </p>
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col items-center mb-12 space-y-2">
          <div className="h-px w-12 bg-accent-brand/50" />
          <h2 className="text-3xl sm:text-4xl font-light text-luxury-dark tracking-tight text-center">
            Botanical <span className="italic font-serif text-luxury-slate">Wisdom</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Cellular Renewal & Rare Botanical Science",
              desc: "Deep dive into how specialized floral extracts stimulate and restore optimal barrier functions overnight.",
              img: "/assets/p5.jpeg",
            },
            {
              title: "Clinical Accuracy for Sensitive Barriers",
              desc: "The balancing math of pure Zinc and organic Niacinamide to soothe flares and protect natural moisture matrices.",
              img: "/assets/p2.jpeg",
            },
            {
              title: "What is Volufiline Plumping Magic?",
              desc: "Unlocking the truth behind lipid density active ingredients and clinical studies validating modern skincare trends.",
              img: "/assets/p1.jpeg",
            },
            {
              title: "Exosome Innovations in Hydration Technology",
              desc: "How cellular messaging technologies are redefining standard anti-aging formulations for unmatched skin vitality.",
              img: "/assets/p3.jpeg",
            },
          ].map((blog, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-[2rem] border border-slate-100/60 overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-luxury-dark group-hover:text-luxury-slate transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed line-clamp-3">
                    {blog.desc}
                  </p>
                </div>
                <div>
                  <button className="text-[9px] uppercase tracking-widest font-black text-luxury-dark group-hover:text-accent-brand transition-colors flex items-center gap-2 cursor-pointer">
                    Read Article &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-white border-t border-slate-100 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-8">
            <div className="w-12 h-12 rounded-full bg-soft-white flex items-center justify-center border border-slate-100 text-accent-brand">
              <Truck size={20} />
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-luxury-dark">
                Complimentary Delivery
              </h4>
              <p className="text-[11px] text-slate-400 font-light mt-0.5">
                On all curated sets and standard purchases.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0 md:pr-8">
            <div className="w-12 h-12 rounded-full bg-soft-white flex items-center justify-center border border-slate-100 text-accent-brand">
              <RefreshCw size={20} />
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-luxury-dark">
                Conscious Returns
              </h4>
              <p className="text-[11px] text-slate-400 font-light mt-0.5">
                Simple, circular return processing options.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-soft-white flex items-center justify-center border border-slate-100 text-accent-brand">
              <Gift size={20} />
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-luxury-dark">
                Exquisite Trial Samples
              </h4>
              <p className="text-[11px] text-slate-400 font-light mt-0.5">
                Included with every luxury ritual order.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}