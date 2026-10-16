import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ARS Computers",
  description:
    "Learn about ARS Computers, our core computer hardware and technical service areas, and our practical, enquiry-based approach to customer technology requirements.",
};

interface BusinessArea {
  id: string;
  title: string;
  description: string;
  linkHref: string;
  linkLabel: string;
  badge: string;
  badgeColorClass: string;
  iconBgClass: string;
  iconTextClass: string;
  icon: React.ReactNode;
}

const BUSINESS_AREAS: BusinessArea[] = [
  {
    id: "components",
    title: "Computer Components & Upgrades",
    badge: "Hardware",
    badgeColorClass: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
    iconBgClass: "bg-accent-blue/10",
    iconTextClass: "text-accent-blue",
    description:
      "Sourcing and consultation for desktop processors, graphics cards, motherboards, RAM, NVMe solid-state storage, and power supplies for performance upgrades.",
    linkHref: "/products",
    linkLabel: "Explore Components",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V5.25a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21Z" />
      </svg>
    ),
  },
  {
    id: "custom-pc",
    title: "Custom PC Assembly",
    badge: "Assembly",
    badgeColorClass: "text-accent-coral bg-accent-coral/10 border-accent-coral/20",
    iconBgClass: "bg-accent-coral/10",
    iconTextClass: "text-accent-coral",
    description:
      "Assistance with assembling computers tailored to planned customer workloads, encompassing component matching, thermal management, and clean cable routing.",
    linkHref: "/services",
    linkLabel: "Custom PC Services",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    id: "repairs",
    title: "Hardware Troubleshooting & Repair",
    badge: "Diagnostics",
    badgeColorClass: "text-primary bg-primary/10 border-primary/20",
    iconBgClass: "bg-primary/10",
    iconTextClass: "text-primary",
    description:
      "Hardware-level diagnostics and repair assistance for desktop computers and laptops dealing with boot failures, display issues, or system instability.",
    linkHref: "/services",
    linkLabel: "Repair Diagnostics",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 0 0 21 17.25l-5.83-5.83M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0Z" />
      </svg>
    ),
  },
  {
    id: "cctv",
    title: "CCTV Equipment & Installation",
    badge: "Security",
    badgeColorClass: "text-warning bg-warning/10 border-warning/20",
    iconBgClass: "bg-warning/10",
    iconTextClass: "text-warning",
    description:
      "Supply of surveillance hardware, physical camera mounting, cabling, and on-premises DVR/NVR recorder hardware configuration.",
    linkHref: "/services",
    linkLabel: "CCTV Solutions",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    id: "printers",
    title: "Printers, Cartridges & Refilling",
    badge: "Printing",
    badgeColorClass: "text-success bg-success/10 border-success/20",
    iconBgClass: "bg-success/10",
    iconTextClass: "text-success",
    description:
      "Support for printing machines, genuine and replacement ink bottles, laser toners, and cost-effective cartridge refilling assistance.",
    linkHref: "/products",
    linkLabel: "Printer Supplies",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
      </svg>
    ),
  },
  {
    id: "software",
    title: "Antivirus & Software Assistance",
    badge: "Software",
    badgeColorClass: "text-success bg-success/10 border-success/20",
    iconBgClass: "bg-success/10",
    iconTextClass: "text-success",
    description:
      "Assistance with authorized antivirus software installation, license activation, operating system setup, and foundational utility configuration.",
    linkHref: "/services",
    linkLabel: "Software Support",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    id: "biometric",
    title: "Biometric Attendance Hardware",
    badge: "Hardware Only",
    badgeColorClass: "text-foreground-muted bg-surface-elevated border-border",
    iconBgClass: "bg-brand-navy/10 dark:bg-brand-navy-light/30",
    iconTextClass: "text-brand-navy dark:text-foreground",
    description:
      "Physical wall mounting, power connection, and local network wiring for standalone biometric attendance terminals.",
    linkHref: "/services",
    linkLabel: "Biometric Hardware",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a1.5 1.5 0 011.5 1.5v4.5a1.5 1.5 0 01-3 0v-4.5a1.5 1.5 0 011.5-1.5z" />
      </svg>
    ),
  },
];

interface UseCaseItem {
  title: string;
  description: string;
  exampleNeed: string;
}

