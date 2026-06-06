import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Heading3 from "../heading-3";
import TechBadge from "../tech-badge";

export const PROJECT_LIST = [
  {
    name: "Mayochat | Take Order",
    description:
      "Chat template system that helps customer support teams respond faster, stay consistent, and reduce repetitive typing.",
    imageUrl: "/projects/mayochatsz.png",
    liveUrl: "https://mayochat.vercel.app",
    githubUrl: "https://github.com/cuakproject/mayo-tools",
    tech: ["Next.js", "Roblox API","Supabase", "PostgreSQL", "Tailwind CSS"],
  },
  {
    name: "Mayopass | Admin Tools",
    description:
      "Web-based calculator that automates Roblox gamepass pricing and reduces manual calculation errors.",
    imageUrl: "/projects/mayopass.png",
    liveUrl: "https://mayopass.vercel.app",
    githubUrl: "https://github.com/cuakproject/mayopass",
    tech: ["React", "Supabase", "PostgreSQL", "Tailwind CSS"],
  },
  {
    name: "SigmaDOTS | Web Extensions",
    description:
      "Productivity toolkit that automates repetitive workflows across Roblox and Google Sheets.",
    imageUrl: "/projects/sigmadots.png",
    githubUrl: "https://github.com/cuakproject/sigmadots-full",
    tech: [
      "JavaScript",
      "Chrome Extension API",
      "Google Apps Script",
      "Supabase",
      "PostgreSQL",
    ],
  },
];

export const Project = {
  Card: ({ item }: { item: (typeof PROJECT_LIST)[number] }) => (
    <article
      className={cn(
        "group grid gap-4 py-6 transition-colors duration-300",
        "border-b border-border hover:border-muted-foreground/30",
        "lg:grid-cols-12",
        "sm:gap-8 sm:py-8"
      )}
    >
      {/* Project Image */}
      <div className="lg:col-span-3 relative">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="size-full object-cover object-center rounded-sm aspect-square"
        />
      </div>

      {/* Project Info */}
      <div className="lg:col-span-5 space-y-3">
        <header className="space-y-2">
          <Heading3 className="truncate">{item.name}</Heading3>

          <div className="flex items-center gap-3">
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live</span>
              </a>
            )}
            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
                <span>Source</span>
              </a>
            )}
          </div>
        </header>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg line-clamp-3">
          {item.description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="lg:col-span-4 flex flex-wrap gap-x-2 gap-y-4 lg:justify-end mt-2 lg:mt-0 h-fit">
        {item.tech.map((tech) => (
          <TechBadge tech={tech} key={tech} />
        ))}
      </div>
    </article>
  ),
};
