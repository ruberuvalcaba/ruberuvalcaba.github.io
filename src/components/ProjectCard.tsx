import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  href: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  trackingEvent?: string;
  children: ReactNode;
};

export default function ProjectCard({
  title,
  href,
  image,
  trackingEvent,
  children,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      data-umami-event={trackingEvent}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        <div className="min-w-0 overflow-hidden rounded-xl border border-border md:flex-1">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="h-auto w-full motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02]"
          />
        </div>
        <div className="min-w-0 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base md:flex-1">
          {children}
        </div>
      </div>
      <span className="mt-4 inline-flex items-center gap-2 text-primary group-hover:underline">
        {title}
        <ArrowUpRight aria-hidden="true" className="size-4" />
      </span>
    </a>
  );
}
