import ProjectCard from "@/components/ProjectCard";
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
          <ProjectCard
            title="AI Movie Explorer"
            href="https://ai-movie-explorer.vercel.app/"
            trackingEvent="AI Movie Explorer click"
            image={{
              src: "/ai-movie-explorer.png",
              alt: "AI Movie Explorer showing movie collections and its AI movie assistant",
              width: 1920,
              height: 957,
            }}
          >
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
              The project showcases modern frontend architecture, server-side
              rendering, performance optimization, and AI integration.
            </p>
          </ProjectCard>
        </li>
        <li>
          <ProjectCard
            title="Hyperliquid Market Overview"
            href="https://hyperliquid-market-overview.vercel.app/"
            trackingEvent="Hyperliquid Market Overview click"
            image={{
              src: "/hyperliquid-market-overview.png",
              alt: "Hyperliquid Market Overview showing market data and analytics",
              width: 1920,
              height: 957,
            }}
          >
            <p>
              A real-time trading dashboard for the,{" "}
              <strong className="font-medium text-foreground">
                Hyperliquid
              </strong>
              , built with{" "}
              <strong className="font-medium text-foreground">
                React, TypeScript, Zustand, and WebSockets
              </strong>
              .
            </p>
            <p>
              Features live market data, order books, candlestick charts, and
              trades, with automatic reconnection, buffered updates, and
              performance optimizations for high-frequency data.
            </p>
          </ProjectCard>
        </li>
      </ul>
    </Section>
  );
}
