import React from 'react';
import { Section } from './Section';
import { CheckmarkIcon } from './icons';

const registrations = [
    "DUNS / UEI registered (for federal SAM.gov contracts)",
    "Nevada Business License #",
    "NGEM Supplier ID #",
    "CAGE Code (if SAM.gov active)"
];

export const RegisteredSupplierSection: React.FC = () => {
    return (
        <Section
            id="supplier"
            badge="Registered Supplier"
            title="Trusted Government & Public Sector Partner"
            subtitle="Paradiigm is a registered supplier with the Nevada Gov eMarketplace (NGEM) and other public-sector procurement platforms, including Clark County School District, Las Vegas Valley Water District, and the Regional Transportation Commission of Southern Nevada."
        >
            <div className="max-w-4xl mx-auto text-left">
                <p className="text-lg text-slate-300 mb-8">
                    We are eligible to bid on government contracts for media, technology, and professional services, as well as industrial and facility supply categories.
                </p>
                <ul className="space-y-4">
                    {registrations.map((item, index) => (
                        <li key={index} className="flex items-center text-slate-300">
                            <div className="w-6 h-6 mr-3 text-green-500">
                                <CheckmarkIcon />
                            </div>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    );
};