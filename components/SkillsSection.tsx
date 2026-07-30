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
    <section id="skills" className="mt-24 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-xl">
      <SectionHeader title="Skills" description="Technical strength" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category, index) => (
          <motion.div key={category.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[2rem] border border-slate-700/70 bg-slate-900/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-400/40">
            <h3 className="mb-4 text-lg font-semibold text-slate-100">{category.title}</h3>
            <div className="grid gap-2">
              {category.items.map((item) => (
                <span key={item} className="rounded-3xl bg-slate-950/80 px-4 py-3 text-sm text-slate-200 shadow-sm">
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
