
import JSZip from 'jszip';

// --- 1. Assets ---

const themeCss = `
:root {
  --brand-black: #050505;
  --brand-charcoal: #121212;
  --brand-red: #D00000;
  --text-white: #FFFFFF;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: var(--brand-black); 
}
::-webkit-scrollbar-thumb {
  background: #333; 
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--brand-red); 
}

/* Utility to hide scrollbar but keep functionality */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.clip-path-slant { 
  clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%); 
}
`;

const themeJs = `
// Tailwind Config for Runtime
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          black: 'var(--brand-black)',
          charcoal: 'var(--brand-charcoal)',
          red: 'var(--brand-red)', 
          glass: 'rgba(18, 18, 18, 0.7)',
        }
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'spotlight': 'radial-gradient(circle at center, rgba(50,50,50,0.4) 0%, var(--brand-black) 70%)',
        'red-glow': 'radial-gradient(circle at center, rgba(208,0,0,0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  }
}
`;

// --- 2. Config ---
const settingsSchema = `[
  {
    "name": "theme_info",
    "theme_name": "Rich Habits Pro",
    "theme_author": "Rich Habits Dev",
    "theme_version": "3.5.0"
  },
  {
    "name": "Colors",
    "settings": [
      { "type": "color", "id": "bg_color", "label": "Background Base", "default": "#050505" },
      { "type": "color", "id": "card_bg_color", "label": "Card Background", "default": "#121212" },
      { "type": "color", "id": "text_color", "label": "Primary Text", "default": "#FFFFFF" },
      { "type": "color", "id": "accent_color", "label": "Accent Color", "default": "#D00000" }
    ]
  }
]`;

// --- 3. Layout ---
const themeLiquid = `<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>{{ page_title }} - {{ shop.name }}</title>
    
    <!-- Tailwind CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">

    <!-- Theme Assets -->
    {{ 'theme.css' | asset_url | stylesheet_tag }}
    {{ 'theme.js' | asset_url | script_tag }}

    <!-- Shopify Hooks -->
    {{ content_for_header }}
    
    <style>
      /* Dynamic Settings Overrides */
      :root {
        --brand-black: {{ settings.bg_color }};
        --brand-charcoal: {{ settings.card_bg_color }};
        --brand-red: {{ settings.accent_color }};
        --text-white: {{ settings.text_color }};
      }
      body { background-color: var(--brand-black); color: var(--text-white); font-family: 'Inter', sans-serif; }
    </style>
  </head>
  <body class="antialiased selection:bg-brand-red selection:text-white">
    {% section 'header' %}
    
    <main id="MainContent" role="main" tabindex="-1" class="overflow-x-hidden">
      {{ content_for_layout }}
    </main>
    
    {% section 'footer' %}
  </body>
</html>`;

// --- 4. Sections ---

const headerSection = `
<div class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5"
     style="background-color: rgba(5,5,5,0.9); backdrop-filter: blur(20px);">
  <div class="container mx-auto px-6 py-4 flex items-center justify-between">
    <a href="/" class="flex items-center gap-2 group shrink-0">
       <div class="w-10 h-10 flex items-center justify-center font-display text-2xl text-white tracking-tighter" style="background-color: {{ settings.accent_color }}">RH</div>
       <span class="font-display text-2xl tracking-wide text-white hidden md:block">{{ shop.name }}</span>
    </a>
    <nav class="hidden lg:flex items-center gap-6 xl:gap-8">
      {% for link in linklists.main-menu.links %}
        <a href="{{ link.url }}" class="text-sm font-bold uppercase tracking-widest hover:text-white transition-colors whitespace-nowrap" style="color: #A3A3A3">{{ link.title }}</a>
      {% endfor %}
      <a href="/pages/shop" class="text-sm font-bold uppercase tracking-widest hover:text-white transition-colors whitespace-nowrap" style="color: #A3A3A3">Shop</a>
      <a href="/pages/about" class="text-sm font-bold uppercase tracking-widest hover:text-white transition-colors whitespace-nowrap" style="color: #A3A3A3">About</a>
      <a href="/pages/custom-gear" class="text-sm font-bold uppercase tracking-widest hover:text-white transition-colors whitespace-nowrap" style="color: #A3A3A3">Custom</a>
      <a href="/pages/ai-gear-lab" class="flex items-center gap-2 px-4 py-1.5 border border-white/20 rounded-full text-sm font-bold text-white hover:bg-white hover:text-black transition-all uppercase tracking-widest whitespace-nowrap">
        AI Gear Lab
      </a>
    </nav>
    <div class="flex gap-4 shrink-0">
      <a href="{{ routes.cart_url }}" class="text-white hover:text-brand-red"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></a>
    </div>
  </div>
</div>
{% schema %}
{
  "name": "Header",
  "settings": []
}
{% endschema %}`;

