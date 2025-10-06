import React from 'react';
import { Section } from './Section';
import { Card } from './Card';

const products = [
    {
        title: "Shades of Greatness™ Coloring Book Series",
        concept: "A line of educational coloring books celebrating iconic historical figures in Black history and global culture.",
        format: "Available on Amazon KDP and Etsy (print and digital versions).",
        features: [
            "AI-generated portraits and bios.",
            "Volumes by theme: Civil Rights Leaders, Inventors, Artists & Thinkers, etc.",
            "Includes custom bios, affirmations, and QR codes linking to learning content.",
            "Expansion: Shades of Greatness: Women of Legacy and Shades of Greatness Jr. (kids version)."
        ]
    },
    {
        title: "Toon Teachers™",
        concept: "Animated music-based learning for kids.",
        platform: "YouTube and website embeds.",
        content: "Educational songs that teach math, science, reading, and positive values.",
        expansion: "Toon Teachers app and printable lyric/activity sheets."
    }
];

export const CreativeProductsSection: React.FC = () => {
    return (
        <Section
            id="creative"
            badge="Creative & Educational Products"
            title="Inspiring Minds, One Product at a Time"
            subtitle="Engaging content that educates and entertains."
        >
            <div className="space-y-12">
                {products.map((item, index) => (
                    <Card key={item.title} index={index}>
                        <div>
                            <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                            <p className="text-slate-400 mb-4"><span className="font-semibold text-slate-300">Concept:</span> {item.concept}</p>
                            {item.format && <p className="text-slate-400 mb-4"><span className="font-semibold text-slate-300">Format:</span> {item.format}</p>}
                            {item.platform && <p className="text-slate-400 mb-4"><span className="font-semibold text-slate-300">Platform:</span> {item.platform}</p>}
                            {item.content && <p className="text-slate-400 mb-6"><span className="font-semibold text-slate-300">Content:</span> {item.content}</p>}

                            {item.features && (
                                <>
                                    <h4 className="text-lg font-semibold text-slate-200 mb-3">Features:</h4>
                                    <ul className="space-y-2 text-slate-400">
                                        {item.features.map((feature, i) => (
                                            <li key={i} className="flex">
                                                <span className="text-cyan-400 mr-2">›</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {item.expansion && <p className="text-slate-400 mt-4"><span className="font-semibold text-slate-300">Expansion:</span> {item.expansion}</p>}

                            {item.title.includes("Shades of Greatness") && (
                                <a
                                    href="https://www.amazon.com/Black-Icons-Coloring-Book-Trailblazers/dp/B0FT125XXG/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors"
                                >
                                    Buy Now on Amazon
                                </a>
                            )}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};