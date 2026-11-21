import React, { useMemo, useState } from "react";
import { TECH_CATEGORIES, TECH_ITEMS, TechCategory } from "../../data/techItems";
import { ScrambleCaption } from "../ScrambleCaption";

export const TechnologiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory>("All");

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return TECH_ITEMS;
    return TECH_ITEMS.filter((item) => item.cat === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="section empower-section">
      <div className="section-inner-space-x">
        <div className="container">
          <div className="section-frame">
            <div className="overflow-hidden">
              <div className="section-space-x">
                <div className="section-space-y">
                  <div className="section-row">
                    <div className="section-header">
                      <div className="section-header section-header-center">
                        <div className="section-title-row">
                          <ScrambleCaption
                            text="[ Technologies ]"
                            className="caption text-primary text-center"
                          />
                          <h2 className="heading-h2 text-center">
                            Engineered with Modern Tech Stacks
                          </h2>
                        </div>

                        <div className="categories-filter-form">
                          <div className="categories-service-filter-wrap">
                            <div
                              className="categories-filter-list"
                              role="tablist"
                              aria-label="Filter technologies by category"
                            >
                              {TECH_CATEGORIES.map((category) => {
                                const isActive = selectedCategory === category;
                                return (
                                  <button
                                    key={category}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`chip chip-outline text-sm font-medium ${
                                      isActive ? "is-list-active" : ""
                                    }`}
                                  >
                                    {category}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="section-body">
                      <div role="list" className="technologies-list">
                        {filteredItems.map((item, idx) => (
                          <div
                            key={`${item.img}-${idx}`}
                            role="listitem"
                            className="technologies-item"
                            title={`${item.name} (${item.cat})`}
                          >
                            <img
                              src={item.img}
                              loading="lazy"
                              alt={item.name}
                              className="technologies-card-icon"
                              referrerPolicy="no-referrer"
                            />
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
      </div>
    </section>
  );
};
