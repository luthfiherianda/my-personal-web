import { milestones, timelineTypeConfig } from "../../data/timeline";

const legendItems = [
  { type: "education", ...timelineTypeConfig.education },
  { type: "organization", ...timelineTypeConfig.organization },
  { type: "active", ...timelineTypeConfig.active },
];

const MILESTONE_WIDTH = "w-[8.25rem]";

function isPresentMilestone(milestone) {
  return /present/i.test(milestone.year) || milestone.type === "active";
}

function TimelineDot({ milestone, config }) {
  if (!isPresentMilestone(milestone)) {
    return (
      <span
        className={`rounded-full ring-4 ${config.dot} ${config.dotSize}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <span
      className={`relative flex ${config.dotSize} items-center justify-center`}
      aria-hidden="true"
    >
      <span
        className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${config.dotBg}`}
      />
      <span
        className={`relative inline-flex rounded-full ring-4 ${config.dot} ${config.dotSize}`}
      />
    </span>
  );
}

export default function LeadershipTimeline() {
  return (
    <section className="bento-card bento-card-hover md:col-span-6">
      <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        Leadership Timeline
      </p>
      <h2 className="mt-3 font-display text-xl font-bold tracking-tight min-[400px]:text-2xl sm:mt-4 sm:text-3xl">
        Milestones along the way
      </h2>

      <div className="-mx-1 mt-6 overflow-x-auto pb-2 sm:-mx-2 sm:mt-8 [scrollbar-width:thin]">
        <p className="mb-3 px-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground md:hidden">
          Swipe to explore →
        </p>
        <div
          className="relative mx-1 min-w-[48rem] px-1 sm:mx-2 sm:min-w-[52rem] sm:px-2"
          role="list"
          aria-label="Leadership milestones"
        >
          {/* Years */}
          <div className="flex justify-between gap-3">
            {milestones.map((milestone) => (
              <div
                key={`${milestone.year}-${milestone.title}-year`}
                className={`${MILESTONE_WIDTH} shrink-0 text-center`}
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {milestone.year}
                </p>
              </div>
            ))}
          </div>

          {/* Axis — line centered vertically through each dot */}
          <div className="relative my-3 flex h-8 items-center justify-between gap-3">
            <div
              className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-border"
              aria-hidden="true"
            />
            {milestones.map((milestone) => {
              const config = timelineTypeConfig[milestone.type];
              return (
                <div
                  key={`${milestone.year}-${milestone.title}-dot`}
                  className={`relative z-10 flex ${MILESTONE_WIDTH} shrink-0 items-center justify-center`}
                  role="listitem"
                  aria-label={`${milestone.year}: ${milestone.title}`}
                >
                  <TimelineDot milestone={milestone} config={config} />
                </div>
              );
            })}
          </div>

          {/* Titles & badges */}
          <div className="flex justify-between gap-3">
            {milestones.map((milestone) => {
              const config = timelineTypeConfig[milestone.type];
              return (
                <div
                  key={`${milestone.year}-${milestone.title}-body`}
                  className={`${MILESTONE_WIDTH} shrink-0 text-center`}
                >
                  <p className="font-display text-sm font-semibold leading-snug text-foreground">
                    {milestone.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {milestone.subtitle}
                  </p>
                  <span
                    className={`mt-3 inline-flex rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider ${config.badge}`}
                  >
                    {config.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t border-border pt-5 sm:gap-6">
        {legendItems.map(({ type, label, dot, dotSize }) => (
          <div key={type} className="flex items-center gap-2">
            <span
              className={`rounded-full ${dot} ${dotSize}`}
              aria-hidden="true"
            />
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
