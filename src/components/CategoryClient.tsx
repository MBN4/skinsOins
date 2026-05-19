'use client';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PRODUCTS, CATEGORY_THEMES } from '../constants';
import { cn } from '../lib/utils';

export default function CategoryClient() {
  const params = useParams();
  const categoryNameRaw = params?.categoryName;
  const categoryName = typeof categoryNameRaw === 'string' ? decodeURIComponent(categoryNameRaw) : 'Skincare';
  const theme = CATEGORY_THEMES[categoryName] || CATEGORY_THEMES['Skincare'];
  const filteredProducts = PRODUCTS.filter(p => p.category === categoryName);

  return (
    <div className={cn("min-h-screen bg-gradient-to-br text-slate-900 overflow-hidden", theme.gradient)}>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className={cn("absolute top-0 right-0 w-[800px] h-[800px] blur-[150px] rounded-full", theme.blobColor)} />
      </div>

      <div className="relative z-10 pt-40 pb-24 px-6 max-w-7xl mx-auto space-y-32">
        <header className="text-center space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-slate-200 bg-white shadow-sm">
            <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-black">{categoryName} Collection</span>
          </motion.div>
          <h1 className="text-7xl md:text-9xl font-light tracking-tighter italic font-serif text-slate-900">{theme.title}</h1>
        </header>

        {filteredProducts.map((product, idx) => (
          <div key={product.id} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[600px]">
            <motion.div 
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={cn("relative flex items-center justify-center", idx % 2 !== 0 && "lg:order-2")}
            >
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                {[0, 1].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20 + (i * 10), repeat: Infinity, ease: "linear" }}
                    className="absolute border border-dashed border-slate-200"
                    style={{ width: `${70 + i * 20}%`, height: `${70 + i * 20}%` }}
                  />
                ))}
                <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded-full shadow-2xl border border-slate-100 bg-white" />
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 -right-4 bg-sky-500 p-4 rounded-full">
                  <Sparkles size={20} />
                </motion.div>
              </div>
            </motion.div>

            <div className={cn("space-y-8", idx % 2 !== 0 && "lg:order-1")}>
              <span className={cn("font-bold tracking-[0.2em] text-[10px] uppercase", theme.accent)}>Featured Product</span>
              <h2 className="text-6xl font-light tracking-tight text-slate-900">{product.name}</h2>
              <p className="text-slate-500 text-lg leading-relaxed">{product.description}</p>
              <div className="flex items-center gap-8">
                <span className={cn("text-3xl font-serif", theme.accent)}>${product.price}</span>
                <Link href={`/product/${product.id}`} className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-[#34495e] transition-colors shadow-lg">
                  View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
