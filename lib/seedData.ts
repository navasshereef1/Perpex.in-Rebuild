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
  {
    slug: "active-planet",
    clientName: "Active Planet Entertainments",
    clientLogo: "/clients/active-planet.jpg",
    summary: "End-to-end SOPs and a clear organisational structure for an amusement park operating across rides, F&B, security, and maintenance.",
    content: `Active Planet Entertainments needed to formalise a fast-growing amusement park operation, from ride safety to food & beverage, ticketing, and security, within a 60-day window.

We ran a full gap analysis across the park and built explicit organisational charts, defining who was responsible for what across every managerial role. That alone removed a large source of overlap and confusion.

From there, we wrote end-to-end SOPs for the areas that mattered most: safety and cleaning schedules for maintenance, access control for security, standardised ticketing workflows, and a formal purchase department covering everything from requisition to vendor evaluation.

HR was brought into the same structure, with standardised recruitment, leave, and appraisal formats, alongside a system to collect and act on guest feedback across F&B and general operations. Perpex stayed on-site throughout, so what was documented matched what actually happened on the ground.`,
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "aerowis-aviation",
    clientName: "Aerowis Aviation",
    clientLogo: null,
    summary: "HR policy, CRM/HRMS technology, and structured sales training, built into one operating system.",
    content: `Aerowis Aviation needed an organisational foundation that could support both its operations and its sales effort, built through a recurring, hands-on engagement rather than a single handover.

We drafted the HR policies, role-specific KPIs, and SOPs the business was missing, and paired them with daily accountability tools: task management and sheet-tracking systems that made ownership visible rather than assumed.

On the technology side, we led the rollout of an HRMS platform and a CRM/IVR system, giving the business one place to see customer data and track communication instead of scattered records.

For the sales team, we built standardised call pitches and delivered training tailored specifically to aviation services, then stayed engaged through daily monitoring, performance evaluations, and bi-weekly management reviews to make sure the new systems were actually being used, not just documented.`,
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "scm-shipping",
    clientName: "SCM Shipping Services",
    clientLogo: null,
    summary: "Active sales management, live coaching, and competitor analysis for a logistics sales team.",
    content: `SCM Shipping Services wanted more than advice for its sales team. They wanted a partner who would actively manage and coach the team day to day.

We started with a first-week gap analysis and competitor mapping, giving the five-person sales team a clear read on where they stood against rival shipping services.

From there, Perpex took on active management of the team: daily accountability, live on-the-job training tailored to logistics sales cycles, and a recurring cycle of performance reporting and correction. Training was never a one-time session. It stayed tied to real deals, real objections, and real market feedback, on a continuing monthly basis.`,
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "spaces-eco-clean",
    clientName: "Spaces Eco Clean",
    clientLogo: null,
    summary: "Turning a strong eco-cleaning product into a structured, sales-led growth engine.",
    content: `Spaces Eco Clean had a genuine edge in Kerala's cleaning market: non-toxic methods, verified staff, industrial-grade equipment. Their go-to-market was not yet built to convert that edge into bookings.

We split their offering into two clear tiers: a fixed, time-capped Express Eco Clean to compete on speed, and a premium Core Deep Clean for buyers who wanted the full service, each with transparent pricing instead of one-size-fits-all quoting.

On the sales side, we built a full CRM workflow with a fast first-response SLA, a mapped conversion pipeline, and specific scripts for discovery, value articulation, and objection handling, then ran a training sprint with role-play and call auditing so the team could sell on proof, like verified ingredients and before-after results, instead of competing purely on price.

Alongside that, we built a multi-channel campaign catalogue: Google Business Profile, targeted search ads, referral kits for residential communities, and B2B co-marketing plays, to diversify demand beyond generic brand awareness.`,
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "persian-pastries",
    clientName: "Persian Pastries",
    clientLogo: "/clients/persian-pastries.jpg",
    summary: "Role-based KPIs, department SOPs, and an HR handbook to eliminate dispatch errors and inter-department friction.",
    content: `Persian Pastries was growing, but friction between sales, production, and accounts was creating dispatch errors, stock inaccuracies, and conflict between departments.

We built a role-based KPI and appraisal framework, metrics like on-time dispatch and billing accuracy weighted against behavioural conduct, so performance stopped being a matter of opinion.

Production and dispatch got explicit SOPs: a strict cut-off time for dispatch, a final verification checklist at packing, and a move from handwritten stock notes to digital production logging. Sales moved onto a CRM, and the business adopted a weekly cash-flow reporting rhythm.

We also wrote and rolled out a full employee handbook, covering codes of conduct, recruitment, probation, and grievance escalation, so HR stopped being handled case by case and started running on the same rules for everyone.`,
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "premium-hospitality-group",
    clientName: "A Premium Hospitality Group",
    clientLogo: null,
    summary: "Stabilising a fast-growing, multi-outlet F&B brand: supply chain, station SOPs, and technology, in that order.",
    content: `A premium, multi-brand hospitality group in South India had strong products and real brand equity, but had expanded faster than its operations could support, leading to unpredictable service and, at times, production collapse.

We ran a 24-week transformation across three horizons: stabilise, systematise, scale. Procurement moved from a hand-to-mouth pattern to a structured framework with mandatory buffer stock and a dedicated purchase officer. Every station, kitchen, floor, bar, got its own laminated SOP checklist, replacing oral instruction with a documented standard.

On the technology side, we upgraded the POS system from a cash register into an actual operational tool: kitchen display systems with colour-coded service targets, and automated recipe-level inventory deductions.

We finished with people: a structured onboarding curriculum, formal workforce compliance, and a clear delegation matrix that let the founders step back from daily firefighting and into strategic decisions.`,
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "architectural-delivery-system",
    clientName: "An Architecture & Construction Firm",
    clientLogo: null,
    summary: "Replacing a memory-and-chat operating model with a real Project Management Office, across 70+ live sites.",
    content: `A premium architecture and construction firm running more than 70 concurrent engagements had outgrown its informal, founder-led operating model. Coordination happened over chat apps, revisions had no limit, and there was no reliable way to see which projects were actually profitable.

We introduced formal design stage gates, concept, schematic, issued-for-construction, each with a client sign-off template and a clear policy on what counted as a paid revision versus a free one.

Project coordination moved onto a proper cadence: weekly status reporting across every live project, a formal issue log, and defined escalation rules, replacing memory and chat threads with a single source of truth.

On the commercial side, we rolled out CRM tracking for every lead, set response-time targets, and separated the pipeline into distinct segments so resourcing matched the kind of project actually being sold. Budgets got a baseline at kickoff and were tracked against actuals from day one, with billing tied to project stages instead of ad hoc invoicing.`,
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "commercial-interiors-transformation",
    clientName: "An Interior Design & Fit-Out Firm",
    clientLogo: null,
    summary: "Moving a founder-dependent design firm onto a real operating system, so growth stopped depending on one person.",
    content: `A well-regarded interior design and commercial fit-out firm had built a strong reputation and a distinctive design capability, but growth was capped by how much one person, the Managing Director, could personally hold together. Every drawing, every site escalation, and every client relationship ran through the same desk.

We put people and process between the founder and the day-to-day. A Design Head took over workflow and revision control, and site supervision was restructured across clustered locations instead of one supervisor per site, freeing up capacity without adding headcount.

We also cleaned up the business's financial structure so decision-makers could finally see project-level profitability, instead of one blended picture across the group.

On the commercial side, we repositioned the offer around a free space-planning and business-design consultation, rebuilt the CRM, and fixed basic digital hygiene, an outdated website and an unclaimed business listing, so the firm's online presence matched the quality of its actual work.

We finished by publishing a clear decision-rights matrix, moving the Managing Director from doing the work to governing the business, and letting department leads own their own calls.`,
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "contractor-to-developer-transition",
    clientName: "A Regional Construction & Real Estate Firm",
    clientLogo: null,
    summary: "Building the financial, design, and organisational scaffolding a construction firm needed to become a real estate developer.",
    content: `A successful regional construction firm tried to pivot from contracting into structured real estate development, launching its own villa projects, but did not yet have the financial, regulatory, and organisational scaffolding a developer needs. The founder was working every angle personally: leads, purchasing, site escalations.

We put a proper structure underneath the pivot. A decision-rights and escalation chart took routine approvals off the founder's desk, and a dual-oversight purchasing policy closed a real source of margin leakage on materials.

Design and site execution got the same treatment: a mandatory moodboard sign-off before any 3D rendering work began, cutting down repeated revision cycles, and a Design Head to own the workflow end to end.

We also rebuilt the firm's financial visibility, moving it onto proper project-wise accounting so management could finally see which projects were actually making money, and overhauled the digital presence, real project photography instead of stock images, and local search optimisation, to match the firm's ambition to compete for premium buyers.`,
    isFeatured: false,
    isPublished: true,
  },
  {
    slug: "regional-eye-hospital-operations",
    clientName: "A Regional Eye Hospital",
    clientLogo: null,
    summary: "Rebuilding financial reporting and patient-flow systems for a hospital competing against corporate healthcare chains.",
    content: `A well-established regional eye hospital, known for strong clinical care including specialised retina treatment, was losing ground to fast-expanding corporate healthcare chains, not on medicine, but on the business behind it.

We rebuilt the hospital's financial reporting from the ground up, consolidating parallel systems into one, so leadership could finally trust the numbers they were looking at instead of reconciling conflicting reports by hand.

On patient flow, one counsellor had been handling every surgical conversion while also carrying administrative work, with no real time left for follow-up calls. We introduced a counsellor-and-assistant model, wrote clear job descriptions, and put a structured escalation process in place so no single person was a bottleneck for surgical revenue.

We also cleaned up the hospital's digital presence, fixing inconsistent information across directories and tightening basic website security, so its online footprint matched the quality of care patients were actually receiving, and brought the hospital's statutory and compliance position up to where it needed to be.`,
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
