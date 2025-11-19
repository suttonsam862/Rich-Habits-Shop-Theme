import React from 'react';
import { Event } from '../../types';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const EVENTS: Event[] = [
  { id: 'e1', title: 'Panther Train Tour', date: 'OCT 15', location: 'Denver, CO', type: 'Camp' },
  { id: 'e2', title: 'Winter Takedown Challenge', date: 'NOV 02', location: 'State College, PA', type: 'Tournament' },
  { id: 'e3', title: 'Elite National Duals', date: 'DEC 12', location: 'Virginia Beach, VA', type: 'Dual' },
  { id: 'e4', title: 'New Year Scramble', date: 'JAN 05', location: 'Atlantic City, NJ', type: 'Tournament' },
];

export const EventCalendar: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-brand-black relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex items-end justify-between">
           <h2 className="font-display text-5xl md:text-6xl uppercase text-white">Upcoming<br /><span className="text-brand-red">Battles</span></h2>
           <button className="hidden md:flex items-center gap-2 text-white hover:text-brand-red transition-colors uppercase font-bold tracking-widest text-sm">
             View All Events <ArrowRight className="w-4 h-4" />
           </button>
        </div>

        <div className="flex flex-col">
          {EVENTS.map((event) => (
            <div key={event.id} className="group flex flex-col md:flex-row items-center justify-between border-b border-white/10 py-8 hover:bg-white/5 transition-colors px-4">
              {/* Date */}
              <div className="w-full md:w-1/6 mb-4 md:mb-0">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-brand-red" />
                  <span className="font-display text-3xl text-white tracking-wide">{event.date}</span>
                </div>
              </div>

              {/* Info */}
              <div className="w-full md:w-3/6 mb-4 md:mb-0 flex flex-col justify-center">
                <span className="text-xs font-bold text-brand-red uppercase tracking-widest mb-1">{event.type}</span>
                <h3 className="font-sans font-bold text-xl text-white">{event.title}</h3>
                <div className="flex items-center gap-2 text-neutral-500 mt-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>

              {/* Action */}
              <div className="w-full md:w-2/6 flex justify-start md:justify-end">
                <button className="px-6 py-3 border border-white/20 text-white uppercase font-bold text-xs tracking-widest hover:bg-white hover:text-black transition-all w-full md:w-auto text-center">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};