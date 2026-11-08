import React from 'react';
import SaherHeader from './components/SaherHeader';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-slate-800 bg-slate-50 font-[Cairo]">
      <SaherHeader />
      <main className="flex-grow">
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default App;