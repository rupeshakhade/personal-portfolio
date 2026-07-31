'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Cloud, Terminal, Code2, Database } from 'lucide-react';

const techCards = [
  { icon: Cloud, title: 'Cloud Automation' },
  { icon: Terminal, title: 'Kubernetes Lifecycle' },
  { icon: Code2, title: 'Infrastructure as Code' },
  { icon: Database, title: 'Observability' },
];
const commands = [
  'kubectl get pods',
  'terraform apply',
  'helm upgrade',
  'git push origin main',
  'docker build',
  'flux reconcile',
  'aws eks update-kubeconfig',
];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/95 px-6 py-12 shadow-glow lg:px-10">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/5 opacity-80" />
      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-3 rounded-full border border-sky-200/80 bg-slate-50 px-4 py-2 text-sm text-slate-950 shadow-sm shadow-cyan-100">
            <Cloud size={18} className="text-sky-600" /> Enterprise Cloud & DevOps
          </span>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-600/90">Senior DevOps & Cloud Engineer</p>
            <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Building scalable cloud infrastructure, automated CI/CD, and secure{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-fuchsia-500 to-indigo-600 bg-clip-text text-transparent">Kubernetes platforms</span>.
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Experienced in AWS, Azure, GitOps, Terraform, Kubernetes, and DevSecOps for enterprise-grade production systems. I design resilient cloud architecture and platform engineering solutions that scale.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:from-sky-300 hover:to-fuchsia-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:border-sky-300 hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400/70"
            >
              Contact Me
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-slate-700">
            {[
              { icon: Github, href: 'https://github.com/rupeshakhade' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/rupesh-akhade' },
              { icon: Mail, href: 'mailto:rupeshakhade1998@gmail.com' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-slate-700 transition hover:border-sky-300 hover:text-sky-600">
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-glow">
          <div className="absolute -top-10 right-4 hidden h-28 w-28 rounded-full bg-sky-500/10 blur-2xl lg:block" />
          <div className="space-y-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {techCards.map(({ icon: Icon, title }, index) => (
                <motion.div key={title} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3 rounded-3xl border border-slate-200/80 bg-slate-50 px-4 py-4 shadow-sm">
                  <Icon size={22} className="text-sky-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="rounded-[1.8rem] border border-slate-200/80 bg-slate-50 p-5">
              <div className="mb-4 flex items-center justify-between text-sm text-slate-500">
                <span>terminal.sh</span>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-rose-500" />
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>
              </div>
              <div className="space-y-3 font-mono text-sm leading-7 text-slate-700">
                {commands.map((command, index) => (
                  <motion.div key={command} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.08 * index }} className="flex items-center gap-3">
                    <span className="text-sky-300">$</span>
                    <span>{command}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {['AWS', 'Azure', 'Kubernetes', 'Terraform', 'GitOps', 'DevSecOps'].map((tag) => (
                <span key={tag} className="rounded-3xl border border-slate-200/70 bg-slate-100 px-4 py-3 text-sm text-slate-700 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
