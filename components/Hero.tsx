
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-48 pb-32 px-6 hero-pattern relative overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl lg:text-7xl font-[900] leading-[1.1] text-slate-900 mb-8 tracking-tightest">
            A Nova Era do <br />
            <span className="text-gradient">Inside Sales</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
            Construa uma máquina de vendas previsíveis. Domine as estratégias que as agências de alta performance usam para escalar sem depender de indicações.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="/assets/pdf/ebook-inside-sales.pdf"
              download
              className="group relative w-full sm:w-auto overflow-hidden bg-primary text-white px-10 py-5 rounded-2xl text-xl font-black transition-all hover:bg-primary-dark hover:shadow-[0_20px_40px_-10px_rgba(17,115,212,0.5)] active:scale-95"
            >
              <span className="relative z-10">Baixar o PDF</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
            </a>
          </div>
        </div>

        <div className="relative group perspective-1000">
          <div className="absolute -inset-10 bg-primary/10 rounded-[80px] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
          <div className="relative bg-white p-6 rounded-[60px] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.2)] border border-slate-100 transition-all duration-700 hover:scale-105 hover:-rotate-2 rotate-1">
            <img
              alt="Ebook Preview"
              className="rounded-[40px] w-full h-auto shadow-inner"
              src="/fotoCapaEbook.png"
            />
            <div className="absolute -bottom-10 -right-6 bg-accent text-slate-900 font-black px-8 py-8 rounded-[40px] shadow-2xl transition-transform hover:scale-110 border-4 border-white">
              <span className="text-4xl">GRÁTIS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
