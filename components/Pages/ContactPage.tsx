import React from 'react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/2">
            <h1 className="font-display text-6xl md:text-8xl uppercase text-white mb-8">Get In<br/>Touch</h1>
            <div className="space-y-8 text-lg text-neutral-400">
              <div>
                <h3 className="text-white font-bold uppercase tracking-wider mb-2">Headquarters</h3>
                <p>123 Wrestling Way<br/>State College, PA 16801</p>
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-wider mb-2">Support</h3>
                <p>support@rich-habits.com<br/>1-800-TAKEDOWN</p>
              </div>
              <div>
                <h3 className="text-white font-bold uppercase tracking-wider mb-2">Team Sales</h3>
                <p>teams@rich-habits.com</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-[#121212] p-8 md:p-12 border border-white/5 rounded-sm">
            <h2 className="font-display text-3xl text-white uppercase mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">First Name</label>
                   <input type="text" className="w-full bg-black border border-white/10 p-3 text-white focus:border-brand-red focus:outline-none" />
                </div>
                <div>
                   <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Last Name</label>
                   <input type="text" className="w-full bg-black border border-white/10 p-3 text-white focus:border-brand-red focus:outline-none" />
                </div>
              </div>
              <div>
                 <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Email</label>
                 <input type="email" className="w-full bg-black border border-white/10 p-3 text-white focus:border-brand-red focus:outline-none" />
              </div>
              <div>
                 <label className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Message</label>
                 <textarea rows={4} className="w-full bg-black border border-white/10 p-3 text-white focus:border-brand-red focus:outline-none"></textarea>
              </div>
              <button className="w-full bg-brand-red text-white py-4 font-bold uppercase tracking-widest hover:bg-red-700 transition-colors">
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};