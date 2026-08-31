// Source of truth: Perpex Insights B2B Services Brochure v3.
// Consumed by lib/db/seed.ts once DATABASE_URL is available.

export const services = [
  {
    slug: "gap-analysis",
    stage: "Diagnose",
    title: "Gap Analysis",
    tagline: "Understand your business before you fix it.",
    description:
      "A structured diagnostic covering structure, people, processes, reporting, governance, finance, and growth readiness — identifying not just what is broken, but why, and what specifically needs to be built, trained, or monitored to fix it.",
    whatWeAnalyze: [
      { title: "Structure & People", description: "Org structure, roles, reporting lines, ownership clarity, decision rights, founder dependency." },
      { title: "Processes & Operations", description: "End-to-end workflows, approval flows, handoff points, bottlenecks, recurring failures." },
      { title: "Reporting & Governance", description: "KPIs, dashboards, review meetings, decision documentation, escalation handling." },
      { title: "Documentation Landscape", description: "What exists, what is missing, outdated, or not followed in practice." },
      { title: "Training & Capability", description: "Skill gaps, knowledge deficiencies, training deficits by role and department." },
      { title: "Scalability Readiness", description: "Financial discipline, compliance posture, customer handling, growth infrastructure." },
    ],
    deliverables: [
      "Executive Gap Analysis Report",
      "Current State Mapping (per dept.)",
      "Root Cause Analysis",
      "Risk Register",
      "Priority Matrix",
      "Transformation Recommendations",
      "Documentation Requirement List",
      "Training Need Identification",
      "KPI & Monitoring Requirement Map",
      "Implementation Roadmap",
      "Findings Presentation to Leadership",
    ],
  },
  {
    slug: "documentation",
    stage: "Design",
    title: "Documentation",
    tagline: "Build the operating system your business needs to run properly.",
    description:
      "Perpex builds all required business documents based on findings from Gap Analysis — each one designed to be used, not just filed. Documentation is the formal system layer of your business.",
    whatWeAnalyze: [
      { title: "Process Documents", description: "SOPs, process flowcharts, approval matrices, escalation structures, handoff protocols." },
      { title: "People Documents", description: "Job descriptions, KRA/KPI frameworks, onboarding packs, appraisal formats, training handbooks." },
      { title: "Governance Documents", description: "Policies, compliance records, meeting formats, governance templates, authority frameworks." },
      { title: "Tracking & Reporting", description: "Trackers, dashboards, MIS templates, review formats, performance reports." },
      { title: "Forms & Checklists", description: "Standard forms, pre-departure checklists, quality checklists, inspection sheets." },
      { title: "Master Indexes", description: "Document libraries, version control registers, usage guides, implementation packs." },
    ],
    deliverables: [
      "Requirement Extraction from Gap Analysis",
      "Priority Classification (critical / 30-day / 60-90 day)",
      "Document Specification",
      "Draft Creation",
      "Internal QC",
      "Client Walkthrough",
      "Version Freeze & Implementation Pack",
    ],
  },
  {
    slug: "training",
    stage: "Enable",
    title: "Training",
    tagline: "Equip your people to execute the system with confidence.",
    description:
      "Sales and operational programs built on activity-based learning, real-time execution, and immediate application — so every session produces behavioral change, not just awareness.",
    whatWeAnalyze: [
      { title: "Phase 1 — Onboarding & Alignment", description: "" },
      { title: "Phase 2 — Product Knowledge", description: "" },
      { title: "Phase 3 — Gap & Assessment", description: "" },
      { title: "Phase 4 — Training Implementation", description: "" },
    ],
    deliverables: [
      "Activity-Based Learning",
      "Immediate Implementation",
      "Role-Segmented Delivery",
      "Scalable Design (Enterprise → Professional → Essentials)",
      "Measurable Outcomes",
    ],
  },
  {
    slug: "managing-monitoring",
    stage: "Control",
    title: "Managing & Monitoring",
    tagline: "Control daily execution, drive KPIs, enforce accountability.",
    description:
      "Perpex's most operationally intensive service — we embed ourselves as an external performance control layer, actively managing your assigned team on a daily basis across morning planning, midday follow-up, and evening review cadences.",
    whatWeAnalyze: [
      { title: "Input KPIs", description: "Calls & follow-ups, prospects contacted, meetings fixed, demos & proposals sent." },
      { title: "Process KPIs", description: "Response time, follow-up adherence, lead stage progression, aging/CRM update rate." },
      { title: "Output KPIs", description: "Conversions, revenue booked, collections, target achievement %." },
      { title: "Discipline KPIs", description: "Meeting attendance, reporting timeliness, commitment vs completion, data accuracy." },
    ],
    deliverables: [
      "Daily Morning Planning Meeting (09:00)",
      "Midday Follow-Up (13:30)",
      "Evening Review Meeting (18:00)",
      "Weekly & Monthly Reviews",
      "Structured 5-step Escalation Framework",
    ],
  },
];

