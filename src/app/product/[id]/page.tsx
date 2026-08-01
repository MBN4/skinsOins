"use client";
import React, { use } from "react";
import { useShop } from "../../../context/ShopContext";
import { PRODUCTS } from "../../../constants";
import { ShoppingBag, ArrowLeft, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  const { addToCart } = useShop();

  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="bg-soft-white min-h-screen text-luxury-dark flex flex-col items-center justify-center space-y-6 px-4">
        <h2 className="text-2xl font-light">Formulation Not Found</h2>
        <Link
          href="/shop"
          className="px-8 py-3 bg-luxury-dark text-white rounded-full text-xs uppercase tracking-widest font-bold"
        >
          Return To Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-soft-white min-h-screen text-luxury-dark pt-32 pb-24 px-4 sm:px-6 pointer-events-auto">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-slate-400 hover:text-luxury-dark transition-colors"
        >
          <ArrowLeft size={14} /> Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-6 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl bg-white aspect-square w-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent-brand font-black block">
                {product.category} Collection
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-none">
                {product.name}
              </h1>
              <p className="text-2xl font-serif text-luxury-slate">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div className="border-t border-slate-200/50 pt-6 space-y-4">
              <h4 className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                Description
              </h4>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                Application details
              </h4>
              <p className="text-xs text-slate-500 font-light leading-relaxed bg-white border border-slate-100 p-4 rounded-2xl">
                {product.details || "Smooth gently over clean face and neck. Use morning and night to achieve cellular harmony and enhanced radiance."}
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center">
              <button
                onClick={() => addToCart(product)}
                className="w-full sm:w-auto px-12 py-5 bg-luxury-dark text-white hover:bg-accent-brand rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
              >
                <ShoppingBag size={14} />
                Add To Collection
              </button>

              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-slate-400">
                <Shield size={14} className="text-accent-brand" /> Secure Shipping Included
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}