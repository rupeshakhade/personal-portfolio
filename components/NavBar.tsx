'use client';

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
    <nav className="sticky top-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 border-b border-slate-200/80 bg-white/95 px-6 py-4 backdrop-blur-xl lg:px-8">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-50 text-sky-600 shadow-sm">
          <span className="text-lg font-semibold">RA</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-950">Rupesh Akhade</p>
          <p className="text-xs text-slate-500">Senior DevOps & Cloud Engineer</p>
        </div>
      </div>
      <div className="hidden items-center gap-6 md:flex">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="text-sm text-slate-700 transition hover:text-sky-600">
            {item.label}
          </a>
        ))}
      </div>
      <div className="hidden items-center gap-3 md:flex">
        {socials.map((social) => {
          const Icon = social.icon;
          const label = social.href.includes('github.com')
            ? 'Visit GitHub profile'
            : social.href.includes('linkedin.com')
            ? 'Visit LinkedIn profile'
            : 'Send email';

          return (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-slate-700 transition hover:border-sky-300 hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-slate-700 transition hover:border-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70 md:hidden"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      {open && (
        <div id="mobile-navigation" className="absolute left-0 right-0 top-full z-40 rounded-b-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-sm md:hidden">
          <div className="grid gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-700 transition hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
