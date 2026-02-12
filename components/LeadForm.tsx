import React, { useState, FormEvent } from 'react';

const LeadForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSexPJLOkKLx3-j7sRBQmbGKQSKokzYW1cyL9i6DoU3mHo_tpg/formResponse";

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    cargo: '',
    empresa: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Create a hidden form and submit it to avoid CORS issues or 
    // simply use fetch with no-cors if permitted, but the safest way
    // for Google Forms is usually a hidden iframe or direct POST.
    // Here we use the direct POST approach via a standard form submission
    // but manually for better control.

    const formUrl = new URL(GOOGLE_FORM_ACTION);
    const data = new FormData();
    data.append("entry.1957476644", formData.nome);
    data.append("entry.1147189799", formData.telefone);
    data.append("entry.172604222", formData.email);
    data.append("entry.323133945", formData.cargo);
    data.append("entry.1400319321", formData.empresa);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        body: data
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Erro ao enviar formulário", error);
      // Even if it fails due to CORS, Google often still records the submission
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <section className="py-40 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white p-24 rounded-[70px] border border-slate-100 shadow-2xl">
            <div className="w-28 h-28 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl shadow-emerald-500/30 animate-bounce">
              <span className="material-icons text-6xl">check</span>
            </div>
            <h2 className="text-6xl font-black text-slate-900 mb-8 tracking-tighter">Pedido recebido!</h2>
            <p className="text-2xl text-slate-500 mb-14 leading-relaxed max-w-lg mx-auto font-medium">Em algumas horas você irá receber seu ebook.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-primary-dark transition-all"
            >
              Voltar
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="form" className="py-40 bg-white relative overflow-hidden border-y border-slate-50">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-6xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Receba sua <span className="text-gradient">Cópia</span></h2>
          <p className="text-2xl text-slate-500 max-w-2xl mx-auto font-medium">
            Preencha os campos abaixo para receber o material exclusivo no seu e-mail.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-12 md:p-24 rounded-[80px] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.1)] border border-white"
        >
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {[
              { label: 'Nome', type: 'text', name: 'nome', placeholder: 'Ex: Patrick Fernandes' },
              { label: 'Telefone', type: 'tel', name: 'telefone', placeholder: '(00) 00000-0000' },
              { label: 'Email', type: 'email', name: 'email', placeholder: 'voce@empresa.com' },
              { label: 'Cargo', type: 'text', name: 'cargo', placeholder: 'Ex: Sócio Fundador' },
              { label: 'Empresa', type: 'text', name: 'empresa', placeholder: 'Nome da sua Empresa', fullWidth: true }
            ].map((field, i) => (
              <div key={i} className={`space-y-4 ${field.fullWidth ? 'md:col-span-2' : ''}`}>
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">{field.label}</label>
                <input
                  required
                  name={field.name}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  type={field.type}
                  className="w-full px-8 py-6 rounded-3xl bg-slate-50 border-2 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-all text-xl font-bold placeholder:text-slate-300 shadow-inner"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 text-white py-8 rounded-[32px] text-2xl font-black hover:bg-primary hover:-translate-y-2 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-4 disabled:opacity-70"
          >
            {loading ? (
              <span className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin"></span>
            ) : (
              "Enviar formulário"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
