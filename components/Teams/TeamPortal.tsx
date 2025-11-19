import React from 'react';
import { Shield, ArrowUpRight } from 'lucide-react';
import { Team } from '../../types';

const TEAMS: Team[] = [
  { id: 't1', name: 'Ranger 47', location: 'Austin, TX', image: 'https://images.unsplash.com/photo-1517167637867-e7de8d6f680d?q=80&w=800&auto=format&fit=crop' },
  { id: 't2', name: 'Brooks WC', location: 'Chicago, IL', image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800&auto=format&fit=crop' },
  { id: 't3', name: 'Ironclad', location: 'Pittsburgh, PA', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop' },
  { id: 't4', name: 'Viper Elite', location: 'Las Vegas, NV', image: 'https://images.unsplash.com/photo-1591117207239-78898f1c15eb?q=80&w=800&auto=format&fit=crop' },
  { id: 't5', name: 'Titan Mat Club', location: 'Columbus, OH', image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop' },
  { id: 't6', name: 'Spartan Edge', location: 'Norfolk, VA', image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=800&auto=format&fit=crop' },
];

export const TeamPortal: React.FC = () => {
  return (
    <section id="teams" className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-brand-red font-bold tracking-widest text-sm uppercase mb-2 block">Exclusive Access</span>
            <h2 className="font-display text-5xl md:text-6xl uppercase text-white">Team Portals</h2>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-neutral-400 max-w-xs text-right">
              Enter your team's dedicated store to access exclusive custom gear packs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAMS.map((team) => (
            <div key={team.id} className="group relative h-64 overflow-hidden cursor-pointer border border-white/5 hover:border-brand-red/50 transition-colors">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={team.image} 
                  alt={team.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <Shield className="w-8 h-8 text-white/50 group-hover:text-brand-red transition-colors" />
                  <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-display text-3xl text-white uppercase tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{team.name}</h3>
                  <p className="text-neutral-400 text-sm uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{team.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};