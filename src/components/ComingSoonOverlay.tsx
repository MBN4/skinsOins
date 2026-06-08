'use client';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Compass, ShieldAlert } from 'lucide-react';

export default function ComingSoonOverlay() {
  const pathname = usePathname();
  const router = useRouter();

  // Redirect any subpages back to home
  useEffect(() => {
    if (pathname && pathname !== '/') {
      router.replace('/');
    }
  }, [pathname, router]);

  // While redirecting, show a full block screen
  if (pathname !== '/') {
    return (
      <div className="fixed inset-0 z-[10000] bg-slate-950 flex flex-col items-center justify-center text-center p-6 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6 max-w-md"
        >
          <ShieldAlert className="text-accent-brand mx-auto animate-pulse" size={48} />
          <h2 className="text-3xl font-serif italic tracking-widest">Section Restricted</h2>
          <p className="text-slate-400 font-light text-sm">
            This part of our collection is currently locked as we finalize our launch.
          </p>
          <button
            onClick={() => router.replace('/')}
            className="pointer-events-auto px-8 py-3 bg-white text-slate-950 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent-brand hover:text-white transition-all"
          >
            Return to Sanctuary
          </button>
        </motion.div>
      </div>
    );
  }

  // Homepage — show blur overlay + Coming Soon card
  return (
    <>
      {/* Dark blur layer — 5–10% visibility of the page underneath */}
      <div className="fixed inset-0 z-[9990] bg-slate-950/90 backdrop-blur-[16px] pointer-events-none" />

      {/* Ambient glow blobs */}
      <div className="fixed inset-0 z-[9991] pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-brand/20 blur-[120px] rounded-full animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Centered Coming Soon card */}
      <div className="fixed inset-0 z-[9995] flex items-center justify-center p-6 pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-6 max-w-xl w-full bg-slate-950/50 border border-white/5 px-12 py-14 rounded-[3rem] backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.85)]"
        >
          {/* Brand badge */}
          <div className="flex justify-center items-center gap-3">
            <Compass
              className="text-accent-brand animate-spin"
              style={{ animationDuration: '10s' }}
              size={20}
            />
            <span className="text-[10px] uppercase tracking-[0.6em] text-accent-brand font-black">
              SkinsOins Laboratory
            </span>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl font-light tracking-[-0.03em] text-white leading-none">
              COMING
              <br />
              <span className="italic font-serif text-slate-300">SOON</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xs mx-auto leading-relaxed">
              We are currently refining our organic formulations. Be the first to experience botanical intelligence.
            </p>
          </div>

          {/* Subtle footer hint */}
          <p className="text-[9px] uppercase tracking-[0.3em] text-slate-600 pt-2">
            Scroll to explore &nbsp;·&nbsp; Launching soon
          </p>
        </motion.div>
      </div>
    </>
  );
}
