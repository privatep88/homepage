import React from 'react';
import SaherHeader from './components/SaherHeader';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-[#10233D] bg-[#EDF5FF] font-[Cairo] overflow-x-hidden">
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