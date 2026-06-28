const SCROLL_BUFFER = 12;

export function getNavbarOffset() {
  const stickyNav = document.querySelector("[data-sticky-nav]");
  if (!stickyNav) return 88;

  return stickyNav.getBoundingClientRect().height + SCROLL_BUFFER;
}

export function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const top =
    target.getBoundingClientRect().top + window.scrollY - getNavbarOffset();

  window.scrollTo({
    top: Math.max(0, top),
    behavior: "smooth",
  });

  window.history.replaceState(null, "", `#${sectionId}`);
}
