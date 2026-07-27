"use client";

import { useRef, useState } from "react";
import SectionHeading from "./SectionHeading";

const involvementOptions = [
  "Sponsor",
  "Active Field Work",
  "Interested Party (observer only)",
  "Valley Adopter (Project Lead Provider)",
];
const activityOptions = ["Fishing", "Tramping", "Deerstalking", "Birdwatching"];
const ageOptions = ["< 20 yr", "21-30 yr", "31-40 yr", "41-50 yr", "51-60 yr", "61-70 yr", "> 70 yr"];

const inputBase =
  "w-full rounded-[3px] border bg-white px-[13px] py-[11px] font-sans text-[15px] text-slate outline-none transition-colors focus:border-brand";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvgarvg";

type Errors = Partial<Record<"name" | "email" | "phone" | "town", string>>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim() ?? "";
    const email = (data.get("email") as string)?.trim() ?? "";
    const phone = (data.get("phone") as string)?.trim() ?? "";
    const town = (data.get("town") as string)?.trim() ?? "";

    const next: Errors = {};
    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (!phone) next.phone = "Please enter your phone number.";
    if (!town) next.town = "Please enter your town of residence.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== "undefined") window.scrollTo({ top: 300, behavior: "smooth" });
      } else {
        const json = (await res.json().catch(() => null)) as { errors?: { message: string }[] } | null;
        setSubmitError(
          json?.errors?.map((err) => err.message).join(", ") || "Something went wrong. Please try again.",
        );
      }
    } catch {
      setSubmitError("Couldn’t send your message. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div>
        <SectionHeading gap={28}>Send a message</SectionHeading>
        <div className="rounded-[4px] border border-success-border bg-success-bg px-6 py-[22px]">
          <p className="mb-[6px] font-display text-[17px] font-semibold text-[#4d7a2e]">
            Thank you — your message has been sent.
          </p>
          <p className="m-0 text-[15px] text-[#5a6b4a]">
            We’ll be in touch soon about getting you involved with the VALLEYS PROJECT.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SectionHeading gap={28}>Send a message</SectionHeading>

      <form ref={formRef} noValidate onSubmit={handleSubmit} className="flex flex-col gap-[22px]">
        {/* Honeypot — hidden from real users, catches bots */}
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

        {/* Name / Email / Phone / Town */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Name" name="name" type="text" required error={errors.name} />
          <Field label="Email" name="email" type="email" required error={errors.email} />
          <Field label="Phone" name="phone" type="tel" required error={errors.phone} />
          <Field label="Town of Residence" name="town" type="text" required error={errors.town} />
        </div>

        {/* Preferred Involvement */}
        <fieldset className="m-0 border-0 p-0">
          <legend className="mb-3 block font-sans text-[14px] font-semibold text-slate">Preferred Involvement</legend>
          <div className="flex flex-col gap-[11px]">
            {involvementOptions.map((opt) => (
              <label key={opt} className="flex cursor-pointer items-center gap-[10px] text-[15px] text-slate">
                <input
                  type="checkbox"
                  name="involvement"
                  value={opt}
                  className="h-4 w-4 accent-brand"
                />
                {opt}
              </label>
            ))}
          </div>
          <p className="m-0 mt-[10px] font-sans text-[13.5px] italic text-muted-2">Tick more than one box if appropriate</p>
        </fieldset>

        {/* Favoured Recreational Activities */}
        <fieldset className="m-0 border-0 p-0">
          <legend className="mb-3 block font-sans text-[14px] font-semibold text-slate">
            Favoured Recreational Activities
          </legend>
          <div className="grid grid-cols-1 gap-x-5 gap-y-[11px] sm:grid-cols-2">
            {activityOptions.map((opt) => (
              <label key={opt} className="flex cursor-pointer items-center gap-[10px] text-[15px] text-slate">
                <input type="checkbox" name="activities" value={opt} className="h-4 w-4 accent-brand" />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Age Range */}
        <fieldset className="m-0 border-0 p-0">
          <legend className="mb-3 block font-sans text-[14px] font-semibold text-slate">Age Range</legend>
          <div className="flex flex-wrap gap-x-[22px] gap-y-[11px]">
            {ageOptions.map((opt) => (
              <label key={opt} className="flex cursor-pointer items-center gap-2 text-[15px] text-slate">
                <input type="radio" name="agerange" value={opt} className="h-[15px] w-[15px] accent-brand" />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Notes */}
        <div>
          <label htmlFor="notes" className="mb-[7px] block font-sans text-[14px] font-semibold text-slate">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Please enter any other notes here"
            className={`${inputBase} resize-y border-inputborder`}
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={submitting}
            className="cursor-pointer rounded-[3px] bg-brand px-10 py-[14px] font-display text-[14px] font-semibold uppercase tracking-[1.3px] text-white transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Sending…" : "Submit"}
          </button>
          {submitError && <p className="m-0 mt-3 text-[14px] text-req">{submitError}</p>}
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  required,
  error,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-[7px] block font-sans text-[14px] font-semibold text-slate">
        {label} {required && <span className="text-req">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={error ? true : undefined}
        className={`${inputBase} ${error ? "border-req" : "border-inputborder"}`}
      />
      {error && <p className="m-0 mt-1 text-[13.5px] text-req">{error}</p>}
    </div>
  );
}
