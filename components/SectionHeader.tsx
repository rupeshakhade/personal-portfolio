interface SectionHeaderProps {
  title: string;
  description: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 flex flex-col gap-4">
      <p className="text-sm uppercase tracking-[0.32em] text-sky-600/90">{title}</p>
      <div className="space-y-3">
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500" />
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight bg-gradient-to-r from-cyan-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent sm:text-4xl">
          {description}
        </h2>
      </div>
    </div>
  );
}
