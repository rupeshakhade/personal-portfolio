import { Github, Linkedin, Mail } from 'lucide-react';

const links = [
  { label: 'GitHub', href: 'https://github.com/rupeshakhade', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rupesh-akhade', icon: Linkedin },
  { label: 'Email', href: 'mailto:rupeshakhade1998@gmail.com', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="mx-auto mt-20 w-full max-w-7xl px-6 pb-8 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 text-slate-600 shadow-glow">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm text-slate-600">© 2026 Rupesh Akhade. Built with Next.js, Tailwind CSS, and Cloudflare Pages.</p>
          <div className="flex flex-wrap items-center gap-4">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-700 transition hover:text-sky-600">
                  <Icon size={16} /> {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
