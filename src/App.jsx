import { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import { scrollToSection } from "./utils/scrollToSection";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import ProfilePhotoCard from "./components/sections/ProfilePhotoCard";
import ProfileDetails from "./components/sections/ProfileDetails";
import LeadershipJourney from "./components/sections/LeadershipJourney";
import ByTheNumbers from "./components/sections/ByTheNumbers";
import LeadershipTimeline from "./components/sections/LeadershipTimeline";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import ActivitySection from "./components/sections/ActivitySection";

export default function App() {
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    requestAnimationFrame(() => {
      scrollToSection(hash);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div
        data-sticky-nav
        className="sticky top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <Navbar theme={theme} onToggle={toggle} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 sm:pb-8 md:px-8">
        <main className="mt-4 grid grid-cols-1 items-stretch gap-3 sm:mt-6 sm:gap-4 md:grid-cols-6 md:gap-5">
          <HeroSection />
          <ProfilePhotoCard />
          <ProfileDetails />
          <LeadershipJourney />
          <ByTheNumbers />
          <LeadershipTimeline />
          <Skills />
          <Projects />
        </main>

        <ActivitySection />
      </div>

      <Footer />
    </div>
  );
}
