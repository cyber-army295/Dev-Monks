import React, { useEffect, useState } from "react";
import { EXPECT_ITEMS, TESTIMONIALS } from "../../data/homepageData";
import { ScrambleCaption } from "../ScrambleCaption";

export const ExpectAndTestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const updateView = () => {
      setSlidesPerView(window.innerWidth >= 1024 ? 2 : 1);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const visibleTestimonials = Array.from({ length: slidesPerView }, (_, offset) => {
    return TESTIMONIALS[(activeIndex + offset) % TESTIMONIALS.length];
  });

  return (
    <section id="reviews" className="section overview-section">
      {/* What to Expect */}
      <div className="section-inner-space-x">
        <div className="container">
          <div className="section-frame">
            <div className="section-space-x">
              <div className="section-space-y">
                <div className="expect-row">
                  <div className="expect-content">
                    <div className="expect-header">
                      <div className="section-header">
                        <div className="section-title-row">
                          <ScrambleCaption
                            text="[ our offering ]"
                            className="caption text-primary"
                          />
                          <h2 className="heading-h2">What to Expect from Us</h2>
                        </div>
                        <p className="body-lg text-tertiary">
                          We provide product development services for small startups and large enterprises to help them build scalable, reliable, and user-loved products.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="expect-items">
                    {EXPECT_ITEMS.map((item) => (
                      <div key={item.title} className="card expect-card">
                        <div className="card-header">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c1fdd68c6fd6afebb97c7_Check.svg"
                            alt=""
                            className="expect-card-icon"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="card-description">
                          <p className="body-lg text-center">
                            {item.multiline ? (
                              <>
                                Full-Cycle
                                <br />
                                Support
                              </>
                            ) : (
                              item.title
                            )}
                          </p>
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

      {/* Client Reviews / Testimonials */}
      <div className="section-inner-space-x">
        <div className="container">
          <div className="section-frame">
            <div className="section-space-x">
              <div className="section-space-y">
                <div className="section-row">
                  <div className="testimonial-section-header">
                    <div className="section-header testimonial-section-header">
                      <div className="section-title-row">
                        <ScrambleCaption
                          text="[ client review ]"
                          className="caption text-primary"
                        />
                        <h2 className="heading-h2">What Our Clients Think of Us</h2>
                      </div>
                    </div>

                    <div className="testimonial-nav-row">
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous testimonial"
                        className="testimonial-nav-btn"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c4a6ac7e2e09a8b1c526d_ArrowRight%20(1).svg"
                          loading="lazy"
                          alt="Previous"
                          className="testimonial-nav"
                          referrerPolicy="no-referrer"
                        />
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next testimonial"
                        className="testimonial-nav-btn"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699c4a4b787c4e0754f1ade0_ArrowRight.svg"
                          loading="lazy"
                          alt="Next"
                          className="testimonial-nav"
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="section-body">
                    <div
                      className={`grid gap-4 ${
                        slidesPerView === 2 ? "grid-cols-2" : "grid-cols-1"
                      }`}
                    >
                      {visibleTestimonials.map((item) => (
                        <div key={item.name} className="card testimonial-card">
                          <div className="card-header testimonial-header">
                            <div className="testimonial-review">
                              <p>
                                <strong>{item.headline}</strong>
                              </p>
                              <p className="h-4" aria-hidden="true" />
                              <p>{item.body}</p>
                            </div>
                          </div>

                          <div className="testimonial-divider" />

                          <div className="card-description testimonial-description">
                            <div className="testimonial-profile">
                              <img
                                alt={item.name}
                                loading="lazy"
                                src={item.avatar}
                                className="testimonial-avatar"
                                referrerPolicy="no-referrer"
                              />
                              <div className="testimonial-profile-info">
                                <p className="body-lg text-base">{item.name}</p>
                                <p className="body-regular text-tertiary">{item.role}</p>
                              </div>
                            </div>

                            <div className="testimonial-meta">
                              <div className="testimonial-meta-info">
                                <p className="caption text-sm text-tertiary">INDUSTRY</p>
                                <p className="heading-h6">{item.industry}</p>
                              </div>
                              <div className="testimonial-meta-info">
                                <p className="caption text-sm text-tertiary">SERVICES</p>
                                <p className="heading-h6">{item.services}</p>
                              </div>
                            </div>
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
      </div>
    </section>
  );
};
