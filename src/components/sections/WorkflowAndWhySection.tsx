import React from "react";
import { motion } from "motion/react";
import { WHY_CHOOSE_FEATURES } from "../../data/homepageData";
import { ScrambleCaption } from "../ScrambleCaption";

export const WorkflowAndWhySection: React.FC = () => {
  return (
    <section className="section empower-section">
      {/* AI Powered Workflow */}
      <div className="section-inner-space-x">
        <div className="container">
          <div className="section-frame">
            <div className="section-space-x">
              <div className="section-space-y">
                <div className="section-row">
                  <div className="section-header">
                    <div className="section-title-row empower-title-row">
                      <ScrambleCaption
                        text="[ ai powered workflow ]"
                        className="caption text-primary"
                      />
                      <h2 className="heading-h3">
                        <span className="text-tertiary">AI isn’t an add-on for us.</span>{" "}
                        It’s built into how DevMonks engineers software, shaping decisions, workflows, and the way products come to life.
                      </h2>
                    </div>
                  </div>

                  <div className="section-body workflow-grid">
                    <div className="card empower-card">
                      <div className="card-header empower-card-header">
                        <h3 className="heading-h5">AI inside our process</h3>
                        <p className="body-regular text-tertiary">
                          Our AI-driven approach improves speed, accuracy, and decisions. So that we can develop scalable products without sacrificing quality or usability.
                        </p>
                      </div>
                      <div className="card-description empower-description">
                        <img
                          src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699cbf37bd38cf8ef48a7f37_Content%20(2).avif"
                          loading="lazy"
                          alt="AI workflow file upload"
                          className="empower-file-upload"
                          referrerPolicy="no-referrer"
                        />
                        <div className="empower-workflow">
                          <img
                            src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699cbfb38dac7c53e1c5f0c2_Frame%202147257882.avif"
                            loading="lazy"
                            alt="Modern proven technology stack"
                            className="empower-workflow-image"
                            referrerPolicy="no-referrer"
                          />
                          <p className="caption empower-workflow-title text-center text-tertiary">
                            Modern, Proven Technology Stack
                          </p>
                        </div>
                      </div>
                    </div>

                    <img
                      src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699cc0946de8bbcbd24e2233_Content%20(3).avif"
                      loading="lazy"
                      alt="AI automation preview"
                      className="automation-image"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* Why Choose Us Header */}
      <div className="section-inner-space-x">
        <div className="container">
          <div className="section-frame">
            <div className="section-space-x">
              <div className="section-space-y why-monks">
                <div className="section-row why-monks-row">
                  <div className="section-header testimonial-section-header">
                    <div className="section-title-row">
                      <ScrambleCaption
                        text="[ why choose us ]"
                        className="caption text-primary"
                      />
                      <h2 className="heading-h2">
                        Because Serious Products <br />
                        Need the Right Team
                      </h2>
                    </div>
                  </div>
                  <div className="section-body why-monks-section-description">
                    <p className="body-lg">
                      Our AI-driven process helps teams ship faster without sacrificing thoughtful product decisions or human-centered design
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-divider" />
          </div>
        </div>
      </div>

      {/* 3 Feature Cards Grid */}
      <div className="section-inner-space-x">
        <div className="container">
          <div className="section-frame">
            <div className="features-grid">
              {WHY_CHOOSE_FEATURES.map((feat, idx) => (
                <div key={feat.title} className="card feature-card">
                  <div className="card-header">
                    <motion.img
                      animate={{
                        y: [0, idx % 2 === 0 ? -12 : 12, 0],
                        x: [0, idx === 1 ? -6 : 6, 0],
                        rotate: [0, idx === 1 ? -3 : 3, 0],
                      }}
                      transition={{
                        duration: 4 + idx * 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      src={feat.icon}
                      loading="lazy"
                      alt={feat.title}
                      className="feature-image"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="card-description feature-card-description">
                    <h3 className="heading-h5 text-center">{feat.title}</h3>
                    <p className="body-regular text-center">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
