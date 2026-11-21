import React from "react";
import { HalftoneVideoBg } from "../HalftoneVideoBg";

interface StrategyPromoSectionProps {
  onNavigate: (path: string) => void;
}

export const StrategyPromoSection: React.FC<StrategyPromoSectionProps> = ({ onNavigate }) => {
  return (
    <section className="section strategy-promo-section">
      <div className="section-space-x">
        <div className="section-space-y">
          <div className="container">
            <div className="section-row strategy-section-row">
              <div className="section-body strategy-body">
                <div className="strategy-reviews">
                  <a
                    href="#reviews"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    aria-label="Client reviews"
                    className="strategy-reviews-platform-link inline-block"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c995c113670e677de9c2a_Content.svg"
                      loading="lazy"
                      alt="Clutch"
                      className="strategy-reviews-platform-icon"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                  <div className="strategy-reviews-card">
                    <p className="tabular-nums">4.9</p>
                    <img
                      src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c9a5799c1b8a4db91b368_Content%20(1).svg"
                      loading="lazy"
                      alt="5 star rating"
                      className="strategy-reviews-card-rating"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <p className="body-lg text-center text-tertiary">
                  Globally Leading Development Agency
                </p>
              </div>

              <div className="strategy-row">
                <div className="section-header section-header-center">
                  <h2 className="heading-h2 text-center">
                    Full-cycle MVP development services for founders &amp; teams building websites and applications that must perform, scale smoothly, and serve real users.
                  </h2>
                </div>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/contact");
                  }}
                  className="button button-secondary"
                >
                  <span className="button-lg">Let’s plan your project</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HalftoneVideoBg
        source="https://cdn.jsdelivr.net/gh/devmonks-projects/webvideos@main/devm-bg-2.mp4"
        interaction="sparkle"
        frequency="82"
        angle="45"
        scale="1.1"
        minDot="0.03"
        softness="0.8"
        gap="0.06"
        contrast="1.1"
      />
    </section>
  );
};
