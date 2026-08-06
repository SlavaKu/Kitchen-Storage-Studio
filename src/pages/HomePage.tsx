export function HomePage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-89px)] max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Foundation ready
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          Kitchen Storage Studio is running.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          This project is set up as a clean React, Vite, TypeScript, and Tailwind
          application foundation for future product sections.
        </p>
      </div>
    </section>
  );
}
