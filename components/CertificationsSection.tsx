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
    <section id="certifications" className="mt-24 rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-glow">
      <SectionHeader title="Certifications" description="Professional credentials" />
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert) => (
          <div key={cert.title} className="rounded-[2rem] border border-slate-200/70 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300/40">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-600/90">Certificate</p>
            <h3 className="mt-4 text-xl font-semibold text-slate-950">{cert.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{cert.subtitle}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-950 shadow-sm shadow-cyan-100">
              Verified
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
