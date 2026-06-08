'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ChevronLeft, ShieldCheck, Truck, RefreshCcw, Sparkles, Beaker, Heart } from 'lucide-react';
import { PRODUCTS, PRODUCT_PAGE_TABS, PRODUCT_PAGE_SCIENCE_TEXT, PRODUCT_PAGE_VALUE_PROPS } from '../constants';
import { useShop } from '../context/ShopContext';
import { cn } from '../lib/utils';

const ICON_MAP: Record<string, any> = {
  Truck,
  ShieldCheck,
  RefreshCcw
};

export default function ProductClient() {
  const params = useParams();
  const router = useRouter();
  const id = typeof params?.id === 'string' ? params.id : '';
  const { addToCart } = useShop();
  const [activeTab, setActiveTab] = useState('description');
  const product = PRODUCTS.find(p => p.id === id);

  useEffect(() => {
    if (!product) {
      router.push('/shop');
    }
  }, [product, router]);

  if (!product) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-accent-brand/20 text-slate-900 overflow-hidden">
      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-accent-brand/30 blur-[200px] rounded-full" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-accent-brand/20 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <Link
          href="/shop"
          className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-slate-400 hover:text-slate-900 transition-all mb-16"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>The Collection</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Immersive Image Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl relative bg-white group/img">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center p-4">
                <span className="text-xs uppercase tracking-[0.3em] text-white font-medium bg-black/50 border border-white/20 px-6 py-3 rounded-full backdrop-blur-md shadow-2xl transition-all duration-500 hover:scale-105">
                  Coming Soon
                </span>
              </div>
            </div>
            
            {/* Floating Product Badge */}
            <motion.div 
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -top-8 -right-8 w-40 h-40 bg-white/80 backdrop-blur-2xl rounded-full border border-slate-200 flex flex-col items-center justify-center text-center p-4 shadow-2xl"
            >
              <Sparkles className="text-accent-brand mb-2" size={20} />
              <p className="text-[8px] uppercase tracking-widest font-black text-accent-brand">Award Winning</p>
              <p className="text-[10px] text-slate-500 font-light mt-1 uppercase tracking-tighter italic">Vogue Choice</p>
            </motion.div>
          </motion.div>

          {/* Elegant Product Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-slate-200" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-accent-brand font-bold">{product.category}</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-light leading-[0.9] text-slate-900 tracking-tighter">
                {product.name.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? "italic font-serif text-luxury-slate block" : "block"}>
                    {word} {i === 0 && <br />}
                  </span>
                ))}
              </h1>
              <div className="flex items-center gap-8">
                <p className="text-4xl font-light text-slate-900 tracking-tighter">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-1 text-accent-brand">
                  <Heart size={16} fill="currentColor" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Best Seller</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-12 border-b border-slate-100">
                {PRODUCT_PAGE_TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "pb-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all relative",
                      activeTab === tab ? "text-slate-900" : "text-slate-300"
                    )}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-brand" />
                    )}
                  </button>
                ))}
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="min-h-[120px]"
                >
                  <p className="text-slate-500 text-lg font-light leading-relaxed">
                    {activeTab === 'description' && product.description}
                    {activeTab === 'details' && product.details}
                    {activeTab === 'science' && PRODUCT_PAGE_SCIENCE_TEXT}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex gap-6">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 bg-luxury-dark text-white py-7 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-accent-brand transition-all flex items-center justify-center gap-4 active:scale-[0.98] shadow-2xl"
              >
                <ShoppingBag size={20} />
                Add to Collection
              </button>
              <button className="p-7 rounded-full border border-slate-200 hover:bg-slate-50 transition-all text-slate-300 hover:text-slate-900">
                <Heart size={20} />
              </button>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-100">
              {PRODUCT_PAGE_VALUE_PROPS.map((prop, i) => {
                const Icon = ICON_MAP[prop.icon];
                return (
                  <div key={i} className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                      <Icon size={20} strokeWidth={1} />
                    </div>
                    <span className="text-[8px] uppercase tracking-widest text-slate-400 font-bold max-w-[80px]">
                      {prop.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Recommended Section */}
        <section className="mt-48 space-y-24">
          <div className="text-center space-y-4">
            <span className="text-[10px] uppercase tracking-[0.5em] text-accent-brand font-bold">Complete the Look</span>
            <h2 className="text-5xl font-light tracking-tighter text-slate-900">Curated <span className="italic font-serif text-luxury-slate">Pairings</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PRODUCTS.filter(p => p.id !== id).slice(0, 3).map((p) => (
              <motion.div 
                key={p.id} 
                whileHover={{ y: -10 }}
                className="space-y-6"
              >
                <Link href={`/product/${p.id}`} className="block aspect-[4/5] rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl group bg-white relative">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-white font-medium bg-black/40 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:scale-105">
                      Coming Soon
                    </span>
                  </div>
                </Link>
                <div className="flex justify-between items-start px-4">
                  <div>
                    <span className="text-[8px] uppercase tracking-widest text-accent-brand font-black">{p.category}</span>
                    <h3 className="text-xl font-light text-slate-900 mt-1 italic font-serif">
                      <Link href={`/product/${p.id}`} className="hover:opacity-70 transition-opacity">{p.name}</Link>
                    </h3>
                  </div>
                  <span className="text-sm font-bold text-slate-700">${p.price.toFixed(2)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
