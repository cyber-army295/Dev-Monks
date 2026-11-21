import React from "react";
import { motion } from "motion/react";
import { COMPARISON_ICONS, COMPARISON_ROWS } from "../../data/homepageData";
import { ScrambleCaption } from "../ScrambleCaption";

export const IndustriesAndComparisonSection: React.FC = () => {
  return (
    <section className="section comparison-section">
      {/* Industries Radar */}
      <div className="section-inner-space-x is-relative">
        <div className="container">
          <div className="section-frame">
            <div className="section-space-x">
              <div className="section-space-y">
                <div className="industry-domination-section">
                  <div className="industry-domination-header">
                    <div className="section-header section-header-center">
                      <div className="section-title-row">
                        <ScrambleCaption
                          text="[ industries ]"
                          className="caption text-primary text-center"
                        />
                        <h2 className="heading-h2 text-center">
                          Building Software for Diverse Industry Needs
                        </h2>
                      </div>
                      <p className="body-lg text-center">
                        We provide custom software development services for startups, scale-ups and enterprises across a wide range of industries.
                      </p>
                    </div>
                  </div>

                  <div className="industry-domination-body">
                    <div className="industry-domination-map">
                      <img
                        src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699d2b06a1d9a34f42bdb5b1_Content.svg"
                        loading="lazy"
                        alt="Industry capability radar"
                        className="industry-domination-map-image"
                        referrerPolicy="no-referrer"
                      />
                      <img
                        src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/69a2a0eb82e24dd9d0fec3ac_697d2ee2ca3fb8a0793be1aec9b87e1a_Content%20%281%29.svg"
                        loading="lazy"
                        alt="Industry capability radar"
                        className="industry-domination-map-image is-mb"
                        referrerPolicy="no-referrer"
                      />
                      <div className="industry-domination-map-embed">
                        <motion.div
                          initial={{ scale: 0.4, opacity: 0.4 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                          className="w-full h-full"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 467 483"
                            fill="none"
                          >
                            <path
                              d="M421.033 35.5646L240.949 0L88.9453 66.1514L0 215.295L108.445 347.651L240.949 482.668L358.75 333.455L466.945 215.295L421.033 35.5646ZM239.001 192.871H239.016V192.886L239.001 192.871Z"
                              fill="#E85002"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699fd589436421a842b25c8f_industry.avif"
          loading="lazy"
          sizes="(max-width: 2880px) 100vw, 2880px"
          srcSet="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699fd589436421a842b25c8f_industry-p-500.avif 500w, https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699fd589436421a842b25c8f_industry-p-800.avif 800w, https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699fd589436421a842b25c8f_industry-p-1080.avif 1080w, https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699fd589436421a842b25c8f_industry.avif 2880w"
          alt=""
          className="bg-img"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="section-divider" />

      {/* Comparison Table */}
      <div className="section-inner-space-x">
        <div className="container">
          <div className="section-frame">
            <div className="section-space-x">
              <div className="section-space-y">
                <div className="section-row">
                  <div className="section-header section-header-center">
                    <ScrambleCaption
                      text="[ Comparison ]"
                      className="caption text-primary text-center"
                    />
                    <h2 className="heading-h2 text-center">
                      Where Others Stop, We Continue
                    </h2>
                  </div>

                  <div className="section-body comparison-table-responsive">
                    <div className="comparison-table">
                      {/* Header Row */}
                      <div className="comparison-table-row">
                        <div className="comparison-table-header-cell">
                          <p className="overline text-tertiary">Features</p>
                        </div>
                        <div className="comparison-table-header-cell">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699d626d05b1e8a54c56f8e5_Content%20(1).svg"
                            alt="Dev Monks icon"
                            className="comparison-table-cell-icon"
                            referrerPolicy="no-referrer"
                          />
                          <p className="overline text-tertiary">dev monks</p>
                        </div>
                        <div className="comparison-table-header-cell">
                          <p className="overline text-tertiary">freelancers</p>
                        </div>
                        <div className="comparison-table-header-cell">
                          <p className="overline text-tertiary">Traditional agencies</p>
                        </div>
                      </div>

                      {/* Data Rows */}
                      {COMPARISON_ROWS.map((row) => (
                        <div key={row.feature} className="comparison-table-row">
                          <div className="comparison-table-cell">
                            <p className="body-regular table-text text-base">{row.feature}</p>
                          </div>
                          <div className="comparison-table-cell">
                            <img
                              alt={row.devMonks.text}
                              loading="lazy"
                              src={COMPARISON_ICONS[row.devMonks.status]}
                              className="comparison-table-cell-icon"
                              referrerPolicy="no-referrer"
                            />
                            <p className="body-regular table-text text-base">
                              {row.devMonks.text}
                            </p>
                          </div>
                          <div className="comparison-table-cell">
                            <img
                              alt={row.freelancers.text}
                              loading="lazy"
                              src={COMPARISON_ICONS[row.freelancers.status]}
                              className="comparison-table-cell-icon"
                              referrerPolicy="no-referrer"
                            />
                            <p className="body-regular table-text text-base">
                              {row.freelancers.text}
                            </p>
                          </div>
                          <div className="comparison-table-cell">
                            <img
                              alt={row.agencies.text}
                              loading="lazy"
                              src={COMPARISON_ICONS[row.agencies.status]}
                              className="comparison-table-cell-icon"
                              referrerPolicy="no-referrer"
                            />
                            <p className="body-regular table-text text-base">
                              {row.agencies.text}
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
      </div>
    </section>
  );
};
