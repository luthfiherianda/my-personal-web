import { Activity } from "lucide-react";
import { recentActivities } from "../../data/activity";
import SectionHeader from "../ui/SectionHeader";

export default function RecentActivity() {
  return (
    <article className="bento-card bento-card-hover h-full">
      <SectionHeader label="Recent Activity" icon={Activity} />

      <ol className="relative mt-5 space-y-0">
        {recentActivities.map((item, index) => {
          const isLast = index === recentActivities.length - 1;

          return (
            <li key={`${item.date}-${item.text}`} className="relative flex gap-4 pb-6 last:pb-0">
              {!isLast ? (
                <span
                  aria-hidden="true"
                  className="absolute left-[7px] top-3 h-[calc(100%-4px)] w-px bg-border"
                />
              ) : null}

              <span className="relative z-10 mt-1.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center">
                {item.active ? (
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-timeline-active opacity-60" />
                    <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-timeline-active ring-4 ring-card" />
                  </span>
                ) : (
                  <span className="h-2.5 w-2.5 rounded-full bg-border ring-4 ring-card" />
                )}
              </span>

              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-sm leading-relaxed text-foreground sm:text-[0.9375rem]">
                  {item.text}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="mono-tag text-[0.65rem] sm:text-[0.72rem]">
                    {item.tag}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {item.date}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </article>
  );
}
