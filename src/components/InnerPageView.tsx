import React, { useState } from "react";
import {
  AI_SERVICE_DETAILS,
  BLOG_POSTS,
  OPENSOURCE_PROJECTS,
  SERVICE_PAGE_DATA,
  TEAM_LEADERS,
  TECHNOLOGY_PAGE_DATA,
} from "../data/innerPagesData";
import { TechnologiesSection } from "./sections/TechnologiesSection";
import { PromoCtaSection } from "./sections/PromoCtaSection";
import { ScrambleCaption } from "./ScrambleCaption";
import { HalftoneVideoBg } from "./HalftoneVideoBg";

interface InnerPageViewProps {
  path: string;
  onNavigate: (path: string) => void;
}

export const InnerPageView: React.FC<InnerPageViewProps> = ({ path, onNavigate }) => {
  const cleanPath = path.split("#")[0].replace(/\/$/, "") || "/";
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "AI Product Development",
    budget: "$15k – $30k",
    message: "",
  });
  const [formError, setFormError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim()) {
      setFormError("Please provide your name and work email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
      setFormError("Please enter a valid email address.");
      return;
    }
    setFormError("");
    setSubmitted(true);
  };

  if (cleanPath === "/contact" || cleanPath === "/freecall") {
    return (
      <>
        <section className="section banner-section">
          <div className="section-inner-space-x">
            <div className="container">
              <div className="section-frame">
                <div className="section-space-x">
                  <div className="banner-section-space">
                    <div className="section-header section-header-center">
                      <ScrambleCaption
                        text="[ Get in touch ]"
                        className="caption text-primary text-center"
                      />
                      <h1 className="heading-h1 text-center max-w-[780px]">
                        Let’s build the thing worth shipping
                      </h1>
                      <p className="body-lg text-tertiary text-center max-w-[540px]">
                        No bots involved; a real engineer replies to you within two days.
                      </p>
                    </div>
                  </div>
                </div>
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

        <section className="section empower-section">
          <div className="section-inner-space-x">
            <div className="container">
              <div className="section-frame">
                <div className="section-space-x">
                  <div className="section-space-y">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      <div className="flex flex-col justify-between gap-8">
                        <div className="flex flex-col gap-4">
                          <p className="caption text-primary">talk to a human</p>
                          <h2 className="heading-h2">
                            Not A Fan Of Forms? Just Reach Out Directly
                          </h2>
                          <p className="body-lg text-secondary">
                            Share your product goals, timeline, and technical requirements. You will speak directly with our engineering leadership.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="card">
                            <p className="caption text-tertiary mb-2">Email</p>
                            <a
                              href="mailto:hello@devmonks.co"
                              className="heading-h6 text-[#0a0a0a] hover:text-[#e85002] transition-colors"
                            >
                              hello@devmonks.co
                            </a>
                          </div>
                          <div className="card">
                            <p className="caption text-tertiary mb-2">Phone</p>
                            <a
                              href="tel:+17165036335"
                              className="heading-h6 text-[#0a0a0a] hover:text-[#e85002] transition-colors tabular-nums"
                            >
                              +1 (716) 503-6335
                            </a>
                          </div>
                        </div>

                        <div className="card">
                          <p className="caption text-primary mb-2">[ our reach ]</p>
                          <h3 className="heading-h5 mb-2">
                            19 Countries And Counting — One Consistent Standard
                          </h3>
                          <p className="body-regular text-secondary">
                            Over the years, our work has reached clients in 19 countries, each with its own market, users, and expectations.
                          </p>
                        </div>
                      </div>

                      <div className="servie-faq-card">
                        {submitted ? (
                          <div className="flex flex-col items-start gap-5 py-8">
                            <span className="caption text-primary">[ request received ]</span>
                            <h3 className="heading-h3">
                              We have your project brief, {formState.name}.
                            </h3>
                            <p className="body-lg text-secondary">
                              A senior Dev Monks engineer will review your scope and reply to{" "}
                              <strong className="text-[#0a0a0a]">{formState.email}</strong> within 48 hours.
                            </p>
                            <button
                              type="button"
                              onClick={() => {
                                setSubmitted(false);
                                setFormState({
                                  name: "",
                                  email: "",
                                  company: "",
                                  service: "AI Product Development",
                                  budget: "$15k – $30k",
                                  message: "",
                                });
                              }}
                              className="button"
                            >
                              <span className="button-lg">Send Another Inquiry</span>
                            </button>
                          </div>
                        ) : (
                          <form onSubmit={handleContactSubmit} className="flex flex-col gap-5" noValidate>
                            <h3 className="heading-h4">Start Your Project</h3>
                            {formError && (
                              <p className="text-sm font-medium text-[#b91c1c]" role="alert">
                                {formError}
                              </p>
                            )}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <label className="flex flex-col gap-1.5">
                                <span className="caption text-secondary">Full Name *</span>
                                <input
                                  type="text"
                                  required
                                  value={formState.name}
                                  onChange={(e) =>
                                    setFormState((s) => ({ ...s, name: e.target.value }))
                                  }
                                  placeholder="Your name"
                                  className="w-full rounded-lg border border-[#e1e0e0] bg-white px-4 py-3 text-sm text-[#0a0a0a] outline-none focus:border-[#e85002]"
                                />
                              </label>
                              <label className="flex flex-col gap-1.5">
                                <span className="caption text-secondary">Work Email *</span>
                                <input
                                  type="email"
                                  required
                                  value={formState.email}
                                  onChange={(e) =>
                                    setFormState((s) => ({ ...s, email: e.target.value }))
                                  }
                                  placeholder="you@company.com"
                                  className="w-full rounded-lg border border-[#e1e0e0] bg-white px-4 py-3 text-sm text-[#0a0a0a] outline-none focus:border-[#e85002]"
                                />
                              </label>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <label className="flex flex-col gap-1.5">
                                <span className="caption text-secondary">Service Focus</span>
                                <select
                                  value={formState.service}
                                  onChange={(e) =>
                                    setFormState((s) => ({ ...s, service: e.target.value }))
                                  }
                                  className="w-full rounded-lg border border-[#e1e0e0] bg-white px-4 py-3 text-sm text-[#0a0a0a] outline-none focus:border-[#e85002]"
                                >
                                  <option>AI Product Development</option>
                                  <option>SaaS Platform Engineering</option>
                                  <option>Mobile App Development</option>
                                  <option>MVP Development</option>
                                  <option>AI Code Security Audit</option>
                                </select>
                              </label>
                              <label className="flex flex-col gap-1.5">
                                <span className="caption text-secondary">Estimated Budget</span>
                                <select
                                  value={formState.budget}
                                  onChange={(e) =>
                                    setFormState((s) => ({ ...s, budget: e.target.value }))
                                  }
                                  className="w-full rounded-lg border border-[#e1e0e0] bg-white px-4 py-3 text-sm text-[#0a0a0a] outline-none focus:border-[#e85002]"
                                >
                                  <option>$10k – $15k</option>
                                  <option>$15k – $30k</option>
                                  <option>$30k – $75k</option>
                                  <option>$75k+</option>
                                </select>
                              </label>
                            </div>

                            <label className="flex flex-col gap-1.5">
                              <span className="caption text-secondary">Project Brief</span>
                              <textarea
                                rows={4}
                                value={formState.message}
                                onChange={(e) =>
                                  setFormState((s) => ({ ...s, message: e.target.value }))
                                }
                                placeholder="Tell us about your product, target users, and goals..."
                                className="w-full rounded-lg border border-[#e1e0e0] bg-white px-4 py-3 text-sm text-[#0a0a0a] outline-none focus:border-[#e85002]"
                              />
                            </label>

                            <button type="submit" className="button w-full sm:w-auto">
                              <span className="button-lg">book a strategy call</span>
                            </button>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (cleanPath === "/technology") {
    return (
      <>
        <section className="section banner-section">
          <div className="section-inner-space-x">
            <div className="container">
              <div className="section-frame">
                <div className="section-space-x">
                  <div className="banner-section-space">
                    <div className="banner-header-row">
                      <ScrambleCaption text={TECHNOLOGY_PAGE_DATA.kicker} className="caption text-primary" />
                      <h1 className="heading-h1">{TECHNOLOGY_PAGE_DATA.title}</h1>
                      <p className="body-lg text-tertiary max-w-[580px]">
                        {TECHNOLOGY_PAGE_DATA.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
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

        <TechnologiesSection />

        <section className="section empower-section border-t border-[#e1e0e0]">
          <div className="section-inner-space-x">
            <div className="container">
              <div className="section-frame">
                <div className="section-space-x">
                  <div className="section-space-y">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {TECHNOLOGY_PAGE_DATA.sections?.map((sec) => (
                        <div key={sec.heading} className="card flex flex-col gap-3">
                          <p className="caption text-primary">{sec.kicker}</p>
                          <h2 className="heading-h5">{sec.heading}</h2>
                          <p className="body-regular text-secondary">{sec.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PromoCtaSection onNavigate={onNavigate} />
      </>
    );
  }

  if (cleanPath === "/blog") {
    return (
      <>
        <section className="section banner-section">
          <div className="section-inner-space-x">
            <div className="container">
              <div className="section-frame">
                <div className="section-space-x">
                  <div className="banner-section-space">
                    <div className="banner-header-row">
                      <ScrambleCaption text="[ insights ]" className="caption text-primary" />
                      <h1 className="heading-h1">
                        Engineering Insights and Innovative Product Thinking
                      </h1>
                      <p className="body-lg text-tertiary max-w-[580px]">
                        Deep dives into software architecture, AI-driven development, scalability, and modern engineering practices.
                      </p>
                    </div>
                  </div>
                </div>
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

        <section className="section empower-section">
          <div className="section-inner-space-x">
            <div className="container">
              <div className="section-frame">
                <div className="section-space-x">
                  <div className="section-space-y">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {BLOG_POSTS.map((post) => (
                        <article key={post.title} className="card flex flex-col justify-between gap-6">
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-xs font-medium text-[#737373] uppercase">
                              <span className="text-[#e85002]">{post.category}</span>
                              <span>·</span>
                              <span>{post.date}</span>
                            </div>
                            <h2 className="heading-h5">{post.title}</h2>
                            <p className="body-regular text-secondary">{post.excerpt}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => onNavigate("/contact")}
                            className="button self-start"
                          >
                            <span className="button-lg">Discuss this topic</span>
                          </button>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PromoCtaSection onNavigate={onNavigate} />
      </>
    );
  }

  if (cleanPath === "/team") {
    return (
      <>
        <section className="section banner-section">
          <div className="section-inner-space-x">
            <div className="container">
              <div className="section-frame">
                <div className="section-space-x">
                  <div className="banner-section-space">
                    <div className="banner-header-row">
                      <ScrambleCaption text="[ team ]" className="caption text-primary" />
                      <h1 className="heading-h1">Meet Our Development Team</h1>
                      <p className="body-lg text-tertiary max-w-[580px]">
                        30+ in-house product engineers, architects, and AI specialists shipping production software across 19+ countries.
                      </p>
                    </div>
                  </div>
                </div>
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

        <section className="section empower-section">
          <div className="section-inner-space-x">
            <div className="container">
              <div className="section-frame">
                <div className="section-space-x">
                  <div className="section-space-y">
                    <div className="section-header mb-10">
                      <ScrambleCaption text="[ the leaderboard ]" className="caption text-primary" />
                      <h2 className="heading-h2">Engineering Leadership</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {TEAM_LEADERS.map((leader) => (
                        <div key={leader.name} className="card flex flex-col justify-between gap-6">
                          <div className="flex flex-col gap-3">
                            <p className="caption text-primary">{leader.role}</p>
                            <h3 className="heading-h5">{leader.name}</h3>
                            <p className="body-regular text-secondary">{leader.bio}</p>
                          </div>
                          <blockquote className="text-sm font-medium text-[#0a0a0a] pt-4 border-t border-[#e1e0e0]">
                            {leader.quote}
                          </blockquote>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PromoCtaSection onNavigate={onNavigate} />
      </>
    );
  }

  if (cleanPath === "/opensource") {
    return (
      <>
        <section className="section banner-section">
          <div className="section-inner-space-x">
            <div className="container">
              <div className="section-frame">
                <div className="section-space-x">
                  <div className="banner-section-space">
                    <div className="banner-header-row">
                      <ScrambleCaption text="[ open source ]" className="caption text-primary" />
                      <h1 className="heading-h1">
                        Open Source Flutter Packages &amp; Developer Tools
                      </h1>
                      <p className="body-lg text-tertiary max-w-[600px]">
                        Explore open-source Flutter packages, developer tools, and web experiments featured by Dev Monks. Read the code, try a package, and find your next starting point.
                      </p>
                    </div>
                  </div>
                </div>
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

        <section className="section empower-section">
          <div className="section-inner-space-x">
            <div className="container">
              <div className="section-frame">
                <div className="section-space-x">
                  <div className="section-space-y">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                      <div>
                        <p className="caption text-primary mb-2">[ project directory ]</p>
                        <h2 className="heading-h2">Curated Open Source Collection</h2>
                      </div>
                      <p className="caption text-secondary">Showing {OPENSOURCE_PROJECTS.length} projects</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {OPENSOURCE_PROJECTS.map((proj) => (
                        <div key={proj.name} className="card flex flex-col justify-between gap-4">
                          <div className="flex flex-col gap-2">
                            <p className="caption text-primary">{proj.tag}</p>
                            <h3 className="heading-h6">{proj.name}</h3>
                            <p className="body-sm text-secondary">{proj.description}</p>
                          </div>
                          <a
                            href="https://github.com/devmonks-co"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="caption text-[#0a0a0a] hover:text-[#e85002] transition-colors"
                          >
                            View on GitHub →
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PromoCtaSection onNavigate={onNavigate} />
      </>
    );
  }

  // Handle /services/* slug pages, /service, /service-details, /about, /llm-info, legal pages
  const serviceSlug = cleanPath.startsWith("/services/")
    ? cleanPath.replace("/services/", "")
    : null;
  const aiDetail = serviceSlug ? AI_SERVICE_DETAILS[serviceSlug] : null;

  const pageMeta = aiDetail
    ? {
        kicker: `[ ${serviceSlug?.replace(/-/g, " ")} ]`,
        title: aiDetail.title,
        subtitle: aiDetail.summary,
        deliverables: aiDetail.deliverables,
      }
    : cleanPath === "/about"
      ? {
          kicker: "[ about us ]",
          title: "No Hand-Offs Engineering That Keeps Design Fully Intact",
          subtitle:
            "Originating inside Design Monks in 2021 and operating independently as Dev Monks, we unite human-centered design with senior AI-powered software engineering.",
          deliverables: ["50+ Builds Shipped", "30+ In-House Developers", "19+ Countries Served"],
        }
      : cleanPath === "/service-details"
        ? {
            kicker: "[ services.mobile app development ]",
            title: "Custom Mobile App Development for iOS & Android",
            subtitle:
              "From native Swift & Kotlin apps to cross-platform Flutter and IoT companion experiences built for daily reliability.",
            deliverables: [
              "Custom iOS & Android Engineering",
              "Cross-Platform Flutter Architecture",
              "IoT & Hardware Companion Apps",
            ],
          }
        : cleanPath === "/privacy-policy"
          ? {
              kicker: "[ legal ]",
              title: "Privacy Policy",
              subtitle:
                "Dev Monks respects your privacy and handles project inquiry data strictly for engineering consultation and communication.",
              deliverables: ["Zero third-party data resale", "Confidential NDA readiness", "Contact hello@devmonks.co for data requests"],
            }
          : cleanPath === "/terms-conditions"
            ? {
                kicker: "[ legal ]",
                title: "Terms and Conditions",
                subtitle:
                  "Standard terms governing Dev Monks product development engagements, intellectual property ownership, and deliverables.",
                deliverables: ["100% client IP ownership upon completion", "Transparent milestone billing", "Post-launch optimization options"],
              }
            : {
                kicker: SERVICE_PAGE_DATA.kicker,
                title: SERVICE_PAGE_DATA.title,
                subtitle: SERVICE_PAGE_DATA.subtitle,
                deliverables: SERVICE_PAGE_DATA.sections?.[0].tags || [],
              };

  return (
    <>
      <section className="section banner-section">
        <div className="section-inner-space-x">
          <div className="container">
            <div className="section-frame">
              <div className="section-space-x">
                <div className="banner-section-space">
                  <div className="banner-header-row">
                    <ScrambleCaption text={pageMeta.kicker} className="caption text-primary" />
                    <h1 className="heading-h1">{pageMeta.title}</h1>
                    <p className="body-lg text-tertiary max-w-[620px]">{pageMeta.subtitle}</p>
                    <a
                      href="/contact"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate("/contact");
                      }}
                      className="button button-secondary"
                    >
                      <span className="button-lg">Start Your Project</span>
                    </a>
                  </div>
                </div>
              </div>
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

      <section id="capabilities" className="section empower-section">
        <div className="section-inner-space-x">
          <div className="container">
            <div className="section-frame">
              <div className="section-space-x">
                <div className="section-space-y">
                  <div className="about-stats mb-12">
                    {SERVICE_PAGE_DATA.metrics?.slice(0, 3).map((m) => (
                      <div key={m.label} className="card stat-card">
                        <p className="heading-h2 text-primary tabular-nums">{m.value}</p>
                        <p className="caption text-secondary">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {pageMeta.deliverables.map((item, idx) => (
                      <div key={item} className="card flex flex-col gap-3">
                        <p className="caption text-primary tabular-nums">
                          {String(idx + 1).padStart(2, "0")}
                        </p>
                        <h2 className="heading-h6">{item}</h2>
                        <p className="body-sm text-secondary">
                          Engineered with production testing, scalable architecture, and clean handoff documentation.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PromoCtaSection onNavigate={onNavigate} />
    </>
  );
};
