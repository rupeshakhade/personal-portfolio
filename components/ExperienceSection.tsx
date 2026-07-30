'use client';

import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Tata Consultancy Services',
    title: 'DevOps Engineer',
    date: '02/2026 – Present',
    location: 'Client: Ericsson · Mumbai, India',
    highlights: [
      'Implemented GitOps workflows using FluxCD on AKS for 50+ microservices in multi-region Azure.',
      'Managed Helm releases with Kustomize overlays for environment-specific Kubernetes deployments.',
      'Built GitLab CI/CD pipelines with shared templates, security scanning, and Helm packaging.',
      'Integrated DevSecOps checks with Trivy, Gitleaks, and Checkov to enforce secure delivery.',
      'Automated secrets with SOPS and Azure Key Vault, eliminating plain-text credentials in Git.',
      'Implemented KEDA autoscaling driven by Azure Service Bus queue depth for worker workloads.',
    ],
  },
  {
    company: 'Airpay Payment Services',
    title: 'DevOps Engineer II',
    date: '07/2024 – 01/2026',
    location: 'Mumbai, India',
    highlights: [
      'Built AWS CI/CD pipelines using Jenkins, GitLab, and Terraform for payment platform releases.',
      'Managed EKS clusters and zero-downtime microservice deployments using Kubernetes best practices.',
      'Provisioned AWS infrastructure with Terraform modules, workspaces, and secure IAM patterns.',
      'Dockerized Laravel and Python apps, published to ECR, and delivered via Docker Swarm and Jenkins.',
      'Led Jenkins migration from CentOS 6.9 to Ubuntu 22.04 with zero downtime.',
      'Deployed GenAI solutions with LangChain, GPT-4, and LLaMA on AWS with Route 53 and ELB.',
    ],
  },
  {
    company: 'Infosys Limited',
    title: 'Systems Engineer (DevOps)',
    date: '03/2022 – 07/2024',
    location: 'Client: Vanguard · Mumbai, India',
    highlights: [
      'Built Jenkins pipelines integrated with Maven and Nexus for automated artifact delivery.',
      'Automated deployments using Ansible and Ansible Tower across dev, staging, and prod.',
      'Managed AWS EC2, S3, and IAM to support secure production application deployments.',
      'Monitored Linux infrastructure, resolved incidents, and managed operational stability.',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="mt-24 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-xl">
      <SectionHeader title="Experience" description="Professional timeline" />
      <div className="grid gap-6 lg:grid-cols-3">
        {experiences.map((experience, index) => (
          <motion.div key={experience.company} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} className="rounded-[2rem] border border-slate-700/70 bg-slate-900/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-400/40">
            <div className="mb-4 space-y-2 text-slate-300">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-300/90">{experience.company}</p>
              <h3 className="text-xl font-semibold text-slate-100">{experience.title}</h3>
              <p className="text-sm text-slate-400">{experience.date}</p>
              <p className="text-sm text-slate-400">{experience.location}</p>
            </div>
            <ul className="space-y-3 text-sm leading-7 text-slate-300">
              {experience.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
