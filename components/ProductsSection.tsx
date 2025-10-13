
import React from 'react';
import { Section } from './Section';
import { Card } from './Card';
import { WrenchIcon, MicIcon, ShieldIcon, BookIcon, UsersIcon, BoxIcon, PlaneIcon } from './icons';

const getStatusChip = (status: string) => {
  const baseClasses = "inline-block px-3 py-1 text-xs font-semibold tracking-wide rounded-full mb-4 uppercase";
  return `${baseClasses} bg-purple-600/20 text-purple-300`;
};

const products = [
  {
    icon: <MicIcon />,
    name: "StagePass",
    description: "The ultimate platform for live entertainment. More exciting details coming soon. Get ready to experience events like never before.",
    iconBg: "bg-purple-500",
  },
  {
    icon: <ShieldIcon />,
    name: "RugRadar",
    description: "Stay safe in the crypto space. Our advanced warning system helps investors identify and avoid rugpulls, protecting your investments from fraudulent projects.",
    iconBg: "bg-orange-500",
  },
  {
    icon: <BookIcon />,
    name: "Greenbook App",
    description: "Discover and support Black-owned businesses and events. Connect with your community and find authentic experiences that celebrate culture and entrepreneurship.",
    iconBg: "bg-green-500",
  },
  {
    icon: <UsersIcon />,
    name: "Connect",
    description: "A powerful white-label app for non-profit associations. Build community, share resources, and strengthen connections with a customizable platform designed for impact.",
    iconBg: "bg-cyan-500",
  },
];

const buddyApps = [
    {
        icon: <img src="/images/repair-buddy-icon-med-res.png" alt="RepairBuddy" />,
        name: "RepairBuddy",
        description: "Your comprehensive repair price lookup app. Get instant, accurate estimates for repairs and services, helping you make informed decisions and avoid overpricing.",
        iconBg: "bg-blue-500",
    },
    {
        icon: <img src="/images/moving-buddy-icon-med-res.png" alt="MovingBuddy" />,
        name: "MovingBuddy",
        description: "Navigate your move with confidence. Our app helps you identify legitimate movers, avoid common scams, and ensures a stress-free relocation experience.",
        iconBg: "bg-slate-500",
    },
    {
        icon: <img src="/images/health-buddy-icon-med-res.png" alt="HealthBuddy" />,
        name: "HealthBuddy",
        description: "A health tracker app to help you monitor your diet, fitness, and achieve your health goals.",
        iconBg: "bg-emerald-500",
    },
    {
        icon: <img src="/images/travel-buddy-icon-med-res.png" alt="TravelBuddy" />,
        name: "TravelBuddy",
        description: "A travel tracking app to organize your trips, flights, and itineraries all in one place.",
        iconBg: "bg-sky-500",
    },
    {
        icon: <img src="/images/crypto-buddy-icon-med-res.png" alt="CryptoBuddy" />,
        name: "CryptoBuddy",
        description: "Your trusted companion in the crypto world. Track your portfolio, get market insights, and stay ahead of the trends.",
        iconBg: "bg-amber-500",
    },
    {
        icon: <img src="/images/gym-buddy-icon-med-res.png" alt="GymBuddy" />,
        name: "GymBuddy",
        description: "Your perfect workout partner. Track your progress, discover new exercises, and stay motivated on your fitness journey.",
        iconBg: "bg-red-500",
    }
];

export const ProductsSection: React.FC = () => {
  return (
    <Section
      id="products"
      badge="Our Products"
      title="Innovative Apps That Make a Difference"
      subtitle="Solving real-world problems with cutting-edge technology"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <Card key={product.name} index={index}>
            <div className={`w-20 h-20 rounded-lg flex items-center justify-center text-white text-3xl mb-6 ${product.iconBg}`}>
              {product.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-100">{product.name}</h3>
            <span className={getStatusChip("Coming Soon")}>
              Coming Soon
            </span>
            <p className="text-slate-400 leading-relaxed">{product.description}</p>
          </Card>
        ))}
      </div>

      <div className="text-center my-16 md:my-24 opacity-0 animation-fadeInUp" style={{animationDelay: "300ms"}}>
        <h3 className="text-3xl font-extrabold tracking-tighter text-slate-100">The BuddyApp Series</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {buddyApps.map((product, index) => (
          <Card key={product.name} index={products.length + index}>
            <div className={`w-20 h-20 rounded-lg flex items-center justify-center text-white text-3xl mb-6 ${product.iconBg}`}>
              {product.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-100">{product.name}</h3>
            <span className={getStatusChip("Coming Soon")}>
              Coming Soon
            </span>
            <p className="text-slate-400 leading-relaxed">{product.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
