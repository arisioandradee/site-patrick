import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 w-full z-50 px-6">
      <nav className="max-w-7xl mx-auto bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[32px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all">
        <div className="px-8 lg:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
              Patrick<span className="text-primary">.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <a href="#home" className="text-sm font-black uppercase tracking-widest text-slate-600 hover:text-primary transition-colors">Home</a>
            <a href="#bio" className="text-sm font-black uppercase tracking-widest text-slate-600 hover:text-primary transition-colors">Sobre</a>
            <a href="#preview" className="text-sm font-black uppercase tracking-widest text-slate-600 hover:text-primary transition-colors">Ebook</a>
            <a
              href="/assets/pdf/ebook-inside-sales.pdf"
              download
              className="bg-primary text-white px-8 py-3 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
            >
              Baixar o PDF
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-12 h-12 flex items-center justify-center text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-icons text-3xl">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Menu Content */}
        {isOpen && (
          <div className="md:hidden px-8 pb-10 flex flex-col gap-6 animate-fade-in">
            <div className="h-px bg-slate-100 w-full mb-2"></div>
            <a onClick={() => setIsOpen(false)} href="#home" className="text-sm font-black uppercase tracking-widest text-slate-600">Home</a>
            <a onClick={() => setIsOpen(false)} href="#bio" className="text-sm font-black uppercase tracking-widest text-slate-600">Sobre</a>
            <a onClick={() => setIsOpen(false)} href="#preview" className="text-sm font-black uppercase tracking-widest text-slate-600">Ebook</a>
            <a
              onClick={() => setIsOpen(false)}
              href="/assets/pdf/ebook-inside-sales.pdf"
              download
              className="bg-primary text-white px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest text-center"
            >
              Baixar o PDF
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
