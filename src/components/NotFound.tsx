export default function NotFound() {
  return (
    <div className="text-center py-16 space-y-6">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold text-slate-500">404</h1>
        <h2 className="text-2xl font-semibold text-slate-300">page not found</h2>
        <p className="text-slate-400 max-w-md mx-auto">
          the page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      <div className="pt-8">
        <a
          href="/"
          className="inline-flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg border border-slate-600 transition-colors"
        >
          ← back to home
        </a>
      </div>
    </div>
  );
}