const footerSection = `
<footer class="bg-brand-black py-16 border-t border-white/5">
  <div class="container mx-auto px-6">
    <div class="flex flex-col md:flex-row justify-between items-center mb-12">
      <div class="mb-8 md:mb-0 text-center md:text-left">
        <h2 class="font-display text-4xl text-white uppercase tracking-wide mb-2">{{ shop.name }}</h2>
        <p class="text-neutral-500 text-sm max-w-xs">
          Elevating the sport through design, performance, and community.
        </p>
      </div>
      <div class="flex gap-6">
        <!-- Social Icons Placeholders -->
        <a href="#" class="text-neutral-400 hover:text-brand-red">INSTAGRAM</a>
        <a href="#" class="text-neutral-400 hover:text-brand-red">FACEBOOK</a>
      </div>
    </div>
    
    <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-neutral-600 text-xs uppercase tracking-widest">
      <p>&copy; {{ "now" | date: "%Y" }} {{ shop.name }}. All Rights Reserved.</p>
    </div>
  </div>
</footer>
{% schema %}
{
  "name": "Footer",
  "settings": []
}
{% endschema %}`;

const heroVideoSection = `
<section class="relative h-screen w-full overflow-hidden bg-brand-black flex items-center justify-center">
  <!-- Background Image/Video -->
  <div class="absolute inset-0 z-0">
    {% if section.settings.video_url != blank %}
      <video autoplay loop muted playsinline class="w-full h-full object-cover opacity-60 scale-105">
        <source src="{{ section.settings.video_url }}" type="video/mp4">
      </video>
    {% else %}
      <img 
        src="{{ section.settings.image | image_url: width: 2000 }}" 
        alt="Wrestling Training" 
        class="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
      />
    {% endif %}
    <!-- Gradients -->
    <div class="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black"></div>
  </div>

  <!-- Content -->
  <div class="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
    <div class="mb-6 inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full">
      <span class="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
      <span class="text-xs font-bold uppercase tracking-widest text-neutral-300">{{ section.settings.badge_text }}</span>
    </div>
    
    <h1 class="font-display text-7xl md:text-9xl uppercase text-white leading-[0.85] mb-8 tracking-tighter drop-shadow-2xl">
      {{ section.settings.title_line_1 }}<br />
      <span class="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">{{ section.settings.title_line_2 }}</span>
    </h1>
    
    <div class="flex flex-col md:flex-row gap-4 w-full md:w-auto">
      <a href="{{ section.settings.cta_link }}" class="uppercase font-sans font-bold tracking-wider px-8 py-4 bg-brand-red text-white hover:bg-red-700 hover:shadow-[0_0_20px_rgba(208,0,0,0.5)] transition-all clip-path-slant flex items-center justify-center gap-2">
        {{ section.settings.cta_text }}
      </a>
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Hero Video",
  "settings": [
    { "type": "image_picker", "id": "image", "label": "Background Image" },
    { "type": "text", "id": "video_url", "label": "Video URL (MP4)" },
    { "type": "text", "id": "badge_text", "label": "Badge Text", "default": "New Season Gear Dropped" },
    { "type": "text", "id": "title_line_1", "label": "Title Line 1", "default": "Train Like" },
    { "type": "text", "id": "title_line_2", "label": "Title Line 2", "default": "A Pro" },
    { "type": "text", "id": "cta_text", "label": "Button Text", "default": "Shop Retail" },
    { "type": "url", "id": "cta_link", "label": "Button Link" }
  ],
  "presets": [
    { "name": "Hero Video" }
  ]
}
{% endschema %}`;

