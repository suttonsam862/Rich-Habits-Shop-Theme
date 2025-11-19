
import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="font-display text-4xl text-white uppercase tracking-wide mb-2">Rich Habits</h2>
            <p className="text-neutral-500 text-sm max-w-xs">
              Elevating the sport through design, performance, and community.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-400 hover:text-brand-red transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="text-neutral-400 hover:text-brand-red transition-colors"><Facebook className="w-6 h-6" /></a>
            <a href="#" className="text-neutral-400 hover:text-brand-red transition-colors"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="text-neutral-400 hover:text-brand-red transition-colors"><Youtube className="w-6 h-6" /></a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-600 text-xs uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Rich Habits. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
