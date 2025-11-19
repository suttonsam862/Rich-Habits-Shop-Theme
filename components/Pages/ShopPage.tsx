import React from 'react';
import { PageType, Product } from '../../types';
import { ArrowRight } from 'lucide-react';

const SHOP_PRODUCTS: Product[] = [
  { id: '1', name: 'Phantom Elite Singlet', price: 85, category: 'Singlets', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop' },
  { id: '2', name: 'Stealth Combat Tee', price: 45, category: 'Apparel', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop' },
  { id: '3', name: 'Vapor Pro Headgear', price: 55, category: 'Accessories', image: 'https://images.unsplash.com/photo-1555663759-345d92ee9cb7?q=80&w=1000&auto=format&fit=crop' },
  { id: '4', name: 'Ironclad Warmup', price: 120, category: 'Outerwear', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop' },
  { id: '5', name: 'Mat Grip Pro 3', price: 110, category: 'Footwear', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop' },
  { id: '6', name: 'Victory Duffel', price: 65, category: 'Bags', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop' },
];

interface ShopPageProps {
  onNavigate: (page: PageType) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 text-center md:text-left border-b border-white/10 pb-8">
          <h1 className="font-display text-6xl md:text-8xl uppercase text-white mb-4">Shop All</h1>
          <p className="text-neutral-400 max-w-xl text-lg">
            Professional grade equipment for the modern wrestler. Engineered for durability and speed.
          </p>
        </div>

        {/* Filters & Grid */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4">
            <div className="sticky top-32 space-y-8">
              <div>
                <h3 className="font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-red pl-3">Category</h3>
                <ul className="space-y-2">
                  {['Singlets', 'Footwear', 'Apparel', 'Headgear', 'Accessories'].map(cat => (
                    <li key={cat} className="text-neutral-400 hover:text-white cursor-pointer transition-colors text-sm uppercase tracking-wide">
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-brand-red pl-3">Collection</h3>
                <ul className="space-y-2">
                  {['New Arrivals', 'Best Sellers', 'Pro Issue', 'Training'].map(col => (
                    <li key={col} className="text-neutral-400 hover:text-white cursor-pointer transition-colors text-sm uppercase tracking-wide">
                      {col}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
            {SHOP_PRODUCTS.map((product) => (
              <div 
                key={product.id} 
                onClick={() => onNavigate('product')}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] bg-[#121212] mb-4 overflow-hidden border border-white/5 group-hover:border-white/20 transition-colors">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                    New
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button className="bg-white text-black p-3 rounded-full hover:bg-brand-red hover:text-white transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white uppercase tracking-wide group-hover:text-brand-red transition-colors">{product.name}</h3>
                  <p className="text-neutral-500 font-sans mt-1">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};