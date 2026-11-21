import React, { useState } from "react";
import { FAQ_ITEMS } from "../../data/homepageData";
import { ScrambleCaption } from "../ScrambleCaption";

interface FaqSectionProps {
  onNavigate: (path: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="section empower-section">
      <div className="section-inner-space-x">
        <div className="container">
          <div className="section-frame">
            <div className="section-space-x">
              <div className="section-space-y">
                <div className="section-space">
                  <div className="section-title-row service-faq-section-title-row">
                    <ScrambleCaption
                      text="[ faq ]"
                      className="caption text-primary text-center"
                    />
                    <h2 className="heading-h2 service-faq-section-title text-center">
                      Questions You&apos;d Ask Before Signing Off
                    </h2>
                  </div>

                  <div className="service-faq-grid">
                    {/* CTO Card */}
                    <div className="service-faq-banner">
                      <h3 className="heading-h4">
                        Do you have <br />
                        more questions?
                      </h3>
                      <div className="service-faq-banner-content">
                        <p className="heading-h6">Saiful Islam</p>
                        <div className="service-faq-banner-meta">
                          <p className="body-sm text-secondary">
                            Chief Technical Officer (CTO)
                          </p>
                          <img
                            src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/6a92c6f8d4e614d32fca05d6_Ellipse%2011087.svg"
                            loading="lazy"
                            alt=""
                            className="service-faq-banner-meta-icon"
                            referrerPolicy="no-referrer"
                          />
                          <p className="body-sm text-secondary">Dev Monks</p>
                        </div>
                      </div>
                      <a
                        href="/contact"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate("/contact");
                        }}
                        className="button button-secondary"
                      >
                        <span className="button-lg">reach me out</span>
                      </a>
                    </div>

                    {/* Accordion Card */}
                    <div className="servie-faq-card">
                      <div className="service-faq-list">
                        {FAQ_ITEMS.map((item, idx) => {
                          const isOpen = openIndex === idx;
                          return (
                            <div
                              key={item.question}
                              data-open={isOpen ? "true" : "false"}
                              className="accordion service-faq-accordion"
                            >
                              <button
                                type="button"
                                aria-expanded={isOpen}
                                onClick={() => toggleItem(idx)}
                                className="accordion-header service-faq-accordion-header w-full text-left bg-transparent border-0 p-0"
                              >
                                <div className="service-faq-title-block">
                                  <span className="body-lg service-faq-title text-base">
                                    {item.question}
                                  </span>
                                  <img
                                    loading="lazy"
                                    src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/6a92c9efffd1d7cd1cefdc5b_glyphs_chevron-bold.svg"
                                    alt=""
                                    className="service-faq-icon"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                              </button>

                              {isOpen && (
                                <div className="accordion-body service-faq-accordion-body">
                                  <div className="body-sm text-secondary">
                                    <p>{item.answer}</p>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
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
