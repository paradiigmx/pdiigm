
import React from 'react';
import { TwitterIcon, LinkedInIcon, MailIcon } from './icons';

const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="w-10 h-10 bg-slate-900/70 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-all duration-300">
    {children}
  </a>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-12 px-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center gap-4 mb-8">
          <SocialLink href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </SocialLink>
          <SocialLink href="#"><LinkedInIcon /></SocialLink>
          <SocialLink href="#"><MailIcon /></SocialLink>
        </div>
        <p className="text-slate-500">
          © {currentYear} ParadiigmX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
