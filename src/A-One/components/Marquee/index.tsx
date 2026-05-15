import React from 'react';
import { motion } from 'motion/react';
import { ITEMS } from './data';

export default function Marquee() {
  return (
    <div className="bg-soft-white py-6 overflow-hidden select-none border-y border-slate-100">
      <motion.div
        animate={{
          x: [0, -1035],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center space-x-12 px-6">
            {ITEMS.map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-slate-400 font-medium tracking-[0.3em] text-[10px] uppercase">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 bg-accent-brand rounded-full" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