const teamPortalGridSection = `
<section class="py-24 bg-brand-black">
  <div class="container mx-auto px-6">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
      <div>
        <span class="text-brand-red font-bold tracking-widest text-sm uppercase mb-2 block">{{ section.settings.subtitle }}</span>
        <h2 class="font-display text-5xl md:text-6xl uppercase text-white">{{ section.settings.title }}</h2>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {% for block in section.blocks %}
        <div class="group relative h-64 overflow-hidden cursor-pointer border border-white/5 hover:border-brand-red/50 transition-colors">
          <div class="absolute inset-0">
            {% if block.settings.image %}
              <img src="{{ block.settings.image | image_url: width: 800 }}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700">
            {% else %}
              <div class="w-full h-full bg-neutral-800"></div>
            {% endif %}
            <div class="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition-colors duration-500"></div>
          </div>
          <div class="absolute inset-0 p-8 flex flex-col justify-between">
            <div>
              <h3 class="font-display text-3xl text-white uppercase tracking-wide">{{ block.settings.title }}</h3>
              <p class="text-neutral-400 text-sm uppercase tracking-widest mt-1">{{ block.settings.location }}</p>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Team Portal Grid",
  "settings": [
    { "type": "text", "id": "title", "label": "Title", "default": "Team Portals" },
    { "type": "text", "id": "subtitle", "label": "Subtitle", "default": "Exclusive Access" }
  ],
  "blocks": [
    {
      "type": "team",
      "name": "Team",
      "settings": [
        { "type": "text", "id": "title", "label": "Team Name" },
        { "type": "text", "id": "location", "label": "Location" },
        { "type": "image_picker", "id": "image", "label": "Image" }
      ]
    }
  ],
  "presets": [
    { "name": "Team Portal Grid" }
  ]
}
{% endschema %}`;

const customGearServiceSection = `
<section class="bg-brand-charcoal min-h-screen flex flex-col lg:flex-row">
  <div class="lg:w-1/2 relative min-h-[50vh] lg:min-h-auto overflow-hidden">
    {% if section.settings.image %}
      <img src="{{ section.settings.image | image_url: width: 1500 }}" class="absolute inset-0 w-full h-full object-cover">
    {% else %}
      <div class="absolute inset-0 w-full h-full bg-neutral-800"></div>
    {% endif %}
    <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
  </div>

  <div class="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-brand-charcoal relative border-l border-white/5">
    <span class="text-brand-red font-bold tracking-widest text-sm uppercase mb-4 block">{{ section.settings.subtitle }}</span>
    <h2 class="font-display text-5xl md:text-7xl uppercase text-white mb-8">{{ section.settings.title }}</h2>
    <p class="text-neutral-400 text-lg mb-12 max-w-md leading-relaxed">
      {{ section.settings.description }}
    </p>
    <a href="/pages/custom-gear" class="w-fit border border-brand-red text-white px-8 py-4 uppercase font-bold tracking-wider hover:bg-brand-red transition-all">
      Start Your Order
    </a>
  </div>
</section>

{% schema %}
{
  "name": "Custom Gear Service",
  "settings": [
    { "type": "text", "id": "title", "label": "Title", "default": "Custom Gear Program" },
    { "type": "text", "id": "subtitle", "label": "Subtitle", "default": "Team Services" },
    { "type": "textarea", "id": "description", "label": "Description", "default": "We don't just print logos. We engineer identity." },
    { "type": "image_picker", "id": "image", "label": "Feature Image" }
  ],
  "presets": [
    { "name": "Custom Gear Service" }
  ]
}
{% endschema %}`;

const newsletterSection = `
<section class="py-20 bg-brand-black border-t border-white/5 relative overflow-hidden">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(208,0,0,0.05),_transparent_70%)]"></div>
  <div class="container mx-auto px-6 text-center relative z-10">
    <h2 class="font-display text-4xl md:text-5xl uppercase text-white mb-4">{{ section.settings.title }}</h2>
    <p class="text-neutral-400 mb-8 max-w-lg mx-auto">{{ section.settings.text }}</p>
    
    {% form 'customer' %}
      <div class="max-w-md mx-auto flex gap-2">
        <input type="email" name="contact[email]" placeholder="Enter your email" class="flex-1 bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-brand-red focus:outline-none">
        <button type="submit" class="bg-brand-red px-6 py-3 text-white uppercase font-bold hover:bg-red-700 transition-colors">
          Join
        </button>
      </div>
    {% endform %}
  </div>
</section>

{% schema %}
{
  "name": "Newsletter",
  "settings": [
    { "type": "text", "id": "title", "label": "Title", "default": "Join The Ranking" },
    { "type": "textarea", "id": "text", "label": "Text", "default": "Sign up for exclusive drops." }
  ],
  "presets": [
    { "name": "Newsletter" }
  ]
}
{% endschema %}`;

