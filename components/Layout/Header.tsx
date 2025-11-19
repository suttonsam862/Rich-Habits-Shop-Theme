
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag, ChevronDown, Sparkles } from 'lucide-react';
import { PageType } from '../../types';

interface HeaderProps {
  onNavigate: (page: PageType) => void;
  cartCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, cartCount = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTeamMenuOpen, setIsTeamMenuOpen] = useState(false);
  const [isEventMenuOpen, setIsEventMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: PageType) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    setIsTeamMenuOpen(false);
    setIsEventMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-brand-black/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav('home')} className="flex items-center gap-2 z-50 relative group shrink-0">
          <div className="w-10 h-10 bg-brand-red flex items-center justify-center font-display text-2xl text-white tracking-tighter group-hover:shadow-[0_0_15px_rgba(208,0,0,0.6)] transition-shadow clip-path-slant">
            RH
          </div>
          <span className="font-display text-2xl tracking-wide text-white hidden md:block">
            RICH HABITS
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <button onClick={() => handleNav('shop')} className="text-sm font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap">Shop</button>
          <button onClick={() => handleNav('about')} className="text-sm font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap">About</button>
          
          {/* Events Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center gap-1 text-sm font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap"
              onMouseEnter={() => setIsEventMenuOpen(true)}
            >
              Events <ChevronDown className="w-4 h-4" />
            </button>
            <div 
              className={`absolute top-full left-1/2 -translate-x-1/2 w-48 pt-6 transition-all duration-300 ${isEventMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}
              onMouseLeave={() => setIsEventMenuOpen(false)}
            >
              <div className="bg-[#1a1a1a] border border-white/10 p-2 shadow-2xl rounded-sm backdrop-blur-md">
                 <button onClick={() => handleNav('events')} className="block w-full text-left p-3 hover:bg-white/5 text-neutral-300 hover:text-white text-xs font-bold uppercase whitespace-nowrap">Upcoming</button>
                 <button onClick={() => handleNav('past-events')} className="block w-full text-left p-3 hover:bg-white/5 text-neutral-300 hover:text-white text-xs font-bold uppercase whitespace-nowrap">Past Events</button>
              </div>
            </div>
          </div>
          
          {/* Team Stores Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center gap-1 text-sm font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap"
              onMouseEnter={() => setIsTeamMenuOpen(true)}
            >
              Team Stores <ChevronDown className="w-4 h-4" />
            </button>
            
            {/* Mega Menu / Dropdown */}
            <div 
              className={`absolute top-full left-1/2 -translate-x-1/2 w-64 pt-6 transition-all duration-300 ${isTeamMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}`}
              onMouseLeave={() => setIsTeamMenuOpen(false)}
            >
              <div className="bg-[#1a1a1a] border border-white/10 p-4 shadow-2xl rounded-sm backdrop-blur-md">
                <div className="flex flex-col gap-2">
                  <button onClick={() => handleNav('team-store')} className="block text-left p-2 hover:bg-white/5 text-neutral-300 hover:text-white text-sm font-semibold uppercase whitespace-nowrap">Ranger 47</button>
                  <button onClick={() => handleNav('team-store')} className="block text-left p-2 hover:bg-white/5 text-neutral-300 hover:text-white text-sm font-semibold uppercase whitespace-nowrap">Brooks WC</button>
                  <button onClick={() => handleNav('team-store')} className="block text-left p-2 hover:bg-white/5 text-neutral-300 hover:text-white text-sm font-semibold uppercase whitespace-nowrap">Ironclad</button>
                  <div className="h-px bg-white/10 my-1"></div>
                  <button onClick={() => handleNav('teams')} className="block text-left p-2 text-brand-red hover:text-red-400 text-xs font-bold uppercase flex items-center gap-2 whitespace-nowrap">
                    View All Teams &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button onClick={() => handleNav('custom')} className="text-sm font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap">Custom</button>
          
          {/* AI Lab Button */}
          <button 
            onClick={() => handleNav('ai-lab')}
            className="flex items-center gap-2 px-4 py-1.5 border border-white/20 rounded-full text-sm font-bold text-white hover:bg-white hover:text-black transition-all uppercase tracking-widest group shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap"
          >
            <Sparkles className="w-3 h-3 text-brand-red group-hover:text-black" /> AI Gear Lab
          </button>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6 z-50 relative shrink-0">
          <button className="text-white hover:text-brand-red transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-white hover:text-brand-red transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-brand-red text-[10px] flex items-center justify-center rounded-full font-bold">{cartCount}</span>
          </button>
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <button onClick={() => handleNav('shop')} className="font-display text-4xl text-white hover:text-brand-red uppercase">Shop</button>
        <button onClick={() => handleNav('events')} className="font-display text-4xl text-white hover:text-brand-red uppercase">Events</button>
        <button onClick={() => handleNav('past-events')} className="font-display text-2xl text-neutral-400 hover:text-white uppercase">Past Events</button>
        <button onClick={() => handleNav('teams')} className="font-display text-4xl text-white hover:text-brand-red uppercase">Team Stores</button>
        <button onClick={() => handleNav('custom')} className="font-display text-4xl text-white hover:text-brand-red uppercase">Custom</button>
        <button onClick={() => handleNav('about')} className="font-display text-4xl text-white hover:text-brand-red uppercase">About</button>
        <button onClick={() => handleNav('ai-lab')} className="font-display text-4xl text-brand-red hover:text-white uppercase flex items-center gap-2"><Sparkles className="w-6 h-6" /> AI Gear Lab</button>
        <button onClick={() => handleNav('contact')} className="font-display text-4xl text-white hover:text-brand-red uppercase">Contact</button>
      </div>
    </header>
  );
};
