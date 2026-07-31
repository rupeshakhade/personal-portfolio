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
    <section id="skills" className="mt-24 rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-glow">
      <SectionHeader title="Skills" description="Technical strength" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category, index) => (
          <motion.div key={category.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[2rem] border border-slate-200/70 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300/40">
            <h3 className="mb-4 text-lg font-semibold text-slate-950">{category.title}</h3>
            <div className="grid gap-2">
              {category.items.map((item) => (
                <span key={item} className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700 shadow-sm shadow-sky-100">
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
