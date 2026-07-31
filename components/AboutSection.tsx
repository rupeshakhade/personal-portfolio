import Image from 'next/image';
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
    <section id="about" className="mt-24 rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-glow">
      <SectionHeader title="About" description="Professional overview" />
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
        <div className="space-y-6 text-slate-700">
          <p className="text-lg leading-8">
            Experienced DevOps & Cloud Engineer specializing in AWS, Azure, Kubernetes, Terraform, GitOps, Infrastructure as Code, DevSecOps, and Platform Engineering. Passionate about building secure, scalable, and automated cloud-native systems for enterprise environments.
          </p>
          <p className="text-base leading-7 text-slate-600">
            I partner with platform and engineering teams to design architecture that supports rapid delivery, strong governance, and reliable production operations. My work focuses on end-to-end automation, observability, platform resiliency, and security-first delivery.
          </p>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-50 shadow-sm">
            <Image
              src="/profile.jpg"
              alt="Rupesh Akhade profile photo"
              width={800}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="rounded-[2rem] border border-slate-200/70 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">Professional Snapshot</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Trusted partner for enterprise cloud transformation with a strong focus on reliability, automation, and secure delivery.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200/70 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
