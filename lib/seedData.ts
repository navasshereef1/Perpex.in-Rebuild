// Source of truth: Perpex Insights B2B Services Brochure v3.
// Consumed by lib/db/seed.ts once DATABASE_URL is available.

export const services = [
  {
    slug: "gap-analysis",
    stage: "Diagnose",
    title: "Gap Analysis",
    tagline: "Understand your business before you fix it.",
    description:
      "A structured diagnostic covering structure, people, processes, reporting, governance, finance, and growth readiness. It identifies what is broken, why, and what needs to be built, trained, or monitored to fix it.",
    whatWeAnalyze: [
      { title: "Structure & People", description: "Org structure, roles, reporting lines, ownership clarity, decision rights, founder dependency." },
      { title: "Processes & Operations", description: "End-to-end workflows, approval flows, handoff points, bottlenecks, recurring failures." },
      { title: "Reporting & Governance", description: "KPIs, dashboards, review meetings, decision documentation, escalation handling." },
      { title: "Documentation Landscape", description: "What exists, what is missing, outdated, or not followed in practice." },
      { title: "Training & Capability", description: "Skill gaps, knowledge deficiencies, training deficits by role and department." },
      { title: "Scalability Readiness", description: "Financial discipline, compliance posture, customer handling, growth infrastructure." },
    ],
    processSteps: [
      { title: "Stakeholder Interviews", description: "Structured conversations with founders, leadership, department heads, team leads, and key operators." },
      { title: "Document Review", description: "Analysis of existing SOPs, policies, trackers, dashboards, MIS reports, org charts and HR documents." },
      { title: "Process Observation", description: "Shadowing workflows, meetings, approvals, and daily operations to see what actually happens vs. what is claimed." },
      { title: "Quantitative Data Analysis", description: "Productivity metrics, turnaround times, conversion ratios, error frequencies, performance trends." },
      { title: "Gap Scoring", description: "Every gap is rated by severity, urgency, business impact, implementation difficulty, and dependency." },
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
      "PerpeX builds all required business documents based on findings from Gap Analysis, each one designed to be used, not filed. Documentation is the formal system layer of your business.",
    whatWeAnalyze: [
      { title: "Process Documents", description: "SOPs, process flowcharts, approval matrices, escalation structures, handoff protocols." },
      { title: "People Documents", description: "Job descriptions, KRA/KPI frameworks, onboarding packs, appraisal formats, training handbooks." },
      { title: "Governance Documents", description: "Policies, compliance records, meeting formats, governance templates, authority frameworks." },
      { title: "Tracking & Reporting", description: "Trackers, dashboards, MIS templates, review formats, performance reports." },
      { title: "Forms & Checklists", description: "Standard forms, pre-departure checklists, quality checklists, inspection sheets." },
      { title: "Master Indexes", description: "Document libraries, version control registers, usage guides, implementation packs." },
    ],
    processSteps: [
      { title: "Requirement Extraction", description: "Every document flows from Gap Analysis findings. Nothing is created without a problem it solves." },
      { title: "Priority Classification", description: "Documents are staged in critical, 30-day, and 60 to 90 day groups for phased implementation." },
      { title: "Document Specification", description: "Each is scoped with purpose, owner, user, frequency, workflow placement, and approval authority before drafting." },
      { title: "Draft Creation", description: "Built by our Documentation Specialist based on client-specific workflows and operational reality." },
      { title: "Internal QC", description: "Reviewed for accuracy, usability, consistency, and alignment before client handover." },
      { title: "Client Walkthrough", description: "Every document is explained: what it is, why it exists, and how to use it." },
      { title: "Version Freeze", description: "Approved documents are assigned final version numbers and organized into an implementation pack." },
    ],
    deliverables: [
      "Master Document Index",
      "Folder Structure & Version Control Register",
      "Usage Notes per Document",
      "Role-Wise Usage Map",
      "Full Implementation Pack",
    ],
  },
  {
    slug: "training",
    stage: "Enable",
    title: "Training",
    tagline: "Equip your people to execute the system with confidence.",
    description:
      "Sales and operational programs built on activity-based learning, real-time execution, and immediate application, so every session produces a change in behaviour, not just awareness.",
    whatWeAnalyze: [
      { title: "Activity-Based Learning", description: "Every session requires real tasks tied to real job functions, not passive lectures." },
      { title: "Immediate Implementation", description: "Participants apply what they learn the same day, against real accounts and real conversations." },
      { title: "Role-Segmented Delivery", description: "Separate tracks for founders, managers, leaders, and individual contributors." },
      { title: "Measurable Outcomes", description: "Adoption checks confirm the training stuck, not just that people attended." },
    ],
    processSteps: [
      { step: "Phase 1", title: "Onboarding & Alignment", description: "POC alignment on goals, current gaps, and what success looks like for this team." },
      { step: "Phase 2", title: "Product Knowledge", description: "Deep grounding in what's being sold or executed, so confidence isn't the bottleneck." },
      { step: "Phase 3", title: "Gap & Assessment", description: "Live roleplays and simulations surface exactly where each person breaks down." },
      { step: "Phase 4", title: "Training Implementation", description: "Daily activity execution against real targets, with adoption tracked, not assumed." },
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
      "PerpeX's most operationally intensive service. We embed ourselves as an external performance control layer, actively managing your assigned team on a daily basis across morning planning, midday follow-up, and evening review cadences.",
    whatWeAnalyze: [
      { title: "Input KPIs", description: "Calls & follow-ups, prospects contacted, meetings fixed, demos & proposals sent." },
      { title: "Process KPIs", description: "Response time, follow-up adherence, lead stage progression, aging/CRM update rate." },
      { title: "Output KPIs", description: "Conversions, revenue booked, collections, target achievement %." },
      { title: "Discipline KPIs", description: "Meeting attendance, reporting timeliness, commitment vs completion, data accuracy." },
    ],
    processSteps: [
      { step: "09:00", title: "Morning Planning Meeting", description: "Review yesterday, set today's targets, confirm activity commitments, capture blockers." },
      { step: "13:30", title: "Midday Follow-Up", description: "Check tracker updates, follow up with non-reporting members, intervene on stuck accounts." },
      { step: "18:00", title: "Evening Review Meeting", description: "Target vs actual review, member-wise accountability, gap questioning, next-day prep." },
      { step: "Weekly / Monthly", title: "Structured Reviews", description: "Performance trends, conversion ratios, corrective action plans, escalations." },
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
  { name: "Standalone", servicesIncluded: "Any single service: Gap Analysis, Documentation, Training, or Managing & Monitoring", bestFor: "Businesses with a specific, defined need" },
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
  { title: "Integrated End-to-End Delivery", description: "Our four services form one connected system. Gap Analysis feeds Documentation, Documentation drives Training, Training enables Monitoring." },
  { title: "Scale-Appropriate Investment", description: "Big-firm consulting quality at MSME-accessible cost." },
  { title: "Founder-Led Engagement", description: "Senior leadership and founders are personally involved in every significant project." },
  { title: "Implementation, Not Just Reports", description: "Every deliverable has an implementation path; Managing & Monitoring ensures execution actually happens." },
  { title: "Diverse Sector Expertise", description: "Healthcare, F&B, Construction, EdTech, SaaS, Marketing, AI, Recruitment, Hospitality." },
];

// Founders first, in the order given, then the rest of the team.
export const teamMembers = [
  { name: "Navas Shereef", role: "Cofounder", displayOrder: 0 },
  { name: "Shahinsha Thasveer", role: "Cofounder", displayOrder: 1 },
  { name: "Rafi Muhammed", role: "Cofounder", displayOrder: 2 },
  { name: "Ashif", role: "Cofounder", displayOrder: 3 },
  { name: "Aflah Muhammed", role: "Training Specialist", displayOrder: 4 },
  { name: "Sukanya S", role: "Sales and Marketing Strategist", displayOrder: 5 },
  { name: "Afnidha M", role: "Academic Strategist", displayOrder: 6 },
  { name: "Sathyachithan", role: "Operational Strategist", displayOrder: 7 },
];

// Real client case studies, adapted from client-facing slide decks into
// case-study prose. No numeric results are invented: only figures the source
// material actually states appear under `results`, and none were given for
// these three, so that field is left empty rather than filled with guesses.
export const caseStudies = [
  {
    slug: "evoka",
    clientName: "Evoka School of Advertising",
    clientLogo: "/clients/evoka.png",
    summary: "A structured sales system and full admission-cycle support for a growing school of advertising.",
    content: `Evoka, a school of advertising, needed to turn individual sales effort into a system the whole team could run.

We built a structured sales system: lead management, a defined sales process, a follow-up system, lead tracking and reporting, clear ownership across the sales team, and a conversion-focused workflow. What had been a set of individual efforts became one trackable system.

A system only works when the team knows how to run it. We trained Evoka's team on lead handling, student counselling, follow-up technique, objection handling, and conversion strategy, with training reinforced by real-time implementation on live leads.

We did not stop once the system was live. Through the full academic admission cycle, we managed and monitored the sales team's activity, reviewed performance, and adjusted where needed to keep the system on track.

Evoka completed a full academic admission cycle running on that system: sales system, training, management, and monitoring working together, start to finish.`,
    isFeatured: true,
    isPublished: true,
  },
  {
    slug: "cloud-hub",
    clientName: "Cloud Hub",
    clientLogo: null,
    summary: "The entire business system, built from the ground up to support scale.",
    content: `Cloud Hub came to us needing more than advice. They needed an entire business system built from the ground up: the processes, the organisational structure, the sales system, and the execution framework required to support scale.

We designed and built that system, then stayed on to support Cloud Hub's sales activity directly, working alongside their team to turn the new system into real results.

Cloud Hub has since seen substantial growth in both scale and revenue, running on the system we built together.`,
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "met-leaf",
    clientName: "MET Leaf",
    clientLogo: null,
    summary: "Training built around the team's actual challenges, not a generic curriculum.",
    content: `For MET Leaf, training did not start with a training room.

Before designing a single session, we spent time understanding the people we would be training: their challenges, their mindset, the specific gaps in their performance, and the pressures they were facing in both their personal and professional lives.

That analysis shaped every session that followed. Instead of generic material, MET Leaf's team received training built around their actual challenges, designed to build the right skills, improve performance, and create change that held after we left the room.`,
    isFeatured: false,
    isPublished: true,
  },
];

export const blogs = [
  {
    slug: "why-sops-matter",
    title: "Why SOPs Are Important for Every Business",
    excerpt: "If your best employee left tomorrow, could someone else do their job without asking you everything? For most growing businesses, the honest answer is no.",
    content: `If your employee leaves tomorrow, can someone else do their job without asking you everything?

If the answer is no, your business may be depending on people instead of systems.

When processes exist only in someone's head, every employee works differently, training takes longer, mistakes keep repeating, and owners end up explaining the same things again and again. New employees struggle to adapt, and accountability becomes difficult to enforce.

Good employees are important. But good employees without a clear system can still produce inconsistent results. Your business should not slow down because one person is absent, or stop because they leave.

That is why Standard Operating Procedures, SOPs, matter. An SOP converts "this is how we usually do it" into "this is how we should do it." It defines what to do, how to do it, when to do it, and what outcome to expect.

Build a business that runs on systems, not individual memory. Document the process. Standardise the work. Create accountability. Build scalability.`,
    authorName: "PerpeX Insights Team",
    isPublished: true,
  },
  {
    slug: "why-hr-policies-matter",
    title: "Why HR Policies Matter",
    excerpt: "Clear rules build better management. Most workplace disputes come down to one root problem: nobody wrote the rule down.",
    content: `HR policies create a structured workplace where employees know what is expected, what is allowed, what is not allowed, and how decisions get made.

Clear policies define roles and responsibilities, attendance and leave, working hours, employee conduct, and workplace procedures. Clarity reduces confusion, and "I didn't know" stops being a valid excuse.

They also help ensure employees are treated consistently in situations like leave, performance, discipline, promotions, and recognition. Fair systems build trust, and inconsistent ones erode it fast.

Well-defined policies help manage employee disputes, misconduct, confidentiality, and compliance requirements. A documented process is better than an informal decision made in the moment.

Good HR policies build a stronger organisation: more accountability, more consistency, more transparency, and better discipline across the team.

Don't manage people only through instructions. Build systems that guide them.`,
    authorName: "PerpeX Insights Team",
    isPublished: true,
  },
];

// Real B2B consulting testimonials pulled from the original perpex.in extraction
// (filtered to consulting/audit clients only; placement/student testimonials excluded, out of scope).
export const testimonials = [
  { name: "Gokul VS", designation: "Team Lead", company: "Royal Gold Algo", description: "Perpex Insights maintains a high standard of quality across their Audit services. Their team is professional, responsive, and consistently meets deadlines." },
  { name: "Sufail", designation: "Founder & Academic Dean", company: "ASH Academy", description: "Excellent service and high professionalism. Perpex Insights exceeded our expectations in both Audit and Training. Their team is incredibly responsive and effective." },
  { name: "Sreenanda SR", designation: "HR Manager", company: "Sunny Day Solar", description: "We are satisfied with the Audit and Monitoring services from Perpex Insights. Their team is professional and engaging. We appreciate their commitment to quality." },
  { name: "Shahayas", designation: "Co-Founder", company: "Skybook Global", description: "Perpex Insights delivered a high level of professionalism and responsiveness during our Audit engagement." },
  { name: "Sabith Rahman", designation: "Founder", company: "Aerowis Aviations", description: "The audit and taxation services provided by Perpex Insights are of excellent quality. Their team is highly professional, and we are very satisfied." },
  { name: "Mujthaba Hashmi", designation: "Managing Director", company: "Cloud Hub", description: "We were very satisfied with the Monitoring and Tax Audit services provided by Perpex Insights." },
  { name: "Kaveri s Vijayakumar", designation: "Founder", company: "IQ CTS Academy", description: "Perpex Insights provided exceptional Audit, Monitoring, and Training services. We were highly satisfied with their team's professionalism." },
];
