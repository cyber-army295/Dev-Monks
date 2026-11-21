import React, { useEffect, useRef, useState } from "react";
import serviceAiData from "../../assets/lottie/service-ai.json";
import serviceSaasData from "../../assets/lottie/service-saas.json";
import serviceMobileData from "../../assets/lottie/service-mobile.json";
import {
  ABOUT_STATS,
  PROCESS_STEPS,
  SERVICE_OFFERINGS,
  WORKED_WITH_LOGOS,
} from "../../data/homepageData";
import { LottieAnimation } from "../LottieAnimation";
import { ScrambleCaption } from "../ScrambleCaption";

interface ServicesAboutProcessSectionProps {
  onNavigate: (path: string) => void;
}

const LOTTIE_MAP = {
  ai: serviceAiData,
  saas: serviceSaasData,
  mobile: serviceMobileData,
};

export const ServicesAboutProcessSection: React.FC<ServicesAboutProcessSectionProps> = ({
  onNavigate,
}) => {
  const processRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0.25);

  useEffect(() => {
    const onScroll = () => {
      const el = processRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const raw = (viewH * 0.7 - rect.top) / Math.max(rect.height, 1);
      setScrollProgress(Math.max(0.15, Math.min(1, raw)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <section className="section empower-section">
      {/* Services Grid */}
      <div className="section-inner-space-x">
        <div className="container">
          <div className="section-frame">
            <div className="section-space-x">
              <div className="section-space-y">
                <div className="section-row">
                  <div className="section-header services-header">
                    <div className="section-title-row empower-title-row">
                      <ScrambleCaption text="[ SERVICES ]" className="caption text-primary" />
                      <h2 className="heading-h2">
                        AI-Powered Development Services We Offer
                      </h2>
                    </div>
                  </div>

                  <div className="section-body services-grid">
                    {SERVICE_OFFERINGS.map((service) => (
                      <div key={service.title} className="card service-card">
                        <div className="service-card-image-wrap">
                          <LottieAnimation
                            animationData={LOTTIE_MAP[service.key]}
                            className={`service-card-lottie ${service.isLast ? "is-last" : ""}`}
                          />
                        </div>
                        <div className="card-header service-card-header">
                          <ScrambleCaption
                            text={service.kicker}
                            className="caption text-primary"
                          />
                          <h3 className="heading-h6">{service.title}</h3>
                        </div>
                        <div className="card-description service-card-tags">
                          {service.tags.map((tag) => (
                            <a
                              key={tag.label}
                              href={tag.to}
                              onClick={(e) => handleNav(e, tag.to)}
                              className="service-card-tag"
                            >
                              <span className="body-sm service-card-tag-title text-secondary">
                                {tag.label}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* About Us & Stats */}
      <div className="section-inner-space-x">
        <div className="container">
          <div className="section-frame">
            <div className="section-space-x">
              <div className="section-space-y">
                <div className="about-row">
                  <div className="about-grid">
                    <div className="about-content">
                      <div className="section-header about-section-header">
                        <div className="section-header">
                          <div className="section-title-row">
                            <ScrambleCaption
                              text="[ ABOUT US ]"
                              className="caption text-primary"
                            />
                            <h2 className="heading-h2">
                              A Team Focused on <br />
                              Building What Matters
                            </h2>
                          </div>
                          <p className="body-lg about-section-description text-secondary">
                            We are a development team using AI to build scalable software, focusing on product clarity, human needs, and long-term reliability.
                          </p>
                        </div>
                        <a
                          href="/contact"
                          onClick={(e) => handleNav(e, "/contact")}
                          className="button"
                        >
                          <span className="button-lg">{"{ Fix your Saas Product }"}</span>
                        </a>
                      </div>

                      <div className="work-section">
                        <p className="body-lg">We worked with them</p>
                        <div className="companies">
                          {WORKED_WITH_LOGOS.map((logo) => (
                            <a
                              key={logo.name}
                              href="/about"
                              onClick={(e) => handleNav(e, "/about")}
                              aria-label={logo.name}
                              className="company-item"
                            >
                              <img
                                loading="lazy"
                                src={logo.src}
                                alt={logo.name}
                                className="company-logo"
                                referrerPolicy="no-referrer"
                              />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="about-image-wrap">
                      <img
                        src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699d123254d2e2908fb1af40_27ad538576e02848477215609fecd13c_image%20hlder.avif"
                        loading="lazy"
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                        srcSet="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699d123254d2e2908fb1af40_27ad538576e02848477215609fecd13c_image%20hlder-p-500.avif 500w, https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699d123254d2e2908fb1af40_27ad538576e02848477215609fecd13c_image%20hlder-p-800.avif 800w, https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699d123254d2e2908fb1af40_27ad538576e02848477215609fecd13c_image%20hlder.avif 1583w"
                        alt="Dev Monks engineering team collaboration"
                        className="about-image"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  <div className="about-stats">
                    {ABOUT_STATS.map((stat) => (
                      <div key={stat.label} className="card stat-card">
                        <div className="card-header">
                          <p className="heading-h2 text-center text-primary tabular-nums">
                            {stat.value}
                          </p>
                        </div>
                        <div className="card-description">
                          <p className="caption text-center text-secondary">{stat.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* Our Process */}
      <div className="section-inner-space-x">
        <div className="container">
          <div className="section-frame">
            <div className="section-space-x">
              <div className="section-space-y">
                <div className="process-grid">
                  <div className="process-image-wrap">
                    <img
                      src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699d1ac3da9a1ee8953ef95d_bcbcaebe73851108a7613e32f625f4db_Content.avif"
                      loading="lazy"
                      alt="Dev Monks development journey"
                      className="process-image"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="process-content-column">
                    <div className="section-title-row">
                      <ScrambleCaption
                        text="[ our process ]"
                        className="caption text-primary"
                      />
                      <h2 className="heading-h2">
                        The Dev Monks <br />
                        Development Journey
                      </h2>
                    </div>

                    <div ref={processRef} className="process-steps-section">
                      {PROCESS_STEPS.map((item) => (
                        <div key={item.step} className="process-steps-item">
                          <div className="process-step-count">
                            <p className="caption process-step-count-text text-secondary tabular-nums">
                              {item.step}
                            </p>
                          </div>
                          <div className="process-steps-content">
                            <div className="process-step-header">
                              <img
                                loading="lazy"
                                src={item.icon}
                                alt=""
                                className="process-step-icon"
                                referrerPolicy="no-referrer"
                              />
                              <h3 className="heading-h6">{item.title}</h3>
                            </div>
                            <p className="body-regular">{item.description}</p>
                          </div>
                        </div>
                      ))}

                      <div className="process-steps-tracker" aria-hidden="true">
                        <div className="process-steps-track relative overflow-hidden">
                          <div
                            className="w-full bg-[#e85002] transition-all duration-150"
                            style={{ height: `${Math.round(scrollProgress * 100)}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
