import {
  pgTable,
  serial,
  varchar,
  text,
  boolean,
  timestamp,
  integer,
  json,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// --- The 4-stage B2B transformation framework -----------------------------
// Diagnose: Gap Analysis / Design: Documentation / Enable: Training / Control: Managing & Monitoring
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  slug: varchar("slug").notNull().unique(),
  stage: varchar("stage"), // "Diagnose" | "Design" | "Enable" | "Control"
  title: varchar("title").notNull(),
  tagline: text("tagline"),
  description: text("description").notNull(),
  whatWeAnalyze: json("what_we_analyze"), // array of {title, description}
  deliverables: json("deliverables"), // array of strings
  processSteps: json("process_steps"), // array of {step, title, description}
  icon: text("icon"),
  displayOrder: integer("display_order").default(0),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

// Standalone / Diagnostic / System Build / Full Transformation / Monitoring Retainer
export const engagementModels = pgTable("engagement_models", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  servicesIncluded: text("services_included").notNull(),
  bestFor: text("best_for"),
  displayOrder: integer("display_order").default(0),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

// Essentials / Professional / Enterprise
export const trainingTiers = pgTable("training_tiers", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  targetAudience: text("target_audience"),
  format: text("format"),
  trainingHours: varchar("training_hours"),
  activitySheets: varchar("activity_sheets"),
  customization: text("customization"),
  whatsIncluded: text("whats_included"),
  displayOrder: integer("display_order").default(0),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

// Client industries — Healthcare, F&B, Construction, EdTech, SaaS, Marketing, AI, Recruitment, Hospitality
export const sectors = pgTable("sectors", {
  id: serial("id").primaryKey(),
  slug: varchar("slug").notNull().unique(),
  name: varchar("name").notNull(),
  description: text("description"),
  icon: text("icon"),
  displayOrder: integer("display_order").default(0),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const caseStudies = pgTable("case_studies", {
  id: serial("id").primaryKey(),
  slug: varchar("slug").notNull().unique(),
  clientName: varchar("client_name").notNull(),
  clientLogo: text("client_logo"),
  sectorId: integer("sector_id").references(() => sectors.id),
  servicesUsed: integer("services_used").array(),
  summary: text("summary"),
  content: text("content"),
  results: json("results"), // array of {metric, value}
  featuredImage: text("featured_image"),
  isFeatured: boolean("is_featured").notNull().default(false),
  isPublished: boolean("is_published").notNull().default(false),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  designation: varchar("designation"),
  company: varchar("company").notNull(),
  description: text("description").notNull(),
  img: text("img"),
  sectorId: integer("sector_id").references(() => sectors.id),
  rating: integer("rating").default(5),
  isActive: boolean("is_active").notNull().default(true),
  isFeatured: boolean("is_featured").notNull().default(false),
  displayOrder: integer("display_order").default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: varchar("title").notNull(),
  slug: varchar("slug").notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  authorName: varchar("author_name"),
  authorImage: text("author_image"),
  featuredImage: text("featured_image"),
  tags: text("tags"),
  isPublished: boolean("is_published").notNull().default(false),
  isFeatured: boolean("is_featured").notNull().default(false),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  role: varchar("role"),
  bio: text("bio"),
  photo: text("photo"),
  displayOrder: integer("display_order").default(0),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

// "Start a Discovery Conversation" form submissions
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  company: varchar("company"),
  email: varchar("email").notNull(),
  phone: varchar("phone"),
  serviceInterest: varchar("service_interest"),
  message: text("message"),
  source: varchar("source"),
  status: varchar("status").notNull().default("new"), // new, contacted, converted, closed
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const adminUsers = pgTable("admin_users", {
  id: serial("id").primaryKey(),
  email: varchar("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  name: varchar("name"),
  role: varchar("role").notNull().default("editor"), // admin, editor
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const siteSettings = pgTable("site_settings", {
  key: varchar("key").primaryKey(),
  value: json("value"),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

// --- Relations --------------------------------------------------------------
export const caseStudiesRelations = relations(caseStudies, ({ one }) => ({
  sector: one(sectors, { fields: [caseStudies.sectorId], references: [sectors.id] }),
}));

export const testimonialsRelations = relations(testimonials, ({ one }) => ({
  sector: one(sectors, { fields: [testimonials.sectorId], references: [sectors.id] }),
}));

export const sectorsRelations = relations(sectors, ({ many }) => ({
  caseStudies: many(caseStudies),
  testimonials: many(testimonials),
}));

// --- Types -------------------------------------------------------------------
export type Service = typeof services.$inferSelect;
export type EngagementModel = typeof engagementModels.$inferSelect;
export type TrainingTier = typeof trainingTiers.$inferSelect;
export type Sector = typeof sectors.$inferSelect;
export type CaseStudy = typeof caseStudies.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
export type Blog = typeof blogs.$inferSelect;
export type TeamMember = typeof teamMembers.$inferSelect;
export type Inquiry = typeof inquiries.$inferSelect;
export type AdminUser = typeof adminUsers.$inferSelect;
export type SiteSetting = typeof siteSettings.$inferSelect;
