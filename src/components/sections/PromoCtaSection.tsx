import React from "react";
import { HalftoneVideoBg } from "../HalftoneVideoBg";
import { ScrambleCaption } from "../ScrambleCaption";

interface PromoCtaSectionProps {
  onNavigate: (path: string) => void;
}

export const PromoCtaSection: React.FC<PromoCtaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="section promo-section">
      <div className="section-space-y">
        <div className="container">
          <div className="promo-row">
            <div className="section-header section-header-center">
              <div className="section-title-row">
                <ScrambleCaption
                  text="[ book a call ]"
                  className="caption text-primary text-center"
                />
                <h2 className="heading-h2 text-center">
                  It’s Time to Bring Your Idea Alive
                </h2>
              </div>
              <p className="body-lg text-center">
                Connect with us to start your project, with full transparency, no hidden fees, and expert support.
              </p>
            </div>

            <div className="promo-actions">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/contact");
                }}
                className="button button-dark w-variant-brand"
              >
                <span className="button-lg">book a strategy call</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <HalftoneVideoBg
        source="https://cdn.jsdelivr.net/gh/devmonks-projects/webvideos@main/devm-footer-bg.mp4"
        interaction="sparkle"
        frequency="56"
        angle="50"
        bgColor="#ffffff"
        contrast="0.9"
        scale="1.6"
        gap="0.01"
        softness="0.55"
        opacity="0.4"
        isLight={true}
      />
    </section>
  );
};
