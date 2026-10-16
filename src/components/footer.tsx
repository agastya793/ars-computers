import React from "react";
import Link from "next/link";
import Image from "next/image";

const PRODUCT_LINKS = [
  { label: "Computer Components & Parts", href: "/products" },
  { label: "Custom Gaming & Workstation PCs", href: "/custom-pc" },
  { label: "Storage & High-Speed Memory", href: "/products" },
  { label: "Monitors & Input Peripherals", href: "/products" },
  { label: "Printers & Consumables", href: "/products" },
];

const SERVICE_LINKS = [
  { label: "Desktop & Laptop Diagnostics", href: "/services" },
  { label: "CCTV Installation & Maintenance", href: "/cctv" },
  { label: "Laser & Inkjet Printer Servicing", href: "/services" },
  { label: "OS Setup & Antivirus Security", href: "/services" },
];

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="mt-auto border-t border-border bg-surface text-foreground-muted">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            >
              <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-background border border-border">
                <Image
                  src="/ars-computers-logo.png"
                  alt="ARS Computers"
                  width={36}
                  height={36}
                  className="h-full w-full object-contain p-0.5"
                />
              </div>
              <span className="font-bold text-base tracking-tight text-foreground">
                ARS COMPUTERS
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-foreground-muted">
              Specialized computer hardware, bespoke PC assembly, component diagnostics,
              CCTV security surveillance, and commercial IT infrastructure services.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-foreground-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-success"></span>
              <span>Enquiry-based hardware catalogue</span>
            </div>
          </div>

          {/* Column 1: Hardware & Products */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {PRODUCT_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Diagnostic & Support Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICE_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Enquiries & Assistance */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Enquiries & Support
            </h3>
            <p className="mt-4 text-sm text-foreground-muted leading-relaxed">
              Have a specific hardware requirement, custom build spec, or service inquiry?
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-brand-navy px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-navy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:bg-primary dark:hover:bg-primary-hover"
              >
                Send an Enquiry
              </Link>
            </div>
            <p className="mt-3 text-xs text-foreground-muted">
              Fast turnaround for retail and institutional orders.
            </p>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground-muted">
          <p>© {currentYear} ARS Computers. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Hardware catalogue is enquiry-based. Specifications and pricing are subject to availability.
          </p>
        </div>
      </div>
    </footer>
  );
}
