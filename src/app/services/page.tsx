import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Computer Services & Technology Solutions",
  description:
    "Explore technical services from ARS Computers: computer repair and hardware diagnostics, custom PC assembly, component upgrades, CCTV installation, printer servicing, and hardware setup.",
};

interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  badgeColorClass: string;
  iconBgClass: string;
  iconTextClass: string;
  borderColorClass: string;
  description: string;
  keyPoints: string[];
  scopeNote: string;
  icon: React.ReactNode;
}

const SERVICES: ServiceItem[] = [
  {
    id: "repair-diagnostics",
    title: "Computer Repair & Diagnostics",
    badge: "Hardware Diagnostics",
    badgeColorClass: "text-primary bg-primary/10 border-primary/20",
    iconBgClass: "bg-primary/10",
    iconTextClass: "text-primary",
    borderColorClass: "hover:border-primary/50",
    description:
      "Hardware troubleshooting and diagnostic assessment for desktop computers and laptops experiencing startup failures, unexpected crashes, overheating, or intermittent hardware faults.",
    keyPoints: [
      "Basic desktop and laptop hardware troubleshooting",
      "Diagnosing boot failures, display output issues, and system instability",
      "Identifying defective hardware and evaluating component replacement or upgrade needs",
      "Thermal inspection, dust clearance, and fan maintenance",
    ],
    scopeNote:
      "Diagnostic checks help determine whether an issue stems from faulty hardware or configuration. Repair feasibility depends on the nature of the physical fault.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.75"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.67 2.67 0 0 0 21 17.25l-5.83-5.83M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0Z"
        />
      </svg>
    ),
  },
  {
    id: "custom-pc",
    title: "Custom PC Assembly",
    badge: "Bespoke Builds",
    badgeColorClass: "text-accent-coral bg-accent-coral/10 border-accent-coral/20",
    iconBgClass: "bg-accent-coral/10",
    iconTextClass: "text-accent-coral",
    borderColorClass: "hover:border-accent-coral/50",
    description:
      "End-to-end assembly assistance for custom desktop computers tailored to your planned workload, physical dimensions, and component preferences.",
    keyPoints: [
      "Consultation on customer intended use, budget parameters, and performance goals",
      "Guidance on suitable component selection across processors, graphics, and motherboards",
      "Careful hardware assembly, clean internal cable routing, and thermal paste application",
      "Pre-delivery bench testing and BIOS configuration check",
    ],
    scopeNote:
      "Gaming, creative content-creation, office administration, and student tasks are supported as tailored build configurations rather than guaranteed benchmark metrics.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.75"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3"
        />
      </svg>
    ),
  },
  {
    id: "components-upgrades",
    title: "Computer Components & Upgrades",
    badge: "Hardware Upgrades",
    badgeColorClass: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
    iconBgClass: "bg-accent-blue/10",
    iconTextClass: "text-accent-blue",
    borderColorClass: "hover:border-accent-blue/50",
    description:
      "Sourcing and upgrade consultation for essential internal hardware components to enhance responsiveness, increase storage, or expand graphical capabilities.",
    keyPoints: [
      "Processors (CPUs), dedicated graphics cards (GPUs), and motherboards",
      "High-speed DDR4 and DDR5 memory expansions for smoother multitasking",
      "NVMe SSD and high-capacity storage drive additions and migrations",
      "Power supply unit (PSU) and cooling hardware upgrades for enhanced stability",
    ],
    scopeNote:
      "Components are presented as product categories for upgrade enquiries. Availability and pricing are confirmed on an enquiry basis according to distributor supply.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.75"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V5.25a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21Z"
        />
      </svg>
    ),
  },
  {
    id: "cctv-systems",
    title: "CCTV Systems & Installation",
    badge: "Security Installation",
    badgeColorClass: "text-warning bg-warning/10 border-warning/20",
    iconBgClass: "bg-warning/10",
    iconTextClass: "text-warning",
    borderColorClass: "hover:border-warning/50",
    description:
      "On-premises CCTV equipment supply, physical mounting, camera cabling, and recorder configuration to secure commercial and residential facilities.",
    keyPoints: [
      "Consultation on CCTV camera coverage and equipment enquiries",
      "New surveillance system setup, camera positioning, and structural mounting",
      "DVR and NVR local recording unit setup, hard drive installation, and video channel configuration",
      "Enhancements and cabling repairs to existing CCTV camera installations",
    ],
    scopeNote:
      "Services focus on physical camera installation and on-site recorder hardware configuration. We do not provide proprietary cloud recording or remote subscription platforms.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.75"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    id: "printers-cartridges",
    title: "Printers & Cartridge Services",
    badge: "Print & Supplies",
    badgeColorClass: "text-success bg-success/10 border-success/20",
    iconBgClass: "bg-success/10",
    iconTextClass: "text-success",
    borderColorClass: "hover:border-success/50",
    description:
      "Commercial and home printing support, consumable refills, replacement cartridge sourcing, and basic printer connectivity troubleshooting.",
    keyPoints: [
      "Enquiries and supply for laser and inkjet printing machines",
      "Original and compatible replacement ink and toner cartridges",
      "Economical cartridge refilling assistance and cartridge care",
      "Basic desktop printer setup, USB cable connection, and driver installation",
    ],
    scopeNote:
      "Printing equipment and consumables are sourced based on customer model specifications. Printer support covers standard hardware setup and connectivity.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.75"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
        />
      </svg>
    ),
  },
  {
    id: "software-antivirus",
    title: "Software & Antivirus Assistance",
    badge: "Software Support",
    badgeColorClass: "text-success bg-success/10 border-success/20",
    iconBgClass: "bg-success/10",
    iconTextClass: "text-success",
    borderColorClass: "hover:border-success/50",
    description:
      "Assistance with genuine security software installation, product license activation, and foundational operating system utility setup for desktops and laptops.",
    keyPoints: [
      "Antivirus installation assistance and subscription license activation",
      "Operating system clean setup and essential update configuration",
      "Essential device driver installation for audio, display, and network chips",
      "Assistance with basic software utility configuration and browser setup",
    ],
    scopeNote:
      "Support is strictly limited to authorized commercial software installation and configuration. We do not provide custom software development or enterprise cybersecurity consulting.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.75"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    id: "biometric-hardware",
    title: "Biometric Attendance Hardware",
    badge: "Hardware Only",
    badgeColorClass: "text-foreground-muted bg-surface-elevated border-border",
    iconBgClass: "bg-brand-navy/10 dark:bg-brand-navy-light/30",
    iconTextClass: "text-brand-navy dark:text-foreground",
    borderColorClass: "hover:border-brand-navy-light/50",
    description:
      "Physical wall-mounting, electrical power connection, and local network wiring for standalone biometric attendance hardware devices.",
    keyPoints: [
      "Physical wall mounting and ergonomic height positioning for attendance terminals",
      "Power adapter installation, surge protection connection, and clean wiring",
      "Local Ethernet network cabling to the device for LAN communication",
      "Device hardware power-on initialization and basic physical sensor test",
    ],
    scopeNote:
      "Scope covers physical mounting and hardware connectivity only. We do not develop attendance management software, payroll platforms, or third-party HR cloud integrations.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.75"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a1.5 1.5 0 011.5 1.5v4.5a1.5 1.5 0 01-3 0v-4.5a1.5 1.5 0 011.5-1.5z"
        />
      </svg>
    ),
  },
];

