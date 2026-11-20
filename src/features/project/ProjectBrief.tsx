"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { TextInput } from "@/components/forms/TextInput";
import { TextArea } from "@/components/forms/TextArea";
import { Select } from "@/components/forms/Select";
import { Checkbox } from "@/components/forms/Checkbox";
import { Honeypot } from "@/components/forms/Honeypot";
import { FormStatus, type SubmitState } from "@/components/forms/FormStatus";
import { emailPattern, submitForm, PENDING_NOTE } from "@/components/forms/submit";

const timelines = [
  { value: "As soon as possible", label: "As soon as possible" },
  { value: "Within 1 to 3 months", label: "Within 1 to 3 months" },
  { value: "3 to 6 months", label: "3 to 6 months" },
  { value: "Flexible", label: "Flexible" },
];
const budgets = [
  { value: "Not set yet", label: "Not set yet" },
  { value: "Small, focused piece", label: "Small, focused piece" },
  { value: "Mid-size programme", label: "Mid-size programme" },
  { value: "Larger programme", label: "Larger programme" },
  { value: "Prefer not to say", label: "Prefer not to say" },
];
const empty = { name: "", email: "", organisation: "", message: "", timeline: "", budget: "" };

const brief = [
  ["What to include", "The system, team or decision that needs to work better, and what is happening today."],
  ["What helps", "Tools already in use, who is affected, and any date that matters."],
  ["What to leave out", "Passwords, access keys and personal data about other people."],
];

export function ProjectBrief() {
  const [values, setValues] = useState(empty);
  const [consent, setConsent] = useState(false);
  const [trap, setTrap] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const ref = useRef<HTMLFormElement>(null);
  const set = (k: keyof typeof empty) => (e: { target: { value: string } }) => setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (state === "submitting") return;
    const e: Record<string, string> = {};
    if (values.name.trim().length < 2) e.name = "Enter your name.";
    if (!emailPattern.test(values.email.trim())) e.email = "Enter a valid email address, for example name@organisation.com.";
    if (values.message.trim().length < 10) e.message = "Add a little more detail (at least 10 characters).";
    if (!consent) e.consent = "Please confirm before sending.";
    setErrors(e);
    if (Object.keys(e).length) {
      setState("error");
      setMessage("Please fix the highlighted fields and send again.");
      ref.current?.querySelector<HTMLElement>(`#${Object.keys(e)[0]}`)?.focus();
      return;
    }
    setState("submitting");
    const res = await submitForm({ form: "project", ...values, consent, website: trap });
    if (res.ok) {
      setState("success");
      setMessage("Thanks. Your project brief passed our checks. " + PENDING_NOTE);
      setValues(empty);
      setConsent(false);
    } else {
      setErrors(res.errors);
      setState("error");
      setMessage(res.message);
    }
  }

  return (
    <section aria-label="Project brief" className="bg-paper">
      <Container className="pb-16 pt-2 lg:pb-[88px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] lg:gap-16">
          <div>
            <p className="t-eyebrow mb-3">01 / A compact brief</p>
            <h2 className="text-[30px] font-medium leading-[36px] tracking-[-0.02em] text-ink lg:text-[38px] lg:leading-[44px]">Say what needs to change.</h2>
            <ul className="mt-7 grid gap-3">
              {brief.map(([t, d]) => (
                <li key={t} className="rounded-[12px] bg-peach p-4 first:bg-peach [&:nth-child(2)]:bg-sky [&:nth-child(3)]:bg-lilac">
                  <p className="t-mono text-[11px] font-bold uppercase tracking-[0.06em] text-brown">{t}</p>
                  <p className="mt-1.5 text-[14.5px] leading-[22px] text-ink">{d}</p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] leading-[21px] text-slate">
              Prefer to answer step by step? Try the <Link href="/talk-to-an-expert" className="font-semibold text-ink underline underline-offset-2">guided conversation</Link>.
            </p>
          </div>

          <form
            ref={ref}
            onSubmit={onSubmit}
            noValidate
            aria-label="Start a project"
            className="relative rounded-[16px] border border-hair bg-white p-5 shadow-[0_10px_30px_-22px_rgba(58,28,13,0.35)] sm:p-7"
          >
            <Honeypot value={trap} onChange={setTrap} />
            <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
              <TextInput id="name" label="Name" required autoComplete="name" value={values.name} onChange={set("name")} error={errors.name} />
              <TextInput id="email" type="email" label="Email" required autoComplete="email" inputMode="email" placeholder="you@organisation.com" value={values.email} onChange={set("email")} error={errors.email} />
            </div>
            <div className="mt-5">
              <TextInput id="organisation" label="Organisation" optional autoComplete="organization" value={values.organisation} onChange={set("organisation")} error={errors.organisation} />
            </div>
            <div className="mt-5">
              <TextArea id="message" label="What do you want to change?" required rows={6} hint="A few sentences is enough. What is happening today, and what should be different?" value={values.message} onChange={set("message")} error={errors.message} maxLength={4000} />
            </div>
            <div className="mt-5 grid gap-x-4 gap-y-5 sm:grid-cols-2">
              <Select id="timeline" label="Timeline" optional options={timelines} placeholder="Select a timeline" value={values.timeline} onChange={set("timeline")} error={errors.timeline} />
              <Select id="budget" label="Budget range" optional options={budgets} placeholder="Select a range" hint="Optional. Skipping it does not change how we read your brief." value={values.budget} onChange={set("budget")} error={errors.budget} />
            </div>
            <div className="mt-5">
              <Checkbox id="consent" checked={consent} onChange={setConsent} error={errors.consent}>
                I agree that TechLamp may use these details to respond to this brief. See the <Link href="/privacy" className="font-semibold text-ink underline underline-offset-2">privacy notice</Link>.
              </Checkbox>
            </div>
            <p className="mt-3 rounded-[12px] bg-peach px-4 py-3 text-[13px] leading-5 text-brown">
              <span className="t-mono mr-1 font-bold uppercase">Pending:</span>
              {PENDING_NOTE}
            </p>
            <div className="mt-5 flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
              <FormStatus state={state} message={message} className="min-w-0 flex-1" />
              <button
                type="submit"
                disabled={state === "submitting"}
                className="t-mono inline-flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-[10px] bg-brand-fill px-7 text-[12px] font-bold uppercase tracking-[0.06em] text-white shadow-[0_4px_10px_-5px_rgba(255,90,0,0.5)] transition-colors hover:bg-[#ff6a1a] disabled:cursor-wait disabled:opacity-70"
              >
                {state === "submitting" ? "Sending" : "Send brief"}
                <ArrowUpRight aria-hidden className="h-[13px] w-[13px]" strokeWidth={2.4} />
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
