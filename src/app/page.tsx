import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background Subtle Accent Pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-10"
        aria-hidden="true"
      >
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 left-0 h-80 w-80 rounded-full bg-accent-blue/10 blur-3xl" />
      </div>

      {/* Hero Section */}
      <section
        aria-labelledby="hero-heading"
        className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-20 lg:pb-24"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Hero Copy & Actions */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground-muted shadow-xs">
              <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
              <span>Computer Hardware • Custom Builds • IT Solutions</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.1]"
            >
              The Right Technology.{" "}
              <span className="text-primary">Built Around Your Needs.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 text-base text-foreground-muted sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              Explore computer components, custom PC builds, diagnostics and repair,
              CCTV surveillance systems, and business technology services from ARS Computers.
            </p>

            {/* Call to Actions */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href="/products"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Explore Products
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
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-surface px-6 text-base font-semibold text-foreground shadow-xs transition-colors hover:bg-surface-elevated hover:border-foreground-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Enquire for Services
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="mt-10 border-t border-border/80 pt-6 w-full">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Hardware Catalogue
                  </span>
                  <span className="text-xs text-foreground-muted mt-0.5">
                    Enquiry-based selection
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Custom Assembly
                  </span>
                  <span className="text-xs text-foreground-muted mt-0.5">
                    Gaming & Workstations
                  </span>
                </div>
                <div className="flex flex-col col-span-2 sm:col-span-1">
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Diagnostics & Service
                  </span>
                  <span className="text-xs text-foreground-muted mt-0.5">
                    Hardware repairs & CCTV
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pillar Cards Showcase */}
          <div className="w-full lg:col-span-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {/* Pillar 1: Custom PC Builds */}
              <div className="group rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent-coral/50 hover:bg-surface-elevated">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-accent-coral">
                      Bespoke Assembly
                    </span>
                    <h2 className="mt-1 text-base font-semibold text-foreground">
                      Custom PC Builds
                    </h2>
                  </div>
                  <span className="rounded-md bg-accent-coral/10 p-2 text-accent-coral" aria-hidden="true">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
                    </svg>
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                  Tailored gaming rigs, creator suites, and CAD workstations balanced for performance, thermals, and budget.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-foreground">
                  <Link href="/custom-pc" className="hover:text-primary transition-colors inline-flex items-center gap-1">
                    Configure your build &rarr;
                  </Link>
                </div>
              </div>

              {/* Pillar 2: Components & Hardware */}
              <div className="group rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent-blue/50 hover:bg-surface-elevated">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-accent-blue">
                      Parts & Upgrades
                    </span>
                    <h2 className="mt-1 text-base font-semibold text-foreground">
                      Computer Components
                    </h2>
                  </div>
                  <span className="rounded-md bg-accent-blue/10 p-2 text-accent-blue" aria-hidden="true">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V5.25a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21Z" />
                    </svg>
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                  CPUs, GPUs, motherboards, RAM, NVMe storage, power supplies, and cooling accessories from verified brands.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-foreground">
                  <Link href="/products" className="hover:text-primary transition-colors inline-flex items-center gap-1">
                    View components &rarr;
                  </Link>
                </div>
              </div>

              {/* Pillar 3: Diagnostics & CCTV Security */}
              <div className="group rounded-xl border border-border bg-surface p-5 transition-all hover:border-success/50 hover:bg-surface-elevated">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-success">
                      Service & Support
                    </span>
                    <h2 className="mt-1 text-base font-semibold text-foreground">
                      Repairs & CCTV Security
                    </h2>
                  </div>
                  <span className="rounded-md bg-success/10 p-2 text-success" aria-hidden="true">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 0 0 21 17.25l-5.83-5.83M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0Z" />
                    </svg>
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                  Component-level diagnostics, laptop hardware repair, printer servicing, and CCTV security installation.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-foreground">
                  <Link href="/services" className="hover:text-primary transition-colors inline-flex items-center gap-1">
                    Book repair or service &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
