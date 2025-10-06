
import React from 'react';
import { Section } from './Section';
import { BoltIcon, LockClosedIcon, GlobeAltIcon, HeartIcon } from './icons';

const features = [
    {
      icon: <BoltIcon />,
      title: "Lightning Fast",
      description: "Optimized performance that delivers instant responses and seamless experiences.",
    },
    {
      icon: <LockClosedIcon />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security protocols protect your data and ensure peace of mind.",
    },
    {
      icon: <GlobeAltIcon />,
      title: "Global Impact",
      description: "Solutions designed to scale and make a difference in communities worldwide.",
    },
    {
      icon: <HeartIcon />,
      title: "Client-Focused",
      description: "Your success is our priority. We work closely with you to exceed expectations.",
    },
];

export const FeaturesSection: React.FC = () => {
    return (
        <Section
            id="features"
            badge="Why Choose ParadiigmX"
            title="Built for Excellence"
            subtitle="Innovation meets reliability in everything we create"
        >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <div key={feature.title} className="text-left opacity-0 animation-fadeInUp" style={{animationDelay: `${index * 150}ms`}}>
                        <div className="text-cyan-400 text-5xl mb-6">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-slate-100">{feature.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};
