import { useEffect, useState } from "react";
import { footerQuotes } from "../../data/profile";

const FADE_MS = 400;

export default function FooterQuotes() {
  const { eyebrow, intervalMs, items } = footerQuotes;
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let fadeTimeoutId;

    const intervalId = setInterval(() => {
      setVisible(false);
      fadeTimeoutId = setTimeout(() => {
        setIndex((current) => (current + 1) % items.length);
        setVisible(true);
      }, FADE_MS);
    }, intervalMs);

    return () => {
      clearInterval(intervalId);
      clearTimeout(fadeTimeoutId);
    };
  }, [intervalMs, items.length]);

  const quote = items[index];

  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {eyebrow}
      </p>
      <blockquote
        className="mt-2 min-h-[5.5rem] rounded-xl border border-border bg-background px-2.5 py-2.5 transition-opacity duration-[400ms] ease-in-out sm:min-h-[5rem] sm:px-3"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <p className="text-[0.75rem] italic leading-snug text-foreground sm:text-[0.8125rem]">
          &ldquo;{quote.text}&rdquo;
        </p>
        <footer className="mt-1.5 text-[0.6875rem] text-muted-foreground sm:text-xs">
          — {quote.author}
        </footer>
      </blockquote>
    </div>
  );
}
