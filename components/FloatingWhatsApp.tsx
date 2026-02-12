
import React from 'react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/558181577666"
      className="fixed bottom-10 right-10 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_12px_24px_rgba(37,211,102,0.4)] z-50 hover:scale-110 active:scale-90 transition-all group"
      aria-label="Fale conosco no WhatsApp"
    >
      <span className="material-icons text-3xl group-hover:rotate-12 transition-transform">chat</span>
      <span className="absolute right-full mr-4 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Fale com um especialista
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
