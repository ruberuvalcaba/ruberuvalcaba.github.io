import { ArrowUpRight } from "lucide-react";

import Section from "@/components/Section";

export default function LatestProjects() {
  return (
    <Section
      id="projects"
      label="Selected personal work"
      title="Latest Projects"
    >
      <ul className="space-y-8">
        <li>
          <a
            href="https://ai-movie-explorer.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            data-umami-event="AI Movie Explorer click"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              <div className="min-w-0 overflow-hidden rounded-xl border border-border md:flex-1">
                <img
                  src="/ai-movie-explorer.png"
                  alt="AI Movie Explorer showing movie collections and its AI movie assistant"
                  width={1920}
                  height={957}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02]"
                />
              </div>
              <div className="min-w-0 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base md:flex-1">
                <p>
                  A full-stack movie discovery application built with{" "}
                  <strong className="font-medium text-foreground">
                    React, TypeScript, and the TanStack ecosystem
                  </strong>
                  , featuring an AI-powered assistant using{" "}
                  <strong className="font-medium text-foreground">
                    Google Gemini and MCP
                  </strong>
                  .
                </p>
                <p>
                  The project showcases modern frontend architecture,
                  server-side rendering, performance optimization, and AI
                  integration.
                </p>
              </div>
            </div>
            <span className="mt-4 inline-flex items-center gap-2 text-primary group-hover:underline">
              AI Movie Explorer
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </span>
          </a>
        </li>
      </ul>
    </Section>
  );
}
