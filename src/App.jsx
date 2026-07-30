import { FiArrowRight, FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import Navbar from './components/Navbar.jsx';
import SectionHeader from './components/SectionHeader.jsx';
import SkillCard from './components/SkillCard.jsx';
import ExperienceCard from './components/ExperienceCard.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import ContactCard from './components/ContactCard.jsx';

const skills = [
  { category: 'Cloud', items: ['AWS', 'Azure'] },
  { category: 'Containers', items: ['Docker', 'Kubernetes'] },
  { category: 'CI/CD', items: ['Jenkins', 'GitLab CI/CD'] },
  { category: 'IaC', items: ['Terraform', 'Ansible'] },
  { category: 'Monitoring', items: ['Prometheus', 'Grafana'] },
  { category: 'Languages', items: ['Bash', 'Python'] },
];

const experiences = [
  {
    company: 'TCS',
    role: 'Senior DevOps Engineer',
    period: '2021 - Present',
    details:
      'Leading cloud migrations, Kubernetes adoption and CI/CD automation for enterprise workloads. Implemented GitOps patterns and secure infrastructure workflows.',
  },
  {
    company: 'Airpay',
    role: 'DevOps Engineer',
    period: '2019 - 2021',
    details:
      'Designed automated deployment pipelines and container-focused environments for payment integrations. Improved release cycles with infrastructure as code and monitoring.',
  },
  {
    company: 'Infosys',
    role: 'Cloud Engineer',
    period: '2018 - 2019',
    details:
      'Delivered cloud-native solutions on AWS and Azure while supporting DevSecOps best practices and platform reliability.',
  },
];

const projects = [
  {
    title: 'GitOps Platform',
    description:
      'Built a GitOps-driven platform for continuous delivery using GitLab, ArgoCD, and reusable deployment templates.',
    tech: ['GitLab', 'ArgoCD', 'Kubernetes'],
  },
  {
    title: 'Kubernetes Deployment',
    description:
      'Deployed microservices clusters with Helm and automated rollout strategies to improve fault tolerance and scale.',
    tech: ['Kubernetes', 'Helm', 'Docker'],
  },
  {
    title: 'Terraform Infrastructure',
    description:
      'Provisioned multi-cloud resources with Terraform modules to enforce consistency and policy guardrails.',
    tech: ['Terraform', 'AWS', 'Azure'],
  },
  {
    title: 'AWS CI/CD Pipeline',
    description:
      'Implemented an AWS pipeline for build, test, and deployment workflows with CloudFormation and security scanning.',
    tech: ['AWS', 'CodePipeline', 'Jenkins'],
  },
  {
    title: 'Monitoring Dashboard',
    description:
      'Created observability dashboards and alerts using Prometheus and Grafana for real-time platform health.',
    tech: ['Prometheus', 'Grafana', 'Loki'],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="relative overflow-hidden pb-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-hero-gradient" />
        <section id="home" className="relative mx-auto max-w-7xl px-6 pt-8 sm:pt-12 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            <div className="space-y-8">
              <p className="inline-flex items-center rounded-full border border-sky-400/20 bg-slate-900/70 px-4 py-2 text-sm text-sky-200">
                DevOps & Cloud Engineer · 5 Years Experience · Mumbai
              </p>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300/90">Hello, I am</p>
                <h1 className="text-5xl font-semibold tracking-tight text-slate-100 sm:text-6xl">
                  Rupesh Akhade
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  I build secure, scalable cloud infrastructure and delivery pipelines using AWS, Azure, Kubernetes, and GitOps.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  <FiDownload /> Download Resume
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/85 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
                >
                  View Projects
                  <FiArrowRight />
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-glow backdrop-blur-xl">
              <div className="space-y-6">
                <div className="rounded-3xl bg-slate-950/80 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-sky-300/90">About me</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    I specialize in cloud architecture, container orchestration, infrastructure as code, secure delivery, and observability for modern platforms.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/80 p-5">
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="mt-3 text-lg font-semibold text-slate-100">Mumbai, India</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 p-5">
                    <p className="text-sm text-slate-400">Role</p>
                    <p className="mt-3 text-lg font-semibold text-slate-100">DevOps & Cloud Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
          <SectionHeader title="About" description="Professional summary" />
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow">
            <p className="text-base leading-8 text-slate-300 sm:text-lg">
              I am a seasoned DevOps and Cloud Engineer with deep expertise in AWS and Azure, focused on delivering resilient infrastructure with Kubernetes, Docker, Terraform, and CI/CD automation. My practice spans GitOps and DevSecOps, building secure pipeline workflows, enforcing policy guardrails, and maintaining observability for enterprise applications.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {['AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'GitOps', 'DevSecOps'].map((item) => (
                <span key={item} className="rounded-2xl bg-slate-950/70 px-4 py-3 text-sm text-slate-100 shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
          <SectionHeader title="Skills" description="Core capabilities" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.category} category={skill.category} items={skill.items} />
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
          <SectionHeader title="Experience" description="Career timeline" />
          <div className="grid gap-6 lg:grid-cols-3">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.company} {...experience} />
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
          <SectionHeader title="Projects" description="Recent work" />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section id="certifications" className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
          <SectionHeader title="Certifications" description="Verified credentials" />
          <div className="grid gap-4 sm:grid-cols-2">
            {['AWS DevOps Engineer Professional', 'AWS Cloud Practitioner'].map((cert) => (
              <div
                key={cert}
                className="rounded-3xl border border-slate-700/70 bg-slate-900/80 px-6 py-5 shadow-glow"
              >
                <p className="text-base font-semibold text-slate-100">{cert}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto mt-24 max-w-7xl px-6 pb-20 lg:px-8">
          <SectionHeader title="Contact" description="Get in touch" />
          <div className="grid gap-6 md:grid-cols-3">
            <ContactCard label="Email" value="rupesh@example.com" href="mailto:rupesh@example.com" />
            <ContactCard label="LinkedIn" value="linkedin.com/in/rupeshakhade" href="https://www.linkedin.com" />
            <ContactCard label="GitHub" value="github.com/rupeshakhade" href="https://github.com" />
          </div>
          <div className="mt-10 rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 text-slate-300 shadow-glow">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300/90">Ready to collaborate?</p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-100">Let’s build secure cloud platforms together.</h3>
              </div>
              <a
                href="mailto:rupesh@example.com"
                className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                <FiMail /> Send Email
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