const aiGearLabSection = `
<div class="h-screen bg-[#050505] flex flex-col overflow-hidden text-white pt-24">
  <!-- This matches the embedded app logic provided previously -->
  <div class="h-16 border-b border-white/5 bg-[#0a0a0a] px-6 flex items-center justify-between shrink-0 z-30">
     <div class="flex items-center gap-4">
       <div class="font-display text-xl uppercase">AI GEAR LAB <span class="text-xs text-brand-red align-top">BETA</span></div>
     </div>
     <div class="flex gap-2">
       <button onclick="resetCanvas()" class="p-2 text-neutral-400 hover:text-white">Reset</button>
       <button onclick="submitInquiry()" class="bg-brand-red text-white px-4 py-2 text-xs font-bold uppercase flex items-center gap-2 hover:bg-red-700">Submit Inquiry</button>
     </div>
  </div>

  <div class="flex-1 flex overflow-hidden h-[calc(100vh-10rem)]">
    <!-- Left: Garments -->
    <div class="w-64 bg-[#0a0a0a] border-r border-white/5 flex flex-col shrink-0 overflow-y-auto">
      <div class="p-4 border-b border-white/5"><span class="text-xs font-bold text-neutral-500 uppercase">Garment</span></div>
      <div class="p-2 space-y-1" id="garment-list"></div>
    </div>

    <!-- Center: Canvas -->
    <div class="flex-1 bg-[#050505] relative flex items-center justify-center p-12">
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#333 1px, transparent 1px); background-size: 20px 20px;"></div>
      <div class="relative w-full max-w-md aspect-[3/4] bg-[#0f0f0f] border border-white/10 rounded-sm shadow-2xl overflow-hidden" id="canvas-container">
         <div id="layer-base" class="absolute inset-0 w-full h-full transition-colors duration-300" style="background-color: #D00000;"></div>
         <img id="layer-texture" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 grayscale pointer-events-none select-none">
         <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent mix-blend-overlay pointer-events-none"></div>
      </div>
    </div>

    <!-- Right: Controls -->
    <div class="w-80 bg-[#0a0a0a] border-l border-white/5 flex flex-col shrink-0 z-20 p-4">
      <div class="mb-8">
         <label class="block text-xs font-bold text-white uppercase mb-3">Base Color</label>
         <input type="color" id="color-picker" value="#D00000" class="w-full h-10 bg-transparent cursor-pointer border border-white/10 rounded-sm">
      </div>
      <div class="mb-8">
         <label class="block text-xs font-bold text-white uppercase mb-3">AI Pattern Prompt</label>
         <textarea id="ai-prompt" class="w-full h-24 bg-black border border-white/10 p-3 text-sm text-white focus:border-brand-red focus:outline-none" placeholder="e.g. 'Neon lightning storm on matte black'"></textarea>
      </div>
      <button onclick="simulateAI()" class="w-full bg-white/10 text-white py-3 text-xs font-bold uppercase hover:bg-brand-red transition-colors">Generate Texture</button>
    </div>
  </div>
</div>

<script>
  // Embedded App Logic
  const garments = ['Singlet', 'Hoodie', 'Shorts', 'Tee'];
  const list = document.getElementById('garment-list');
  let selected = 'Singlet';

  function renderList() {
    list.innerHTML = garments.map(g => \`
      <button onclick="selectGarment('\${g}')" class="w-full text-left p-3 rounded-sm text-sm font-bold uppercase \${selected === g ? 'bg-white/10 text-white border-l-2 border-brand-red' : 'text-neutral-400 hover:bg-white/5'}">\${g}</button>
    \`).join('');
  }

  function selectGarment(g) {
    selected = g;
    renderList();
  }

  document.getElementById('color-picker').addEventListener('input', (e) => {
    document.getElementById('layer-base').style.backgroundColor = e.target.value;
  });

  function simulateAI() {
    const btn = document.querySelector('button[onclick="simulateAI()"]');
    const oldText = btn.innerText;
    btn.innerText = "Generating...";
    setTimeout(() => {
       document.getElementById('layer-base').style.backgroundImage = "url('https://www.transparenttextures.com/patterns/cubes.png')";
       btn.innerText = oldText;
    }, 1500);
  }
  
  function resetCanvas() {
    document.getElementById('layer-base').style.backgroundImage = 'none';
    document.getElementById('layer-base').style.backgroundColor = '#D00000';
  }

  function submitInquiry() {
    const color = document.getElementById('color-picker').value;
    const prompt = document.getElementById('ai-prompt').value;
    window.location.href = \`mailto:teams@rich-habits.com?subject=Custom Gear Inquiry&body=Garment: \${selected}%0D%0AColor: \${color}%0D%0APrompt: \${prompt}\`;
  }

  renderList();
</script>

{% schema %}
{
  "name": "AI Gear Lab App",
  "settings": [],
  "presets": [
    { "name": "AI Gear Lab App" }
  ]
}
{% endschema %}`;

