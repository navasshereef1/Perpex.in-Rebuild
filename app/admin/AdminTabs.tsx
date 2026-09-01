"use client";

import { useState } from "react";
import ServicesManager from "./ServicesManager";
import EngagementModelsManager from "./EngagementModelsManager";
import TrainingTiersManager from "./TrainingTiersManager";
import SectorsManager from "./SectorsManager";
import CaseStudiesManager from "./CaseStudiesManager";
import TestimonialsManager from "./TestimonialsManager";
import BlogManager from "./BlogManager";
import TeamMembersManager from "./TeamMembersManager";
import InquiriesManager from "./InquiriesManager";

const tabs = [
  { key: "services", label: "Services", Component: ServicesManager },
  { key: "engagement", label: "Engagement Models", Component: EngagementModelsManager },
  { key: "training", label: "Training Tiers", Component: TrainingTiersManager },
  { key: "sectors", label: "Sectors", Component: SectorsManager },
  { key: "case-studies", label: "Case Studies", Component: CaseStudiesManager },
  { key: "testimonials", label: "Testimonials", Component: TestimonialsManager },
  { key: "blog", label: "Blog", Component: BlogManager },
  { key: "team", label: "Team Members", Component: TeamMembersManager },
  { key: "inquiries", label: "Inquiries", Component: InquiriesManager },
];

export default function AdminTabs() {
  const [active, setActive] = useState(tabs[0].key);
  const ActiveComponent = tabs.find((t) => t.key === active)?.Component ?? ServicesManager;

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-2 rounded-full bg-navy-900/[0.05] p-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`rounded-full px-4 py-2 text-[13px] transition-colors ${
              active === tab.key ? "bg-navy-900 text-cream-50" : "text-navy-900/70 hover:text-navy-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <ActiveComponent />
      </div>
    </div>
  );
}
