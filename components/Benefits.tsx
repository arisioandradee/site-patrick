import React from 'react';

const spoilerContent = [
  {
    icon: 'moving',
    title: 'Estratégia',
    desc: 'O modelo comercial que gera previsibilidade real para agências.'
  },
  {
    icon: 'fact_check',
    title: 'Processo',
    desc: 'Como filtrar e qualificar os melhores leads sem perder tempo.'
  },
  {
    icon: 'insights',
    title: 'Métricas',
    desc: 'O que medir para escalar sua operação com rentabilidade.'
  }
];

const Chapters: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-16">
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Spoiler do Conteúdo</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter">
            O que você vai encontrar no E-book
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {spoilerContent.map((item, i) => (
            <div key={i} className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-primary/30 transition-all group text-left">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <span className="material-icons">{item.icon}</span>
              </div>
              <h4 className="text-xl font-black text-white mb-4">{item.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chapters;