const customGearWizardSection = `
<div class="py-24 bg-[#080808] border-y border-white/5" id="wizard-root">
  <div class="container mx-auto px-6">
     <div class="flex flex-col lg:flex-row gap-16">
       <div class="lg:w-1/3">
         <span class="text-brand-red font-bold tracking-widest text-sm uppercase mb-2 block">Get A Quote</span>
         <h2 class="font-display text-5xl uppercase text-white mb-6">Start Your Legacy</h2>
         <p class="text-neutral-400">Complete the intake form. Our designers will reach out within 24 hours.</p>
       </div>
       <div class="lg:w-2/3 bg-[#121212] border border-white/5 p-8 rounded-sm relative">
          <div id="step-1">
             <h3 class="font-display text-3xl uppercase mb-6">Step 1: Order Type</h3>
             <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
               <button onclick="nextStep(2)" class="p-6 border border-white/10 hover:border-brand-red hover:bg-white/5 text-left transition-all group">
                 <div class="font-bold uppercase text-lg text-white">Team Order</div>
               </button>
               <button onclick="nextStep(2)" class="p-6 border border-white/10 hover:border-brand-red hover:bg-white/5 text-left transition-all group">
                 <div class="font-bold uppercase text-lg text-white">Corporate</div>
               </button>
             </div>
          </div>
          <div id="step-2" class="hidden">
             <h3 class="font-display text-3xl uppercase mb-6">Step 2: Items</h3>
             <div class="grid grid-cols-2 gap-4 mb-6">
               <label class="text-white"><input type="checkbox"> Singlets</label>
               <label class="text-white"><input type="checkbox"> Hoodies</label>
             </div>
             <button onclick="nextStep(3)" class="bg-brand-red text-white px-8 py-3 uppercase font-bold">Next</button>
          </div>
          <div id="step-3" class="hidden">
             <h3 class="font-display text-3xl uppercase mb-6">Step 3: Contact</h3>
             <input type="email" placeholder="Email" class="w-full bg-black border border-white/10 p-3 mb-4 text-white">
             <button class="bg-brand-red text-white px-8 py-3 uppercase font-bold">Submit Request</button>
          </div>
       </div>
     </div>
  </div>
</div>
<script>
  function nextStep(step) {
    document.getElementById('step-1').classList.add('hidden');
    document.getElementById('step-2').classList.add('hidden');
    document.getElementById('step-3').classList.add('hidden');
    document.getElementById('step-' + step).classList.remove('hidden');
  }
</script>
{% schema %}
{
  "name": "Custom Wizard",
  "settings": [],
  "presets": [
    { "name": "Custom Wizard" }
  ]
}
{% endschema %}`;

