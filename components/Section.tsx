
import React from 'react';
import { useInView } from '../hooks/useInView';

interface SectionProps {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, badge, title, subtitle, children, className = '' }) => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id={id} className={`py-20 md:py-28 px-6 ${className}`}>
      <div className="container mx-auto max-w-7xl">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-300 uppercase bg-cyan-900/50 border border-cyan-800/50 rounded-lg">
            {badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 bg-gradient-to-b from-slate-100 to-slate-300 text-transparent bg-clip-text">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
};
