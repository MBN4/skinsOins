import type { Metadata } from 'next';
import './globals.css';
import { ShopProvider } from '../context/ShopContext';
import Navbar from '../components/Navbar';
import CartDrawer from '../components/CartDrawer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SkinsOins | Luxury Botanical Skincare',
  description: 'Elevating the standard of luxury skincare through botanical intelligence and clinical precision.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ShopProvider>
          <div className="min-h-screen relative bg-immersive-bg text-slate-900">
            <div className="fixed inset-0 z-0 pointer-events-none">
              <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-accent-brand/25 blur-[150px] rounded-full"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent-brand/15 blur-[120px] rounded-full"></div>
            </div>

            <div className="pointer-events-none select-none">
              <Navbar />
              <main className="relative z-10">{children}</main>
              
              <footer className="relative z-10 border-t border-slate-900/60 bg-slate-950 text-slate-300 pt-20 pb-10 px-6 sm:px-12 overflow-hidden">
                {/* Subtle ambient glows for premium botanical depth */}
                <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-accent-brand/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
                    {/* Brand & Socials */}
                    <div className="lg:col-span-4 space-y-6">
                      <h2 className="text-3xl font-serif italic tracking-[0.2em] text-white">
                        Skins<span className="text-accent-brand font-sans">O</span>ins
                      </h2>
                      <p className="text-slate-400 font-light text-sm leading-relaxed max-w-sm">
                        Elevating the standard of luxury skincare through botanical intelligence and clinical precision.
                      </p>
                      <div className="flex gap-6 pt-2">
                        {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                          <span key={social} className="group relative text-[10px] uppercase tracking-[0.25em] cursor-pointer text-slate-500 hover:text-white transition-colors duration-300">
                            {social}
                            <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-accent-brand transition-all duration-300 group-hover:w-full" />
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Explore Navigation */}
                    <div className="lg:col-span-3 space-y-4">
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-accent-brand font-black">Explore</h4>
                      <ul className="space-y-4">
                        {[
                          { label: 'All Products', href: '/shop' },
                          { label: 'Skincare Collection', href: '/category/Skincare' },
                          { label: 'Makeup Collection', href: '/category/Makeup' },
                          { label: 'Featured Best Sellers', href: '/shop' }
                        ].map((link) => (
                          <li key={link.label}>
                            <Link href={link.href} className="group relative text-xs font-light text-slate-400 hover:text-white transition-all duration-300 block w-fit">
                              {link.label}
                              <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-slate-700 transition-all duration-300 group-hover:w-full" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="lg:col-span-5 space-y-6">
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-accent-brand font-black">Join the Ritual</h4>
                      <div className="space-y-4 max-w-md">
                        <p className="text-xs text-slate-400 font-light leading-relaxed">
                          Subscribe to receive early access to limited collections, botanical formulations, and private invitations.
                        </p>
                        <div className="relative pt-2">
                          <input 
                            type="email" 
                            placeholder="ENTER YOUR EMAIL" 
                            className="w-full bg-slate-900/40 border border-slate-900 focus:border-accent-brand/50 rounded-full py-4 pl-6 pr-32 text-xs text-white focus:outline-none transition-all duration-500 placeholder:text-slate-600"
                          />
                          <button className="absolute right-2 top-[10px] bg-white text-slate-950 hover:bg-accent-brand hover:text-white transition-colors duration-500 rounded-full px-5 py-2.5 text-[9px] uppercase tracking-[0.2em] font-bold shadow-lg">
                            Subscribe
                          </button>
                        </div>
                        <p className="text-[8px] text-slate-600 uppercase tracking-[0.25em] italic leading-relaxed">
                          * By subscribing, you agree to our privacy policy and join our private circle.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Footer Bottom Rights */}
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-900/60">
                    <p className="text-[9px] text-slate-500 tracking-[0.2em] uppercase text-center md:text-left leading-relaxed">
                      © 2026 SkinsOins. ESTABLISHED IN BOTANICAL EXCELLENCE.
                    </p>
                    <div className="flex gap-8 text-[9px] uppercase tracking-[0.25em] text-slate-500">
                      {['Privacy', 'Terms', 'Cookies'].map((item) => (
                        <span key={item} className="cursor-pointer hover:text-white transition-colors relative group">
                          {item}
                          <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-slate-800 transition-all duration-300 group-hover:w-full" />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </footer>
            </div>
            <CartDrawer />
          </div>
        </ShopProvider>
      </body>
    </html>
  );
}
