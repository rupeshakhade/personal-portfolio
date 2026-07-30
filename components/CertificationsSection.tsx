import SectionHeader from './SectionHeader';

const certifications = [
  {
    title: 'AWS Certified DevOps Engineer Professional',
    subtitle: 'DOP-C02',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    subtitle: 'CLF-C01',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="mt-24 rounded-[2rem] border border-slate-700/50 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/90 p-8 shadow-glow backdrop-blur-xl">
      <SectionHeader title="Certifications" description="Professional credentials" />
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert) => (
          <div key={cert.title} className="rounded-[2rem] border border-slate-700/70 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95 p-6 shadow-sm transition hover:-translate-y-1 hover:border-fuchsia-400/40">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">Certificate</p>
            <h3 className="mt-4 text-xl font-semibold text-slate-100">{cert.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{cert.subtitle}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-950 shadow-sm shadow-cyan-500/20">
              Verified
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
