
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';

const App: React.FC = () => {
  return (
    <div className="relative">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <ProductsSection />
        <ServicesSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
