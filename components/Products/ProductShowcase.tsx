import React, { useRef } from 'react';
import { Product } from '../../types';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Phantom Elite Singlet', price: 85, category: 'Singlets', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop' }, // Shoe placeholder for gear
  { id: '2', name: 'Stealth Combat Tee', price: 45, category: 'Apparel', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop' },
  { id: '3', name: 'Vapor Pro Headgear', price: 55, category: 'Accessories', image: 'https://images.unsplash.com/photo-1555663759-345d92ee9cb7?q=80&w=1000&auto=format&fit=crop' },
  { id: '4', name: 'Ironclad Warmup', price: 120, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop' },
];

export const ProductShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="shop" className="py-24 bg-brand-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="font-display text-5xl md:text-6xl uppercase text-white mb-2">The Gear</h2>
            <p className="text-neutral-400">Elite performance wear.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {MOCK_PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className="group relative min-w-[300px] md:min-w-[380px] snap-center"
            >
              {/* Card Container */}
              <div className="relative h-[500px] bg-[#0a0a0a] border border-white/5 rounded-sm overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:translate-y-[-10px]">
                
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image Floating Effect */}
                <div className="h-[70%] flex items-center justify-center p-8 relative z-10">
                  <div className="absolute inset-0 bg-spotlight opacity-50"></div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out drop-shadow-2xl"
                  />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent z-20">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-1">{product.category}</p>
                      <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-1">{product.name}</h3>
                      <p className="text-neutral-400 font-sans">${product.price.toFixed(2)}</p>
                    </div>
                    <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors">
                      <Plus className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};