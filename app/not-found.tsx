export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-20 text-slate-200">
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-10 text-center shadow-glow backdrop-blur-xl">
        <h1 className="text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-slate-400">The page you are looking for does not exist or has been moved.</p>
      </div>
    </main>
  );
}
