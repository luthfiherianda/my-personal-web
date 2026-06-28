import { ArrowUpRight } from "lucide-react";
import { heroContent } from "../../data/profile";
import { scrollToSection } from "../../utils/scrollToSection";

export default function HeroSection() {
  const handleAnchorClick = (event, sectionId) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <section
      id="about"
      className="bento-card bento-card-hover md:col-span-6 lg:col-span-4"
    >      <div className="flex h-full flex-col justify-between gap-6 sm:gap-10">
        <div className="flex items-center gap-2">
          <span className="mono-tag max-w-full text-[0.65rem] sm:text-[0.72rem]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
            </span>
            {heroContent.availabilityTag}
          </span>
        </div>
        <div>
          <h1 className="font-display text-[1.75rem] font-bold leading-[1.08] tracking-tight min-[400px]:text-4xl sm:text-5xl lg:text-6xl">
            {heroContent.title}{" "}
            <span className="italic font-normal">{heroContent.titleAccent}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            {heroContent.description}
          </p>
          <div className="mt-6 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap sm:mt-7">
            <a
              href="#projects"
              onClick={(event) => handleAnchorClick(event, "projects")}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 min-[400px]:w-auto"
            >              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              onClick={(event) => handleAnchorClick(event, "contact")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-accent min-[400px]:w-auto"
            >              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
