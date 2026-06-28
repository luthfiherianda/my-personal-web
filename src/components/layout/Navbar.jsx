import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { SITE_TITLE } from "../../data/profile";
import { useScrolled } from "../../hooks/useScrolled";
import { useTypewriter } from "../../hooks/useTypewriter";
import { scrollToSection } from "../../utils/scrollToSection";
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function TypewriterBrand({ onNavigate }) {
  const displayed = useTypewriter(SITE_TITLE);

  const scrollToTop = (event) => {
    event.preventDefault();
    onNavigate?.();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="relative block min-w-0 flex-1"
    >
      <span
        className="invisible block truncate font-display text-sm font-bold tracking-tight sm:text-base md:text-lg"
        aria-hidden="true"
      >
        {SITE_TITLE}
      </span>
      <span className="absolute inset-0 flex items-center">
        <span className="truncate font-display text-sm font-bold tracking-tight sm:text-base md:text-lg">
          {displayed}
          <span
            className="ml-px inline-block h-[1.1em] w-px animate-pulse bg-foreground"
            aria-hidden="true"
          />
        </span>
      </span>
    </a>
  );
}

export default function Navbar({ theme, onToggle }) {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
    closeMenu();
  };

  return (    <header
      className={`transition-all duration-300 ${
        scrolled
          ? "border-border/50 bg-background/65 shadow-sm backdrop-blur-xl"
          : "border-border bg-card shadow-none backdrop-blur-none"
      } rounded-2xl border px-4 py-3 sm:rounded-full sm:px-5`}
    >
      <div className="flex items-center gap-3">
        <TypewriterBrand onNavigate={closeMenu} />

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex lg:gap-7">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(event) => handleNavClick(event, href)}
              className="whitespace-nowrap transition-colors hover:text-foreground"
            >              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onToggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-accent"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-accent md:hidden"
          >
            {menuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="mt-3 flex flex-col gap-1 border-t border-border pt-3 md:hidden">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(event) => handleNavClick(event, href)}
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >              {label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
