import React from 'react';

const BioSection: React.FC = () => {
  const expertises = [
    { title: 'Processos de Vendas', desc: 'Estruturação de Outbound e cadências de prospecção.' },
    { title: 'Liderança de BDRs', desc: 'Método, scripts e métricas claras para conversão.' },
    { title: 'Inteligência Comercial', desc: 'Diagnóstico de operações e otimização de ciclo de vendas.' },
    { title: 'Mentoria Prática', desc: 'Mais de 500 profissionais treinados em alta performance.' }
  ];

  return (
    <section className="bg-slate-50 text-slate-900 py-24 px-6 relative overflow-hidden border-b border-slate-100">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] opacity-40"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <div className="order-2 lg:order-1 relative group">
          <div className="absolute -inset-4 bg-primary/10 rounded-[60px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden border-8 border-white shadow-2xl">
            <img
              src="/fotoPatrick.jpeg"
              alt="Patrick Fernandes"
              className="w-full h-full object-cover object-top grayscale brightness-95 hover:grayscale-0 transition-all duration-1000"
            />
            {/* Social Icons Overlay - Matches Photo */}
            <div className="absolute bottom-6 right-6 flex gap-3">
              <a
                href="https://www.linkedin.com/in/patrick-fernandes17/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900/40 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-primary transition-colors border border-white/20"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a
                href="https://www.instagram.com/patrick.fernandes12/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900/40 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-primary transition-colors border border-white/20"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase mb-6 block">Coordenador de Inteligência Comercial</span>
          <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-none tracking-tighter italic text-slate-900">
            Patrick<br />
            <span className="text-primary">Fernandes</span>
          </h2>

          <div className="space-y-6 text-slate-600 text-base leading-relaxed mb-12 font-medium">
            <p>
              Se sua empresa vende, mas não tem previsibilidade, o problema não é esforço. É <span className="text-primary font-bold">processo</span>. Atuo na estruturação de operações comerciais, eliminando a dependência de indicações e trazendo método para prospecção.
            </p>
            <p>
              Como responsável pela operação da Dibai Sales, foco em diagnósticos precisos, cadência de prospecção e treinamento de BDRs, garantindo crescimento estável e decisões baseadas em dados.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-12">
            {expertises.map((exp, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-primary/20 transition-colors">
                <h4 className="text-sm font-black text-slate-900 mb-2">{exp.title}</h4>
                <p className="text-[11px] text-slate-500 leading-tight font-medium">{exp.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-primary italic text-lg font-bold leading-snug border-l-4 border-primary/20 pl-6">
            "Crescimento instável é sinal de falta de método. Meu objetivo é transformar sua operação em uma máquina previsível."
          </p>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
