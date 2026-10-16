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

      {/* Service Overview Section */}
      <section
        id="services"
        aria-labelledby="services-overview-heading"
        className="border-t border-border bg-surface/50 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-primary">
              <span>HARDWARE & TECHNICAL SERVICES</span>
            </div>
            <h2
              id="services-overview-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
            >
              Comprehensive Technology Solutions
            </h2>
            <p className="mt-4 text-base text-foreground-muted sm:text-lg leading-relaxed">
              Explore our core business services—from component-level computer troubleshooting
              and custom PC assembly to CCTV surveillance and hardware installations.
            </p>
          </div>

          {/* 7 Services Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1. Computer Repair & Diagnostics */}
            <article className="flex flex-col justify-between rounded-xl border border-border bg-background p-6 shadow-xs transition-colors hover:border-primary/40">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 0 0 21 17.25l-5.83-5.83M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0Z" />
                    </svg>
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-primary">
                    Diagnostics
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Computer Repair & Diagnostics
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  Hardware troubleshooting, computer issue diagnosis, and basic hardware services for desktops and laptops experiencing faults or boot failures.
                </p>
              </div>
              <ul className="mt-6 space-y-2 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                  <span>Hardware fault identification</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                  <span>Thermal and fan maintenance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                  <span>Defective component replacement</span>
                </li>
              </ul>
            </article>

            {/* 2. Custom PC Builds */}
            <article className="flex flex-col justify-between rounded-xl border border-border bg-background p-6 shadow-xs transition-colors hover:border-accent-coral/40">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-coral/10 text-accent-coral" aria-hidden="true">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
                    </svg>
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-accent-coral">
                    Assembly
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Custom PC Builds
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  Assistance with assembling computers tailored to the customer&apos;s intended use, performance requirements, and preferred specifications.
                </p>
              </div>
              <ul className="mt-6 space-y-2 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-coral" aria-hidden="true" />
                  <span>Workstation & gaming configurations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-coral" aria-hidden="true" />
                  <span>Component compatibility matching</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-coral" aria-hidden="true" />
                  <span>Bench testing & clean cable routing</span>
                </li>
              </ul>
            </article>

            {/* 3. Computer Components */}
            <article className="flex flex-col justify-between rounded-xl border border-border bg-background p-6 shadow-xs transition-colors hover:border-accent-blue/40">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue" aria-hidden="true">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V5.25a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21Z" />
                    </svg>
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-accent-blue">
                    Hardware
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Computer Components
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  Supply and upgrades of processors, graphics cards, motherboards, memory, storage drives, and cooling hardware.
                </p>
              </div>
              <ul className="mt-6 space-y-2 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" aria-hidden="true" />
                  <span>Processors (CPUs) & Graphics (GPUs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" aria-hidden="true" />
                  <span>DDR4/DDR5 RAM & NVMe SSD storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" aria-hidden="true" />
                  <span>Power supplies, cases & air/AIO cooling</span>
                </li>
              </ul>
            </article>

            {/* 4. CCTV & Security Systems */}
            <article className="flex flex-col justify-between rounded-xl border border-border bg-background p-6 shadow-xs transition-colors hover:border-warning/40">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-warning/10 text-warning" aria-hidden="true">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-warning">
                    Security
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  CCTV & Security Systems
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  CCTV equipment supply, physical installation, system setup, and coverage enhancement of existing surveillance systems.
                </p>
              </div>
              <ul className="mt-6 space-y-2 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-warning" aria-hidden="true" />
                  <span>Security camera installation & wiring</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-warning" aria-hidden="true" />
                  <span>DVR/NVR recorder hardware setup</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-warning" aria-hidden="true" />
                  <span>Upgrading & servicing existing camera setups</span>
                </li>
              </ul>
            </article>

            {/* 5. Printers & Cartridge Services */}
            <article className="flex flex-col justify-between rounded-xl border border-border bg-background p-6 shadow-xs transition-colors hover:border-primary/40">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                    </svg>
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-primary">
                    Printers
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Printers & Cartridge Services
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  Printers, replacement cartridges, cartridge refilling assistance, and related supplies for office and home printing.
                </p>
              </div>
              <ul className="mt-6 space-y-2 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                  <span>Inkjet and laser printer supplies</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                  <span>Cartridge refilling assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                  <span>Basic printer connectivity troubleshooting</span>
                </li>
              </ul>
            </article>

            {/* 6. Software & Antivirus Assistance */}
            <article className="flex flex-col justify-between rounded-xl border border-border bg-background p-6 shadow-xs transition-colors hover:border-success/40">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-success/10 text-success" aria-hidden="true">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-success">
                    Software
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Software & Antivirus Assistance
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  Antivirus installation or activation assistance, operating system setup support, and essential utility configuration.
                </p>
              </div>
              <ul className="mt-6 space-y-2 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                  <span>Antivirus software installation & activation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                  <span>Operating system setup assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                  <span>Driver configuration & system utilities</span>
                </li>
              </ul>
            </article>

            {/* 7. Biometric Attendance Hardware */}
            <article className="flex flex-col justify-between rounded-xl border border-border bg-background p-6 shadow-xs transition-colors hover:border-brand-navy-light/40 sm:col-span-2 lg:col-span-1">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy/10 text-brand-navy dark:bg-brand-navy-light/30 dark:text-foreground" aria-hidden="true">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a1.5 1.5 0 011.5 1.5v4.5a1.5 1.5 0 01-3 0v-4.5a1.5 1.5 0 011.5-1.5z" />
                    </svg>
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-foreground-muted">
                    Hardware Only
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Biometric Attendance Hardware
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  Physical installation and setup of standalone biometric attendance terminals. Focused purely on hardware mounting and connectivity.
                </p>
              </div>
              <ul className="mt-6 space-y-2 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground-muted" aria-hidden="true" />
                  <span>Physical wall-mounting & positioning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground-muted" aria-hidden="true" />
                  <span>Device power & network connectivity</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground-muted" aria-hidden="true" />
                  <span>Hardware initialization & test check</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Product Discovery Section */}
      <section
        id="products"
        aria-labelledby="products-discovery-heading"
        className="border-t border-border bg-background py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-primary">
              <span>HARDWARE & EQUIPMENT DISCOVERY</span>
            </div>
            <h2
              id="products-discovery-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
            >
              Explore Computer Products
            </h2>
            <p className="mt-4 text-base text-foreground-muted sm:text-lg leading-relaxed">
              Help customers discover components, peripherals, printers, and equipment for their computing needs.
            </p>
          </div>

          {/* 4 Product Category Cards Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* 1. Computer Components */}
            <article className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 shadow-xs transition-colors hover:border-accent-blue/40 hover:bg-surface-elevated">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue" aria-hidden="true">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V5.25a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21Z" />
                    </svg>
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-accent-blue">
                    Core Hardware
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Computer Components
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  Processors, graphics cards, motherboards, RAM, storage, power supplies, and cooling for new rigs or upgrades.
                </p>
              </div>
              <ul className="mt-6 space-y-2 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" aria-hidden="true" />
                  <span>Processors (Intel Core & AMD Ryzen)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" aria-hidden="true" />
                  <span>Dedicated Graphics Cards (GPUs)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" aria-hidden="true" />
                  <span>DDR4 & DDR5 Desktop RAM</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" aria-hidden="true" />
                  <span>NVMe SSDs & Modular Power Supplies</span>
                </li>
              </ul>
            </article>

            {/* 2. Custom PC Essentials */}
            <article className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 shadow-xs transition-colors hover:border-accent-coral/40 hover:bg-surface-elevated">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-coral/10 text-accent-coral" aria-hidden="true">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
                    </svg>
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-accent-coral">
                    Build Essentials
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Custom PC Essentials
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  Components and accessories used for custom desktop builds, optimized for thermals, cable management, and airflow.
                </p>
              </div>
              <ul className="mt-6 space-y-2 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-coral" aria-hidden="true" />
                  <span>Mid-Tower & Full-Tower Cabinets</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-coral" aria-hidden="true" />
                  <span>Liquid (AIO) & Tower Air Coolers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-coral" aria-hidden="true" />
                  <span>Chassis Fan Kits & Thermal Pastes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-coral" aria-hidden="true" />
                  <span>Custom Sleeved Extension Cables</span>
                </li>
              </ul>
            </article>

            {/* 3. Peripherals & Accessories */}
            <article className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 shadow-xs transition-colors hover:border-warning/40 hover:bg-surface-elevated">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-warning/10 text-warning" aria-hidden="true">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
                    </svg>
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-warning">
                    Peripherals
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Peripherals & Accessories
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  Keyboards, mice, monitors, cables, and other computer accessories, presented as product categories rather than claims of current stock.
                </p>
              </div>
              <ul className="mt-6 space-y-2 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-warning" aria-hidden="true" />
                  <span>Display Panels & Desktop Monitors</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-warning" aria-hidden="true" />
                  <span>Keyboards, Mice & Desk Mats</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-warning" aria-hidden="true" />
                  <span>HDMI, DisplayPort & Ethernet Cables</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-warning" aria-hidden="true" />
                  <span>USB Hubs, Adapters & Audio Peripherals</span>
                </li>
              </ul>
            </article>

            {/* 4. Printers & Supplies */}
            <article className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 shadow-xs transition-colors hover:border-success/40 hover:bg-surface-elevated">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-success/10 text-success" aria-hidden="true">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                    </svg>
                  </span>
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-success">
                    Printing Supplies
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Printers & Supplies
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  Printers, ink or toner cartridges, and related supplies for commercial office and personal printing needs.
                </p>
              </div>
              <ul className="mt-6 space-y-2 border-t border-border/60 pt-4 text-xs text-foreground-muted">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                  <span>Compact Laser & Inkjet Printers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                  <span>Genuine Replacement Ink Bottles</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                  <span>High-Capacity Toner Cartridges</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                  <span>Printing Maintenance Accessories</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
