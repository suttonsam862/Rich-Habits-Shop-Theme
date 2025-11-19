
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-20 bg-brand-black border-t border-b border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(208,0,0,0.05),_transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="font-display text-4xl md:text-5xl uppercase text-white mb-4">Join The Ranking</h2>
        <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
          Sign up for exclusive drops, pro training tips, and early access to team portals.
        </p>
        
        <div className="max-w-md mx-auto flex gap-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-neutral-500 focus:border-brand-red focus:outline-none transition-colors"
          />
          <button className="bg-brand-red px-6 py-3 text-white uppercase font-bold hover:bg-red-700 transition-colors flex items-center gap-2">
            Join <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
