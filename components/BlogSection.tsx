'use client';

import SectionHeader from './SectionHeader';

const articles = [
  { title: 'Kubernetes Best Practices for Enterprise Platforms', category: 'Kubernetes' },
  { title: 'Terraform Module Design for Multi-Cloud Infrastructure', category: 'Terraform' },
  { title: 'GitOps Workflows for Secure Delivery', category: 'GitOps' },
  { title: 'DevSecOps Automation with Trivy and Checkov', category: 'DevSecOps' },
];

export default function BlogSection() {
  return (
    <section id="blog" className="mt-24 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-xl">
      <SectionHeader title="Blog" description="Insights & articles" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {articles.map((article) => (
          <article key={article.title} className="rounded-[2rem] border border-slate-700/70 bg-slate-900/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-slate-950/95">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-300/90">{article.category}</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-100">{article.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">A quick thought leadership piece on best practices for enterprise cloud engineering and platform automation.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
