import { Github, Linkedin, Mail, Star, Moon, Sun } from "lucide-react";

import { SpiralExperience } from "@/components/SpiralExperience";
import { useTheme } from "@/hooks/use-theme";
import { profile, stats, skillGroups, education, roles } from "@/data/resume";
import DownloadResume from "@/components/DownloadResume";

function Section({
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
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
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

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="halo pointer-events-none absolute inset-x-0 -top-40 h-[720px] opacity-60" />

      {/* Toolbar */}
      <div className="no-print sticky top-0 z-30 mx-auto flex w-full max-w-6xl justify-end gap-2 px-6 pt-6">
        <button
          type="button"
          onClick={toggle}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs backdrop-blur transition-colors hover:bg-secondary"
        >
          {theme === "dark" ? (
            <Sun className="size-4" />
          ) : (
            <Moon className="size-4" />
          )}

          {theme === "dark" ? "Light" : "Dark"}
        </button>

        <DownloadResume />
      </div>

      {/* Hero */}
      <header className="relative mx-auto w-full max-w-6xl px-6 pb-8 pt-12 sm:pt-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
          {profile.role} · {profile.location}
        </p>

        <h1 className="mt-5 font-display text-5xl leading-[1.05] sm:text-7xl">
          <span className="text-gradient">{profile.name}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            <Mail className="size-4" />
            Let's build something
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:bg-secondary"
          >
            <Linkedin className="size-4" />
            LinkedIn
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:bg-secondary"
          >
            <Github className="size-4" />
            GitHub
          </a>
        </div>

        <div className="mt-6">
          <p className="inline-flex items-center flex-wrap gap-x-2 font-mono text-[11px] uppercase tracking-[0.10em] text-muted-foreground">
            <Star className="size-4" />
            {profile.expertise}
          </p>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-5 py-6">
              <dt className="font-display text-3xl text-gradient sm:text-4xl">
                {s.value}
              </dt>

              <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {/* Experience */}
      <Section
        id="experience"
        label="Work Experience"
        title="The spiral of a decade"
      >
        <p className="no-print -mt-6 mb-10 max-w-xl text-sm text-muted-foreground">
          Each step outward is a new chapter. Select a node to unfold the story.
        </p>

        <div className="print:hidden">
          <SpiralExperience />
        </div>

        {/* Print-only chronological list */}
        <ol className="hidden space-y-6 print:block">
          {roles.map((role) => (
            <li key={role.id}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl">
                  {role.company} — {role.title}
                </h3>

                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {role.period}
                </p>
              </div>

              <p className="text-xs text-muted-foreground">
                {[role.location, role.tracks.join(" · ")]
                  .filter(Boolean)
                  .join(" · ")}
              </p>

              <ul className="mt-2 space-y-1.5">
                {role.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2 text-sm leading-relaxed"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />

                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      {/* Skills */}
      <Section id="skills" label="Skills" title="Core competencies">
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="surface rounded-2xl p-6">
              <h3 className="font-display text-2xl">{group.title}</h3>

              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-foreground/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" label="Education" title="Foundations">
        <div className="surface flex flex-wrap items-baseline justify-between gap-4 rounded-2xl p-6 sm:p-8">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl">
              {education.school}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              {education.degree}
            </p>
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {education.period}
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="text-primary hover:underline"
          >
            Let's build something
          </a>
        </div>
      </footer>
    </main>
  );
}
