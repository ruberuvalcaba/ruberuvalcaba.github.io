export default function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 p-8">
      <header className="mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
          {label}
        </p>

        <h2 className="mt-3 font-display text-4xl sm:text-5xl">{title}</h2>
      </header>

      {children}
    </section>
  );
}