const mainProductSection = `
<div class="pt-32 pb-24 bg-brand-black min-h-screen">
  <div class="container mx-auto px-6">
    <div class="flex flex-col lg:flex-row gap-16">
      <div class="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {% for media in product.media limit: 2 %}
          <div class="aspect-[4/5] bg-[#121212] border border-white/5">
            <img src="{{ media | image_url: width: 1000 }}" class="w-full h-full object-cover mix-blend-overlay">
          </div>
        {% endfor %}
      </div>
      <div class="w-full lg:w-2/5 sticky top-32 h-fit">
        <h1 class="font-display text-5xl md:text-6xl uppercase text-white mb-4">{{ product.title }}</h1>
        <p class="text-2xl text-white font-light mb-8">{{ product.price | money }}</p>
        <div class="text-neutral-400 mb-8">{{ product.description }}</div>
        {% form 'product', product %}
           <input type="hidden" name="id" value="{{ product.selected_or_first_available_variant.id }}">
           <button type="submit" class="w-full bg-brand-red text-white h-14 uppercase font-bold tracking-widest hover:bg-red-700 transition-all">
             Add To Cart
           </button>
        {% endform %}
      </div>
    </div>
  </div>
</div>
{% schema %}
{
  "name": "Main Product",
  "settings": [],
  "presets": [
    { "name": "Main Product" }
  ]
}
{% endschema %}`;

const mainCollectionSection = `
<div class="py-24 container mx-auto px-6">
  <h1 class="text-white text-6xl font-display uppercase mb-12">{{ collection.title }}</h1>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    {% for product in collection.products %}
      <a href="{{ product.url }}" class="block group">
        <div class="aspect-[4/5] bg-[#121212] mb-4 overflow-hidden">
           <img src="{{ product.featured_image | image_url }}" class="w-full h-full object-cover group-hover:scale-110 transition-transform">
        </div>
        <h3 class="text-white uppercase font-display text-xl">{{ product.title }}</h3>
        <p class="text-neutral-500">{{ product.price | money }}</p>
      </a>
    {% endfor %}
  </div>
</div>
{% schema %}
{
  "name": "Collection Main",
  "settings": [],
  "presets": [
    { "name": "Collection Main" }
  ]
}
{% endschema %}`;

const contactFormSection = `
<div class="pt-32 pb-24 bg-brand-black min-h-screen">
  <div class="container mx-auto px-6 flex flex-col lg:flex-row gap-16">
    <div class="w-full lg:w-1/2">
      <h1 class="font-display text-6xl md:text-8xl uppercase text-white mb-8">Get In Touch</h1>
      <div class="text-lg text-neutral-400 space-y-6">
        <p><strong class="text-white block uppercase text-sm mb-1">Support</strong>{{ section.settings.support_email }}</p>
      </div>
    </div>
    <div class="w-full lg:w-1/2 bg-[#121212] p-8 md:p-12 border border-white/5">
      {% form 'contact' %}
        <input type="email" name="contact[email]" placeholder="Email" class="w-full bg-black border border-white/10 p-3 text-white mb-4">
        <textarea name="contact[body]" rows="4" placeholder="Message" class="w-full bg-black border border-white/10 p-3 text-white mb-6"></textarea>
        <button type="submit" class="w-full bg-brand-red text-white py-4 font-bold uppercase tracking-widest">Send Message</button>
      {% endform %}
    </div>
  </div>
</div>
{% schema %}
{
  "name": "Contact Form",
  "settings": [
    { "type": "text", "id": "support_email", "label": "Support Email", "default": "support@rich-habits.com" }
  ],
  "presets": [
    { "name": "Contact Form" }
  ]
}
{% endschema %}`;

