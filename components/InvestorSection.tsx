import React from 'react';
import { Section } from './Section';

export const InvestorSection: React.FC = () => {
    const handleInvestClick = () => {
        window.location.href = `mailto:info@pdiigm.com?subject=${encodeURIComponent("Interested in Investing")}`;
    };

    return (
        <Section
            id="investors"
            badge="Investors"
            title="Join Our Journey"
            subtitle="We are currently seeking strategic investors to help us scale our operations and expand our market reach. Join us in shaping the future of our industry."
        >
            <div className="text-center">
                <button
                    onClick={handleInvestClick}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-400 text-white font-bold rounded-lg hover:scale-105 transition-transform"
                >
                    Become an Investor
                </button>
            </div>
        </Section>
    );
};
