import { Download, FileText } from "lucide-react";
import { cvDownload } from "../../data/activity";

export default function DownloadCVCard() {
  return (
    <article className="bento-card bento-card-hover">
      <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {cvDownload.eyebrow}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{cvDownload.lastUpdated}</p>

      <a
        href={cvDownload.href}
        download={cvDownload.fileName}
        className="group mt-5 flex w-full items-center gap-3 rounded-2xl border border-border bg-background p-4 transition-colors hover:bg-accent"
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-card">
          <FileText className="h-5 w-5 text-muted-foreground" />
        </span>

        <span className="min-w-0 flex-1 text-left">
          <span className="block font-display text-sm font-semibold tracking-tight text-foreground sm:text-base">
            {cvDownload.label}
          </span>
          <span className="mt-0.5 block text-xs text-muted-foreground">
            {cvDownload.subtitle}
          </span>
        </span>

        <Download className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-y-0.5" />
      </a>
    </article>
  );
}
