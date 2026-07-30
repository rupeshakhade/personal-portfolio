'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const categories = [
  {
    title: 'Cloud',
    items: ['AWS', 'Azure'],
  },
  {
    title: 'Containers',
    items: ['Docker', 'Kubernetes', 'Helm', 'Kustomize', 'Kaniko'],
  },
  {
    title: 'Infrastructure',
    items: ['Terraform', 'Ansible'],
  },
  {
    title: 'CI/CD',
    items: ['Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'FluxCD', 'ArgoCD'],
  },
  {
    title: 'Monitoring',
    items: ['Prometheus', 'Grafana', 'ELK', 'CloudWatch'],
  },
  {
    title: 'Security',
    items: ['Trivy', 'Checkov', 'Gitleaks', 'SOPS', 'Nessus'],
  },
  {
    title: 'Languages',
    items: ['Python', 'Bash', 'JavaScript'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="mt-24 rounded-[2rem] border border-slate-700/50 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/90 p-8 shadow-glow backdrop-blur-xl">
      <SectionHeader title="Skills" description="Technical strength" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category, index) => (
          <motion.div key={category.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[2rem] border border-slate-700/70 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95 p-6 shadow-sm transition hover:-translate-y-1 hover:border-fuchsia-400/30">
            <h3 className="mb-4 text-lg font-semibold text-slate-100">{category.title}</h3>
            <div className="grid gap-2">
              {category.items.map((item) => (
                <span key={item} className="rounded-3xl bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/90 px-4 py-3 text-sm text-slate-200 shadow-sm shadow-sky-500/10">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
