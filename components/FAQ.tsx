
import React, { useState } from 'react';

const faqData = [
  {
    question: 'Para quem é este ebook?',
    answer: 'Este ebook foi escrito especificamente para donos de agências, diretores comerciais e gestores que desejam escalar sua operação de vendas através do método de Inside Sales.'
  },
  {
    question: 'O ebook é realmente gratuito?',
    answer: 'Sim, o material é 100% gratuito. Nosso objetivo é compartilhar conhecimento prático com o mercado.'
  },
  {
    question: 'Como vou receber o conteúdo?',
    answer: 'Imediatamente após o cadastro, você receberá o link de download no e-mail informado.'
  },
  {
    question: 'Preciso de conhecimento prévio?',
    answer: 'Não. O guia vai do básico ao avançado, focado em quem já tem uma agência operando.'
  }
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-6 transition-all duration-500 ${isOpen ? 'bg-white shadow-2xl shadow-slate-200' : 'bg-white/50 hover:bg-white'} rounded-[40px] border border-slate-100 overflow-hidden`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-10 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-2xl lg:text-3xl font-black transition-colors ${isOpen ? 'text-primary' : 'text-slate-900'}`}>
          {question}
        </span>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
          <span className="material-icons text-3xl">expand_more</span>
        </div>
      </button>
      <div className={`transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-10 px-10' : 'max-h-0 opacity-0'}`}>
        <p className="text-xl text-neutral-gray leading-relaxed font-medium max-w-2xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-40 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-black text-slate-900 mb-8 tracking-tighter">Dúvidas?</h2>
          <p className="text-2xl text-neutral-gray font-medium">
            Tudo o que você precisa saber.
          </p>
        </div>

        <div className="space-y-2">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