const aboutTimelineSection = `
<div class="py-24 container mx-auto px-6 relative">
  <h2 class="font-display text-5xl text-white uppercase text-center mb-16">The Origin Story</h2>
  <div class="absolute left-6 md:left-1/2 top-48 bottom-24 w-px bg-brand-red/30"></div>
  <div class="space-y-24">
    <div class="relative flex flex-col md:flex-row items-center gap-12">
       <div class="md:w-1/2 flex justify-start md:justify-end order-2 md:order-1">
         <div class="bg-[#121212] p-8 border border-white/10 max-w-md relative">
           <span class="text-6xl font-display text-brand-red/20 absolute -top-8 -left-4">2022</span>
           <h3 class="font-bold text-2xl text-white uppercase mb-2">The First Sketch</h3>
           <p class="text-neutral-400">Launched from a garage with a simple mission: Faster, Better, Cooler.</p>
         </div>
       </div>
       <div class="absolute left-6 md:left-1/2 w-4 h-4 bg-brand-red rounded-full -translate-x-1/2 border-4 border-black z-10"></div>
       <div class="md:w-1/2 pl-12 md:pl-0 order-1 md:order-2">
         <div class="w-full max-w-sm aspect-video bg-white/5 border border-white/10"></div>
       </div>
    </div>
    <div class="relative flex flex-col md:flex-row items-center gap-12">
       <div class="md:w-1/2 flex justify-end pr-12 md:pr-0 order-1">
         <div class="w-full max-w-sm aspect-video bg-white/5 border border-white/10"></div>
       </div>
       <div class="absolute left-6 md:left-1/2 w-4 h-4 bg-brand-red rounded-full -translate-x-1/2 border-4 border-black z-10"></div>
       <div class="md:w-1/2 order-2">
         <div class="bg-[#121212] p-8 border border-white/10 max-w-md relative">
           <span class="text-6xl font-display text-brand-red/20 absolute -top-8 -right-4">NOW</span>
           <h3 class="font-bold text-2xl text-white uppercase mb-2">Nationwide</h3>
           <p class="text-neutral-400">Serving 60+ organizations across 12 states.</p>
         </div>
       </div>
    </div>
  </div>
</div>
{% schema %}
{
  "name": "About Timeline",
  "settings": [],
  "presets": [
    { "name": "About Timeline" }
  ]
}
{% endschema %}`;

const pastEventsListSection = `
<div class="py-24 container mx-auto px-6">
  <h2 class="font-display text-5xl uppercase text-center mb-16">{{ section.settings.title }}</h2>
  <div class="space-y-16">
    {% for block in section.blocks %}
      <div class="flex flex-col md:flex-row bg-[#121212] border border-white/10 group">
         <div class="md:w-1/2 relative overflow-hidden h-64 md:h-auto">
           {% if block.settings.image %}
             <img src="{{ block.settings.image | image_url: width: 800 }}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
           {% else %}
             <div class="w-full h-full bg-neutral-800"></div>
           {% endif %}
           <div class="absolute top-6 left-6 bg-brand-black/80 backdrop-blur-md px-4 py-2 border border-white/10">
             <span class="text-brand-red font-display text-xl">{{ block.settings.date }}</span>
           </div>
         </div>
         <div class="md:w-1/2 p-12 flex flex-col justify-center">
           <h3 class="font-display text-4xl text-white uppercase mb-4">{{ block.settings.title }}</h3>
           <p class="text-neutral-400 mb-8">{{ block.settings.desc }}</p>
           <button class="text-white hover:text-brand-red uppercase font-bold text-sm text-left">View Recap &rarr;</button>
         </div>
      </div>
    {% endfor %}
  </div>
</div>
{% schema %}
{
  "name": "Event Archive",
  "settings": [{ "type": "text", "id": "title", "label": "Title", "default": "Event Archive" }],
  "blocks": [
    {
      "type": "event",
      "name": "Event",
      "settings": [
        { "type": "text", "id": "title", "label": "Title" },
        { "type": "text", "id": "date", "label": "Date Label" },
        { "type": "textarea", "id": "desc", "label": "Description" },
        { "type": "image_picker", "id": "image", "label": "Image" }
      ]
    }
  ],
  "presets": [
    { "name": "Event Archive" }
  ]
}
{% endschema %}`;

const aboutHeroSection = `
<div class="relative h-[90vh] flex items-end justify-center overflow-hidden">
  {% if section.settings.image %}
     <img src="{{ section.settings.image | image_url: width: 2000 }}" class="absolute inset-0 w-full h-full object-cover opacity-60 grayscale">
  {% else %}
     <div class="absolute inset-0 bg-neutral-900"></div>
  {% endif %}
  <div class="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/50"></div>
  <div class="relative z-10 text-center pb-24 px-6">
     <h1 class="font-display text-7xl md:text-9xl text-white uppercase leading-[0.85] mb-6">
       Born in<br/><span class="text-brand-red">Birmingham</span>
     </h1>
  </div>
</div>
{% schema %}
{
  "name": "About Hero",
  "settings": [
     { "type": "image_picker", "id": "image", "label": "Hero Image" }
  ],
  "presets": [
    { "name": "About Hero" }
  ]
}
{% endschema %}`;

