
import React from 'react';

export const MissionSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="font-display text-4xl md:text-6xl uppercase text-white mb-6 leading-[0.9]">
            Built For<br/>The Mat
          </h2>
          <div className="h-1 w-24 bg-brand-red mb-8"></div>
          <div className="space-y-6 text-neutral-400 text-lg font-light leading-relaxed">
            <p>
              <strong className="text-white">Rich Habits</strong> is more than a brand; it's a philosophy. We believe that excellence isn't an act, but a habit.
            </p>
            <p>
              Born from the wrestling community, we engineer gear that withstands the grind. From the 5 AM practices to the state finals, our apparel is designed to perform when it matters most.
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative group">
           <div className="absolute -inset-4 bg-brand-red/20 rounded-sm blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
           <img 
             src="https://images.unsplash.com/photo-1626248941270-7567d2268043?q=80&w=1000&auto=format&fit=crop" 
             className="relative z-10 w-full h-auto object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
             alt="Wrestler looking focused"
           />
        </div>
      </div>
    </section>
  );
};
