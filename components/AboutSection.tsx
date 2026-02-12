
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-black mb-6 leading-tight">
              Autoridade em Escala para Agências
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-10">
              Patrick Fernandes iniciou sua trajetória com o objetivo de transformar o setor de serviços criativos em máquinas de vendas previsíveis. Já ajudamos centenas de agências a estruturarem seus departamentos de Inside Sales, resultando em mais de <span className="text-primary font-bold">R$ 10MM em novos contratos</span> gerados para nossos clientes.
            </p>

            <div className="grid grid-cols-2 gap-12">
              <div className="border-l-4 border-primary pl-6">
                <div className="text-4xl font-black text-primary mb-2">150+</div>
                <div className="text-slate-400 font-medium uppercase tracking-wider text-[10px]">Agências Mentoradas</div>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <div className="text-4xl font-black text-primary mb-2">94%</div>
                <div className="text-slate-400 font-medium uppercase tracking-wider text-[10px]">Taxa de Retenção</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[40px] overflow-hidden group">
            <img
              alt="Patrick Fernandes Strategy Session"
              className="w-full h-full object-cover min-h-[500px] scale-105 group-hover:scale-100 transition-transform duration-1000 opacity-60"
              src="/fotoPatrick.jpeg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/10"></div>
            <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <p className="text-white font-medium italic">
                "Minha missão é dar previsibilidade comercial para quem vive de criatividade."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