export default function ServicesPage() {
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

      {/* Hero / Page Introduction Section */}
      <section
        aria-labelledby="services-page-heading"
        className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8"
      >
        <div className="max-w-3xl">
          {/* Eyebrow Navigation Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground-muted shadow-xs">
            <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
            <span>Technical Services &amp; Hardware Support</span>
          </div>

          {/* Main H1 Heading */}
          <h1
            id="services-page-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:leading-[1.15]"
          >
            Computer Services &amp; Technology Solutions
          </h1>

          {/* Introduction Copy */}
          <p className="mt-6 text-base text-foreground-muted sm:text-lg md:text-xl leading-relaxed">
            ARS Computers delivers practical hardware services and technology solutions for individuals and organizations.
            Our confirmed service capabilities span computer hardware troubleshooting and diagnostics, custom desktop assembly,
            component upgrades, CCTV surveillance installation, printer servicing, antivirus assistance, and biometric hardware setup.
          </p>

          <p className="mt-4 text-base text-foreground-muted leading-relaxed">
            Every service engagement begins with clear consultation and honest assessment. We evaluate hardware symptoms,
            intended use, and technical specifications before recommending replacement parts or assembly configurations.
          </p>

          {/* Action Links */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Enquire for Services
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="#service-list"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-surface px-6 text-sm font-semibold text-foreground shadow-xs transition-colors hover:bg-surface-elevated hover:border-foreground-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              View All Services
            </a>
          </div>

          {/* Informational Service Pillars */}
          <div className="mt-10 border-t border-border/80 pt-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                  Hardware Diagnostics
                </span>
                <span className="text-xs text-foreground-muted mt-0.5">
                  Troubleshooting before replacement
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                  Custom Assembly
                </span>
                <span className="text-xs text-foreground-muted mt-0.5">
                  Balanced builds for work &amp; gaming
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                  Physical Installation
                </span>
                <span className="text-xs text-foreground-muted mt-0.5">
                  CCTV cameras &amp; biometric terminals
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section
        id="service-list"
        aria-labelledby="service-list-heading"
        className="border-t border-border bg-surface/50 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-primary">
              <span>SERVICE SCOPE &amp; DETAILS</span>
            </div>
            <h2
              id="service-list-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
            >
              Core Technical Services &amp; Hardware Support
            </h2>
            <p className="mt-4 text-base text-foreground-muted sm:text-lg leading-relaxed">
              Review our specific technical service offerings below. Each service is tailored to practical hardware
              requirements with factual boundaries and dependable workmanship.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {SERVICES.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className={`flex flex-col justify-between rounded-2xl border border-border bg-background p-6 shadow-xs transition-all sm:p-8 ${service.borderColorClass}`}
              >
                <div>
                  {/* Service Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${service.iconBgClass} ${service.iconTextClass}`}
                        aria-hidden="true"
                      >
                        {service.icon}
                      </span>
                      <div>
                        <span
                          className={`inline-block rounded-md border px-2.5 py-0.5 text-[11px] font-mono font-semibold uppercase tracking-wider ${service.badgeColorClass}`}
                        >
                          {service.badge}
                        </span>
                        <h3 className="mt-1 text-xl font-bold text-foreground sm:text-2xl">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-foreground-muted sm:text-base">
                    {service.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="mt-6 border-t border-border/60 pt-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Service Scope &amp; Activities
                    </h4>
                    <ul className="mt-3 space-y-2 text-xs text-foreground-muted sm:text-sm">
                      {service.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span
                            className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${service.iconTextClass}`}
                            aria-hidden="true"
                          />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Scope Boundary / Transparency Note */}
                  <div className="mt-6 rounded-lg border border-border/80 bg-surface/60 p-3.5 text-xs text-foreground-muted">
                    <span className="font-semibold text-foreground">Service Note: </span>
                    {service.scopeNote}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-5 sm:flex-row sm:items-center">
                  <span className="text-xs text-foreground-muted">
                    Have questions about {service.title.toLowerCase()}?
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-xs font-semibold text-primary hover:text-primary-hover hover:underline transition-colors"
                  >
                    Enquire about this service &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service Engagement Process Guidance */}
      <section
        id="service-process"
        aria-labelledby="service-process-heading"
        className="border-t border-border bg-background py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-primary">
              <span>HOW WE DELIVER SERVICES</span>
            </div>
            <h2
              id="service-process-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
            >
              How to Engage ARS Computers for Services
            </h2>
            <p className="mt-4 text-base text-foreground-muted sm:text-lg leading-relaxed">
              We follow a transparent, structured workflow so you know what to expect from initial enquiry to service completion.
            </p>
          </div>

          {/* 3 Step Engagement Cards */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 shadow-xs sm:p-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-sm font-bold text-primary">
                    01
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    Initial Enquiry &amp; Discussion
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                  Describe your computer issue, intended build goals, or installation requirements. Share existing hardware
                  models, error symptoms, or facility layout context.
                </p>
              </div>
              <div className="mt-6 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                Practical Step: Noting exact symptoms (e.g. no display, blue screens, fan noise) helps us prepare appropriate diagnostic tools.
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 shadow-xs sm:p-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-coral/10 font-mono text-sm font-bold text-accent-coral">
                    02
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    Assessment &amp; Compatibility
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                  We evaluate the hardware problem, verify electrical and physical component compatibility, or determine
                  camera positioning and wiring logistics.
                </p>
              </div>
              <div className="mt-6 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                Practical Step: We provide factual advice regarding whether a component should be repaired, upgraded, or replaced.
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
                    Execution &amp; Verification
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                  Work is carried out according to the agreed plan: assembling custom PCs, testing repaired systems,
                  mounting CCTV or biometric equipment, or supplying consumables.
                </p>
              </div>
              <div className="mt-6 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                Practical Step: Systems and installations undergo basic startup checks before handover.
              </div>
            </div>
          </div>

          {/* Contact Call to Action Banner */}
          <div className="mt-12 rounded-2xl bg-brand-navy p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="inline-block rounded-md bg-white/10 px-3 py-1 text-xs font-semibold text-accent-blue backdrop-blur-xs">
                  READY TO DISCUSS YOUR REQUIREMENTS?
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Enquire About Our Computer &amp; Technology Services
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                  Have a hardware issue, need a custom PC assembled, or planning a CCTV setup?
                  Contact our team to discuss your specific requirements.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-7 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
                >
                  Contact ARS Computers
                </Link>
              </div>
            </div>
          </div>

          {/* Service Integrity Notice */}
          <div className="mt-8 rounded-xl border border-border bg-surface p-5 text-xs text-foreground-muted leading-relaxed">
            <div className="flex items-start gap-2.5">
              <svg
                className="h-5 w-5 shrink-0 text-primary mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.75"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              <div>
                <span className="font-semibold text-foreground">Service Standards &amp; Transparency: </span>
                ARS Computers provides technical services based on factual inspection and verified component requirements.
                We do not quote arbitrary repair fees or promise unsupported third-party software integrations.
                Please contact us with your device model or system requirements for transparent consultation.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
