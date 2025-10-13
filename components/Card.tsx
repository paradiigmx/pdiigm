
import React from 'react';
import { useInView } from '../hooks/useInView';

interface CardProps {
  children: React.ReactNode;
  index: number;
  variant?: 'primary' | 'secondary' | 'tertiary';
  icon?: string;
}

export const Card: React.FC<CardProps> = ({ children, index, variant = 'primary', icon }) => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'text-left';
      case 'tertiary':
        return 'text-center p-0 bg-transparent border-none shadow-none hover:transform-none hover:shadow-none';
      case 'primary':
      default:
        return 'p-8';
    }
  };

  const baseClasses = "group relative w-full h-full bg-slate-900/40 border border-slate-800/50 rounded-2xl backdrop-blur-sm transition-all duration-300 ease-out";
  const hoverClasses = "hover:border-slate-700/80 hover:-translate-y-1";

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${variant !== 'tertiary' ? hoverClasses : ''} ${getVariantClasses()} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      <div className="relative z-10">
        {icon && (
            <div className="w-20 h-20 rounded-lg flex items-center justify-center text-white text-3xl mb-6">
                <img src={icon} alt="" className="w-full h-full object-contain" />
            </div>
        )}
        {children}
      </div>
    </div>
  );
};
