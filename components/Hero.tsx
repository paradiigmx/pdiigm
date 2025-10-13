
import React from 'react';
import invertedIcon from '/images/inverted-iconhi-res.png';

const Button: React.FC<{ href: string, children: React.ReactNode, variant?: 'primary' | 'secondary' }> = ({ href, children, variant = 'primary' }) => {
  const baseClasses = "px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ease-in-out transform";
  const primaryClasses = "bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:scale-105";
  const secondaryClasses = "bg-slate-900/70 border border-slate-700 text-slate-200 backdrop-blur-sm hover:bg-slate-800/70 hover:border-slate-500";

  return (
    <a href={href} className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses}`}>
      {children}
    </a>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-12 px-6">
      <div className="text-center max-w-4xl mx-auto opacity-0 animation-fadeInUp">
        <img src={invertedIcon} alt="Paradiigm Icon" className="h-24 mx-auto mb-8" />
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 bg-gradient-to-br from-slate-100 to-cyan-400 text-transparent bg-clip-text">
          Infinite Imagination
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-12">
          Bold ideas, and design that makes an impact.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button href="#products" variant="primary">Explore Our Apps</Button>
          <Button href="#services" variant="secondary">View Services</Button>
        </div>
      </div>
    </section>
  );
};
