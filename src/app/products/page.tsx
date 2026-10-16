import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Computer Products & Components",
  description:
    "Explore computer components, custom PC essentials, peripherals, and printer supplies at ARS Computers. Enquiry-based hardware supply with personalized compatibility guidance.",
};

interface SubcategoryItem {
  name: string;
  detail: string;
}

interface ProductCategory {
  id: string;
  title: string;
  badge: string;
  badgeColorClass: string;
  iconBgClass: string;
  iconTextClass: string;
  borderColorClass: string;
  overview: string;
  subcategories: SubcategoryItem[];
  icon: React.ReactNode;
}

const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "components",
    title: "Computer Components",
    badge: "Core Hardware",
    badgeColorClass: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
    iconBgClass: "bg-accent-blue/10",
    iconTextClass: "text-accent-blue",
    borderColorClass: "hover:border-accent-blue/50",
    overview:
      "Essential processing, graphics, storage, and platform hardware for new desktop builds, workstation setups, and performance upgrades.",
    subcategories: [
      {
        name: "Processors (CPUs)",
        detail: "Desktop processors from mainstream Intel and AMD lineups suitable for gaming, productivity, and demanding workstation loads.",
      },
      {
        name: "Graphics Cards (GPUs)",
        detail: "Dedicated graphics cards tailored for gaming resolutions, creative rendering, 3D modeling, and multi-monitor output.",
      },
      {
        name: "Motherboards",
        detail: "ATX, Micro-ATX, and Mini-ITX system boards supporting modern chipsets, expansion lanes, and connectivity standards.",
      },
      {
        name: "RAM (System Memory)",
        detail: "High-frequency DDR4 and DDR5 memory modules available in dual-channel configurations for responsive multitasking.",
      },
      {
        name: "Storage Drives",
        detail: "Fast NVMe PCIe M.2 solid-state drives for operating systems and apps, plus high-capacity 2.5-inch SSDs and secondary HDDs.",
      },
      {
        name: "Power Supplies & Cooling",
        detail: "Reliable 80 PLUS certified power supply units and balanced cooling hardware to maintain continuous system stability.",
      },
    ],
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
    id: "custom-pc",
    title: "Custom PC Essentials",
    badge: "Bespoke Assembly",
    badgeColorClass: "text-accent-coral bg-accent-coral/10 border-accent-coral/20",
    iconBgClass: "bg-accent-coral/10",
    iconTextClass: "text-accent-coral",
    borderColorClass: "hover:border-accent-coral/50",
    overview:
      "Chassis, airflow engineering, thermal management, and assembly accessories needed to construct neat, thermally efficient custom computers.",
    subcategories: [
      {
        name: "PC Cabinets",
        detail: "Mid-tower and full-tower enclosures featuring optimized front mesh airflow, tempered glass side panels, and cable channels.",
      },
      {
        name: "Air & Liquid Cooling",
        detail: "High-efficiency tower heatsinks and All-In-One (AIO) liquid cooling radiators designed to keep CPU temperatures under control.",
      },
      {
        name: "Case Fans",
        detail: "Chassis fans in 120mm and 140mm dimensions with PWM speed regulation for quiet everyday acoustics and positive pressure.",
      },
      {
        name: "Assembly-Related Components",
        detail: "Thermal compound, PSU braided cable extensions, internal fan hubs, mounting brackets, and anti-vibration hardware.",
      },
    ],
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
    id: "peripherals",
    title: "Peripherals & Accessories",
    badge: "Desk & Input Gear",
    badgeColorClass: "text-warning bg-warning/10 border-warning/20",
    iconBgClass: "bg-warning/10",
    iconTextClass: "text-warning",
    borderColorClass: "hover:border-warning/50",
    overview:
      "Everyday input hardware, high-resolution displays, adapters, and data cables to complete workstation and personal desktop environments.",
    subcategories: [
      {
        name: "Monitors",
        detail: "Full HD, 2K, and 4K displays spanning standard office monitors, high-refresh gaming screens, and color-balanced panels.",
      },
      {
        name: "Keyboards & Mice",
        detail: "Ergonomic wired and wireless keyboards, responsive mechanical keyboards, and precision optical mice for work or play.",
      },
      {
        name: "Cables & Adapters",
        detail: "High-speed HDMI 2.1, DisplayPort, USB-C, Cat6 Ethernet networking cables, and display protocol conversion dongles.",
      },
      {
        name: "USB Hubs & Related Accessories",
        detail: "Multi-port USB docks, card readers, external hard drive enclosures, webcams, and desktop audio headsets.",
      },
    ],
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
          d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
        />
      </svg>
    ),
  },
  {
    id: "printers",
    title: "Printers & Supplies",
    badge: "Print & Consumables",
    badgeColorClass: "text-success bg-success/10 border-success/20",
    iconBgClass: "bg-success/10",
    iconTextClass: "text-success",
    borderColorClass: "hover:border-success/50",
    overview:
      "Reliable printing machines, genuine consumables, toner refills, and servicing supplies to maintain uninterrupted commercial and home printing.",
    subcategories: [
      {
        name: "Printers",
        detail: "Compact ink-tank printers, multi-function monochrome laser printers, and wireless all-in-one desktop printing units.",
      },
      {
        name: "Ink & Toner Cartridges",
        detail: "High-yield laser toner cartridges, original printer ink bottles, and replacement cartridges across popular models.",
      },
      {
        name: "Cartridge Refill Services & Supplies",
        detail: "Cost-effective cartridge refilling support, nozzle cleaning assistance, and certified refill inks for everyday documentation.",
      },
      {
        name: "Related Printing Supplies",
        detail: "Standard USB-B printer interconnect cables, power adapters, and basic routine maintenance guidance.",
      },
    ],
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
          d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
        />
      </svg>
    ),
  },
];

