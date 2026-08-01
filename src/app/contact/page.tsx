"use client";
import React, { useState } from "react";
import { Sparkles, Calendar, Heart } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-soft-white min-h-screen text-luxury-dark pt-32 pb-24 px-4 sm:px-6 pointer-events-auto">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-100 bg-white shadow-sm">
            <Sparkles size={12} className="text-accent-brand" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-bold">
              Private Circle
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight">
            Consultation <span className="font-serif italic text-luxury-slate">Booking</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-md mx-auto">
            Book a physical skin check diagnostics consultation or reach out directly to our formulation experts.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 sm:p-12 shadow-xl max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <Heart size={48} className="text-accent-brand mx-auto animate-pulse" />
              <h2 className="text-2xl font-light">Booking Requested Successfully</h2>
              <p className="text-xs text-slate-400 font-light max-w-xs mx-auto">
                Our skin consultation specialists will review your application and send private appointment credentials shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-soft-white border border-slate-100 focus:border-accent-brand rounded-2xl p-4 text-xs focus:outline-none transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full bg-soft-white border border-slate-100 focus:border-accent-brand rounded-2xl p-4 text-xs focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">Select Skin Concern</label>
                <select className="w-full bg-soft-white border border-slate-100 focus:border-accent-brand rounded-2xl p-4 text-xs focus:outline-none transition-all duration-300 cursor-pointer">
                  <option>Barrier Damage / Redness</option>
                  <option>Anti-Aging & Radiance</option>
                  <option>Dryness & Deep Hydration</option>
                  <option>DNA Diagnostics Consult</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your skin history..."
                  className="w-full bg-soft-white border border-slate-100 focus:border-accent-brand rounded-2xl p-4 text-xs focus:outline-none transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-luxury-dark text-white hover:bg-accent-brand rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg cursor-pointer"
              >
                <Calendar size={14} />
                Book Appointment
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}