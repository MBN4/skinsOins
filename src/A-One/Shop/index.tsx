import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../../constants';
import ProductCard from '../components/ProductCard';
import { cn } from '../../lib/utils';
import { CATEGORIES, SHOP_TITLE, SHOP_DESCRIPTION } from './data';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-40 pb-24 px-6 max-w-7xl mx-auto space-y-24">
      <header className="text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent-brand animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">The Collection</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-light tracking-tighter text-slate-900"
        >
          {SHOP_TITLE.split(' ')[0]} <span className="italic font-serif text-luxury-slate">{SHOP_TITLE.split(' ')[1]}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 text-lg font-light max-w-2xl mx-auto leading-relaxed"
        >
          {SHOP_DESCRIPTION}
        </motion.p>
      </header>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "relative px-8 py-3 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 rounded-full border",
              activeCategory === category 
                ? "text-white border-accent-brand bg-accent-brand shadow-lg" 
                : "text-slate-500 border-slate-200 hover:border-accent-brand bg-white"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