export default function ProductsPage() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background Subtle Accent Pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-10"
        aria-hidden="true"
      >
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 left-0 h-80 w-80 rounded-full bg-accent-blue/10 blur-3xl" />
      </div>

      {/* Hero / Page Introduction Section */}
      <section
        aria-labelledby="products-page-heading"
        className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8"
      >
        <div className="max-w-3xl">
          {/* Eyebrow Navigation / Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground-muted shadow-xs">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            <span>Hardware Catalogue &amp; Sourcing</span>
          </div>

          {/* Main H1 Heading */}
          <h1
            id="products-page-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:leading-[1.15]"
          >
            Computer Products &amp; Components
          </h1>

          {/* Introduction Copy */}
          <p className="mt-6 text-base text-foreground-muted sm:text-lg md:text-xl leading-relaxed">
            Explore our curated hardware categories spanning core computer components, custom-build essentials,
            desktop peripherals, and office printer supplies. Whether you are assembling a new workstation,
            upgrading storage and graphics, or restocking consumables, ARS Computers helps you find the right equipment.
          </p>

          <p className="mt-4 text-base text-foreground-muted leading-relaxed">
            Our catalogue is organized to help you identify suitable categories and components. Because availability
            and specifications vary across manufacturers, customers can enquire about specific products,
            intended use, and custom build requirements to receive verified availability and pricing.
          </p>

          {/* Action Links */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Enquire About Products
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
              href="#categories"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-surface px-6 text-sm font-semibold text-foreground shadow-xs transition-colors hover:bg-surface-elevated hover:border-foreground-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Browse Categories Below
            </a>
          </div>

          {/* Informational Pillars */}
          <div className="mt-10 border-t border-border/80 pt-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                  Enquiry-Based Supply
                </span>
                <span className="text-xs text-foreground-muted mt-0.5">
                  Real-time stock checks &amp; quotes
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                  Component Matching
                </span>
                <span className="text-xs text-foreground-muted mt-0.5">
                  Socket &amp; wattage compatibility
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                  Retail &amp; Business
                </span>
                <span className="text-xs text-foreground-muted mt-0.5">
                  Single parts to complete setups
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Browsing Section */}
      <section
        id="categories"
        aria-labelledby="categories-heading"
        className="border-t border-border bg-surface/50 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-primary">
              <span>EXPLORE BY CATEGORY</span>
            </div>
            <h2
              id="categories-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
            >
              Hardware Categories &amp; Component Breakdown
            </h2>
            <p className="mt-4 text-base text-foreground-muted sm:text-lg leading-relaxed">
              Review our primary hardware segments. Each category highlights key components and accessories
              available for consultation, order enquiry, and system assembly.
            </p>
          </div>

          {/* Four Categories Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {PRODUCT_CATEGORIES.map((category) => (
              <article
                key={category.id}
                id={category.id}
                className={`flex flex-col justify-between rounded-2xl border border-border bg-background p-6 shadow-xs transition-all sm:p-8 ${category.borderColorClass}`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${category.iconBgClass} ${category.iconTextClass}`}
                        aria-hidden="true"
                      >
                        {category.icon}
                      </span>
                      <div>
                        <span
                          className={`inline-block rounded-md border px-2.5 py-0.5 text-[11px] font-mono font-semibold uppercase tracking-wider ${category.badgeColorClass}`}
                        >
                          {category.badge}
                        </span>
                        <h3 className="mt-1 text-xl font-bold text-foreground sm:text-2xl">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Overview Text */}
                  <p className="mt-4 text-sm leading-relaxed text-foreground-muted sm:text-base">
                    {category.overview}
                  </p>

                  {/* Subcategories Breakdown */}
                  <div className="mt-6 border-t border-border/60 pt-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Available Subcategories &amp; Hardware
                    </h4>
                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {category.subcategories.map((sub, idx) => (
                        <div
                          key={idx}
                          className="rounded-lg border border-border/80 bg-surface/60 p-3.5 transition-colors hover:bg-surface"
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`h-1.5 w-1.5 shrink-0 rounded-full ${category.iconTextClass}`}
                              aria-hidden="true"
                            />
                            <span className="text-sm font-semibold text-foreground">
                              {sub.name}
                            </span>
                          </div>
                          <p className="mt-1.5 text-xs leading-relaxed text-foreground-muted">
                            {sub.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Call to Action */}
                <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-5 sm:flex-row sm:items-center">
                  <span className="text-xs text-foreground-muted">
                    Need advice on {category.title.toLowerCase()}?
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-xs font-semibold text-primary hover:text-primary-hover hover:underline transition-colors"
                  >
                    Enquire about {category.title} &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Guidance Section */}
      <section
        id="enquiry-guidance"
        aria-labelledby="enquiry-guidance-heading"
        className="border-t border-border bg-background py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-primary">
              <span>HOW WE WORK</span>
            </div>
            <h2
              id="enquiry-guidance-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
            >
              How to Enquire About Products &amp; Components
            </h2>
            <p className="mt-4 text-base text-foreground-muted sm:text-lg leading-relaxed">
              We operate an enquiry-based catalogue to ensure you receive verified compatibility, up-to-date market pricing,
              and genuine hardware. Here is how you can discuss your requirements with us:
            </p>
          </div>

          {/* 3 Guidance Steps */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 shadow-xs sm:p-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-sm font-bold text-primary">
                    01
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    Specify Your Component
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                  Share the specific component name, part category, or model you need—such as a processor model,
                  graphics card tier, RAM frequency, or printer ink type.
                </p>
              </div>
              <div className="mt-6 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                Tip: If you are replacing a faulty part, mentioning your existing motherboard or power supply helps us match specs.
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
                    Describe Your Intended Use
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                  Let us know what you plan to accomplish: gaming at a particular resolution, CAD rendering, office administration,
                  or high-volume document printing.
                </p>
              </div>
              <div className="mt-6 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                Tip: Stating your budget helps us suggest balanced options without overspending on unused performance.
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
                    Receive Availability &amp; Advice
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                  Our team checks distributor inventory, confirms physical and electrical compatibility with your setup,
                  and provides direct pricing and availability timelines.
                </p>
              </div>
              <div className="mt-6 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                Tip: We can also assemble, bench-test, or install parts if you prefer professional hardware handling.
              </div>
            </div>
          </div>

          {/* Contact Call to Action Card */}
          <div className="mt-12 rounded-2xl bg-brand-navy p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="inline-block rounded-md bg-white/10 px-3 py-1 text-xs font-semibold text-accent-blue backdrop-blur-xs">
                  READY TO DISCUSS HARDWARE?
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Send Your Product &amp; Component Enquiry
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                  Have a specific part number or looking for recommendation on a balanced computer build?
                  Contact our team with your questions and requirements.
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

          {/* Data Integrity & Transparency Note */}
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
                <span className="font-semibold text-foreground">Catalogue &amp; Sourcing Integrity Note: </span>
                ARS Computers maintains an enquiry-based catalogue rather than publishing simulated stock levels or static inventory.
                All hardware models, brands, and parts are quoted based on current authorized distributor availability and customer-specific
                configuration requirements. Please submit an enquiry to confirm exact specifications, warranty terms, and delivery schedules.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
