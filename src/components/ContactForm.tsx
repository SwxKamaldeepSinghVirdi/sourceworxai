"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ArrowRight, AlertCircle } from "lucide-react";

const INTEREST_OPTIONS = [
  "GrowthWorx · industry applications",
  "FlowWorx · RoomOS AI pilot",
  "FlowWorx · ZTD for my SI practice",
  "TrustWorx · Singularity",
  "A custom build",
  "Partnering",
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [interest, setInterest] = useState(INTEREST_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const prefill = searchParams.get("interest");
    if (prefill && INTEREST_OPTIONS.includes(prefill)) {
      setInterest(prefill);
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          role,
          country,
          interest,
          message,
          website: honeypot,
        }),
      });

      const data = (await res.json()) as { ok?: boolean; message?: string; error?: string };

      if (!res.ok) {
        setError(data.error ?? "Please check your details and try again.");
        setSubmitting(false);
        return;
      }

      setSubmittedMessage(
        data.message ??
          "Thank you. Someone from our team will reply within one business day."
      );
      setName("");
      setEmail("");
      setCompany("");
      setRole("");
      setCountry("");
      setMessage("");
    } catch {
      setError("Network error while sending request. Please email reachout@sourceworx.ai.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submittedMessage) {
    return (
      <div
        className="rounded-xl border border-teal/40 bg-teal-tint p-8"
        role="status"
      >
        <CheckCircle2 className="h-8 w-8 text-teal-deep" />
        <h2 className="mt-4 font-display text-2xl font-bold text-ink">
          Briefing request received
        </h2>
        <p className="mt-2 text-base leading-relaxed text-slate-700">
          {submittedMessage}
        </p>
        <button
          type="button"
          onClick={() => setSubmittedMessage(null)}
          className="mt-6 inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-ink"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 sm:p-8"
    >
      {/* Honeypot field hidden from screen readers and keyboard users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {error && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-semibold text-ink"
          >
            Name <span className="text-teal-deep">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="mt-1.5 w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-ink focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold text-ink"
          >
            Work email <span className="text-teal-deep">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="mt-1.5 w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-ink focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-company"
            className="block text-sm font-semibold text-ink"
          >
            Company <span className="text-teal-deep">*</span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Organisation name"
            className="mt-1.5 w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-ink focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-role"
            className="block text-sm font-semibold text-ink"
          >
            Role
          </label>
          <input
            id="contact-role"
            name="role"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. CIO, VP Delivery, Head of Growth"
            className="mt-1.5 w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-ink focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-country"
            className="block text-sm font-semibold text-ink"
          >
            Country
          </label>
          <input
            id="contact-country"
            name="country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="India, United States, UK..."
            className="mt-1.5 w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-ink focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-interest"
            className="block text-sm font-semibold text-ink"
          >
            Interested in <span className="text-teal-deep">*</span>
          </label>
          <select
            id="contact-interest"
            name="interest"
            required
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="mt-1.5 w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-ink focus:border-ink focus:outline-none"
          >
            {INTEREST_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-semibold text-ink"
        >
          What would you like AI to do? <span className="text-teal-deep">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us the revenue target, slow workflow or AI governance question you want to address."
          className="mt-1.5 w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400 focus:border-ink focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-soft disabled:opacity-60 sm:w-auto"
      >
        <span>{submitting ? "Sending..." : "Send request"}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

