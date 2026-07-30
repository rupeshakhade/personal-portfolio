interface SectionHeaderProps {
  title: string;
  description: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 flex flex-col gap-3">
      <p className="text-sm uppercase tracking-[0.32em] text-sky-300/90">{title}</p>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
        {description}
      </h2>
    </div>
  );
}
