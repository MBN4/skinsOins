import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import React, { useEffect, ReactNode } from 'react';
import { ShopProvider } from './context/ShopContext';
import Navbar from './A-One/components/Navbar';
import CartDrawer from './A-One/components/CartDrawer';
import Home from './A-One/page';
import Shop from './A-One/Shop';
import ProductPage from './A-One/ProductPage';
import CategoryPage from './A-One/CategoryPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen relative bg-immersive-bg text-slate-900">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-accent-brand/25 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent-brand/15 blur-[120px] rounded-full"></div>
      </div>

      <Navbar />
      <main className="relative z-10">{children}</main>
      
      <footer className="relative z-10 border-t border-slate-100 bg-white/50 backdrop-blur-3xl pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-3xl font-serif italic tracking-widest text-slate-900">SkinsOins</h2>
              <p className="text-slate-400 font-light text-sm leading-relaxed max-w-sm">
                Elevating the standard of luxury skincare through botanical intelligence and clinical precision.
              </p>
              <div className="flex gap-6">
                {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                   <span key={social} className="text-[9px] uppercase tracking-[0.2em] cursor-pointer text-slate-400 hover:text-accent-brand transition-colors">
                    {social}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">Explore</h4>
              <ul className="space-y-3">
                {['All Products', 'Makeup', 'Skincare', 'Best Sellers'].map((link) => (
                  <li key={link}><Link to="/shop" className="text-xs font-light text-slate-500 hover:text-accent-brand transition-all">{link}</Link></li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h4 className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">Join the Ritual</h4>
              <div className="relative max-w-md">
                <input 
                  type="email" 
                  placeholder="ENTER YOUR EMAIL" 
                  className="w-full bg-transparent border-b border-slate-200 py-2 text-xs focus:outline-none focus:border-slate-900 transition-all placeholder:text-slate-300"
                />
                <button className="absolute right-0 top-1 text-[9px] uppercase tracking-[0.2em] font-bold text-slate-900 hover:text-accent-brand transition-colors">Subscribe</button>
              </div>
              <p className="text-[9px] text-slate-600 uppercase tracking-[0.2em] italic">
                By subscribing, you join our private circle of beauty innovation.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-100">
            <p className="text-[9px] text-slate-600 tracking-[0.2em] uppercase">© 2026 SkinsOins. ESTABLISHED IN BOTANICAL EXCELLENCE.</p>
            <div className="flex gap-8 text-[9px] uppercase tracking-[0.2em] text-slate-400">
              <span className="cursor-pointer hover:text-slate-900 transition-colors">Privacy</span>
              <span className="cursor-pointer hover:text-slate-900 transition-colors">Terms</span>
              <span className="cursor-pointer hover:text-slate-900 transition-colors">Cookies</span>
            </div>
          </div>
        </div>
      </footer>
      <CartDrawer />
    </div>
  );
}

export default function App() {
  return (
    <ShopProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </Layout>
      </Router>
    </ShopProvider>
  );
}