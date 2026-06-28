import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, featured = false, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project.id)}
      className={`group bento-card bento-card-hover w-full cursor-pointer text-left transition-transform hover:-translate-y-0.5 ${
        featured ? "!p-5 sm:!p-7 lg:!p-8" : "!p-4 sm:!p-5"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {project.eyebrow}
        </p>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-background transition-colors group-hover:bg-accent">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <h3
        className={`mt-3 font-display font-bold tracking-tight ${
          featured ? "text-xl min-[400px]:text-2xl sm:text-3xl" : "text-base min-[400px]:text-lg sm:text-xl"
        }`}
      >
        {project.title}
      </h3>

      <p
        className={`mt-3 text-muted-foreground ${
          featured ? "max-w-3xl text-sm sm:text-base" : "text-sm line-clamp-2"
        }`}
      >
        {project.shortDescription}
      </p>

      <div className={`flex flex-wrap gap-2 ${featured ? "mt-5" : "mt-4"}`}>
        {(featured ? project.tags : project.tags.slice(0, 3)).map((tag) => (
          <span key={tag} className="mono-tag">
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
}
