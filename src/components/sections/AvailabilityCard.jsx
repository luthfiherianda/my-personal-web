import { availabilityPreferences, availabilityStatus } from "../../data/activity";
import SectionHeader from "../ui/SectionHeader";

export default function AvailabilityCard() {
  return (
    <article className="bento-card bento-card-hover">
      <SectionHeader label="Availability" />

      <div className="mt-4 flex items-center gap-2.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-timeline-active opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-timeline-active" />
        </span>
        <p className="font-display text-sm font-semibold tracking-tight sm:text-base">
          {availabilityStatus.label}
        </p>
      </div>

      <ul className="mt-5 space-y-4">
        {availabilityPreferences.map(({ key, value, icon: Icon }) => (
          <li key={key} className="flex gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-background">
              <Icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {key}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground">{value}</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
