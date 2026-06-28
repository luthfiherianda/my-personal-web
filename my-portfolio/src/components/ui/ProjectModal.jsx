import { useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) {
    return null;
  }

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-foreground/55 p-4 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-4 shadow-2xl sm:max-h-[90vh] sm:rounded-3xl sm:p-6 md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {project.context}
            </p>
            <h2
              id="project-modal-title"
              className="mt-2 font-display text-xl font-bold tracking-tight min-[400px]:text-2xl sm:text-3xl"
            >
              {project.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {project.year} · {project.role}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-background transition-colors hover:bg-accent"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="my-6 border-t border-border" />

        <section className="space-y-6">
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Overview
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground sm:text-base">
              {project.overview}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Key metrics
            </h3>
            <div className="mt-3 grid grid-cols-1 gap-2 min-[420px]:grid-cols-3 sm:gap-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-border bg-background p-3 sm:rounded-2xl sm:p-4"
                >
                  <p className="font-display text-base font-bold tracking-tight min-[420px]:text-lg sm:text-xl">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Key finding
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground sm:text-base">
              {project.finding}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Tools
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="mono-tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Tags
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.modalTags.map((tag) => (
                <span key={tag} className="mono-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <a
          href={project.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background sm:inline-flex sm:w-auto"
        >
          View full project PDF
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
