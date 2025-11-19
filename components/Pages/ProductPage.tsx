import React, { useState } from 'react';
import { Minus, Plus, Shield, Truck, Ruler } from 'lucide-react';

export const ProductPage: React.FC = () => {
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Gallery */}
          <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-[4/5] bg-[#121212] border border-white/5">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-overlay" alt="Product Front" />
            </div>
            <div className="aspect-[4/5] bg-[#121212] border border-white/5">
               <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-overlay" alt="Product Detail" />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-2/5">
            <div className="sticky top-32">
              <div className="mb-2 text-brand-red font-bold uppercase tracking-widest text-xs">Pro Series</div>
              <h1 className="font-display text-5xl md:text-6xl uppercase text-white mb-4 leading-[0.9]">Phantom Elite<br/>Singlet</h1>
              <p className="text-2xl text-white font-light mb-8">$85.00</p>

              <p className="text-neutral-400 mb-8 leading-relaxed">
                Engineered for the elite wrestler. The Phantom Elite Singlet features our proprietary HydraTech fabric for moisture management and 4-way stretch durability. Reinforced stitching at stress points.
              </p>

              {/* Selectors */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">Select Size</label>
                <div className="flex gap-3">
                  {['XS', 'S', 'M', 'L', 'XL', '2XL'].map((size) => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 flex items-center justify-center border ${selectedSize === size ? 'bg-white text-black border-white' : 'bg-transparent text-white border-white/20 hover:border-white'} transition-all font-bold uppercase`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mb-8">
                <div className="flex items-center border border-white/20 h-14 px-4 gap-6">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="text-white hover:text-brand-red"><Minus className="w-4 h-4" /></button>
                  <span className="text-white font-bold w-4 text-center">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="text-white hover:text-brand-red"><Plus className="w-4 h-4" /></button>
                </div>
                <button className="flex-1 bg-brand-red text-white h-14 uppercase font-bold tracking-widest hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(208,0,0,0.3)]">
                  Add To Cart
                </button>
              </div>

              {/* Features */}
              <div className="space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 text-neutral-400 text-sm">
                  <Shield className="w-5 h-5 text-white" />
                  <span>Reinforced Stitching Warranty</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-400 text-sm">
                  <Truck className="w-5 h-5 text-white" />
                  <span>Free shipping on orders over $150</span>
                </div>
                 <div className="flex items-center gap-3 text-neutral-400 text-sm">
                  <Ruler className="w-5 h-5 text-white" />
                  <span>Pro Fit - Size Up for Comfort</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};