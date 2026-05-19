'use client';
import React from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';
import { ShoppingBag } from 'lucide-react';
import { CARD_ANIMATION_VARIANTS } from './data';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useShop();
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={CARD_ANIMATION_VARIANTS.initial}
      whileInView={CARD_ANIMATION_VARIANTS.animate}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative aspect-[4/5] overflow-hidden rounded-2xl glass-card group/card"
      >
        <Link href={`/product/${product.id}`} className="block h-full w-full">
          <motion.img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-110"
            style={{ z: 50 }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/0 group-hover/card:bg-slate-900/5 transition-colors duration-300" />
        </Link>
        
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-4 right-4 p-4 bg-luxury-dark backdrop-blur-md rounded-full shadow-xl translate-y-12 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300 hover:bg-accent-brand hover:scale-110 active:scale-95"
        >
          <ShoppingBag size={20} className="text-white" />
        </button>
      </motion.div>

      <div className="mt-4 flex justify-between items-start">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent-brand font-bold">
            {product.category}
          </span>
          <h3 className="text-lg font-light mt-1 text-slate-900">
            <Link href={`/product/${product.id}`} className="hover:opacity-70 transition-opacity">
              {product.name}
            </Link>
          </h3>
        </div>
        <span className="text-sm font-bold tracking-tighter text-slate-700">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </motion.div>
  );
}
