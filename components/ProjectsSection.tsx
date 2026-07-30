'use client';

import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const projects = [
  {
    title: 'GitOps Platform',
    problem: 'Scaling deployments across multiple Kubernetes environments with manual release processes.',
    solution: 'Designed a GitOps platform using GitLab, FluxCD, and ArgoCD to automate application delivery and environment consistency.',
    architecture: 'Git repository driven deployments, Kubernetes cluster orchestration, and secure secret management via Azure Key Vault.',
    impact: 'Reduced deployment lead time by 70% and improved platform reliability across multiple clusters.',
    technologies: ['GitLab', 'FluxCD', 'ArgoCD', 'Kubernetes', 'Azure'],
    github: 'https://github.com/rupeshakhade',
  },
  {
    title: 'Enterprise CI/CD Pipeline',
    problem: 'Inconsistent build and release workflows for payment applications on AWS.',
    solution: 'Built centralized Jenkins and GitLab CI/CD pipelines with reusable templates, security scanning, and artifact versioning.',
    architecture: 'Pipeline orchestration with shared configuration, test stages, and deployment gating for multi-environment releases.',
    impact: 'Improved release consistency and decreased failed deployments by 45%.',
    technologies: ['Jenkins', 'GitLab CI/CD', 'AWS', 'Terraform'],
    github: 'https://github.com/rupeshakhade',
  },
  {
    title: 'AWS Infrastructure Automation',
    problem: 'Manual AWS provisioning and inconsistent environment configuration.',
    solution: 'Implemented Terraform modules and workspaces to provision consistent AWS infrastructure across dev/stage/prod.',
    architecture: 'Infrastructure as Code with modular networking, compute, and security controls.',
    impact: 'Enabled rapid environment provisioning and reduced infrastructure drift.',
    technologies: ['Terraform', 'AWS', 'S3', 'IAM'],
    github: 'https://github.com/rupeshakhade',
  },
  {
    title: 'Monitoring Stack',
    problem: 'Lack of observability for Kubernetes services and cloud workloads.',
    solution: 'Deployed Prometheus, Grafana, and ELK for centralized metrics, logs, and alerting.',
    architecture: 'Telemetry pipeline from Kubernetes to dashboards and alert rules.',
    impact: 'Delivered real-time visibility and faster incident response.',
    technologies: ['Prometheus', 'Grafana', 'ELK', 'Kubernetes'],
    github: 'https://github.com/rupeshakhade',
  },
  {
    title: 'DevSecOps Pipeline',
    problem: 'Security vulnerabilities were detected late in the release cycle.',
    solution: 'Integrated Trivy, Gitleaks, and Checkov into pipeline gates with automated policy enforcement.',
    architecture: 'Secure CI/CD workflow with automated scanning, policy validation, and deployment gating.',
    impact: 'Increased security coverage and blocked critical vulnerabilities before production.',
    technologies: ['Trivy', 'Gitleaks', 'Checkov', 'Jenkins', 'GitLab CI/CD'],
    github: 'https://github.com/rupeshakhade',
  },
  {
    title: 'GenAI Deployment Platform',
    problem: 'Deploying and scaling GenAI services reliably in cloud environments.',
    solution: 'Delivered Python-based GenAI deployment pipelines with AWS Load Balancers and Kubernetes orchestration.',
    architecture: 'Containerized models, auto-scaling compute, and secure API exposure through Route 53.',
    impact: 'Enabled production-quality GenAI experiences with scalable deployment workflows.',
    technologies: ['Python', 'AWS', 'LangChain', 'Kubernetes'],
    github: 'https://github.com/rupeshakhade',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-24 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-xl">
      <SectionHeader title="Projects" description="Enterprise-grade deliveries" />
      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="group rounded-[2rem] border border-slate-700/70 bg-slate-900/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-slate-950/95">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-300/90">Project</p>
              <span className="rounded-full bg-slate-800/90 px-3 py-1 text-xs uppercase text-slate-300">{project.technologies[0]}</span>
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-slate-100">{project.title}</h3>
            <div className="space-y-3 text-sm leading-7 text-slate-300">
              <p><span className="font-semibold text-slate-100">Problem:</span> {project.problem}</p>
              <p><span className="font-semibold text-slate-100">Solution:</span> {project.solution}</p>
              <p><span className="font-semibold text-slate-100">Architecture:</span> {project.architecture}</p>
              <p><span className="font-semibold text-slate-100">Business Impact:</span> {project.impact}</p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="rounded-full bg-slate-950/80 px-3 py-1 text-xs text-slate-200">{technology}</span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                GitHub
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
                Live demo
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
