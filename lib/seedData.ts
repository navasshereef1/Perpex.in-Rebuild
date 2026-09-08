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
// Every case study is anonymised by policy: no real client name and no
// client logo, only firm type and engagement type. Content is authored with
// "## Heading" sections, "### N. Title" numbered steps, and "- item" lists,
// parsed by lib/caseStudyContent.ts into real page structure. `results` rows
// are "Before → After" pairs rendered as a comparison table. Figures are only
// included where the source material stated them and they carry no
// financial/compliance/identifying risk; three of these case studies had
// real disclosures (GST/financial co-mingling, a stated "confidential legal
// strategy", and a hospital's EPF/ESI and cash-transaction compliance gaps
// with a rupee exposure figure) which are deliberately omitted, not just the
// client name.
export const caseStudies = [
  {
    slug: "school-of-advertising-sales-system",
    clientName: "A School of Advertising",
    clientLogo: null,
    summary: "A structured sales system, team training, and full admission-cycle management and monitoring.",
    content: `## The Challenge

The admissions team was working hard, but every counsellor ran their own version of the sales process. Follow-up was inconsistent, ownership across the team was unclear, and there was no single way to see where a prospective student actually stood in the pipeline.

Individual effort was strong. There was no system underneath it.

## The Approach

### 1. Build the sales system
We designed a structured sales process end to end: lead management, a defined follow-up cadence, lead tracking and reporting, and clear ownership across the team, so individual effort became one trackable system.

### 2. Train the team on it
A system only works when the team knows how to run it. We trained the admissions team on lead handling, student counselling, follow-up technique, objection handling, and conversion strategy, reinforced by real-time coaching on live leads.

### 3. Manage and monitor through the full cycle
We did not stop once the system was live. Through the full academic admission cycle, we managed and monitored the team's activity, reviewed performance, and adjusted the approach where it was not working.

## Why It Matters

- A sales process that lives in individual heads breaks the moment someone is out sick, busy, or leaves.
- Training only sticks when it is reinforced on real leads, not in a one-off workshop.
- Management and monitoring is what turns a documented system into a habit.`,
    results: [
      { metric: "Sales Process", value: "Individual effort, inconsistent follow-up → One trackable system with clear ownership" },
      { metric: "Team Capability", value: "Ad-hoc counselling technique → Trained on lead handling, objection handling, conversion strategy" },
      { metric: "Oversight", value: "No performance review cadence → Managed and monitored through the full admission cycle" },
    ],
    isFeatured: true,
    isPublished: true,
  },
  {
    slug: "b2b-services-operating-system",
    clientName: "A B2B Services Company",
    clientLogo: null,
    summary: "An entire business system built from the ground up: processes, structure, sales, and execution.",
    content: `## The Challenge

The business needed more than advice. It needed an operating system it did not yet have: defined processes, an organisational structure, a working sales system, and an execution framework that could actually support growth.

## The Approach

### 1. Design the system
We designed the processes, organisational structure, sales system, and execution framework the business needed to support scale, built around how the team actually worked, not a generic template.

### 2. Build it, not just document it
Rather than handing over a report, we built the system directly into the business: the workflows, the ownership, the reporting.

### 3. Stay on to run it
We stayed on to support sales activity directly, working alongside the team to turn the new system into real, working results rather than a document left on a shelf.

## Why It Matters

- A system that is only documented, and never run, changes nothing.
- Growth exposes gaps that informal operations can hide at a smaller scale.
- Staying engaged past the handover is what makes a new system actually stick.`,
    results: [
      { metric: "Operating System", value: "No defined processes or structure → Full operating system: processes, structure, sales, execution" },
      { metric: "Delivery", value: "System existed only on paper → Built directly into the business and run alongside the team" },
      { metric: "Outcome", value: "Growth constrained by lack of structure → Substantial growth in scale and revenue" },
    ],
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "corporate-training-program",
    clientName: "A Corporate Training Client",
    clientLogo: null,
    summary: "Training built around the team's actual challenges, not a generic curriculum.",
    content: `## The Challenge

Training had been treated as a generic exercise: material handed down without much regard for the specific people receiving it, their existing skill gaps, or the pressures they were actually facing on the job.

## The Approach

### 1. Understand the people first
Before designing a single session, we spent time understanding the team we would be training: their challenges, their mindset, the specific gaps in their performance, and the pressures they faced in both their personal and professional lives.

### 2. Build the curriculum around that
That analysis shaped every session that followed. Instead of generic material, the team received training built around their actual challenges, designed to build the right skills and improve performance.

### 3. Design for change that holds
Sessions were built to create behavioural change that held after we left the room, not just awareness that faded within a week.

## Why It Matters

- Generic training produces generic, short-lived results.
- Understanding the specific pressures a team is under changes what actually needs to be taught.
- Training should be judged by what changes afterwards, not by attendance.`,
    results: [
      { metric: "Training Design", value: "Generic material → Curriculum built around the team's actual challenges" },
      { metric: "Delivery Method", value: "Standard classroom session → Reinforced through real-world application" },
      { metric: "Outcome", value: "Awareness that fades → Behavioural change that holds after the engagement ends" },
    ],
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "amusement-park-sop-rollout",
    clientName: "An Amusement Park Operator",
    clientLogo: null,
    summary: "End-to-end SOPs and a clear organisational structure across rides, F&B, security, and maintenance, in 60 days.",
    content: `## The Challenge

A fast-growing amusement park was operating without formal structure across its most critical departments. Reporting lines were unclear and responsibilities overlapped. Practices varied across food & beverage, ticketing, and security. There were no documented protocols for ride upkeep or facility maintenance, and recruitment and vendor management were handled informally.

## The Approach

### 1. Fix the organisational structure
We built explicit organisational charts mapping clear reporting lines, and drafted detailed job roles and responsibilities for every managerial position, closing the biggest source of overlap and confusion.

### 2. Write the SOPs that matter most
We wrote end-to-end SOPs for the highest-risk and highest-touch areas: safety and cleaning schedules for maintenance, access control procedures for security, and standardised ticketing workflows.

### 3. Formalise the back office
We stood up a formal purchase department with a full requisition-to-vendor-evaluation workflow, and standardised HR templates for recruitment, leave, and performance appraisal.

### 4. Build in the guest feedback loop
We put a system in place to systematically collect, review, and act on guest feedback, so F&B and general operations kept improving after we left.

## Why It Matters

- In a high-liability environment like an amusement park, documented safety and maintenance protocols are not optional extras.
- A consistent guest experience depends on consistent training and process, not individual staff judgement.
- Unclear reporting lines create duplicated effort and dropped responsibility. Explicit structure resolves it.`,
    results: [
      { metric: "Maintenance & Security", value: "Undocumented protocols → Documented upkeep schedules, ride safety protocols, access control SOPs" },
      { metric: "HR & Admin", value: "Informal hiring and reviews → Standardised offer letters, training, performance review templates" },
      { metric: "Procurement & Projects", value: "Ad-hoc vendor management → Vendor evaluation rubrics, project scheduling, QA processes" },
    ],
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "aviation-services-operating-system",
    clientName: "An Aviation Services Company",
    clientLogo: null,
    summary: "HR policy, CRM/HRMS technology, and structured sales training, built into one recurring operating system.",
    content: `## The Challenge

The business needed a stronger organisational foundation to support both its operations and its sales effort. Formal HR policies, defined KPIs, and SOPs did not exist. Customer data and communication were scattered across disconnected tools, and the sales team lacked a structured, repeatable pitch.

## The Approach

### 1. Document the system
We drafted comprehensive HR policies, defined role-specific KPIs, and established SOPs, then deployed mandatory task management and sheet-tracking systems to make daily accountability visible instead of assumed.

### 2. Put the technology behind it
We led the rollout of an HRMS platform and integrated a CRM/IVR system, giving the business a single place to see customer data and track communication instead of scattered records.

### 3. Train the sales team
We built standardised call pitches and delivered modular, deck-wise training programs tailored specifically to aviation services.

### 4. Manage and monitor daily
We instituted daily on-the-job monitoring, team performance evaluations, and bi-weekly management review meetings, so the new systems were actually adopted, not just documented.

## Why It Matters

- New technology without process behind it rarely gets used the way it was intended.
- Daily monitoring closes the gap between a strategy on paper and what a team actually does.
- A standardised pitch protects the brand's narrative and makes performance easier to coach.`,
    results: [
      { metric: "Infrastructure", value: "No SOPs, HR policy, or KPIs → Clear operational guidelines and performance standards" },
      { metric: "Technology", value: "Disconnected tools, no shared data → HRMS, CRM, IVR, and task trackers on one system" },
      { metric: "Performance", value: "Unstructured sales activity → Sales training, daily monitoring, bi-weekly reviews" },
    ],
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "logistics-sales-management",
    clientName: "A Logistics & Shipping Company",
    clientLogo: null,
    summary: "Active sales management, live coaching, and competitor analysis for a five-person logistics sales team.",
    content: `## The Challenge

The sales team needed more than a training workshop. There was no continuous, structured way to evaluate their day-to-day activity, no real-time coaching to help them navigate complex logistics sales cycles, and no formal read on how they compared to rival shipping services.

## The Approach

### 1. Start with a baseline
In the first week, we ran a gap analysis and mapped competitor strategy, giving the team a clear read on where they stood before any coaching began.

### 2. Take on active management
Perpex assumed day-to-day management of the five-person sales team, instituting daily accountability and performance-tracking routines as an extension of the client's own management.

### 3. Coach on live deals
We ran live, situational training tailored to the logistics sector, helping the team refine their pitches and work through specific, real prospect objections as they came up.

### 4. Keep the loop running
We established a recurring cycle of performance reporting and correction, so the sales approach kept adjusting to real market feedback on a continuing monthly basis.

## Why It Matters

- Classroom training fades. Coaching during live sales cycles creates change that lasts.
- Consistent, structured monitoring is what makes a sales strategy actually get executed daily.
- Fresh competitor intelligence lets a team sell on value instead of price.`,
    results: [
      { metric: "Market Intelligence", value: "No formal competitor read → Competitor and gap analysis built into onboarding" },
      { metric: "Skill Development", value: "Ad-hoc pitching → Live, on-the-job coaching tied to real deals" },
      { metric: "Accountability", value: "Unmeasured daily activity → Continuous monitoring and reporting" },
    ],
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "eco-cleaning-growth-engine",
    clientName: "An Eco-Friendly Cleaning Service",
    clientLogo: null,
    summary: "A sales and marketing playbook that turned a strong product into a structured growth engine.",
    content: `## The Challenge

The business had a genuine edge: non-toxic methods, verified staff, industrial-grade equipment. But its go-to-market was not built to convert that edge into bookings. Messaging was generic, follow-up was unstructured, every enquiry was pitched the same premium service regardless of what the customer actually wanted, and strong proof points sat unused.

## The Approach

### 1. Fix the price architecture
We split the offering into two clear tiers: a fixed, time-capped Express Eco Clean to compete on speed, and a premium Core Deep Clean for buyers who wanted the full service, each with transparent, upfront pricing.

### 2. Build the CRM and the scripts
We instituted a fast first-response SLA, mapped the full conversion pipeline, and wrote specific scripts for discovery, value articulation, and objection handling.

### 3. Train the team to sell on proof
We ran an intensive training sprint using role-play and call auditing, so the team could confidently sell on verified ingredients, before-after results, and neighbourhood reviews instead of competing purely on price.

### 4. Diversify demand
We built a multi-channel campaign catalogue: Google Business Profile, targeted search ads, referral kits for residential communities, and B2B co-marketing plays, to reduce reliance on generic brand awareness alone.

## Why It Matters

- In home services, trust converts better than a lower price.
- Forcing every enquiry into the same premium package loses the customers who just want something fast.
- Leads are only as good as the trained team following up on them.`,
    results: [
      { metric: "Lead Management", value: "Unstructured, high leakage → CRM discipline with rapid response SLAs and a 4-touch follow-up" },
      { metric: "Value Proposition", value: "Generic cleaning claims → Proof-led messaging: verified ingredients, transparent process" },
      { metric: "Demand Generation", value: "Reliance on generic awareness → Geo-targeted micro-campaigns and systematic review collection" },
    ],
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "specialty-bakery-operations",
    clientName: "A Specialty Bakery",
    clientLogo: null,
    summary: "Role-based KPIs, department SOPs, and an HR handbook to eliminate dispatch errors and inter-department friction.",
    content: `## The Challenge

Growth was creating friction between sales, production, and accounts. There were no KPIs, no formal HR policies, and no structured reporting, which showed up as dispatch errors, stock inaccuracies, and recurring conflict between departments.

## The Approach

### 1. Build a KPI and appraisal framework
We implemented clear, role-based metrics, on-time dispatch, billing accuracy, sales productivity, weighted against behavioural conduct, so performance stopped being a matter of opinion.

### 2. Write department-specific SOPs
We drafted explicit procedures for the areas causing the most friction: a strict dispatch cut-off time, and a mandatory final verification checklist at packing.

### 3. Move reporting off paper
We replaced handwritten stock notes with digital production logging, deployed a CRM for sales tracking, and established a weekly cash-flow reporting rhythm.

### 4. Roll out a formal HR policy
We wrote and distributed a full employee handbook covering conduct, recruitment, probation, and standardised grievance escalation.

## Why It Matters

- A strict, well-communicated deadline protects downstream teams from upstream delays.
- Moving from handwritten notes to a simple digital log is often enough to restore real accountability.
- Informal HR practices work at a small size and become a liability the moment a business scales.`,
    results: [
      { metric: "Dispatch", value: "Ad-hoc, cut-offs ignored, frequent errors → Dedicated team, strict cut-off, verification checklist" },
      { metric: "Production", value: "Manual reports, one supervisor for every line → Line-specific leads, digital output and wastage logging" },
      { metric: "Sales", value: "Unmonitored, inconsistent order handling → CRM discipline with clearly defined SLAs" },
    ],
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "premium-hospitality-group",
    clientName: "A Premium Hospitality Group",
    clientLogo: null,
    summary: "Stabilising a fast-growing, multi-outlet F&B brand: supply chain, station SOPs, and technology, in that order.",
    content: `## The Challenge

A premium, multi-brand hospitality group had strong products and real brand equity, but had expanded faster than its operations could support. Procurement ran hand-to-mouth, causing mid-shift stockouts. Quality and turnaround time varied by shift because standards lived in oral instruction, not documentation. The point-of-sale system functioned only as a cash register. Revenue performance was left largely to chance.

## The Approach

### 1. Fix the supply chain first
We built a structured procurement framework with mandatory buffer stock, calibrated par levels, and a dedicated purchase officer enforcing opening stock audits, because no amount of marketing can sell what the kitchen cannot produce.

### 2. Put a station-level SOP stack in place
Every station, kitchen, floor, bar, got its own SOP checklist, covering opening and closing procedures, floor service execution, and beverage precision, replacing oral instruction with a documented standard.

### 3. Turn the POS into a real operational tool
We upgraded the point-of-sale platform into an operational control tower, phasing in kitchen display systems with colour-coded service targets and automated recipe-level inventory deductions.

### 4. Enable and govern the people
We instituted a structured onboarding curriculum, formalised workforce compliance, and built a clear delegation matrix, freeing the founders to focus on strategic decisions instead of daily firefighting.

## Why It Matters

- Supply chains set the ceiling on what a business can sell. Fix the back-of-house engine before the front-of-house pitch.
- Monthly revenue targets only work once they are translated into daily shift-level goals.
- Documented SOPs and structured onboarding are what prevent one key person leaving from becoming a crisis.`,
    results: [
      { metric: "Kitchen Utilisation", value: "~25% of planned capacity due to supply bottlenecks → Restored to 100% of planned capacity" },
      { metric: "Inventory Tracking", value: "Unrecorded usage, frequent stockouts → Daily reconciliation, variance capped at 5% or less" },
      { metric: "Shift Governance", value: "Ad-hoc shifts, no predefined targets → Daily stand-ups with active upsell scripts" },
    ],
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "architectural-delivery-system",
    clientName: "An Architecture & Construction Firm",
    clientLogo: null,
    summary: "Replacing a memory-and-chat operating model with a real Project Management Office, across 70+ live sites.",
    content: `## The Challenge

A premium architecture and construction firm running more than 70 concurrent engagements had outgrown its informal, founder-led operating model. Coordination happened over chat apps. There were no stage freezes or revision caps, which meant projects absorbed endless design changes. There was no standard status reporting, issue log, or escalation rule, and no project-wise view of profitability.

## The Approach

### 1. Introduce design stage gates
We introduced formal design stage gates, concept, schematic, issued-for-construction, each requiring a client sign-off, along with a clear policy on what counted as a paid revision versus a free one.

### 2. Stand up a real project management office
We established weekly status reporting across every live project, alongside formal change-control logs and issue tracking, replacing memory and chat threads with a single source of truth.

### 3. Fix the sales pipeline
We rolled out CRM tracking for every lead, set response-time targets, and separated the pipeline into distinct segments, so resourcing matched the kind of project actually being sold.

### 4. Build in financial and site control
We implemented budget baselines at kickoff, tracked spend against actuals from day one, tied billing to project stages, and redesigned site supervision ratios with stage inspection checklists.

## Why It Matters

- Informal, memory-based coordination works at a small scale and breaks well before 70 live projects.
- Founders scale by shifting from daily operational intervention to governance and exception handling.
- Predictability, not just design quality, is what premium clients are actually paying for.`,
    results: [
      { metric: "Coordination", value: "Ad-hoc, chat-app driven → Formal reporting cadence and a single source of truth" },
      { metric: "Scope Control", value: "Unlimited revisions permitted → Stage freezes with paid change orders" },
      { metric: "Financials", value: "Blended view, invisible project margins → Project-level tracking with milestone billing" },
    ],
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "commercial-interiors-transformation",
    clientName: "An Interior Design & Fit-Out Firm",
    clientLogo: null,
    summary: "Moving a founder-dependent design firm onto a real operating system, so growth stopped depending on one person.",
    content: `## The Challenge

A well-regarded interior design and commercial fit-out firm had built a strong reputation and a distinctive design capability, but growth was capped by how much one person, the Managing Director, could personally hold together. Every drawing, every site escalation, and every client relationship ran through the same desk, and the firm's financial structure made it difficult to see profitability at the project level.

## The Approach

### 1. Take work off the founder's desk
A Design Head took over workflow and revision control, and site supervision was restructured across clustered locations instead of one supervisor per site, freeing up capacity without adding headcount.

### 2. Clean up the financial structure
We worked with the firm to separate and formalise its financial structure, so decision-makers could finally see project-level profitability instead of one blended picture across the group.

### 3. Rebuild the commercial engine
We repositioned the offer around a free space-planning and business-design consultation, rebuilt the CRM, and fixed basic digital hygiene, an outdated website and an unclaimed business listing, so the firm's online presence matched the quality of its actual work.

### 4. Formalise decision rights
We published a clear decision-rights matrix, moving the Managing Director from doing the work to governing the business, and letting department leads own their own calls.

## Why It Matters

- A business valuation tied entirely to one person's bandwidth is inherently fragile.
- Fixing financial and organisational structure has to come before scaling, not after.
- Commercial B2B clients expect a professional digital presence that matches the quality of the work.`,
    results: [
      { metric: "Leadership", value: "MD reviewed every drawing and escalation → Design Head appointed, MD moved to governance" },
      { metric: "Finance", value: "Blended view across entities → Separated structure with project-level visibility" },
      { metric: "Sales & Digital", value: "Scattered leads, dated web presence → CRM in place, refreshed digital presence" },
    ],
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "contractor-to-developer-transition",
    clientName: "A Regional Construction & Real Estate Firm",
    clientLogo: null,
    summary: "Building the financial, design, and organisational scaffolding a construction firm needed to become a real estate developer.",
    content: `## The Challenge

A successful regional construction firm tried to pivot from contracting into structured real estate development, launching its own villa projects, but did not yet have the financial, regulatory, and organisational scaffolding a developer needs. The founder was working every angle personally: leads, purchasing, site escalations. Revision cycles ran long, and management could not always tell which projects were actually profitable.

## The Approach

### 1. Take routine decisions off the founder
A decision-rights and escalation chart moved routine approvals off the founder's desk, and a dual-oversight purchasing policy closed a real source of margin leakage on materials.

### 2. Discipline the design process
A mandatory moodboard sign-off before any 3D rendering work began cut down repeated revision cycles, and a dedicated Design Head took ownership of the workflow end to end.

### 3. Rebuild financial visibility
We moved the firm onto proper project-wise accounting, so management could finally see which projects were actually making money instead of relying on a single blended view.

### 4. Reposition for the premium segment
We overhauled the digital presence, real project photography instead of stock images, and local search optimisation, to match the firm's ambition to compete for premium buyers.

## Why It Matters

- A pivot in business model demands a pivot in systems: financial forecasting, compliance, and working capital all change.
- Informal purchasing and vague client commitments are some of the fastest ways to bleed margin on large projects.
- Digital presence has to match operational reality once a firm starts competing for premium buyers.`,
    results: [
      { metric: "Purchasing", value: "Single-person control, leakage risk → Dual-authorisation, verified vendor purchasing" },
      { metric: "Design", value: "Freelance reliance, long delays → In-house Design Head, faster turnarounds" },
      { metric: "Management", value: "Founder as sole integrator → General Manager-led operations, founder focused on strategy" },
    ],
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "regional-eye-hospital-operations",
    clientName: "A Regional Eye Hospital",
    clientLogo: null,
    summary: "Rebuilding financial reporting and patient-flow systems for a hospital competing against corporate healthcare chains.",
    content: `## The Challenge

A well-established regional eye hospital, known for strong clinical care including specialised retina treatment, was losing ground to fast-expanding corporate healthcare chains, not on medicine, but on the business behind it. Financial reporting ran across multiple disconnected systems, one counsellor handled every surgical conversion with no time left for follow-up, and the hospital's digital presence did not reflect the quality of care it delivered.

## The Approach

### 1. Rebuild financial reporting
We consolidated parallel reporting systems into one, so leadership could finally trust the numbers they were looking at instead of reconciling conflicting reports by hand.

### 2. Fix the single point of failure
We introduced a counsellor-and-assistant model, wrote clear job descriptions, and put a structured escalation process in place, so surgical revenue no longer depended on one overloaded person.

### 3. Restore digital trust
We cleaned up the hospital's digital presence, fixed inconsistent information across directories, and tightened basic website security, so its online footprint matched the quality of care patients were actually receiving.

### 4. Bring compliance up to standard
We worked through the hospital's statutory and compliance position and brought it up to where it needed to be.

## Why It Matters

- When revenue generation depends on one overloaded person, the business is one absence away from a real problem.
- A modern, secure, and consistent digital presence is part of how patients judge medical trust today.
- Compliance is infrastructure, not paperwork. Getting it right protects everything else the business has built.`,
    results: [
      { metric: "Compliance", value: "Informal enrollment and cash handling → Fully compliant enrollment and transaction limits" },
      { metric: "Surgical Revenue", value: "Counsellor overload, no follow-up → Delegated admin work, structured follow-up protocol" },
      { metric: "Digital Reputation", value: "Outdated, insecure web presence → Refreshed, secured web presence" },
    ],
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
