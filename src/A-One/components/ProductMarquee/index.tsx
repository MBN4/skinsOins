import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../../../types';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useShop } from '../../../context/ShopContext';

interface ProductMarqueeProps {
  products: Product[];
}

export default function ProductMarquee({ products }: ProductMarqueeProps) {
  const { addToCart } = useShop();

  // If we have few products, repeat them more times to fill the screen
  const repeatCount = products.length < 5 ? 10 : 4;
  const displayProducts = Array(repeatCount).fill(products).flat();

  return (
    <div className="relative py-24 overflow-hidden select-none w-full">
      <div 
        className="flex gap-12 whitespace-nowrap animate-marquee px-6 w-max"
      >
        {displayProducts.map((product, idx) => (
          <motion.div
            key={`${product.id}-${idx}`}
            whileHover={{ scale: 1.1, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative w-[350px] aspect-[4/5] rounded-[3rem] overflow-hidden bg-white border border-slate-100 group shadow-xl shrink-0"
          >
            <Link to={`/product/${product.id}`} className="block h-full w-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
            </Link>
            
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-accent-brand font-black">{product.category}</p>
                <h3 className="text-xl font-light text-slate-900 italic font-serif">{product.name}</h3>
                <p className="text-sm font-bold text-slate-500">${product.price.toFixed(2)}</p>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product);
                }}
                className="p-4 bg-luxury-dark text-white rounded-full hover:bg-accent-brand transition-all shadow-xl active:scale-90"
              >
                <ShoppingBag size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-${100 / repeatCount}%)); }
        }
        .animate-marquee {
          animation: marquee ${products.length * 5}s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
