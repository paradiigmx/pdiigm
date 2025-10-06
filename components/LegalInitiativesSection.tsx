import React from 'react';
import { Section } from './Section';
import { Card } from './Card';

const initiatives = [
    {
        title: "PublicBar.org",
        concept: "Alternative bar association model.",
        focus: "Transparency, education, and public access to legal resources.",
        features: [
            "Member directory, committees, governance.",
            "Document and motion templates.",
            "CLE opportunities and public legal education tools."
        ]
    },
    {
        title: "PaternityMatters.org",
        tagline: "Your Rights. Your Family. Your Legacy.",
        focus: "Fathers’ rights, family law, and parental equality.",
        features: [
            "Legal resource library.",
            "Directory of attorneys and advocates.",
            "Blog and educational video series."
        ]
    }
];

export const LegalInitiativesSection: React.FC = () => {
    return (
        <Section
            id="initiatives"
            badge="Legal & Civic Initiatives"
            title="Advocacy and Access to Justice"
            subtitle="Championing transparency and equality in the legal system."
        >
            <div className="grid md:grid-cols-2 gap-8">
                {initiatives.map((item, index) => (
                    <Card key={item.title} index={index}>
                        <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                        {item.tagline && <p className="text-cyan-400 mb-4">{item.tagline}</p>}
                        <p className="text-slate-400 mb-4"><span className="font-semibold text-slate-300">Concept:</span> {item.concept}</p>
                        <p className="text-slate-400 mb-6"><span className="font-semibold text-slate-300">Focus:</span> {item.focus}</p>
                        <h4 className="text-lg font-semibold text-slate-200 mb-3">Features:</h4>
                        <ul className="space-y-2 text-slate-400">
                            {item.features.map((feature, i) => (
                                <li key={i} className="flex">
                                    <span className="text-cyan-400 mr-2">›</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                ))}
            </div>
        </Section>
    );
};