
import React from 'react';
import { MailIcon } from './icons';

const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="w-10 h-10 bg-slate-900/70 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-300">
    {children}
  </a>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center gap-4 mb-8">
          <SocialLink href="mailto:info@pdiigm.com"><MailIcon /></SocialLink>
        </div>
        <div className="flex justify-center items-center">
            <img src="/images/inverted-logo-horzhi-res.png" alt="Paradiigm LLC" className="h-16" />
        </div>
        <p className="text-slate-500 mt-4">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
