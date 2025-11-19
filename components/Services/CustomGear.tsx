import React from 'react';
import { Button } from '../UI/Button';
import { PenTool, Package, Trophy } from 'lucide-react';

export const CustomGear: React.FC = () => {
  return (
    <section id="custom" className="bg-brand-charcoal min-h-screen flex flex-col lg:flex-row">
      {/* Image Side */}
      <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-auto overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1605296867304-6c01636290ae?q=80&w=2000&auto=format&fit=crop" 
          alt="Custom Design Process" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent lg:bg-gradient-to-t lg:from-transparent lg:to-black/50"></div>
        
        <div className="absolute bottom-12 left-12 z-10 hidden lg:block">
          <h3 className="font-display text-8xl text-white/10 uppercase leading-none">Create<br/>Legacy</h3>
        </div>
      </div>

      {/* Content Side */}
      <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-brand-charcoal relative border-l border-white/5">
        <span className="text-brand-red font-bold tracking-widest text-sm uppercase mb-4 block">Team Services</span>
        <h2 className="font-display text-5xl md:text-7xl uppercase text-white mb-8">Custom Gear<br/>Program</h2>
        <p className="text-neutral-400 text-lg mb-12 max-w-md leading-relaxed">
          We don't just print logos. We engineer identity. Our bespoke design service creates a unified look for your squad, from singlets to travel gear.
        </p>

        <div className="grid gap-8 mb-12">
          <div className="flex gap-6 items-start group">
            <div className="p-4 bg-black border border-white/10 rounded-sm group-hover:border-brand-red transition-colors">
              <PenTool className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wide mb-2">1. Design</h4>
              <p className="text-neutral-500 text-sm">Work with our pro designers to forge your visual identity.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start group">
            <div className="p-4 bg-black border border-white/10 rounded-sm group-hover:border-brand-red transition-colors">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wide mb-2">2. Order Portal</h4>
              <p className="text-neutral-500 text-sm">We build a dedicated web store for your team. No paper forms.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start group">
            <div className="p-4 bg-black border border-white/10 rounded-sm group-hover:border-brand-red transition-colors">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wide mb-2">3. Compete</h4>
              <p className="text-neutral-500 text-sm">Gear delivered directly to athletes. Ready for the mat.</p>
            </div>
          </div>
        </div>

        <Button variant="outline">Start Your Order</Button>
      </div>
    </section>
  );
};