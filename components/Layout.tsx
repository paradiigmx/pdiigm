import Link from 'next/link';
import React from 'react';
import '@styles/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="container nav">
        <div className="logo"><Link href="/">Paradiigm</Link></div>
        <div>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link className="btn" href="/contact">Contact</Link>
        </div>
      </nav>
      <main className="container">{children}</main>
      <footer className="container footer">
        <div>© {new Date().getFullYear()} Paradiigm. All rights reserved.</div>
      </footer>
    </>
  );
}
