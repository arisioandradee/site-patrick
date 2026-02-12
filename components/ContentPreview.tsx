
import React from 'react';

const ContentPreview: React.FC = () => {
  return (
    <section className="py-36 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-28 items-center">
        <div className="relative group">
          <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px]"></div>
          <div className="relative">
            <img
              alt="Team Strategy"
              className="rounded-[60px] shadow-2xl border-4 border-slate-50 group-hover:rotate-2 transition-transform duration-700"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
            />
            <div className="absolute -bottom-10 -left-10 bg-slate-900 text-white p-12 rounded-[50px] shadow-2xl border-4 border-white animate-float">
              <div className="text-5xl font-black mb-1">PRO</div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] opacity-60">Conteúdo</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-black text-white mb-10 tracking-tighter leading-tight">
            Por dentro do <span className="text-primary">E-book</span>
          </h2>

          <div className="space-y-10 mb-20">
            {[
              { icon: 'hub', title: 'Funil de Inside Sales', desc: 'Como estruturar cada etapa da sua operação de vendas.' },
              { icon: 'description', title: 'Scripts Prontos', desc: 'Modelos de cold-email e LinkedIn que convertem.' },
              { icon: 'analytics', title: 'Dashboards de Gestão', desc: 'O que medir para garantir que seu time está performando.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-10 group">
                <div className="flex-shrink-0 w-20 h-20 bg-slate-50 rounded-[32px] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <span className="material-icons text-4xl">{item.icon}</span>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white mb-2">{item.title}</h4>
                  <p className="text-base text-slate-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContentPreview;
