import {
  BarChart3,
  Brain,
  Footprints,
  Gauge,
  Mail,
  Mic,
  Music,
  Users,
} from "lucide-react";
import {
  footerAbout,
  footerLanguages,
  footerMusic,
} from "../../data/profile";
import { contactContent, socialLinks } from "../../data/social";
import { SocialIcon } from "../ui/SocialIcons";
import FooterQuotes from "./FooterQuotes";

const aboutIconMap = {
  brain: Brain,
  users: Users,
  footprints: Footprints,
  music: Music,
  podcast: Mic,
  chart: BarChart3,
  gauge: Gauge,
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-10 border-t border-foreground/[0.17] bg-footer-background text-foreground sm:mt-14 md:mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-9">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:items-start lg:gap-8">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Let&apos;s talk
            </p>
            <h2 className="mt-2 font-display text-lg font-bold tracking-tight min-[400px]:text-xl sm:text-2xl">
              {contactContent.heading}
            </h2>
            <a
              href={`mailto:${contactContent.email}`}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent min-[400px]:w-auto"
            >
              <Mail className="h-4 w-4 shrink-0" />
              {contactContent.email}
            </a>
          </div>

          <div className="order-2 lg:col-start-1 lg:row-start-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Find me on
            </p>
            <div className="mt-2 flex flex-nowrap gap-1 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:w-fit lg:grid-cols-4 lg:gap-2 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent min-[360px]:h-8 min-[360px]:w-8 lg:h-9 lg:w-9"
                >
                  <SocialIcon
                    name={icon}
                    className="h-3 w-3 min-[360px]:h-3.5 min-[360px]:w-3.5 lg:h-4 lg:w-4"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="order-3 lg:col-start-2 lg:row-start-1">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {footerLanguages.eyebrow}
            </p>
            <ul className="mt-2 flex flex-col gap-1.5">
              {footerLanguages.items.map(({ language, level }) => (
                <li
                  key={language}
                  className="flex items-center justify-between gap-2 rounded-xl border border-border bg-background px-2.5 py-2"
                >
                  <span className="text-sm font-medium text-foreground">
                    {language}
                  </span>
                  <span className="mono-tag shrink-0 py-0.5 text-[0.65rem]">
                    {level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-4 lg:col-start-3 lg:row-start-1">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {footerAbout.eyebrow}
            </p>
            <ul className="mt-2 grid grid-cols-1 gap-1.5 min-[480px]:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {footerAbout.items.map(({ text, icon }) => {
                const Icon = aboutIconMap[icon];

                return (
                  <li
                    key={text}
                    className={`flex items-center gap-2 rounded-xl border border-border bg-background px-2 py-1.5 ${
                      icon === "gauge"
                        ? "min-[480px]:col-span-2 lg:col-span-1 xl:col-span-2"
                        : ""
                    }`}
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-border bg-card">
                      <Icon className="h-3 w-3 text-muted-foreground" />
                    </span>
                    <span className="text-[0.75rem] leading-snug text-foreground sm:text-[0.8125rem]">
                      {text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="order-5 lg:col-start-3 lg:row-start-2">
            <FooterQuotes />
          </div>

          <div className="order-6 lg:col-start-2 lg:row-start-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {footerMusic.eyebrow}
            </p>
            <iframe
              title="Spotify player"
              src={footerMusic.embedUrl}
              width="100%"
              height={footerMusic.height}
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="mt-2 w-full rounded-xl"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-2 border-t border-foreground/[0.17] pt-4 text-center sm:mt-7 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-5 sm:text-left">
          <p className="font-display text-xs font-semibold tracking-tight text-foreground sm:text-sm">
            © 2026 · Luthfi Herianda&apos;s Official Web
          </p>
          <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
            Depok, West Java, Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}
