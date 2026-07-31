export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-20 text-slate-950">
      <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 text-center shadow-glow backdrop-blur-xl">
        <h1 className="text-4xl font-semibold text-slate-950">Page not found</h1>
        <p className="mt-4 text-slate-600">The page you are looking for does not exist or has been moved.</p>
      </div>
    </main>
  );
}
