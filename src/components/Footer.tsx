import React from "react";
import { AI_SUMMARY_LINKS, FOOTER_LEFT_COLUMN, FOOTER_RIGHT_COLUMN } from "../data/homepageData";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <footer className="footer">
      <div className="section-inner-space-x">
        <div className="container">
          <div className="section-frame">
            <div className="section-frame-space footer-space">
              <div className="footer-grid">
                {/* Brand & AI Summary Column */}
                <div className="footer-brand-column">
                  <p className="heading-h6 text-tertiary">
                    Your ideas deserve more than prototypes. Partner with Dev Monks and bring scalable, reliable, and AI-enhanced products to life today.
                  </p>
                  <div className="footer-brand">
                    <a
                      href="/"
                      onClick={(e) => handleNav(e, "/")}
                      aria-current="page"
                      className="footer-logo-link inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699bfe890802f92d406b0acc_Layer_1.svg"
                        loading="lazy"
                        alt="Dev Monks"
                        className="footer-logo"
                        referrerPolicy="no-referrer"
                      />
                    </a>
                    <div className="devmonks-ai-summary">
                      <h3 className="caption text-tertiary">[ Explore AI Summary ]</h3>
                      <div className="devmonks-ai-icons">
                        {AI_SUMMARY_LINKS.map((item) => (
                          <a
                            key={item.name}
                            target="_blank"
                            aria-label={item.ariaLabel}
                            title={item.name}
                            rel="nofollow noopener noreferrer"
                            href={item.href}
                            className="devmonks-ai-button"
                          >
                            <img
                              src={item.icon}
                              loading="lazy"
                              alt={item.name}
                              className="devmonks-ai-icon-white"
                              referrerPolicy="no-referrer"
                            />
                          </a>
                        ))}
                      </div>
                      <a
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        href="https://www.google.com/preferences/source?q=devmonks.co"
                        className="devmonks-ai-google"
                      >
                        <img
                          src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/6abdff40278926d1c6775845_ai-summary-google.svg"
                          loading="lazy"
                          alt=""
                          className="devmonks-ai-icon"
                          referrerPolicy="no-referrer"
                        />
                        <span>Add Dev Monks on Google</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Menu Columns */}
                <div className="footer-menu-row">
                  <div className="footer-menu-column">
                    {FOOTER_LEFT_COLUMN.map((group) => (
                      <div key={group.heading} className="footer-menu-wrap">
                        <h3 className="caption text-tertiary">{group.heading}</h3>
                        <div className="footer-menu-items">
                          {group.links.map((link) => (
                            <a
                              key={link.label}
                              data-underline=""
                              href={link.href}
                              onClick={(e) => handleNav(e, link.href)}
                              className="body-regular text-tertiary text-secondary"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="footer-menu-column">
                    {FOOTER_RIGHT_COLUMN.map((group) => (
                      <div key={group.heading} className="footer-menu-wrap">
                        <h3 className="caption text-tertiary">{group.heading}</h3>
                        <div className="footer-menu-items">
                          {group.links.map((link) => (
                            <a
                              key={`${group.heading}-${link.label}`}
                              data-underline=""
                              href={link.href}
                              onClick={(e) => handleNav(e, link.href)}
                              className="body-regular text-tertiary text-secondary"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="section-divider" />

            <div className="section-frame-space footer-copyright">
              <div className="container">
                <div className="footer-copyright-row">
                  <p className="body-sm text-tertiary">
                    © {currentYear}, Dev Monks, All rights reserved.
                  </p>

                  <div className="footer-socials">
                    <a
                      href="https://www.linkedin.com/company/dev-monks/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Dev Monks LinkedIn"
                      className="social-item-link"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M3.66674 6.96443V19.9825H0.350535V6.96443H3.66674ZM15.2981 6.6139C17.3787 6.6139 18.4904 7.28815 19.1242 8.2977C19.7932 9.36356 20 10.9061 20 12.7899V19.9825H16.6838V13.6667C16.6838 12.8872 16.6908 11.8497 16.3651 11.0115C16.1961 10.5764 15.9287 10.1671 15.5047 9.87048C15.0799 9.57333 14.5439 9.42129 13.8949 9.42126C13.2605 9.42126 12.7215 9.54504 12.2759 9.79235C11.8273 10.0413 11.5045 10.3982 11.2778 10.81C10.838 11.609 10.7545 12.6311 10.7545 13.5619V19.9825H7.4558V6.94696H10.5962V8.87747H11.4936L11.6417 8.59478C12.1332 7.65663 13.3785 6.61395 15.2981 6.6139ZM2.00041 0C3.09552 0.000226369 3.99979 0.905259 3.99979 2.00041C3.99957 3.09776 3.11054 3.99957 2.00041 3.99979C0.905259 3.99979 0.00022627 3.09552 0 2.00041C0 0.905122 0.905123 0 2.00041 0Z"
                          fill="#E1E0E0"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/devmonks.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Dev Monks Facebook"
                      className="social-item-link"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="20" viewBox="0 0 9 20" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.47583 3.16667H8.44444V0H6.47583C5.31671 0.00139671 4.20545 0.462477 3.38583 1.2821C2.5662 2.10173 2.10512 3.21298 2.10372 4.37211V6.33333H0V9.5H2.11111V19.9901H5.27778V9.5H7.41106L8.03594 6.33333H5.27778V3.7905C5.28024 3.62563 5.3469 3.46822 5.46359 3.35173C5.58028 3.23524 5.7378 3.16885 5.90267 3.16667H6.47583Z"
                          fill="#969696"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/devmonks.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Dev Monks Instagram"
                      className="social-item-link"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path
                          d="M5.51 0H13.49C16.53 0 19 2.47 19 5.51V13.49C19 14.9513 18.4195 16.3528 17.3862 17.3862C16.3528 18.4195 14.9513 19 13.49 19H5.51C2.47 19 0 16.53 0 13.49V5.51C0 4.04866 0.580516 2.64717 1.61384 1.61384C2.64717 0.580516 4.04866 0 5.51 0ZM5.32 1.9C4.41296 1.9 3.54307 2.26032 2.90169 2.90169C2.26032 3.54307 1.9 4.41296 1.9 5.32V13.68C1.9 15.5705 3.4295 17.1 5.32 17.1H13.68C14.587 17.1 15.4569 16.7397 16.0983 16.0983C16.7397 15.4569 17.1 14.587 17.1 13.68V5.32C17.1 3.4295 15.5705 1.9 13.68 1.9H5.32ZM14.4875 3.325C14.8024 3.325 15.1045 3.45011 15.3272 3.67281C15.5499 3.89551 15.675 4.19756 15.675 4.5125C15.675 4.82744 15.5499 5.12949 15.3272 5.35219C15.1045 5.57489 14.8024 5.7 14.4875 5.7C14.1726 5.7 13.8705 5.57489 13.6478 5.35219C13.4251 5.12949 13.3 4.82744 13.3 4.5125C13.3 4.19756 13.4251 3.89551 13.6478 3.67281C13.8705 3.45011 14.1726 3.325 14.4875 3.325ZM9.5 4.75C10.7598 4.75 11.968 5.25044 12.8588 6.14124C13.7496 7.03204 14.25 8.24022 14.25 9.5C14.25 10.7598 13.7496 11.968 12.8588 12.8588C11.968 13.7496 10.7598 14.25 9.5 14.25C8.24022 14.25 7.03204 13.7496 6.14124 12.8588C5.25044 11.968 4.75 10.7598 4.75 9.5C4.75 8.24022 5.25044 7.03204 6.14124 6.14124C7.03204 5.25044 8.24022 4.75 9.5 4.75ZM9.5 6.65C8.74413 6.65 8.01922 6.95027 7.48475 7.48475C6.95027 8.01922 6.65 8.74413 6.65 9.5C6.65 10.2559 6.95027 10.9808 7.48475 11.5153C8.01922 12.0497 8.74413 12.35 9.5 12.35C10.2559 12.35 10.9808 12.0497 11.5153 11.5153C12.0497 10.9808 12.35 10.2559 12.35 9.5C12.35 8.74413 12.0497 8.01922 11.5153 7.48475C10.9808 6.95027 10.2559 6.65 9.5 6.65Z"
                          fill="#969696"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="footer-security-row">
                    <a
                      data-underline=""
                      href="/privacy-policy"
                      onClick={(e) => handleNav(e, "/privacy-policy")}
                      className="body-sm text-tertiary"
                    >
                      Privacy Policy
                    </a>
                    <a
                      data-underline=""
                      href="/terms-conditions"
                      onClick={(e) => handleNav(e, "/terms-conditions")}
                      className="body-sm text-tertiary"
                    >
                      Terms and Conditions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
