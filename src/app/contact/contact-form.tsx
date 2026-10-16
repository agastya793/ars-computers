"use client";

import React, { useState, useRef } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  category: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  category?: string;
  subject?: string;
  message?: string;
}

const CATEGORY_OPTIONS = [
  { value: "", label: "Select an enquiry category..." },
  { value: "components", label: "Computer components" },
  { value: "custom-pc", label: "Custom PC build" },
  { value: "repair-diagnostics", label: "Computer repair or diagnostics" },
  { value: "cctv", label: "CCTV equipment or installation" },
  { value: "printers", label: "Printers or cartridge services" },
  { value: "software-antivirus", label: "Software or antivirus assistance" },
  { value: "biometric", label: "Biometric attendance hardware installation" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    category: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [validationNotice, setValidationNotice] = useState<string | null>(null);

  // Field refs for accessible focus management upon error
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case "fullName": {
        const trimmed = value.trim();
        if (!trimmed) return "Full name is required.";
        if (trimmed.length < 2) return "Full name must be at least 2 characters.";
        if (trimmed.length > 100) return "Full name must not exceed 100 characters.";
        return undefined;
      }
      case "email": {
        const trimmed = value.trim();
        if (!trimmed) return "Email address is required.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmed)) return "Please enter a valid email address (e.g., name@example.com).";
        if (trimmed.length > 254) return "Email address must not exceed 254 characters.";
        return undefined;
      }
      case "phone": {
        const trimmed = value.trim();
        if (!trimmed) return undefined; // Optional field
        const phoneRegex = /^[\d\s+\-()]{7,20}$/;
        if (!phoneRegex.test(trimmed)) {
          return "Please enter a valid phone number (7 to 20 digits, spaces, or standard symbols).";
        }
        return undefined;
      }
      case "category": {
        if (!value) return "Please select an enquiry category.";
        const validValues = CATEGORY_OPTIONS.map((opt) => opt.value).filter(Boolean);
        if (!validValues.includes(value)) return "Please select a valid enquiry category.";
        return undefined;
      }
      case "subject": {
        const trimmed = value.trim();
        if (!trimmed) return "Subject is required.";
        if (trimmed.length < 3) return "Subject must be at least 3 characters.";
        if (trimmed.length > 150) return "Subject must not exceed 150 characters.";
        return undefined;
      }
      case "message": {
        const trimmed = value.trim();
        if (!trimmed) return "Message is required.";
        if (trimmed.length < 10) return "Please provide more detail in your message (at least 10 characters).";
        if (trimmed.length > 2000) return "Message must not exceed 2,000 characters.";
        return undefined;
      }
      default:
        return undefined;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Re-validate if field was already touched
    if (touched[name]) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }

    if (validationNotice) {
      setValidationNotice(null);
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched: Record<string, boolean> = {
      fullName: true,
      email: true,
      phone: true,
      category: true,
      subject: true,
      message: true,
    };
    setTouched(allTouched);

    // Validate all fields
    const newErrors: FormErrors = {};
    (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    // If there are errors, focus on the first invalid field
    if (Object.keys(newErrors).length > 0) {
      setValidationNotice(null);
      if (newErrors.fullName && fullNameRef.current) {
        fullNameRef.current.focus();
      } else if (newErrors.email && emailRef.current) {
        emailRef.current.focus();
      } else if (newErrors.phone && phoneRef.current) {
        phoneRef.current.focus();
      } else if (newErrors.category && categoryRef.current) {
        categoryRef.current.focus();
      } else if (newErrors.subject && subjectRef.current) {
        subjectRef.current.focus();
      } else if (newErrors.message && messageRef.current) {
        messageRef.current.focus();
      }
      return;
    }

    // All fields are valid.
    // Display an honest, explicit message about current backend staging status.
    setValidationNotice(
      "Validation successful: Your enquiry details satisfy all client-side requirements. Please note that automated online delivery is currently in staging and will be activated once the transactional email integration (Brevo) and database (Supabase) are connected in upcoming stages. No message was transmitted over the network."
    );
  };

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-xs">
      {/* Architecture & Integration Transparency Note */}
      <div
        className="mb-8 rounded-xl border border-warning/30 bg-warning/10 p-4 text-xs sm:text-sm text-foreground leading-relaxed"
        role="region"
        aria-label="Submission status notice"
      >
        <div className="flex items-start gap-3">
          <svg
            className="h-5 w-5 shrink-0 text-warning mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          <div>
            <p className="font-semibold text-foreground">
              Enquiry Form Interface &amp; Validation
            </p>
            <p className="mt-1 text-foreground-muted">
              This form provides full interactive validation for preparing customer enquiries.
              Automated online message delivery is scheduled for activation in a subsequent stage
              following Brevo email and Supabase service integration.
            </p>
          </div>
        </div>
      </div>

      {/* Validation Pass Notice */}
      {validationNotice && (
        <div
          tabIndex={-1}
          role="status"
          aria-live="polite"
          className="mb-8 rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm text-foreground"
        >
          <div className="flex items-start gap-3">
            <svg
              className="h-5 w-5 shrink-0 text-primary mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <div>
              <p className="font-semibold text-primary">Enquiry Form Validated</p>
              <p className="mt-1 text-xs sm:text-sm text-foreground-muted leading-relaxed">
                {validationNotice}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Summary Banner if Form Submitted with Errors */}
      {Object.keys(errors).length > 0 && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-8 rounded-xl border border-accent-coral/30 bg-accent-coral/10 p-4 text-sm text-accent-coral"
        >
          <p className="font-semibold">Please correct the highlighted fields below:</p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-xs sm:text-sm">
            {Object.values(errors).map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate aria-label="Customer enquiry form">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Full Name */}
          <div className="sm:col-span-1">
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-foreground"
            >
              Full name <span className="text-accent-coral" aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <div className="mt-2">
              <input
                ref={fullNameRef}
                type="text"
                id="fullName"
                name="fullName"
                autoComplete="name"
                required
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                placeholder="e.g. Jane Doe"
                className={`w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-foreground-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  errors.fullName ? "border-accent-coral ring-1 ring-accent-coral" : "border-border"
                }`}
              />
            </div>
            {errors.fullName && (
              <p id="fullName-error" className="mt-1.5 text-xs text-accent-coral">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div className="sm:col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-foreground"
            >
              Email address <span className="text-accent-coral" aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <div className="mt-2">
              <input
                ref={emailRef}
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="e.g. jane@example.com"
                className={`w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-foreground-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  errors.email ? "border-accent-coral ring-1 ring-accent-coral" : "border-border"
                }`}
              />
            </div>
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-accent-coral">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="sm:col-span-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-foreground"
              >
                Phone number
              </label>
              <span className="text-xs text-foreground-muted">Optional</span>
            </div>
            <div className="mt-2">
              <input
                ref={phoneRef}
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                placeholder="e.g. +91 98765 43210"
                className={`w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-foreground-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  errors.phone ? "border-accent-coral ring-1 ring-accent-coral" : "border-border"
                }`}
              />
            </div>
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-xs text-accent-coral">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Enquiry Category */}
          <div className="sm:col-span-1">
            <label
              htmlFor="category"
              className="block text-sm font-semibold text-foreground"
            >
              Enquiry category <span className="text-accent-coral" aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <div className="mt-2">
              <select
                ref={categoryRef}
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.category)}
                aria-describedby={errors.category ? "category-error" : undefined}
                className={`w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  errors.category ? "border-accent-coral ring-1 ring-accent-coral" : "border-border"
                }`}
              >
                {CATEGORY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            {errors.category && (
              <p id="category-error" className="mt-1.5 text-xs text-accent-coral">
                {errors.category}
              </p>
            )}
          </div>

          {/* Subject */}
          <div className="sm:col-span-2">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-foreground"
            >
              Subject <span className="text-accent-coral" aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <div className="mt-2">
              <input
                ref={subjectRef}
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : "subject-hint"}
                placeholder="Brief summary of your requirement (e.g. Motherboard replacement query)"
                maxLength={150}
                className={`w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-foreground-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  errors.subject ? "border-accent-coral ring-1 ring-accent-coral" : "border-border"
                }`}
              />
            </div>
            <div className="mt-1.5 flex items-center justify-between text-xs text-foreground-muted">
              {errors.subject ? (
                <p id="subject-error" className="text-accent-coral">
                  {errors.subject}
                </p>
              ) : (
                <p id="subject-hint">Concise summary of what you are enquiring about.</p>
              )}
              <span aria-hidden="true">{formData.subject.length}/150</span>
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-foreground"
            >
              Message <span className="text-accent-coral" aria-hidden="true">*</span>
              <span className="sr-only">(required)</span>
            </label>
            <div className="mt-2">
              <textarea
                ref={messageRef}
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : "message-hint"}
                placeholder="Please describe your specific requirement, system symptoms, hardware model, intended use, or installation needs..."
                maxLength={2000}
                className={`w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-foreground-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  errors.message ? "border-accent-coral ring-1 ring-accent-coral" : "border-border"
                }`}
              />
            </div>
            <div className="mt-1.5 flex items-center justify-between text-xs text-foreground-muted">
              {errors.message ? (
                <p id="message-error" className="text-accent-coral">
                  {errors.message}
                </p>
              ) : (
                <p id="message-hint">
                  Include relevant details like device model, symptoms, or budget.
                </p>
              )}
              <span aria-hidden="true">{formData.message.length}/2000</span>
            </div>
          </div>
        </div>

        {/* Submit Actions */}
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-border pt-6">
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Validate &amp; Prepare Enquiry
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
          </button>

          <p className="text-xs text-foreground-muted">
            All required fields marked with <span className="text-accent-coral font-bold">*</span>
          </p>
        </div>
      </form>
    </div>
  );
}
