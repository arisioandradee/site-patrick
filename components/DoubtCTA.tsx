import React from 'react';

const DoubtCTA: React.FC = () => {
  return (
    <section className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative p-14 lg:p-24 rounded-[80px] bg-white/5 border border-white/10 overflow-hidden group">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-16 relative z-10">
            <div className="text-center lg:text-left">
              <h3 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter">Ainda tem dúvidas?</h3>
              <p className="text-2xl text-slate-400 max-w-xl font-medium leading-relaxed">
                Nossa equipe está pronta para conversar sobre os desafios comerciais da sua agência.
              </p>
            </div>

            <a
              href="https://wa.me/558181577666"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-12 py-7 rounded-[32px] text-2xl font-black hover:bg-primary hover:text-white hover:-translate-y-2 transition-all shadow-2xl flex items-center gap-4"
            >
              <span className="material-icons">chat</span>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoubtCTA;
