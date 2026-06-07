"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { siteConfig } from "@/content/site-config";

const interests = ["Court hire", "A first lesson", "Joining a league", "Junior academy", "Membership", "Something else"];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [interest, setInterest] = useState(interests[0]);

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-ink/10 bg-surface/40 p-8">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check size={20} />
        </span>
        <h3 className="font-display text-xl font-semibold text-ink">Thanks — message received</h3>
        <p className="text-[15px] leading-relaxed text-ink/65">
          We'll be in touch shortly. In a hurry? Call us on{" "}
          <a href={`tel:${siteConfig.company.phone}`} className="text-primary underline-offset-2 hover:underline">
            {siteConfig.company.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name">
          <input required name="name" type="text" autoComplete="name" className={inputCls} placeholder="Your name" />
        </Field>
        <Field label="Email">
          <input required name="email" type="email" autoComplete="email" className={inputCls} placeholder="you@email.com" />
        </Field>
      </div>

      <Field label="I'm interested in">
        <div className="flex flex-wrap gap-2">
          {interests.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setInterest(opt)}
              className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                interest === opt
                  ? "border-primary bg-primary text-cream"
                  : "border-ink/15 text-ink/65 hover:border-ink/30"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Message">
        <textarea
          name="message"
          rows={5}
          className={inputCls}
          placeholder="Tell us your level and what you're after — first-timer or returning, casual or competitive."
        />
      </Field>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
      >
        Send message <ArrowUpRight size={16} />
      </button>
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-ink/15 bg-bg px-4 py-3 text-[15px] text-ink placeholder:text-ink/35 transition-colors focus:border-primary focus:outline-none";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">{label}</span>
      {children}
    </label>
  );
}
