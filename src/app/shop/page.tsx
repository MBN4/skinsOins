"use client";
import React, { useState, useMemo } from "react";
import { useShop } from "../../context/ShopContext";
import { PRODUCTS } from "../../constants";
import { ShoppingBag, Sparkles } from "lucide-react";
import { cn } from "../../lib/utils";

export default function ShopPage() {
  const { addToCart } = useShop();
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (activeCategory !== "All") {
      result = result.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, sortBy]);

  return (
    <div className="bg-soft-white min-h-screen text-luxury-dark pt-32 pb-24 px-4 sm:px-6 pointer-events-auto">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-100 bg-white shadow-sm">
            <Sparkles size={12} className="text-accent-brand animate-pulse" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-bold">
              The Complete Collection
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
            Botanical <span className="font-serif italic text-luxury-slate">Formulations</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-md mx-auto">
            Discover clinical accuracy balanced with clean botanical intelligence for ultimate skin harmony.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-slate-200/50 pb-6 gap-4">
          <div className="flex items-center gap-3">
            {["All", "Skincare", "Makeup"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 text-[10px] uppercase tracking-widest font-bold rounded-full transition-all duration-300 border cursor-pointer",
                  activeCategory === category
                    ? "bg-luxury-dark text-white border-luxury-dark"
                    : "bg-white text-slate-500 border-slate-100 hover:border-slate-300"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-slate-100 rounded-xl px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-slate-600 focus:outline-none focus:ring-1 focus:ring-accent-brand cursor-pointer"
            >
              <option value="default">Default Sorting</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl border border-slate-100/80 p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative"
            >
              <div className="aspect-square w-full rounded-2xl overflow-hidden relative bg-soft-white mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
                  <span className="text-sm font-semibold text-luxury-slate block">
                    ${product.price.toFixed(2)}
                  </span>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full py-2.5 bg-soft-white group-hover:bg-luxury-dark text-luxury-dark group-hover:text-white border border-slate-200/60 group-hover:border-luxury-dark rounded-xl text-[9px] uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag size={12} />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}