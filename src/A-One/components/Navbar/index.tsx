import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ChevronDown, Search } from 'lucide-react';
import { useShop } from '../../../context/ShopContext';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../../lib/utils';
import { NAV_LINKS } from './data';

export default function Navbar() {
  const { cartCount, setIsOpen } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -120 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className={cn(
        "flex items-center justify-between w-full max-w-7xl px-10 py-4 transition-all duration-700 border",
        isScrolled 
          ? "bg-white/80 backdrop-blur-2xl border-slate-100 rounded-full shadow-xl" 
          : "bg-transparent border-transparent"
      )}>
        <div className="flex items-center gap-16">
          <Link to="/" className="text-2xl font-light tracking-[0.5em] text-slate-900">
            Skins<span className="text-accent-brand">O</span>ins
          </Link>
          
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="group relative flex items-center gap-1 cursor-pointer">
                {link.children ? (
                  <>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600 group-hover:text-slate-900 transition-colors">{link.label}</span>
                    <ChevronDown size={10} className="text-slate-300 group-hover:rotate-180 transition-transform" />
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
                                to={child.href} 
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
                  <Link to={link.href} className="text-[10px] uppercase tracking-[0.3em] text-slate-600 hover:text-slate-900 transition-colors">{link.label}</Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-8">
          <Search size={18} className="text-slate-400 cursor-pointer hover:text-slate-900 transition-colors hidden sm:block" />
          <button 
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-slate-900 hover:text-accent-brand transition-colors"
          >
            <ShoppingBag size={22} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-brand text-[8px] font-black flex items-center justify-center rounded-full text-white ring-2 ring-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
