'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { href: 'https://github.com/rupeshakhade', icon: Github },
  { href: 'https://www.linkedin.com/in/rupesh-akhade', icon: Linkedin },
  { href: 'mailto:rupeshakhade1998@gmail.com', icon: Mail },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 border-b border-white/10 bg-slate-950/90 px-6 py-4 backdrop-blur-xl lg:px-8">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900/90 text-sky-300 shadow-glow">
          <span className="text-lg font-semibold">RA</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-100">Rupesh Akhade</p>
          <p className="text-xs text-slate-400">Senior DevOps & Cloud Engineer</p>
        </div>
      </div>
      <div className="hidden items-center gap-6 md:flex">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="text-sm text-slate-300 transition hover:text-sky-300">
            {item.label}
          </a>
        ))}
      </div>
      <div className="hidden items-center gap-3 md:flex">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a key={social.href} href={social.href} target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/80 text-slate-200 transition hover:border-sky-300 hover:text-sky-100">
              <Icon size={18} />
            </a>
          );
        })}
      </div>
      <button type="button" onClick={() => setOpen(!open)} className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/80 text-slate-200 transition hover:border-sky-300 md:hidden">
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full z-40 rounded-b-[2rem] border border-slate-700/70 bg-slate-950/95 p-6 shadow-glow md:hidden">
          <div className="grid gap-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-sm text-slate-200 transition hover:text-sky-300">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
