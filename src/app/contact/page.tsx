import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact ARS Computers",
  description:
    "Get in touch with ARS Computers to enquire about computer components, custom PC assembly, hardware diagnostics and repair, CCTV security, and equipment setup.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background Subtle Accent Gradients */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-10"
        aria-hidden="true"
      >
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 left-0 h-80 w-80 rounded-full bg-accent-blue/10 blur-3xl" />
      </div>

      {/* Hero / Introduction Section */}
      <section
        aria-labelledby="contact-heading"
        className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left Column: Heading & Guidance Copy */}
          <div className="lg:col-span-5">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground-muted shadow-xs">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              <span>Direct Enquiries &amp; Consultation</span>
            </div>

            {/* Main H1 Heading */}
            <h1
              id="contact-heading"
              className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:leading-[1.15]"
            >
              Contact ARS Computers
            </h1>

            {/* Introduction Copy */}
            <p className="mt-6 text-base text-foreground-muted sm:text-lg leading-relaxed">
              Tell us what you need help with. Whether you are exploring computer components, planning a custom PC build,
              dealing with a hardware issue, or enquiring about equipment installation, share a few details so your requirement
              can be understood.
            </p>

            <p className="mt-4 text-sm text-foreground-muted leading-relaxed">
              ARS Computers works on an enquiry-based consultation model. Sharing specific symptoms, model numbers, or intended
              software workloads helps us provide accurate component compatibility and service evaluations.
            </p>

            {/* Helpful Enquiry Tips */}
            <div className="mt-8 rounded-xl border border-border bg-surface p-5 text-xs sm:text-sm text-foreground-muted space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Helpful Details to Include
              </h2>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span><strong>Component Upgrades:</strong> Mention existing motherboard, current RAM capacity, or power supply wattage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-coral" aria-hidden="true" />
                  <span><strong>Custom PC Assembly:</strong> Detail primary workloads (gaming, 3D design, office tasks) and target budget.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" aria-hidden="true" />
                  <span><strong>Hardware Diagnostics:</strong> Describe exact error symptoms (no display output, blue screens, fan noise).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden="true" />
                  <span><strong>Premises Setup:</strong> Describe camera coverage points or physical mounting location for biometric units.</span>
                </li>
              </ul>
            </div>

            {/* Cross Links to Explore */}
            <div className="mt-8 flex flex-wrap gap-3 text-xs">
              <Link
                href="/products"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Browse product categories &rarr;
              </Link>
              <span className="text-foreground-muted" aria-hidden="true">•</span>
              <Link
                href="/services"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                View technical services &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Process & Privacy Guidance Section */}
      <section
        id="enquiry-standards"
        aria-labelledby="enquiry-standards-heading"
        className="border-t border-border bg-surface/50 py-12 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2
              id="enquiry-standards-heading"
              className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
            >
              Enquiry Principles &amp; Data Handling
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 text-xs text-foreground-muted leading-relaxed">
              <div className="rounded-lg border border-border/80 bg-background p-4">
                <h3 className="font-semibold text-foreground text-sm">Factual Advice</h3>
                <p className="mt-1.5">
                  We review component requirements based on manufacturer specifications, physical dimensions,
                  and electrical compatibility without recommending unnecessary replacements.
                </p>
              </div>
              <div className="rounded-lg border border-border/80 bg-background p-4">
                <h3 className="font-semibold text-foreground text-sm">Privacy &amp; Contact Use</h3>
                <p className="mt-1.5">
                  Information provided in customer enquiries is used exclusively to evaluate technical feasibility,
                  check distributor availability, and respond to your specific request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
