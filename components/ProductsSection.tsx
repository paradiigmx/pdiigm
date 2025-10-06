
import React from 'react';
import { Section } from './Section';
import { Card } from './Card';
import { WrenchIcon, MicIcon, ShieldIcon, BookIcon, UsersIcon, BoxIcon } from './icons';

const getStatusChip = (status: string) => {
  const baseClasses = "inline-block px-3 py-1 text-xs font-semibold tracking-wide rounded-full mb-4 uppercase";
  switch (status.toLowerCase()) {
    case 'available now':
      return `${baseClasses} bg-blue-600/20 text-blue-300`;
    case 'coming soon':
      return `${baseClasses} bg-purple-600/20 text-purple-300`;
    case 'in development':
      return `${baseClasses} bg-orange-600/20 text-orange-300`;
    case 'available':
      return `${baseClasses} bg-green-600/20 text-green-300`;
    case 'white label solution':
      return `${baseClasses} bg-cyan-600/20 text-cyan-300`;
    case 'launching soon':
      return `${baseClasses} bg-slate-600/20 text-slate-300`;
    default:
      return `${baseClasses} bg-gray-600/20 text-gray-300`;
  }
};

const products = [
  {
    icon: <WrenchIcon />,
    name: "RepairBuddy",
    status: "Available Now",
    description: "Your comprehensive repair price lookup app. Get instant, accurate estimates for repairs and services, helping you make informed decisions and avoid overpricing.",
    iconBg: "bg-blue-500",
  },
  {
    icon: <MicIcon />,
    name: "StagePass",
    status: "Coming Soon",
    description: "The ultimate platform for live entertainment. More exciting details coming soon. Get ready to experience events like never before.",
    iconBg: "bg-purple-500",
  },
  {
    icon: <ShieldIcon />,
    name: "RugRadar",
    status: "In Development",
    description: "Stay safe in the crypto space. Our advanced warning system helps investors identify and avoid rugpulls, protecting your investments from fraudulent projects.",
    iconBg: "bg-orange-500",
  },
  {
    icon: <BookIcon />,
    name: "Greenbook App",
    status: "Available",
    description: "Discover and support Black-owned businesses and events. Connect with your community and find authentic experiences that celebrate culture and entrepreneurship.",
    iconBg: "bg-green-500",
  },
  {
    icon: <UsersIcon />,
    name: "Connect",
    status: "White Label Solution",
    description: "A powerful white-label app for non-profit associations. Build community, share resources, and strengthen connections with a customizable platform designed for impact.",
    iconBg: "bg-cyan-500",
  },
  {
    icon: <BoxIcon />,
    name: "MovingBuddy",
    status: "Launching Soon",
    description: "Navigate your move with confidence. Our app helps you identify legitimate movers, avoid common scams, and ensures a stress-free relocation experience.",
    iconBg: "bg-slate-500",
  },
];

export const ProductsSection: React.FC = () => {
  return (
    <Section
      id="products"
      badge="Our Products"
      title="Innovative Apps That Make a Difference"
      subtitle="Solving real-world problems with cutting-edge technology"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card key={product.name} index={index}>
            <div className={`w-14 h-14 rounded-lg flex items-center justify-center text-white text-3xl mb-6 ${product.iconBg}`}>
              {product.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-100">{product.name}</h3>
            <span className={getStatusChip(product.status)}>
              {product.status}
            </span>
            <p className="text-slate-400 leading-relaxed">{product.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
