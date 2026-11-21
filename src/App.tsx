import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { WorkflowAndWhySection } from "./components/sections/WorkflowAndWhySection";
import { StrategyPromoSection } from "./components/sections/StrategyPromoSection";
import { ServicesAboutProcessSection } from "./components/sections/ServicesAboutProcessSection";
import { IndustriesAndComparisonSection } from "./components/sections/IndustriesAndComparisonSection";
import { TechnologiesSection } from "./components/sections/TechnologiesSection";
import { ExpectAndTestimonialsSection } from "./components/sections/ExpectAndTestimonialsSection";
import { FaqSection } from "./components/sections/FaqSection";
import { PromoCtaSection } from "./components/sections/PromoCtaSection";
import { Footer } from "./components/Footer";
import { InnerPageView } from "./components/InnerPageView";

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname + window.location.hash;
    }
    return "/";
  });

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname + window.location.hash);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (targetPath: string) => {
    if (targetPath.startsWith("http")) {
      window.location.assign(targetPath);
      return;
    }
    window.history.pushState({}, "", targetPath);
    setCurrentPath(targetPath);

    const hashIdx = targetPath.indexOf("#");
    if (hashIdx !== -1) {
      const hashId = targetPath.slice(hashIdx + 1);
      window.setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const basePath = currentPath.split("#")[0].replace(/\/$/, "") || "/";
  const isHome = basePath === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPath={basePath} onNavigate={navigate} />

      <main className="flex-1">
        {isHome ? (
          <>
            <HeroSection onNavigate={navigate} />
            <WorkflowAndWhySection />
            <StrategyPromoSection onNavigate={navigate} />
            <ServicesAboutProcessSection onNavigate={navigate} />
            <IndustriesAndComparisonSection />
            <TechnologiesSection />
            <ExpectAndTestimonialsSection />
            <FaqSection onNavigate={navigate} />
            <PromoCtaSection onNavigate={navigate} />
          </>
        ) : (
          <InnerPageView path={currentPath} onNavigate={navigate} />
        )}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
