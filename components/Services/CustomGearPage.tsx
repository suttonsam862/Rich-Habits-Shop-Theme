
import React, { useState } from 'react';
import { Play, ArrowRight, Upload, Check, PenTool, Truck, Package, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from '../UI/Button';

export const CustomGearPage: React.FC = () => {
  const [wizardStep, setWizardStep] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="bg-brand-black min-h-screen pt-24 text-white">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-[80vh] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2000&auto=format&fit=crop" 
            alt="Team Huddle" 
            className="w-full h-full object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-6xl md:text-8xl uppercase text-white leading-[0.9] mb-6">
              Elite Custom Gear<br/>
              For <span className="text-brand-red">Champions</span> & Brands
            </h1>
            <p className="text-xl text-neutral-300 mb-10 max-w-xl font-light">
              From concept to the podium. We engineer high-performance teamwear that defines your legacy.
            </p>
            <div className="flex gap-4">
              <Button onClick={() => document.getElementById('quote-wizard')?.scrollIntoView({ behavior: 'smooth'})}>Start Your Order</Button>
              <Button variant="outline" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth'})}>View Gallery</Button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TRUST BAR */}
      <div className="border-b border-white/10 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 py-8">
          <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4 text-center">Trusted by 60+ Organizations</p>
          <div className="flex justify-center md:justify-between items-center gap-8 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for Logos - using text for now to simulate */}
             <span className="font-display text-2xl">HOMEWOOD HS</span>
             <span className="font-display text-2xl">MORTIMER JORDAN</span>
             <span className="font-display text-2xl">RANGER 47</span>
             <span className="font-display text-2xl">IRONCLAD WC</span>
             <span className="font-display text-2xl">SPARTAN COMBAT</span>
          </div>
        </div>
      </div>

      {/* 3. PROCESS ROADMAP */}
      <div className="py-24 bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl uppercase mb-2">The Process</h2>
            <p className="text-neutral-400">From concept to mat in 4 simple steps.</p>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10 hidden md:block"></div>

            {[
              { icon: <PenTool />, title: "Submit Request", desc: "Tell us your vision" },
              { icon: <Upload />, title: "Design Mockup", desc: "We create the art" },
              { icon: <Check />, title: "Approve & Pay", desc: "Lock it in" },
              { icon: <Truck />, title: "Delivery", desc: "To your door" }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center bg-brand-black p-4 z-10 min-w-[200px]">
                <div className="w-16 h-16 rounded-full bg-[#121212] border border-white/20 flex items-center justify-center text-white mb-4 hover:border-brand-red hover:text-brand-red transition-colors shadow-2xl">
                  {React.cloneElement(step.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                </div>
                <h3 className="font-bold uppercase tracking-wide text-sm">{step.title}</h3>
                <p className="text-xs text-neutral-500 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. WIZARD FORM */}
      <div id="quote-wizard" className="py-24 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: Context */}
            <div className="lg:w-1/3">
               <span className="text-brand-red font-bold tracking-widest text-sm uppercase mb-2 block">Get A Quote</span>
               <h2 className="font-display text-5xl uppercase text-white mb-6">Start Your<br/>Legacy</h2>
               <p className="text-neutral-400 mb-8">
                 Complete the quick intake form to get started. Our design team will reach out within 24 hours with initial concepts.
               </p>
               <ul className="space-y-4">
                 <li className="flex items-center gap-3 text-sm text-neutral-300">
                   <Check className="w-4 h-4 text-brand-red" /> Free Design Consultation
                 </li>
                 <li className="flex items-center gap-3 text-sm text-neutral-300">
                   <Check className="w-4 h-4 text-brand-red" /> 4-Week Turnaround Available
                 </li>
                 <li className="flex items-center gap-3 text-sm text-neutral-300">
                   <Check className="w-4 h-4 text-brand-red" /> Minimum Order: 12 Units
                 </li>
               </ul>
            </div>

            {/* Right: Interactive Form */}
            <div className="lg:w-2/3 bg-[#121212] border border-white/5 p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                <div className="h-full bg-brand-red transition-all duration-500" style={{ width: `${(wizardStep / 4) * 100}%` }}></div>
              </div>

              {wizardStep === 1 && (
                <div className="animate-[fadeIn_0.5s_ease-out]">
                  <h3 className="font-display text-3xl uppercase mb-6">Step 1: Who is this for?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <button onClick={() => setWizardStep(2)} className="p-6 border border-white/10 hover:border-brand-red hover:bg-white/5 text-left transition-all group">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 group-hover:text-brand-red"><Package className="w-6 h-6"/></div>
                      <div className="font-bold uppercase text-lg">Wrestling Team</div>
                      <p className="text-sm text-neutral-500">Singlets, Warmups, Gear Bags</p>
                    </button>
                    <button onClick={() => setWizardStep(2)} className="p-6 border border-white/10 hover:border-brand-red hover:bg-white/5 text-left transition-all group">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4 group-hover:text-brand-red"><Truck className="w-6 h-6"/></div>
                      <div className="font-bold uppercase text-lg">Corporate / Brand</div>
                      <p className="text-sm text-neutral-500">Polos, Tees, Hats, Merch</p>
                    </button>
                  </div>
                </div>
              )}

              {wizardStep === 2 && (
                <div className="animate-[fadeIn_0.5s_ease-out]">
                  <button onClick={() => setWizardStep(1)} className="text-xs uppercase font-bold text-neutral-500 mb-4 hover:text-white">Back</button>
                  <h3 className="font-display text-3xl uppercase mb-6">Step 2: Select Items</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {['Singlets', 'Fight Shorts', 'Compression', 'Hoodies', 'T-Shirts', 'Accessories'].map(item => (
                      <label key={item} className="flex items-center gap-3 p-4 border border-white/10 cursor-pointer hover:bg-white/5">
                        <input type="checkbox" className="accent-brand-red w-4 h-4" />
                        <span className="font-bold text-sm uppercase">{item}</span>
                      </label>
                    ))}
                  </div>
                  <Button onClick={() => setWizardStep(3)} className="w-full">Next Step</Button>
                </div>
              )}

              {wizardStep === 3 && (
                <div className="animate-[fadeIn_0.5s_ease-out]">
                  <button onClick={() => setWizardStep(2)} className="text-xs uppercase font-bold text-neutral-500 mb-4 hover:text-white">Back</button>
                  <h3 className="font-display text-3xl uppercase mb-6">Step 3: Identity</h3>
                  <div className="border-2 border-dashed border-white/10 rounded-lg p-12 text-center mb-6 hover:border-brand-red/50 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto text-neutral-500 mb-4" />
                    <p className="font-bold uppercase mb-2">Upload Logo / Art</p>
                    <p className="text-xs text-neutral-500">AI, EPS, PDF, or PNG</p>
                  </div>
                  <textarea placeholder="Describe your design vision (Colors, Mascots, Vibes)..." className="w-full bg-black border border-white/10 p-4 text-white focus:border-brand-red focus:outline-none mb-6 h-32"></textarea>
                  <Button onClick={() => setWizardStep(4)} className="w-full">Next Step</Button>
                </div>
              )}

              {wizardStep === 4 && (
                <div className="animate-[fadeIn_0.5s_ease-out]">
                  <button onClick={() => setWizardStep(3)} className="text-xs uppercase font-bold text-neutral-500 mb-4 hover:text-white">Back</button>
                  <h3 className="font-display text-3xl uppercase mb-6">Step 4: Final Details</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="First Name" className="bg-black border border-white/10 p-3 focus:border-brand-red focus:outline-none"/>
                    <input type="text" placeholder="Last Name" className="bg-black border border-white/10 p-3 focus:border-brand-red focus:outline-none"/>
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full bg-black border border-white/10 p-3 mb-4 focus:border-brand-red focus:outline-none"/>
                  <input type="tel" placeholder="Phone Number" className="w-full bg-black border border-white/10 p-3 mb-6 focus:border-brand-red focus:outline-none"/>
                  <Button className="w-full">Submit Request</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 5. LOOKBOOK */}
      <div id="gallery" className="py-24">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="font-display text-4xl uppercase mb-2">Recent Work</h2>
          <div className="flex gap-4 text-sm font-bold text-neutral-500 uppercase tracking-widest mt-6">
            <button className="text-brand-red">All</button>
            <button className="hover:text-white">Wrestling</button>
            <button className="hover:text-white">Apparel</button>
            <button className="hover:text-white">Corporate</button>
          </div>
        </div>
        
        {/* Masonry Grid Simulation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 px-2">
          {[
            'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1626248941270-7567d2268043?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1555663759-345d92ee9cb7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
          ].map((src, idx) => (
            <div key={idx} className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
              <img src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Gallery Item" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-white border border-white px-4 py-2">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. FAQ SECTION */}
      <div className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-4xl uppercase text-center mb-12">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What is the standard turnaround time?", a: "Our standard production time is 3-4 weeks after artwork approval. Rush services are available for a fee." },
              { q: "Is there a minimum order quantity?", a: "Yes, custom orders require a minimum of 12 pieces per design. This allows us to maintain our premium manufacturing standards." },
              { q: "Do you help with logo design?", a: "Absolutely. Every custom order includes up to 3 hours of professional design time to perfect your team's identity." },
              { q: "Can we set up a team store?", a: "Yes! We build a dedicated, password-protected portal for your team so parents and athletes can order individually. We handle the logistics." }
            ].map((item, i) => (
              <div key={i} className="border border-white/10 bg-[#121212]">
                <button 
                  onClick={() => toggleAccordion(i)}
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold uppercase tracking-wide text-sm">{item.q}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeAccordion === i ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === i && (
                  <div className="p-6 pt-0 text-neutral-400 text-sm leading-relaxed border-t border-white/5">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
