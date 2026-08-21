import { useMemo, useState } from "react";
import {
  roles,
  tracks as allTracks,
  type Role,
  type Track,
} from "@/data/resume";
import { logos, type Logos, actionButtons } from "@/data/content";
import { MousePointerClick } from "lucide-react";

const SIZE = 620;
const CENTER = SIZE / 2;
const BASE_R = 88;
const STEP_R = 42;
const STEP_A = 2.35; // radians between roles

// Oldest at the core, newest at the outer edge.
const journey: Role[] = [...roles].reverse();

function pointAt(i: number) {
  const angle = -Math.PI / 2 + i * STEP_A;
  const r = BASE_R + i * STEP_R;
  return {
    x: CENTER + r * Math.cos(angle),
    y: CENTER + r * Math.sin(angle),
    angle,
    r,
  };
}

function spiralPath(count: number) {
  const pts: string[] = [];
  for (let t = -0.55; t <= Math.max(count - 1, 0) + 0.75; t += 0.02) {
    const { x, y } = pointAt(t);
    pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return `M ${pts.join(" L ")}`;
}

export function SpiralExperience() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const fallback = journey[journey.length - 1]!;
  const activeIndexRaw = journey.findIndex((r) => r.id === selectedId);
  const activeIndex = activeIndexRaw < 0 ? journey.length - 1 : activeIndexRaw;
  const active = journey[activeIndex] ?? fallback;
  const path = useMemo(() => spiralPath(journey.length), []);
  const rotation = -(activeIndex * STEP_A * 180) / Math.PI;

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="no-print max-w-xl flex flex-wrap items-center gap-2 justify-between">
        <div className="flex gap-2">
          {logos.map((logo: Logos) => (
            <button
              key={`logo_${logo.id}`}
              type="button"
              onClick={() => setSelectedId(logo.id)}
              className={`group relative cursor-pointer rounded-full border border-border p-1 text-muted-foreground hover:bg-secondary z-10`}
              aria-label={logo.company}
              data-umami-event={`${logo.company} click`}
            >
              <img
                src={logo.src}
                alt={logo.company}
                className="size-8 object-contain grayscale contrast-40 brightness-180"
              />
              {/* Tooltip */}
              <span
                className="
          pointer-events-none
          absolute
          left-1/2
          top-full
          z-50
          mt-2
          -translate-x-1/2
          whitespace-nowrap
          rounded-md
          bg-foreground
          px-2.5
          py-1.5
          text-xs
          text-background
          opacity-0
          transition-opacity
          duration-200
          group-hover:opacity-100
        "
              >
                {logo.company}
              </span>
            </button>
          ))}
        </div>
        {selectedId && selectedId !== fallback?.id && (
          <button
            type="button"
            onClick={() => setSelectedId(null)}
            className={`rounded-full border px-4 py-1.5 text-xs transition-colors border-border text-muted-foreground hover:bg-secondary cursor-pointer`}
            data-umami-event="Current role click"
          >
            <div className="inline-flex items-center gap-2">
              <MousePointerClick className="size-4" />
              {actionButtons.currentRole}
            </div>
          </button>
        )}
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        {/* Wheel */}
        <div className="relative mx-auto aspect-square w-full max-w-[560px]">
          <div className="halo absolute inset-0 rounded-full opacity-70" />
          <div
            className="absolute inset-0 origin-center [transition:transform_900ms_cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <svg
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              className="h-full w-full overflow-visible"
            >
              <defs>
                <linearGradient id="spiralStroke" x1="0" y1="0" x2="1" y2="1">
                  <stop
                    offset="0%"
                    stopColor="var(--primary)"
                    stopOpacity="0.15"
                  />
                  <stop
                    offset="55%"
                    stopColor="var(--primary)"
                    stopOpacity="0.55"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--accent)"
                    stopOpacity="0.85"
                  />
                </linearGradient>
              </defs>
              {[0.35, 0.62, 0.9].map((s) => (
                <circle
                  key={s}
                  cx={CENTER}
                  cy={CENTER}
                  r={CENTER * s}
                  fill="none"
                  stroke="var(--border)"
                  strokeDasharray="2 10"
                />
              ))}
              <path
                d={path}
                fill="none"
                stroke="url(#spiralStroke)"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>

            {journey.map((role, i) => {
              const { x, y } = pointAt(i);
              const isActive = role.id === active.id;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedId(role.id)}
                  aria-pressed={isActive}
                  aria-label={`${role.company}, ${role.period}`}
                  className="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{
                    left: `${(x / SIZE) * 100}%`,
                    top: `${(y / SIZE) * 100}%`,
                  }}
                >
                  <span
                    className="spiral-node flex items-center gap-2 rounded-full border border-border bg-card/90 p-1.5 backdrop-blur group-hover:pr-3 data-[active=true]:pr-3 data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                    data-active={isActive}
                    style={{
                      transform: `rotate(${-rotation}deg) scale(${isActive ? 1.08 : 1})`,
                      boxShadow: isActive ? "var(--shadow-glow)" : undefined,
                    }}
                  >
                    <span
                      className="grid size-7 place-items-center rounded-full font-mono text-[10px] tracking-tight"
                      style={{
                        background: isActive
                          ? "color-mix(in oklab, var(--primary-foreground) 20%, transparent)"
                          : "var(--secondary)",
                      }}
                    >
                      {role.years}
                    </span>
                    <span
                      className="hidden whitespace-nowrap text-xs font-medium group-hover:inline data-[active=true]:inline"
                      data-active={isActive}
                    >
                      {role.company}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="block size-2 rounded-full bg-primary/70" />
          </div>
        </div>

        {/* Detail */}
        <article
          key={active.id}
          className="surface fade-up rounded-2xl p-6 sm:p-8"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
            {active.period}
          </p>
          <h3 className="mt-3 font-display text-3xl sm:text-4xl">
            {active.company}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {active.title}
            {active.location ? ` · ${active.location}` : ""}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {active.tracks.map((t) => (
              <span
                key={t}
                className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-wider border border-border text-muted-foreground`}
              >
                {t}
              </span>
            ))}
          </div>
          <ul className="mt-6 space-y-3">
            {active.highlights.map((h) => (
              <li
                key={h}
                className="flex gap-3 text-sm leading-relaxed text-foreground/85"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {active.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