const POTENTIAL_USE_CASES: UseCaseItem[] = [
  {
    title: "Component Upgrades & Replacements",
    description:
      "Individuals seeking to boost storage speed with an NVMe SSD, increase RAM for multi-tasking, or replace an aging graphics card.",
    exampleNeed: "Example: Upgrading desktop RAM or adding a solid-state drive for responsive application loading.",
  },
  {
    title: "Custom Desktop Build Planning",
    description:
      "Customers planning a new personal computer tailored to specific creative workloads, gaming requirements, or everyday office productivity.",
    exampleNeed: "Example: Choosing balanced components so that processor, motherboard, and power supply fit planned needs.",
  },
  {
    title: "Basic Hardware Troubleshooting",
    description:
      "People dealing with desktop or laptop hardware problems, such as a machine failing to start, display output issues, or fan noise.",
    exampleNeed: "Example: Having physical components inspected to identify the source of unexpected crashes.",
  },
  {
    title: "Home & Workplace Technology",
    description:
      "Homes and small workplaces looking for straightforward printer hardware, regular cartridge refills, or security surveillance camera setups.",
    exampleNeed: "Example: Setting up a local CCTV camera system or sourcing reliable printer ink consumables.",
  },
  {
    title: "Premises Attendance Equipment",
    description:
      "Organizations enquiring about neat, dependable physical mounting and network connectivity for standalone biometric attendance devices.",
    exampleNeed: "Example: Securing a terminal cleanly to an entrance wall with organized power and LAN cabling.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background Accent Gradients */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-10"
        aria-hidden="true"
      >
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 left-0 h-80 w-80 rounded-full bg-accent-blue/10 blur-3xl" />
      </div>

      {/* Hero / Introduction Section */}
      <section
        aria-labelledby="about-heading"
        className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8"
      >
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground-muted shadow-xs">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            <span>Business Overview &amp; Practice</span>
          </div>

          {/* Main H1 Heading */}
          <h1
            id="about-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:leading-[1.15]"
          >
            About ARS Computers
          </h1>

          {/* Positioning Copy */}
          <p className="mt-6 text-base text-foreground-muted sm:text-lg md:text-xl leading-relaxed">
            ARS Computers helps customers explore computer hardware, plan custom PC builds, address basic hardware issues,
            and enquire about technology equipment and installation services.
          </p>

          <p className="mt-4 text-base text-foreground-muted leading-relaxed">
            We operate through an enquiry-based approach centered on practical requirements. Rather than making generalized claims,
            we focus on discussing exact component specifications, intended usage, and realistic technical solutions to help
            visitors find the right equipment and support.
          </p>

          {/* Quick Action Links */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/products"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Browse Products
            </Link>
            <Link
              href="/services"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-surface px-6 text-sm font-semibold text-foreground shadow-xs transition-colors hover:bg-surface-elevated hover:border-foreground-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Explore Services
            </Link>
          </div>

          {/* Informational Value Pillars */}
          <div className="mt-10 border-t border-border/80 pt-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                  Enquiry-Based Model
                </span>
                <span className="text-xs text-foreground-muted mt-0.5">
                  Verified availability &amp; options
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                  Component Matching
                </span>
                <span className="text-xs text-foreground-muted mt-0.5">
                  Compatibility and balanced specs
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                  Factual Service Scope
                </span>
                <span className="text-xs text-foreground-muted mt-0.5">
                  Physical mounting &amp; hardware support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the Business Does Section */}
      <section
        id="business-areas"
        aria-labelledby="business-areas-heading"
        className="border-t border-border bg-surface/50 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-primary">
              <span>AREAS OF WORK</span>
            </div>
            <h2
              id="business-areas-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
            >
              What ARS Computers Does
            </h2>
            <p className="mt-4 text-base text-foreground-muted sm:text-lg leading-relaxed">
              We focus on specific, confirmed computer hardware and technology service categories.
              Here is a summary of our primary business activities:
            </p>
          </div>

          {/* 7 Business Areas Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BUSINESS_AREAS.map((area) => (
              <article
                key={area.id}
                className="flex flex-col justify-between rounded-xl border border-border bg-background p-6 shadow-xs transition-colors hover:border-primary/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-lg ${area.iconBgClass} ${area.iconTextClass}`}
                      aria-hidden="true"
                    >
                      {area.icon}
                    </span>
                    <span
                      className={`rounded-md border px-2 py-0.5 text-[11px] font-mono font-semibold uppercase tracking-wider ${area.badgeColorClass}`}
                    >
                      {area.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {area.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/60 pt-4">
                  <Link
                    href={area.linkHref}
                    className="inline-flex items-center text-xs font-semibold text-primary hover:text-primary-hover hover:underline transition-colors"
                  >
                    {area.linkLabel} &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Approach Section */}
      <section
        id="customer-approach"
        aria-labelledby="customer-approach-heading"
        className="border-t border-border bg-background py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-primary">
              <span>HOW WE WORK</span>
            </div>
            <h2
              id="customer-approach-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
            >
              Our Customer Approach
            </h2>
            <p className="mt-4 text-base text-foreground-muted sm:text-lg leading-relaxed">
              We guide customers through a practical, enquiry-based interaction so that decisions are informed and expectations are aligned from the start.
            </p>
          </div>

          {/* 3 Step Approach Cards */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 shadow-xs sm:p-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-sm font-bold text-primary">
                    01
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    Understand the Requirement
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                  Customers explain their computer issue, product requirement, intended use, or installation need.
                  Sharing specific details—such as system symptoms, target software, or physical premises context—helps us understand what is needed.
                </p>
              </div>
              <div className="mt-6 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                Focus: Gathering practical information before proposing hardware or repairs.
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 shadow-xs sm:p-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 font-mono text-sm font-bold text-accent-blue">
                    02
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    Discuss Suitable Options
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                  ARS Computers discusses relevant component categories, hardware requirements, and possible service scope.
                  We focus on compatibility and component balance rather than recommending unnecessary extras.
                </p>
              </div>
              <div className="mt-6 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                Focus: Evaluating socket compatibility, wattage demands, and practical solutions.
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 shadow-xs sm:p-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-success/10 font-mono text-sm font-bold text-success">
                    03
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    Confirm the Next Steps
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                  Specific availability, compatibility, costs, and work scope are confirmed during the enquiry.
                  This ensures clarity regarding timelines and parts before any physical work or sourcing takes place.
                </p>
              </div>
              <div className="mt-6 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                Focus: Transparent quotes, confirmed scope, and agreed next steps.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who the Services May Help Section */}
      <section
        id="who-we-help"
        aria-labelledby="who-we-help-heading"
        className="border-t border-border bg-surface/50 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-primary">
              <span>RELEVANT USE CASES</span>
            </div>
            <h2
              id="who-we-help-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
            >
              Who Our Services May Help
            </h2>
            <p className="mt-4 text-base text-foreground-muted sm:text-lg leading-relaxed">
              Our products and technical services cater to everyday computing and technology needs.
              Here are typical scenarios where ARS Computers can assist:
            </p>
          </div>

          {/* Use Case Cards Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POTENTIAL_USE_CASES.map((useCase, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-border bg-background p-6 shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                    <h3 className="text-base font-semibold text-foreground">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                    {useCase.description}
                  </p>
                </div>
                <div className="mt-6 rounded-lg bg-surface p-3 text-xs text-foreground-muted border border-border/60">
                  {useCase.exampleNeed}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Call to Action Section */}
      <section
        id="closing-cta"
        aria-labelledby="cta-heading"
        className="border-t border-border bg-background py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-brand-navy p-8 sm:p-12 text-white shadow-xl">
            {/* Subtle decorative glow elements */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent-blue/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-3xl">
              <span className="inline-block rounded-md bg-white/10 px-3 py-1 text-xs font-semibold text-accent-blue backdrop-blur-xs">
                CONNECT WITH ARS COMPUTERS
              </span>
              <h2
                id="cta-heading"
                className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
              >
                Explore Products, Services, or Discuss Your Requirements
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Whether you need assistance choosing computer components, assembling a custom desktop,
                inspecting a hardware issue, or planning equipment installation, get in touch to discuss what you need.
              </p>

              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-7 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
                >
                  Contact ARS Computers
                </Link>
                <Link
                  href="/products"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white/15 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
                >
                  Explore Products
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white/15 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
                >
                  View Services
                </Link>
              </div>

              <div className="mt-8 border-t border-white/10 pt-4 text-xs text-slate-400">
                Enquiry-based consultation • Factual hardware matching • Physical equipment setup
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
