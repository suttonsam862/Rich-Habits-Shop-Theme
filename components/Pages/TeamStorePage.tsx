import React from 'react';
import { PageType } from '../../types';
import { Lock, ArrowLeft } from 'lucide-react';

interface TeamStorePageProps {
  onNavigate: (page: PageType) => void;
}

export const TeamStorePage: React.FC<TeamStorePageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 bg-brand-black min-h-screen">
      {/* Team Hero */}
      <div className="h-[50vh] relative overflow-hidden flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1517167637867-e7de8d6f680d?q=80&w=2000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Ranger 47" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent"></div>
        
        <div className="relative z-10 text-center">
          <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full inline-flex items-center gap-2 mb-4 border border-white/10">
            <Lock className="w-4 h-4 text-brand-red" />
            <span className="text-xs font-bold uppercase tracking-widest text-white">Private Team Portal</span>
          </div>
          <h1 className="font-display text-7xl md:text-9xl uppercase text-white">Ranger 47</h1>
          <p className="text-neutral-300 uppercase tracking-widest font-bold mt-2">Austin, Texas</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <button onClick={() => onNavigate('teams')} className="flex items-center gap-2 text-neutral-500 hover:text-white mb-8 uppercase text-xs font-bold tracking-widest transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Teams
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Product 1 */}
          <div className="group cursor-pointer" onClick={() => onNavigate('product')}>
            <div className="aspect-square bg-[#121212] mb-4 border border-white/5 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-overlay opacity-90 group-hover:scale-110 transition-transform duration-500" alt="Team Tee" />
            </div>
            <h3 className="font-display text-2xl text-white uppercase">Team Issue Tee</h3>
            <p className="text-brand-red font-bold">$35.00</p>
          </div>
          
           {/* Team Product 2 */}
          <div className="group cursor-pointer" onClick={() => onNavigate('product')}>
            <div className="aspect-square bg-[#121212] mb-4 border border-white/5 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-overlay opacity-90 group-hover:scale-110 transition-transform duration-500" alt="Team Hoodie" />
            </div>
            <h3 className="font-display text-2xl text-white uppercase">Ranger Tech Hoodie</h3>
            <p className="text-brand-red font-bold">$65.00</p>
          </div>

           {/* Team Product 3 */}
          <div className="group cursor-pointer" onClick={() => onNavigate('product')}>
            <div className="aspect-square bg-[#121212] mb-4 border border-white/5 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover mix-blend-overlay opacity-90 group-hover:scale-110 transition-transform duration-500" alt="Team Bag" />
            </div>
            <h3 className="font-display text-2xl text-white uppercase">Gear Bag</h3>
            <p className="text-brand-red font-bold">$80.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};