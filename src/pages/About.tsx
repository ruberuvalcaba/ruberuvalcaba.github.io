// import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";
import { profile, education } from "@/data/resume";
import { actionButtons } from "@/data/content";
import { Link } from "react-router-dom";

const content = {
  title: "Beyond the résumé",
  intro: `I'm a creative soul based in New York City, a social spirit who loves building things that last.`,
  phylosophy: `My philosophy is simple: create with intention, lead with quality, and care about the small details that most people may never notice. As a Frontend Software Engineer, I'm passionate about the intersection of technology and creativity, and I enjoy exploring how the two can come together to create experiences that are both functional and beautiful.`,
  hobbies: `Outside of technology, photography and painting are two of the ways I stay connected to my creative side. I believe that when creativity is embraced in any field, there's an opportunity to build something meaningful, thoughtful, and lasting.`,
};

const principles = [
  {
    title: "Systems over screens",
    body: "I build component libraries and architecture that let a whole team move faster, instead of shipping one-off screens that age badly.",
  },
  {
    title: "Performance is a feature",
    body: "Cutting page loads from 9s to 2s changed how people used the product. I treat speed as part of the design, not an afterthought.",
  },
  {
    title: "Mentorship compounds",
    body: "Twenty-plus engineers later, I still learn the most from code reviews. Clear feedback and written context outlive any single release.",
  },
  {
    title: "Craft in the details",
    body: "Accessible, responsive, motion-aware interfaces. The small things are what make a product feel trustworthy.",
  },
];

const nextSteps = {
  title: "Looking for teams that care about craft",
  body: "I'm most useful where a frontend needs direction: an aging codebase to modernize, a design system to establish, or a team that wants to ship faster without losing quality.",
};

const About = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="halo pointer-events-none absolute inset-x-0 -top-40 h-[720px] opacity-60" />

      <div className="mx-auto w-full max-w-4xl px-6 pb-24 pt-12 sm:pt-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs transition-colors hover:bg-secondary"
        >
          <ArrowLeft className="size-4" /> {actionButtons.back}
        </Link>

        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
          More about me
        </p>
        <h1 className="mt-3 font-display text-5xl leading-[1.05] sm:text-6xl">
          <span className="text-gradient">{content.title}</span>
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {content.intro}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {content.phylosophy}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {content.hobbies}
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {principles.map((p) => (
            <article key={p.title} className="surface rounded-2xl p-6">
              <h2 className="font-display text-2xl">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </article>
          ))}
        </div>

        <section className="mt-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Education
          </p>
          <div className="surface mt-4 rounded-2xl ">
            {education.map((edu) => (
              <div
                className=" flex flex-wrap items-baseline justify-between gap-4 p-6"
                key={edu.school}
              >
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl">
                    {edu.school}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {edu.degree}
                  </p>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            What&apos;s next
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            {nextSteps.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {nextSteps.body}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Work authorization: {profile.authorization}.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            style={{ boxShadow: "var(--shadow-glow)" }}
            data-umami-event="Email click"
          >
            <Mail className="size-4" /> {actionButtons.email}
          </a>
        </section>
      </div>
    </main>
  );
};
export default About;
