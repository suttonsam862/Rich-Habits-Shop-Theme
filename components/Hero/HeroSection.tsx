import React from 'react';
import { Button } from '../UI/Button';
import { Play, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-black flex items-center justify-center">
      {/* Background Image/Video Simulation */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2560&auto=format&fit=crop" 
          alt="Wrestling Training" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        {/* Gradients & Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-transparent to-brand-black/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full">
          <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-300">New Season Gear Dropped</span>
        </div>
        
        <h1 className="font-display text-7xl md:text-9xl uppercase text-white leading-[0.85] mb-8 tracking-tighter drop-shadow-2xl">
          Train Like<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">A Pro</span>
        </h1>
        
        <p className="max-w-xl text-neutral-400 text-lg md:text-xl mb-10 font-light">
          Premium wrestling apparel and custom gear designed for the relentless. 
          Engineered for speed, power, and durability.
        </p>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <Button variant="solid">
            Shop Retail <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="ghost">
            <Play className="w-4 h-4 fill-current" /> Watch Highlights
          </Button>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent z-20"></div>
    </section>
  );
};