const eventHeroSection = `
<div class="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
   <div class="absolute inset-0 bg-black">
      {% if section.settings.image %}
         <img src="{{ section.settings.image | image_url: width: 2000 }}" class="w-full h-full object-cover opacity-40">
      {% endif %}
   </div>
   <div class="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-transparent to-brand-black"></div>
   <div class="relative z-10 text-center px-6">
     <div class="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red text-brand-red px-4 py-1 rounded-full mb-6 animate-pulse">
       <span class="w-2 h-2 bg-brand-red rounded-full"></span>
       <span class="text-xs font-bold uppercase tracking-widest">Complete</span>
     </div>
     <h1 class="font-display text-6xl md:text-9xl uppercase text-white mb-6">More Than<br/>Just Gear</h1>
   </div>
</div>
{% schema %}
{
  "name": "Event Hero",
  "settings": [
    { "type": "image_picker", "id": "image", "label": "Background" }
  ],
  "presets": [
    { "name": "Event Hero" }
  ]
}
{% endschema %}`;


// --- 5. JSON Templates ---
const indexJson = JSON.stringify({ sections: { hero: { type: "hero-video" }, products: { type: "main-collection" }, teams: { type: "team-portal-grid" }, custom: { type: "custom-gear-service" }, newsletter: { type: "newsletter" } }, order: ["hero", "products", "teams", "custom", "newsletter"] });
const aboutJson = JSON.stringify({ sections: { hero: { type: "about-hero" }, timeline: { type: "about-timeline" } }, order: ["hero", "timeline"] });
const eventsJson = JSON.stringify({ sections: { hero: { type: "past-events-hero" }, list: { type: "past-events-list" } }, order: ["hero", "list"] });
const customPageJson = JSON.stringify({ sections: { wizard: { type: "custom-gear-wizard" }, faq: { type: "custom-gear-service" } }, order: ["wizard", "faq"] });
const aiLabJson = JSON.stringify({ sections: { app: { type: "ai-gear-lab" } }, order: ["app"] });
const productJson = JSON.stringify({ sections: { main: { type: "main-product" } }, order: ["main"] });
const collectionJson = JSON.stringify({ sections: { main: { type: "main-collection" } }, order: ["main"] });
const contactJson = JSON.stringify({ sections: { main: { type: "contact-form" } }, order: ["main"] });

// --- 6. Generator Function ---
export const generateThemeZip = async () => {
  const zip = new JSZip();
  
  // Config
  zip.file("config/settings_schema.json", settingsSchema);
  
  // Layout
  zip.file("layout/theme.liquid", themeLiquid);
  
  // Assets
  zip.file("assets/theme.css", themeCss);
  zip.file("assets/theme.js", themeJs);
  
  // Sections
  zip.file("sections/header.liquid", headerSection);
  zip.file("sections/footer.liquid", footerSection);
  zip.file("sections/hero-video.liquid", heroVideoSection);
  zip.file("sections/team-portal-grid.liquid", teamPortalGridSection);
  zip.file("sections/custom-gear-service.liquid", customGearServiceSection);
  zip.file("sections/newsletter.liquid", newsletterSection);
  zip.file("sections/ai-gear-lab.liquid", aiGearLabSection);
  zip.file("sections/custom-gear-wizard.liquid", customGearWizardSection);
  zip.file("sections/main-product.liquid", mainProductSection);
  zip.file("sections/main-collection.liquid", mainCollectionSection);
  zip.file("sections/contact-form.liquid", contactFormSection);
  zip.file("sections/past-events-list.liquid", pastEventsListSection);
  zip.file("sections/past-events-hero.liquid", eventHeroSection);
  zip.file("sections/about-hero.liquid", aboutHeroSection);
  zip.file("sections/about-timeline.liquid", aboutTimelineSection);

  // Templates
  zip.file("templates/index.json", indexJson);
  zip.file("templates/page.about.json", aboutJson);
  zip.file("templates/page.past-events.json", eventsJson);
  zip.file("templates/page.custom-gear.json", customPageJson);
  zip.file("templates/page.ai-gear-lab.json", aiLabJson);
  zip.file("templates/product.json", productJson);
  zip.file("templates/collection.json", collectionJson);
  zip.file("templates/page.contact.json", contactJson);

  // Locales
  zip.file("locales/en.default.json", `{"general": {"title": "Rich Habits"}}`);

  return await zip.generateAsync({ type: "blob" });
};
