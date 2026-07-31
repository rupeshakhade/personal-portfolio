'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const diagrams = [
  { title: 'AWS Architecture', caption: 'Cloud infrastructure, networking, and platform services.' },
  { title: 'Azure AKS Architecture', caption: 'Managed Kubernetes with secure service integration.' },
  { title: 'CI/CD Pipeline', caption: 'Automated build, test, and deployment workflow.' },
  { title: 'GitOps Workflow', caption: 'Repository-driven deployment and reconciliation.' },
  { title: 'Kubernetes Cluster', caption: 'Cluster orchestration, autoscaling, and resilience.' },
  { title: 'Monitoring Stack', caption: 'Telemetry, dashboards, and alerts.' },
  { title: 'DevSecOps Pipeline', caption: 'Security scanning and policy gates in CI/CD.' },
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="mt-24 rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-glow">
      <SectionHeader title="Architecture" description="Platform visuals" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {diagrams.map((diagram, index) => (
          <motion.div key={diagram.title} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="group rounded-[2rem] border border-slate-200/70 bg-slate-50 p-6 text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-slate-100">
            <div className="mb-4 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-600/90">Diagram</p>
                <h3 className="text-xl font-semibold text-slate-950">{diagram.title}</h3>
              </div>
              <div className="rounded-2xl bg-slate-100 px-3 py-2 text-xs uppercase tracking-[0.24em] text-slate-700">Interactive</div>
            </div>
            <div className="rounded-3xl border border-slate-200/80 bg-white p-5 text-sm leading-7 text-slate-600">
              {diagram.caption}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
