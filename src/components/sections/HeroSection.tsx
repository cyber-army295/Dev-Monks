import React from "react";
import { HERO_BRAND_LOGOS } from "../../data/homepageData";
import { HalftoneVideoBg } from "../HalftoneVideoBg";
import { ScrambleCaption } from "../ScrambleCaption";

interface HeroSectionProps {
  onNavigate: (path: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <section className="section banner-section">
      <div className="section-inner-space-x">
        <div className="container">
          <div className="section-frame">
            <div className="section-space-x">
              <div className="banner-section-space">
                <div className="banner-section-row">
                  <div className="banner-header-row">
                    <div className="section-header section-header-center">
                      <div className="section-title-row">
                        <ScrambleCaption
                          text="[ Product Development Services ]"
                          className="caption text-primary"
                        />
                        <h1 className="heading-h1">
                          Building AI-Powered Products that people love
                        </h1>
                      </div>
                    </div>
                    <a
                      href="/contact"
                      onClick={(e) => handleNav(e, "/contact")}
                      className="button button-secondary"
                    >
                      <span className="button-lg">Start Your Project</span>
                    </a>
                  </div>

                  <div className="banner-content-row">
                    <div className="banner-tags-row">
                      <p className="body-regular text-tertiary">
                        We develop AI-powered products for
                      </p>
                      <div className="banner-tags">
                        {["Startups", "Scale-ups", "Enterprise"].map((tag) => (
                          <a
                            key={tag}
                            href="/service#industries"
                            onClick={(e) => handleNav(e, "/service#industries")}
                            className="body-regular banner-tag"
                          >
                            {tag}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="banner-description">
                      <p className="body-lg text-tertiary">
                        We combine strong engineering and practical AI to develop reliable products people enjoy using every day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* Seamless horizontal brand marquee */}
      <div className="brand-collection" aria-label="Client brands">
        <div className="brand-track">
          <div role="list" className="brand-list">
            {HERO_BRAND_LOGOS.map((brand) => (
              <div key={brand.name} role="listitem" className="brand-item">
                <div className="brand-link">
                  <img
                    src={brand.src}
                    loading="lazy"
                    alt={brand.name}
                    className="brand-image"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
          <div role="list" className="brand-list" aria-hidden="true">
            {HERO_BRAND_LOGOS.map((brand) => (
              <div key={`${brand.name}-dup`} role="listitem" className="brand-item">
                <div className="brand-link">
                  <img
                    src={brand.src}
                    loading="lazy"
                    alt=""
                    className="brand-image"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider" />

      <HalftoneVideoBg
        source="https://cdn.jsdelivr.net/gh/devmonks-projects/webvideos@main/bg-with-logo.mp4"
        interaction="sparkle"
        fit="contain"
        frequency="74"
        angle="45"
        scale="0.8"
        brightness="1.8"
        radius="0.38"
        trailFade="0.13"
      />
    </section>
  );
};
