
import React from 'react';
import { Play, Image, Award, Bell } from 'lucide-react';
import { Button } from '../UI/Button';

export const PastEventsPage: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen pt-24">
      
      {/* FOMO Hero Video */}
      <div className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 bg-black">
            {/* Placeholder for Video - Using Image with heavy processing */}
            <img 
              src="https://images.unsplash.com/photo-1591117207239-78898f1c15eb?q=80&w=2000&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-40"
              alt="Wrestling Tournament Crowd"
            />
         </div>
         <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-transparent to-brand-black"></div>
         
         <div className="relative z-10 text-center px-6">
           <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red text-brand-red px-4 py-1 rounded-full mb-6 animate-pulse">
             <span className="w-2 h-2 bg-brand-red rounded-full"></span>
             <span className="text-xs font-bold uppercase tracking-widest">Panther Train Tour Complete</span>
           </div>
           <h1 className="font-display text-6xl md:text-9xl uppercase text-white mb-6 drop-shadow-2xl">
             More Than<br/>Just Gear
           </h1>
           <p className="text-xl text-neutral-300 mb-10 font-light">
             We don't just outfit the sport. We build champions.
           </p>
           <Button variant="outline" className="mx-auto"><Play className="w-4 h-4 mr-2" /> Watch Tour Recap</Button>
         </div>
      </div>

      {/* Hall of Fame */}
      <div className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
             <h2 className="font-display text-4xl md:text-5xl uppercase text-white">Takedown Challenge <span className="text-brand-red">Hall of Fame</span></h2>
             <Award className="w-12 h-12 text-brand-red hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Cory Land', weight: '133 lbs', prize: '$1,000', img: 'https://images.unsplash.com/photo-1605296867304-6c01636290ae?q=80&w=500&auto=format&fit=crop' },
              { name: 'Wyatt Voelker', weight: '197 lbs', prize: '$1,000', img: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=500&auto=format&fit=crop' },
              { name: 'J. Rodriguez', weight: '141 lbs', prize: '$500', img: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=500&auto=format&fit=crop' },
            ].map((winner, i) => (
              <div key={i} className="bg-[#121212] border border-white/5 p-6 relative group overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-red text-white text-xs font-bold px-3 py-1 uppercase">Winner</div>
                <div className="flex items-center gap-6 relative z-10">
                   <img src={winner.img} className="w-20 h-20 rounded-full object-cover border-2 border-brand-red" alt={winner.name} />
                   <div>
                     <h3 className="font-display text-2xl text-white uppercase">{winner.name}</h3>
                     <p className="text-neutral-400 text-sm uppercase tracking-widest mb-1">{winner.weight}</p>
                     <p className="text-brand-red font-bold">{winner.prize} Prize</p>
                   </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl group-hover:bg-brand-red/20 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recap Cards */}
      <div className="py-24 container mx-auto px-6">
        <h2 className="font-display text-5xl uppercase text-center mb-16">Event Archive</h2>
        
        <div className="space-y-16">
           {/* Event 1 */}
           <div className="flex flex-col md:flex-row bg-[#121212] border border-white/10 group">
              <div className="md:w-1/2 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  alt="Panther Train"
                />
                <div className="absolute top-6 left-6 bg-brand-black/80 backdrop-blur-md px-4 py-2 border border-white/10">
                  <span className="text-brand-red font-display text-xl">OCT 2024</span>
                </div>
              </div>
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <h3 className="font-display text-4xl text-white uppercase mb-4">Panther Train Tour</h3>
                <div className="flex gap-6 mb-8 text-sm font-bold text-neutral-500 uppercase tracking-widest">
                  <span>3 Locations</span>
                  <span className="w-px h-4 bg-white/10"></span>
                  <span>200+ Wrestlers</span>
                  <span className="w-px h-4 bg-white/10"></span>
                  <span>Clinicians: D1 All-Americans</span>
                </div>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  The energy was unmatched. We hit Huntsville, Birmingham, and Mobile in 3 days, bringing high-level technique and the latest gear drops to the state.
                </p>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-white hover:text-brand-red transition-colors font-bold uppercase text-sm">
                    <Image className="w-4 h-4" /> View Gallery
                  </button>
                  <button className="flex items-center gap-2 text-white hover:text-brand-red transition-colors font-bold uppercase text-sm">
                    <Play className="w-4 h-4" /> Watch Highlights
                  </button>
                </div>
              </div>
           </div>

           {/* SMS Widget */}
           <div className="bg-brand-red p-12 text-center rounded-sm relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             <div className="relative z-10">
               <Bell className="w-12 h-12 text-white mx-auto mb-4 animate-bounce" />
               <h3 className="font-display text-4xl text-white uppercase mb-4">Don't Miss The Next War</h3>
               <p className="text-white/80 mb-8 max-w-md mx-auto">Get a text the second registration opens for the next Takedown Challenge. Spots fill in 24 hours.</p>
               <div className="flex max-w-md mx-auto gap-2">
                 <input type="tel" placeholder="(555) 123-4567" className="flex-1 bg-white text-black px-4 py-3 font-bold focus:outline-none" />
                 <button className="bg-black text-white px-8 py-3 font-bold uppercase hover:bg-neutral-900 transition-colors">Notify Me</button>
               </div>
             </div>
           </div>

           {/* Event 2 */}
           <div className="flex flex-col md:flex-row bg-[#121212] border border-white/10 group">
              <div className="md:w-1/2 order-1 md:order-2 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555663759-345d92ee9cb7?q=80&w=1000&auto=format&fit=crop" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  alt="Deep South Duals"
                />
              </div>
              <div className="md:w-1/2 p-12 flex flex-col justify-center order-2 md:order-1">
                <h3 className="font-display text-4xl text-white uppercase mb-4">Deep South Duals</h3>
                <div className="flex gap-6 mb-8 text-sm font-bold text-neutral-500 uppercase tracking-widest">
                  <span>Atlanta, GA</span>
                  <span className="w-px h-4 bg-white/10"></span>
                  <span>32 Teams</span>
                  <span className="w-px h-4 bg-white/10"></span>
                  <span>Rich Habits Pop-Up Shop</span>
                </div>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  Our largest pop-up shop to date. We debuted the 'Midnight' collection and outfitted 4 teams on site.
                </p>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-white hover:text-brand-red transition-colors font-bold uppercase text-sm">
                    <Image className="w-4 h-4" /> View Gallery
                  </button>
                </div>
              </div>
           </div>
        </div>
      </div>

    </div>
  );
};
