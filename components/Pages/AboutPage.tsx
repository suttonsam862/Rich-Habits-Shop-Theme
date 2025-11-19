
import React from 'react';
import { Shield, Clock, PenTool } from 'lucide-react';
import { Button } from '../UI/Button';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen">
      
      {/* Hero: The Founders */}
      <div className="relative h-[90vh] flex items-end justify-center overflow-hidden">
         <img 
           src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2000&auto=format&fit=crop" 
           className="absolute inset-0 w-full h-full object-cover object-top opacity-60 grayscale" 
           alt="Sam and Carter" 
         />
         <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/50"></div>
         
         <div className="relative z-10 text-center pb-24 px-6">
            <h1 className="font-display text-7xl md:text-9xl text-white uppercase leading-[0.85] mb-6">
              Born in<br/><span className="text-brand-red">Birmingham</span>
            </h1>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
              Founded by wrestlers, for wrestlers. The story of how two Homewood alumni are changing the custom gear game forever.
            </p>
         </div>
      </div>

      {/* Mission Statement */}
      <div className="py-24 bg-brand-charcoal border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl uppercase text-white max-w-4xl mx-auto leading-tight">
            "We believe every team deserves championship-level gear, regardless of budget."
          </h2>
        </div>
      </div>

      {/* Origin Story Timeline */}
      <div className="py-24 container mx-auto px-6 relative">
        <h2 className="font-display text-5xl text-white uppercase text-center mb-16">The Origin Story</h2>
        
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-48 bottom-24 w-px bg-brand-red/30"></div>

        <div className="space-y-24">
          {/* 2022 */}
          <div className="relative flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2 flex justify-start md:justify-end order-2 md:order-1">
               <div className="bg-[#121212] p-8 border border-white/10 max-w-md relative">
                 <span className="text-6xl font-display text-brand-red/20 absolute -top-8 -left-4">2022</span>
                 <h3 className="font-bold text-2xl text-white uppercase mb-2">The First Sketch</h3>
                 <p className="text-neutral-400">Sam and Carter launch Rich Habits from a garage, frustrated by the 8-week wait times for custom singlets. The mission was simple: Faster, Better, Cooler.</p>
               </div>
             </div>
             <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-brand-red rounded-full -translate-x-1/2 border-4 border-black z-10"></div>
             <div className="md:w-1/2 pl-12 md:pl-0 order-1 md:order-2">
               <img src="https://images.unsplash.com/photo-1605296867304-6c01636290ae?q=80&w=800&auto=format&fit=crop" className="w-full max-w-sm rounded-sm grayscale hover:grayscale-0 transition-all duration-500" alt="First Sketch" />
             </div>
          </div>

          {/* The Big Win */}
          <div className="relative flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2 flex justify-end pr-12 md:pr-0 order-1">
               <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop" className="w-full max-w-sm rounded-sm grayscale hover:grayscale-0 transition-all duration-500" alt="Homewood Team" />
             </div>
             <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-brand-red rounded-full -translate-x-1/2 border-4 border-black z-10"></div>
             <div className="md:w-1/2 order-2">
               <div className="bg-[#121212] p-8 border border-white/10 max-w-md relative">
                 <span className="text-6xl font-display text-brand-red/20 absolute -top-8 -right-4">WIN</span>
                 <h3 className="font-bold text-2xl text-white uppercase mb-2">Full Circle</h3>
                 <p className="text-neutral-400">Outfitting our Alma Mater, Homewood High School. Seeing the logo on the mat for the first time solidified our commitment to the community.</p>
               </div>
             </div>
          </div>

          {/* Today */}
          <div className="relative flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2 flex justify-start md:justify-end order-2 md:order-1">
               <div className="bg-[#121212] p-8 border border-white/10 max-w-md relative">
                 <span className="text-6xl font-display text-brand-red/20 absolute -top-8 -left-4">NOW</span>
                 <h3 className="font-bold text-2xl text-white uppercase mb-2">Nationwide</h3>
                 <p className="text-neutral-400">Serving 60+ organizations across 12 states. From local clubs to National Champions, the Rich Habits family is growing every day.</p>
               </div>
             </div>
             <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 border-4 border-black z-10 shadow-[0_0_15px_white]"></div>
             <div className="md:w-1/2 pl-12 md:pl-0 order-1 md:order-2">
               <div className="w-full max-w-sm bg-[#1a1a1a] aspect-video flex items-center justify-center border border-white/10">
                 <span className="text-neutral-600 font-display text-xl">US MAP VISUALIZATION</span>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Philosophy Icons */}
      <div className="py-24 bg-brand-charcoal">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-brand-black border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="font-bold text-white uppercase text-xl mb-2">Community First</h3>
            <p className="text-neutral-400 text-sm px-8">We don't just sell gear; we sponsor camps and support programs like Clay-Chalkville.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-brand-black border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="font-bold text-white uppercase text-xl mb-2">Speed & Service</h3>
            <p className="text-neutral-400 text-sm px-8">We know the season is short. We deliver when we say we will. No excuses.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-brand-black border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <PenTool className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="font-bold text-white uppercase text-xl mb-2">Elite Quality</h3>
            <p className="text-neutral-400 text-sm px-8">Gear tested by D1 athletes. Fabrics that handle the grind of the mat.</p>
          </div>
        </div>
      </div>

      {/* Meet The Team */}
      <div className="py-24 container mx-auto px-6">
        <h2 className="font-display text-5xl text-white uppercase text-center mb-16">The Squad</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Sam Sutton', role: 'Co-Founder', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop' },
            { name: 'Carter Vail', role: 'Co-Founder', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop' },
            { name: 'Alex Rivera', role: 'Lead Designer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop' },
            { name: 'Jordan Lee', role: 'Team Sales', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop' },
          ].map((member, i) => (
            <div key={i} className="group relative">
              <div className="aspect-[3/4] bg-[#121212] overflow-hidden rounded-sm mb-4">
                <img src={member.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={member.name} />
              </div>
              <h3 className="font-display text-2xl text-white uppercase">{member.name}</h3>
              <p className="text-brand-red font-bold text-sm uppercase tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 bg-brand-red flex flex-col items-center text-center">
        <h2 className="font-display text-6xl text-white uppercase mb-8">Ready to Join the Family?</h2>
        <Button variant="ghost" className="bg-white text-brand-red hover:bg-black hover:text-white border-none">Start Your Team Order</Button>
      </div>

    </div>
  );
};
