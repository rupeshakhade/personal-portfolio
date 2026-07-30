import SectionHeader from './SectionHeader';

const highlights = [
  'Cloud Engineering',
  'Platform Engineering',
  'Infrastructure Automation',
  'GitOps',
  'Kubernetes',
  'DevSecOps',
  'CI/CD',
  'Site Reliability',
  'Cloud Security',
];

export default function AboutSection() {
  return (
    <section id="about" className="mt-24 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow backdrop-blur-xl">
      <SectionHeader title="About" description="Professional overview" />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6 text-slate-300">
          <p className="text-lg leading-8">
            Experienced DevOps & Cloud Engineer specializing in AWS, Azure, Kubernetes, Terraform, GitOps, Infrastructure as Code, DevSecOps, and Platform Engineering. Passionate about building secure, scalable, and automated cloud-native systems for enterprise environments.
          </p>
          <p className="text-base leading-7 text-slate-400">
            I partner with platform and engineering teams to design architecture that supports rapid delivery, strong governance, and reliable production operations. My work focuses on end-to-end automation, observability, platform resiliency, and security-first delivery.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <div key={item} className="rounded-3xl border border-slate-700/70 bg-slate-900/80 px-5 py-4 shadow-sm transition hover:border-sky-400/40 hover:bg-slate-900/95">
              <p className="text-sm font-medium text-slate-100">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
