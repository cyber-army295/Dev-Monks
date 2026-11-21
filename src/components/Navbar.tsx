import React, { useEffect, useState } from "react";
import { DevMonksLogo } from "./DevMonksLogo";

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const NAV_LINKS = [
  { label: "Service", path: "/service" },
  { label: "Technology", path: "/technology" },
  { label: "Blog", path: "/blog" },
  { label: "Team", path: "/team" },
  { label: "Open Source", path: "/opensource" },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate(path);
  };

  return (
    <header
      data-header="dark"
      className={`sticky-navbar ${scrolled || mobileOpen ? "active" : ""}`}
    >
      {/* Mobile full-screen slide-in backdrop */}
      <div
        className="fixed inset-0 bg-[#0f0f0f] z-[-1] min-[992px]:hidden transition-transform duration-300 ease-out"
        style={{
          transform: mobileOpen ? "translateX(0%)" : "translateX(-100%)",
        }}
        aria-hidden={!mobileOpen}
      />

      <div className="navbar">
        <div className="container">
          <div className="section-frame-space-x">
            <div className="navbar-container">
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, "/")}
                aria-label="Dev Monks Home"
                className="navbar-logo"
              >
                <div className="navbar-logo-img">
                  <DevMonksLogo />
                </div>
              </a>

              <nav className="navbar-menu-left" aria-label="Main navigation">
                {NAV_LINKS.map((link) => {
                  const isActive = currentPath === link.path;
                  return (
                    <a
                      key={link.path}
                      href={link.path}
                      onClick={(e) => handleLinkClick(e, link.path)}
                      className={`navbar-link caption text-tertiary ${isActive ? "is-active" : ""}`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="navbar-menu-right">
                <a
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, "/contact")}
                  className="button is-del"
                >
                  <span className="button-lg is-del">{"{ Fix Your Product }"}</span>
                </a>
              </div>

              {/* Mobile Hamburger Toggle */}
              <div className="mobile-menu">
                <button
                  type="button"
                  onClick={() => setMobileOpen((prev) => !prev)}
                  aria-expanded={mobileOpen}
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  className="relative w-6 h-6 flex items-center justify-center bg-transparent border-0 p-0 cursor-pointer"
                >
                  <div
                    className="menu-icon_component menu-button-icon transition-opacity duration-200"
                    style={{ opacity: mobileOpen ? 0 : 1 }}
                  >
                    <div className="menu-icon_line-top" />
                    <div className="menu-icon_line-middle">
                      <div className="menu-icon_line-middle-inner-2" />
                    </div>
                    <div className="menu-icon_line-bottom" />
                  </div>
                  <div
                    className="menu-icon_component mobile-menu-close-icon transition-opacity duration-200"
                    style={{ opacity: mobileOpen ? 1 : 0 }}
                  >
                    <div className="menu-icon_line-top menu-close-top" />
                    <div className="menu-icon_line-bottom menu-close-bottom" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      <nav
        aria-label="Mobile navigation"
        className={`min-[992px]:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-[85vh] opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container">
          <div className="section-frame-space-x py-6 flex flex-col items-start gap-2 border-t border-[#292929] bg-[#0f0f0f]">
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`w-full py-3 px-2 text-base font-medium transition-colors ${
                    isActive ? "text-[#e85002]" : "text-[#fafafa] hover:text-[#e85002]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-4 w-full">
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, "/contact")}
                className="button w-full"
              >
                <span className="button-lg">{"{ Fix Your Product }"}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
