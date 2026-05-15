import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useShop } from '../../../context/ShopContext';
import { WHATSAPP_NUMBER } from '../../../constants';
import { CART_TITLE } from './data';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isOpen, setIsOpen } = useShop();

  const handleCheckout = () => {
    const itemsList = cart
      .map(item => `• ${item.name} x${item.quantity}`)
      .join('%0A');
    const total = cartTotal.toFixed(2);
    const message = `✨ NEW ORDER ✨%0A%0AItems:%0A${itemsList}%0A%0ATotal: $${total}%0A%0APlease confirm my order.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white border-l border-slate-100 z-[70] p-10 flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="space-y-1">
                <h2 className="text-3xl font-light tracking-tighter text-slate-900">{CART_TITLE}</h2>
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent-brand font-bold">{cart.length} Items</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 flex items-center justify-center hover:bg-slate-50 rounded-full transition-all text-slate-300 hover:text-slate-900"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-8 -mx-6 px-6 scrollbar-hide">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-8">
                  <div className="relative">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -inset-8 bg-accent-brand/40 blur-[40px] rounded-full"
                    />
                    <div className="w-24 h-24 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center relative z-10">
                      <ShoppingBag className="text-slate-200" size={40} strokeWidth={1} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-slate-900 font-light text-xl tracking-tight">Your collection is empty.</p>
                    <p className="text-slate-400 text-sm font-light max-w-[200px] mx-auto">Discover our signature formulations to start your journey.</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-10 py-4 bg-luxury-dark text-white text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-accent-brand transition-all"
                  >
                    Explore Shop
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-6"
                  >
                    <div className="w-28 h-28 rounded-2xl overflow-hidden border border-slate-100 shrink-0 bg-slate-50">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-slate-900 font-light text-lg tracking-tight truncate pr-4 italic font-serif">{item.name}</h3>
                          <p className="text-slate-900 font-bold text-sm">${item.price.toFixed(2)}</p>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-accent-brand font-bold mt-1">{item.category}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-5 bg-slate-50 border border-slate-100 rounded-full px-4 py-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-slate-300 hover:text-accent-brand transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm font-bold text-slate-900 w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-slate-300 hover:text-accent-brand transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-10 h-10 flex items-center justify-center text-slate-200 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="mt-12 pt-10 border-t border-slate-100 space-y-6">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-300 font-bold">Subtotal</p>
                    <p className="text-sm text-slate-400 font-light italic">Taxes and shipping calculated at checkout.</p>
                  </div>
                  <p className="text-4xl font-light text-slate-900 tracking-tighter">${cartTotal.toFixed(2)}</p>
                </div>
                <button
                  onClick={handleCheckout}
                  className="group w-full bg-luxury-dark text-white py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-accent-brand transition-all flex items-center justify-center gap-4 active:scale-[0.98] shadow-xl"
                >
                  Confirm Order
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center justify-center gap-2 text-slate-200">
                  <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-[8px] uppercase tracking-[0.4em] font-bold">Encrypted WhatsApp Checkout</p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