export const engagementModels = [
  { name: "Standalone", servicesIncluded: "Any single service — Gap Analysis, Documentation, Training, or Managing & Monitoring", bestFor: "Businesses with a specific, defined need" },
  { name: "Diagnostic", servicesIncluded: "Gap Analysis only", bestFor: "First-time engagements, audit prep, investor readiness" },
  { name: "System Build", servicesIncluded: "Gap Analysis + Documentation + Training", bestFor: "Businesses needing a documented operating system with team capability" },
  { name: "Full Transformation", servicesIncluded: "All four services in sequence", bestFor: "MSMEs and corporates ready for complete operational overhaul" },
  { name: "Monitoring Retainer", servicesIncluded: "Ongoing Managing & Monitoring (monthly)", bestFor: "Teams needing sustained daily accountability and performance control" },
];

export const trainingTiers = [
  { name: "Essentials", targetAudience: "Entry-level, small businesses, startups", format: "100% Pre-recorded (LMS-based)", trainingHours: "3 hrs", activitySheets: "12 sheets", customization: "Generic best practices", whatsIncluded: "Recorded sessions, activity cross-checking, final report" },
  { name: "Professional", targetAudience: "Mid-sized companies, growing teams", format: "Hybrid: Recorded + Live sessions", trainingHours: "15 hrs (12 training + 3 analysis)", activitySheets: "12 sheets", customization: "Standard structured curriculum", whatsIncluded: "Live support, structured pitch flow, implementation guidance, final report" },
  { name: "Enterprise", targetAudience: "Large corporates, enterprise sales teams", format: "Fully customized + Offline sessions", trainingHours: "50 hrs (45 training + 2 offline)", activitySheets: "30 sheets", customization: "100% customized to your business", whatsIncluded: "Full customization, pitch development, objection scripts, sales strategy, tracker, leadership training, final report" },
];

export const sectors = ["Healthcare", "F&B", "Construction", "EdTech", "SaaS", "Marketing", "AI", "Recruitment", "Hospitality"];

export const differentiators = [
  { title: "Proven Experience", description: "140+ B2B clients served across consulting, training, and managed execution in 10+ sectors across India." },
  { title: "Integrated End-to-End Delivery", description: "Our four services form one connected system — Gap Analysis feeds Documentation, Documentation drives Training, Training enables Monitoring." },
  { title: "Scale-Appropriate Investment", description: "Big-firm consulting quality at MSME-accessible cost." },
  { title: "Founder-Led Engagement", description: "Senior leadership and founders are personally involved in every significant project." },
  { title: "Implementation, Not Just Reports", description: "Every deliverable has an implementation path; Managing & Monitoring ensures execution actually happens." },
  { title: "Diverse Sector Expertise", description: "Healthcare, F&B, Construction, EdTech, SaaS, Marketing, AI, Recruitment, Hospitality." },
];

// Real B2B consulting testimonials pulled from the original perpex.in extraction
// (filtered to consulting/audit clients only — placement/student testimonials excluded, out of scope).
export const testimonials = [
  { name: "Gokul VS", designation: "Team Lead", company: "Royal Gold Algo", description: "Perpex Insights maintains a high standard of quality across their Audit services. Their team is professional, responsive, and consistently meets deadlines." },
  { name: "Sufail", designation: "Founder & Academic Dean", company: "ASH Academy", description: "Excellent service and high professionalism. Perpex Insights exceeded our expectations in both Audit and Training. Their team is incredibly responsive and effective." },
  { name: "Sreenanda SR", designation: "HR Manager", company: "Sunny Day Solar", description: "We are satisfied with the Audit and Monitoring services from Perpex Insights. Their team is professional and engaging. We appreciate their commitment to quality." },
  { name: "Shahayas", designation: "Co-Founder", company: "Skybook Global", description: "Perpex Insights delivered a high level of professionalism and responsiveness during our Audit engagement." },
  { name: "Sabith Rahman", designation: "Founder", company: "Aerowis Aviations", description: "The audit and taxation services provided by Perpex Insights are of excellent quality. Their team is highly professional, and we are very satisfied." },
  { name: "Mujthaba Hashmi", designation: "Managing Director", company: "Cloud Hub", description: "We were very satisfied with the Monitoring and Tax Audit services provided by Perpex Insights." },
  { name: "Kaveri s Vijayakumar", designation: "Founder", company: "IQ CTS Academy", description: "Perpex Insights provided exceptional Audit, Monitoring, and Training services. We were highly satisfied with their team's professionalism." },
];
