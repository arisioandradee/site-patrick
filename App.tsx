
import React from 'react';
import { 
  Navbar, 
  Hero, 
  BioSection,
  Benefits, 
  ContentPreview, 
  LeadForm, 
  DoubtCTA,
  FAQ,
  Footer
} from './components';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-primary/20">
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="benefits">
          <Benefits />
        </section>

        <section id="bio">
          <BioSection />
        </section>

        <section id="preview">
          <ContentPreview />
        </section>

        <section id="form">
          <LeadForm />
        </section>

        <section id="doubt">
          <DoubtCTA />
        </section>

        <section id="faq">
          <FAQ />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
