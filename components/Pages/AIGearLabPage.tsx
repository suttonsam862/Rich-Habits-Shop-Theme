
import React, { useState, useRef } from 'react';
import { 
  Sparkles, Layers, Save, RotateCcw, Shirt, Wand2, 
  User, Mail, Upload, Download, RefreshCw, Trash2, 
  Move, Maximize2, Image as ImageIcon 
} from 'lucide-react';

interface Design {
  id: string;
  name: string;
  garment: string;
  prompt: string;
  image: string; // The AI Pattern
  logo: string | null; // User uploaded logo
  logoPosition: string;
  colors: { primary: string; secondary: string };
  date: string;
}

type LogoZone = 'center_chest' | 'left_chest' | 'back_center' | 'left_leg' | 'right_sleeve';

export const AIGearLabPage: React.FC = () => {
  // View Mode
  const [mode, setMode] = useState<'start' | 'studio' | 'saved'>('start');
  
  // Studio State
  const [currentDesignName, setCurrentDesignName] = useState('Untitled Project');
  const [selectedGarment, setSelectedGarment] = useState<string>('singlet');
  const [prompt, setPrompt] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#D00000'); // Default Brand Red
  const [secondaryColor, setSecondaryColor] = useState('#000000');
  
  // AI State
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPattern, setGeneratedPattern] = useState<string | null>(null);
  
  // Logo State
  const [logoImage, setLogoImage] = useState<string | null>(null);
  const [logoZone, setLogoZone] = useState<LogoZone>('center_chest');
  const [logoScale, setLogoScale] = useState<number>(100); // percentage
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auth & Persistence
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [savedDesigns, setSavedDesigns] = useState<Design[]>([]);

  // --- Actions ---

  const handleReset = () => {
    if (confirm("Are you sure you want to clear the canvas?")) {
      setPrompt('');
      setGeneratedPattern(null);
      setLogoImage(null);
      setLogoZone('center_chest');
      setLogoScale(100);
      setPrimaryColor('#D00000');
      setSecondaryColor('#000000');
      setCurrentDesignName('Untitled Project');
    }
  };

  const handleExport = () => {
    // Simulate packing the design
    const designData = {
      name: currentDesignName,
      garment: selectedGarment,
      colors: { primary: primaryColor, secondary: secondaryColor },
      prompt,
      timestamp: new Date().toISOString()
    };
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(designData));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${currentDesignName.replace(/\s+/g, '_')}_specs.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    
    alert("Design Specification Exported. In a real app, this would download the high-res composite image.");
  };

  const handleGenerate = () => {
    if (!prompt) {
      alert("Please enter a design prompt first.");
      return;
    }
    setIsGenerating(true);
    // Simulate AI generation delay
    setTimeout(() => {
      setIsGenerating(false);
      // Use a pattern placeholder to simulate AI texture generation
      setGeneratedPattern('https://www.transparenttextures.com/patterns/cubes.png'); 
    }, 2000);
  };

  const handleSave = () => {
    if (!isLoggedIn) {
      setShowAuthModal(true);
      return;
    }
    
    const newDesign: Design = {
      id: Date.now().toString(),
      name: currentDesignName,
      garment: selectedGarment,
      prompt: prompt,
      image: generatedPattern || '',
      logo: logoImage,
      logoPosition: logoZone,
      colors: { primary: primaryColor, secondary: secondaryColor },
      date: new Date().toLocaleDateString()
    };
    
    setSavedDesigns([...savedDesigns, newDesign]);
    alert('Design Saved to Locker!');
  };

  const handleLoadDesign = (design: Design) => {
    setCurrentDesignName(design.name);
    setSelectedGarment(design.garment);
    setPrompt(design.prompt);
    setGeneratedPattern(design.image || null);
    setLogoImage(design.logo);
    setLogoZone(design.logoPosition as LogoZone);
    setPrimaryColor(design.colors.primary);
    setSecondaryColor(design.colors.secondary);
    setMode('studio');
  };

  const handleInquiry = () => {
    if (!generatedPattern && !prompt && !logoImage) {
      alert('Canvas is empty. Please design something first.');
      return;
    }
    const subject = `Custom Gear Inquiry: ${currentDesignName}`;
    const body = `Hi Rich Habits Team,\n\nSpec Sheet:\n- Garment: ${selectedGarment}\n- Primary Color: ${primaryColor}\n- AI Prompt: ${prompt}\n- Logo Included: ${logoImage ? 'Yes' : 'No'}\n\n[Please attach any additional references]\n\nBest,\n[My Name]`;
    window.location.href = `mailto:teams@rich-habits.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowAuthModal(false);
  };

  // --- Helpers ---

  const getLogoStyles = () => {
    const baseSize = 150; // Base pixel size for logo container
    const scale = logoScale / 100;
    
    const common = {
      width: `${baseSize * scale}px`,
      position: 'absolute' as 'absolute',
      zIndex: 15, // Above Pattern (0) but Below Shadows (20)
      transition: 'all 0.3s ease',
    };

    switch (logoZone) {
      case 'left_chest':
        return { ...common, top: '25%', left: '55%', transform: 'translateX(-50%)' };
      case 'center_chest':
        return { ...common, top: '25%', left: '50%', transform: 'translateX(-50%)' };
      case 'back_center':
        return { ...common, top: '30%', left: '50%', transform: 'translateX(-50%)', opacity: 0.9 }; // Simulating back
      case 'left_leg':
        return { ...common, top: '60%', left: '65%', transform: 'translateX(-50%)' };
      case 'right_sleeve':
        return { ...common, top: '20%', left: '25%', transform: 'rotate(15deg)' };
      default:
        return common;
    }
  };

  // --- Render Modes ---

  if (mode === 'start') {
    return (
      <div className="min-h-screen bg-brand-black pt-32 pb-24 relative overflow-hidden flex flex-col items-center justify-center">
        {/* Ambient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[120px] animate-pulse"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex bg-white/5 border border-white/10 rounded-full px-4 py-1 mb-6 items-center gap-2 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-brand-red" />
            <span className="text-xs font-bold uppercase tracking-widest text-white">AI Gear Lab Beta</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl uppercase text-center mb-6">Forge Your Future</h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg mb-12">
            The world's first neural sportswear engine. Describe your vision, upload your logo, and build your legacy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            {/* Cards */}
            <button onClick={() => setMode('studio')} className="group relative bg-[#121212] border border-white/10 hover:border-brand-red p-8 rounded-sm text-left transition-all hover:-translate-y-2">
              <div className="h-40 bg-black mb-6 flex items-center justify-center group-hover:bg-brand-red/10 transition-colors">
                <Shirt className="w-16 h-16 text-neutral-600 group-hover:text-brand-red" />
              </div>
              <h3 className="font-display text-3xl uppercase text-white mb-2">Single Item</h3>
              <p className="text-neutral-500 text-sm">Design a one-off piece.</p>
            </button>

            <button onClick={() => setMode('studio')} className="group relative bg-[#121212] border border-white/10 hover:border-brand-red p-8 rounded-sm text-left transition-all hover:-translate-y-2">
              <div className="absolute -top-2 -right-2 bg-brand-red text-white text-[10px] font-bold uppercase px-2 py-1">Popular</div>
              <div className="h-40 bg-black mb-6 flex items-center justify-center group-hover:bg-brand-red/10 transition-colors">
                <Layers className="w-16 h-16 text-neutral-600 group-hover:text-brand-red" />
              </div>
              <h3 className="font-display text-3xl uppercase text-white mb-2">Team Bundle</h3>
              <p className="text-neutral-500 text-sm">Singlet, Warmup, Shorts.</p>
            </button>
            
            <button onClick={() => isLoggedIn ? setMode('saved') : setShowAuthModal(true)} className="group relative bg-[#121212] border border-white/10 hover:border-brand-red p-8 rounded-sm text-left transition-all hover:-translate-y-2">
               <div className="h-40 bg-black mb-6 flex items-center justify-center group-hover:bg-brand-red/10 transition-colors">
                 {isLoggedIn ? <Save className="w-16 h-16 text-neutral-600 group-hover:text-brand-red" /> : <User className="w-16 h-16 text-neutral-600 group-hover:text-brand-red" />}
               </div>
               <h3 className="font-display text-3xl uppercase text-white mb-2">{isLoggedIn ? 'My Locker' : 'Login'}</h3>
               <p className="text-neutral-500 text-sm">Access saved gear.</p>
            </button>
          </div>
        </div>

        {/* Auth Modal */}
        {showAuthModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
             <div className="bg-[#121212] border border-white/10 p-8 max-w-md w-full rounded-sm">
                <h2 className="font-display text-3xl uppercase text-white mb-6">Join The Club</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                   <input type="email" placeholder="Email" className="w-full bg-black border border-white/10 p-3 text-white focus:border-brand-red focus:outline-none" required />
                   <input type="password" placeholder="Password" className="w-full bg-black border border-white/10 p-3 text-white focus:border-brand-red focus:outline-none" required />
                   <button type="submit" className="w-full bg-brand-red py-3 text-white font-bold uppercase hover:bg-red-700 transition-colors">Sign In / Register</button>
                </form>
                <button onClick={() => setShowAuthModal(false)} className="mt-4 text-sm text-neutral-500 hover:text-white w-full text-center">Cancel</button>
             </div>
          </div>
        )}
      </div>
    );
  }

  if (mode === 'saved') {
    return (
      <div className="min-h-screen bg-brand-black pt-32 p-8">
         <div className="container mx-auto">
           <div className="flex items-center gap-4 mb-8">
              <button onClick={() => setMode('start')} className="p-2 border border-white/10 hover:bg-white hover:text-black transition-colors"><RotateCcw className="w-4 h-4"/></button>
              <h1 className="font-display text-4xl uppercase text-white">My Locker</h1>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {savedDesigns.map(design => (
                 <div key={design.id} className="bg-[#121212] border border-white/10 p-4 group">
                    <div className="aspect-square bg-black mb-4 overflow-hidden relative">
                       <div className="absolute inset-0" style={{ backgroundColor: design.colors.primary }}>
                          {design.image && <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `url(${design.image})`, backgroundSize: 'cover' }}></div>}
                       </div> 
                       <div className="absolute inset-0 flex items-center justify-center">
                         <Shirt className="w-24 h-24 text-white/20 mix-blend-overlay" />
                       </div>
                       {/* Mini Logo Preview */}
                       {design.logo && <img src={design.logo} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 object-contain" alt="logo" />}
                    </div>
                    <h3 className="font-display text-2xl text-white uppercase">{design.name}</h3>
                    <p className="text-xs text-neutral-500 mb-4">{design.garment} • {design.date}</p>
                    <button onClick={() => handleLoadDesign(design)} className="w-full border border-white/20 py-2 text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors">Load Design</button>
                 </div>
              ))}
              {savedDesigns.length === 0 && <p className="text-neutral-500">No saved designs yet.</p>}
           </div>
         </div>
      </div>
    );
  }

  // --- STUDIO MODE ---
  return (
    <div className="h-screen bg-[#050505] flex flex-col overflow-hidden text-white pt-24">
      
      {/* Studio Header */}
      <div className="h-16 border-b border-white/5 bg-[#0a0a0a] px-6 flex items-center justify-between shrink-0 z-30">
         <div className="flex items-center gap-4">
           <button onClick={() => setMode('start')} className="text-neutral-500 hover:text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <RotateCcw className="w-3 h-3" /> Exit
           </button>
           <div className="h-4 w-px bg-white/10"></div>
           <input 
             type="text" 
             value={currentDesignName} 
             onChange={(e) => setCurrentDesignName(e.target.value)} 
             className="bg-transparent font-display text-xl uppercase focus:outline-none text-white w-64 placeholder-neutral-700" 
             placeholder="PROJECT NAME"
           />
         </div>
         <div className="flex gap-2">
           <button onClick={handleReset} title="Reset Canvas" className="p-2 text-neutral-400 hover:text-brand-red transition-colors">
              <RefreshCw className="w-4 h-4" />
           </button>
           <button onClick={handleExport} title="Export Specs" className="p-2 text-neutral-400 hover:text-white transition-colors">
              <Download className="w-4 h-4" />
           </button>
           <button onClick={handleSave} title="Save Project" className="p-2 text-neutral-400 hover:text-white flex items-center gap-2 text-xs font-bold uppercase bg-white/5 px-4 rounded-sm mx-2">
             <Save className="w-4 h-4"/> Save
           </button>
           <button onClick={handleInquiry} className="bg-brand-red text-white px-4 py-2 text-xs font-bold uppercase flex items-center gap-2 hover:bg-red-700 transition-colors">
             <Mail className="w-3 h-3" /> Submit Inquiry
           </button>
         </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden h-[calc(100vh-10rem)]">
        
        {/* Left: Garment Selector */}
        <div className="w-64 bg-[#0a0a0a] border-r border-white/5 flex flex-col shrink-0 z-20 overflow-y-auto scrollbar-hide">
          <div className="p-4 border-b border-white/5 bg-[#0e0e0e] sticky top-0">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Garment</span>
          </div>
          <div className="p-2 space-y-2">
            {['Singlet', 'Doublet', 'Fight Shorts', 'Rashguard', 'Hoodie', 'Joggers', 'T-Shirt'].map(item => (
              <button 
                key={item}
                onClick={() => setSelectedGarment(item.toLowerCase())}
                className={`w-full text-left p-3 rounded-sm text-sm font-bold uppercase transition-colors flex items-center justify-between ${selectedGarment === item.toLowerCase() ? 'bg-white/10 text-white border-l-2 border-brand-red' : 'text-neutral-400 hover:bg-white/5'}`}
              >
                {item}
                {selectedGarment === item.toLowerCase() && <Shirt className="w-4 h-4 text-brand-red" />}
              </button>
            ))}
          </div>
        </div>

        {/* Center: Canvas */}
        <div className="flex-1 bg-[#050505] relative flex items-center justify-center p-12 overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          {/* Canvas Container */}
          <div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4] transition-all duration-500">
            
            {/* Loading Overlay */}
            {isGenerating && (
              <div className="absolute inset-0 z-50 bg-black/80 flex flex-col items-center justify-center backdrop-blur-sm border border-brand-red/50 shadow-[0_0_50px_rgba(208,0,0,0.2)] rounded-sm">
                 <div className="w-16 h-16 border-t-2 border-l-2 border-brand-red rounded-full animate-spin mb-4"></div>
                 <span className="text-brand-red font-display text-2xl uppercase animate-pulse">Rendering...</span>
              </div>
            )}
            
            {/* The Garment Stack */}
            <div className={`w-full h-full bg-[#0f0f0f] border border-white/10 rounded-sm shadow-2xl overflow-hidden relative group ${isGenerating ? 'scale-95' : 'scale-100'}`}>
              
              {/* Layer 1: Base Color + AI Design */}
              <div 
                 className="absolute inset-0 w-full h-full transition-all duration-500"
                 style={{ 
                    backgroundColor: primaryColor, 
                    backgroundImage: generatedPattern ? `url(${generatedPattern})` : 'none',
                    backgroundSize: 'cover',
                    filter: 'contrast(1.1) brightness(0.9)'
                 }}
              ></div>

              {/* Layer 2: User Logo (Under Texture) */}
              {logoImage && (
                <div style={getLogoStyles()}>
                  <img 
                    src={logoImage} 
                    alt="User Logo" 
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                  {/* Selection Box Indicator (Visual Only) */}
                  <div className="absolute inset-0 border border-white/30 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
                </div>
              )}

              {/* Layer 3: Garment Texture (Shadows/Wrinkles) - Multiply Blend */}
              <div className="absolute inset-0 w-full h-full z-20 mix-blend-multiply pointer-events-none select-none">
                 <img 
                   src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop" 
                   className="w-full h-full object-cover grayscale contrast-125 opacity-70"
                   alt="Texture Map"
                 />
              </div>

              {/* Layer 4: Highlights - Overlay Blend */}
              <div className="absolute inset-0 w-full h-full z-30 bg-gradient-to-tr from-transparent via-white/10 to-transparent mix-blend-overlay pointer-events-none"></div>

              {!generatedPattern && !logoImage && (
                <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
                  <p className="text-white/20 font-display text-4xl uppercase rotate-[-45deg]">Wireframe</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: AI Command Center */}
        <div className="w-80 bg-[#0a0a0a] border-l border-white/5 flex flex-col shrink-0 z-20 overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-[#0e0e0e]">
             <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-2">
               <Sparkles className="w-3 h-3" /> Configuration
             </span>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-brand-red/20">
            
            {/* 1. Colors */}
            <div className="mb-8">
               <label className="block text-xs font-bold text-white uppercase mb-3 flex items-center gap-2"><Layers className="w-3 h-3" /> Base Colors</label>
               <div className="grid grid-cols-2 gap-3">
                 <div className="space-y-1">
                    <span className="text-[10px] text-neutral-500 uppercase">Primary</span>
                    <div className="flex items-center gap-2 bg-black p-1 border border-white/10 rounded-sm">
                      <input 
                        type="color" 
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="w-8 h-8 cursor-pointer border-none p-0 bg-transparent"
                      />
                      <span className="text-xs text-neutral-400 font-mono">{primaryColor}</span>
                    </div>
                 </div>
                 <div className="space-y-1">
                    <span className="text-[10px] text-neutral-500 uppercase">Accent</span>
                    <div className="flex items-center gap-2 bg-black p-1 border border-white/10 rounded-sm">
                      <input 
                        type="color" 
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="w-8 h-8 cursor-pointer border-none p-0 bg-transparent"
                      />
                      <span className="text-xs text-neutral-400 font-mono">{secondaryColor}</span>
                    </div>
                 </div>
               </div>
            </div>

            {/* 2. Logo Upload */}
            <div className="mb-8 pb-8 border-b border-white/5">
               <label className="block text-xs font-bold text-white uppercase mb-3 flex items-center gap-2"><ImageIcon className="w-3 h-3" /> Team Branding</label>
               
               <input 
                 type="file" 
                 ref={fileInputRef}
                 onChange={handleLogoUpload}
                 className="hidden" 
                 accept="image/png, image/jpeg, image/svg+xml"
               />

               {!logoImage ? (
                 <button 
                   onClick={() => fileInputRef.current?.click()}
                   className="w-full py-6 border-2 border-dashed border-white/10 rounded-sm hover:border-brand-red hover:bg-white/5 transition-all flex flex-col items-center gap-2 text-neutral-500 hover:text-white"
                 >
                   <Upload className="w-6 h-6" />
                   <span className="text-xs uppercase font-bold">Upload Logo</span>
                 </button>
               ) : (
                 <div className="space-y-4">
                    <div className="relative bg-white/5 p-2 rounded-sm flex items-center gap-3">
                       <img src={logoImage} className="w-10 h-10 object-contain bg-black/50 rounded-sm" alt="preview" />
                       <div className="flex-1 overflow-hidden">
                         <p className="text-xs text-white truncate">logo_upload.png</p>
                         <button onClick={() => setLogoImage(null)} className="text-[10px] text-red-500 hover:text-red-400 flex items-center gap-1 mt-1"><Trash2 className="w-3 h-3"/> Remove</button>
                       </div>
                    </div>

                    {/* Placement Controls */}
                    <div>
                       <label className="text-[10px] text-neutral-500 uppercase mb-2 block">Placement</label>
                       <div className="grid grid-cols-2 gap-2">
                          {['center_chest', 'left_chest', 'back_center', 'left_leg'].map(zone => (
                            <button 
                              key={zone}
                              onClick={() => setLogoZone(zone as LogoZone)}
                              className={`px-2 py-2 text-[10px] uppercase font-bold border ${logoZone === zone ? 'bg-white text-black border-white' : 'bg-transparent text-neutral-500 border-white/10 hover:border-white/30'}`}
                            >
                              {zone.replace('_', ' ')}
                            </button>
                          ))}
                       </div>
                    </div>

                    {/* Scale Control */}
                    <div>
                       <label className="text-[10px] text-neutral-500 uppercase mb-2 block flex justify-between">
                         <span>Scale</span>
                         <span>{logoScale}%</span>
                       </label>
                       <input 
                         type="range" 
                         min="20" 
                         max="200" 
                         value={logoScale} 
                         onChange={(e) => setLogoScale(Number(e.target.value))}
                         className="w-full accent-brand-red h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
                       />
                    </div>
                 </div>
               )}
            </div>

            {/* 3. AI Prompt */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-white uppercase mb-2 flex items-center gap-2"><Wand2 className="w-3 h-3" /> AI Texture Gen</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe pattern (e.g. 'Carbon fiber weave with electric blue lightning strikes')..."
                className="w-full h-24 bg-black border border-white/10 p-3 text-sm text-white focus:border-brand-red focus:outline-none rounded-sm resize-none placeholder-neutral-600"
              ></textarea>
            </div>

          </div>

          <div className="p-4 border-t border-white/5 bg-[#0e0e0e]">
            <button 
              onClick={handleGenerate}
              disabled={!prompt || isGenerating}
              className={`w-full py-4 uppercase font-bold tracking-widest text-sm transition-all ${!prompt || isGenerating ? 'bg-neutral-800 text-neutral-500' : 'bg-brand-red text-white hover:shadow-[0_0_20px_rgba(208,0,0,0.4)]'}`}
            >
              {isGenerating ? 'Generating...' : 'Generate Texture'}
            </button>
          </div>
        </div>

      </div>
      
      {/* Auth Modal */}
      {showAuthModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
             <div className="bg-[#121212] border border-white/10 p-8 max-w-md w-full rounded-sm animate-[fadeIn_0.3s_ease-out]">
                <h2 className="font-display text-3xl uppercase text-white mb-6">Save To Locker</h2>
                <p className="text-neutral-400 mb-4 text-sm">Create an account to save your custom gear designs.</p>
                <form onSubmit={handleLogin} className="space-y-4">
                   <input type="email" placeholder="Email" className="w-full bg-black border border-white/10 p-3 text-white focus:border-brand-red focus:outline-none" required />
                   <input type="password" placeholder="Password" className="w-full bg-black border border-white/10 p-3 text-white focus:border-brand-red focus:outline-none" required />
                   <button type="submit" className="w-full bg-brand-red py-3 text-white font-bold uppercase hover:bg-red-700 transition-colors">Sign In & Save</button>
                </form>
                <button onClick={() => setShowAuthModal(false)} className="mt-4 text-xs font-bold uppercase text-neutral-500 hover:text-white w-full text-center">Cancel</button>
             </div>
          </div>
      )}
    </div>
  );
};