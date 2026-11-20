"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { TextInput } from "@/components/forms/TextInput";
import { TextArea } from "@/components/forms/TextArea";
import { Select } from "@/components/forms/Select";
import { Checkbox } from "@/components/forms/Checkbox";
import { Honeypot } from "@/components/forms/Honeypot";
import { FormStatus, type SubmitState } from "@/components/forms/FormStatus";
import { emailPattern, submitForm, PENDING_NOTE } from "@/components/forms/submit";
import { enquiryRoutes, enquiryTypeOptions } from "@/data/contact";
import { cn } from "@/lib/cn";

const empty = { name: "", organisation: "", role: "", email: "", phone: "", country: "", enquiryType: "", message: "" };

/** Route cards and the enquiry form share one piece of state (selected enquiry type). `between` is rendered under the cards. */
export function ContactEnquiry({ between }: { between?: ReactNode }) {
  const [values, setValues] = useState(empty);
  const [consent, setConsent] = useState(false);
  const [trap, setTrap] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const set = (k: keyof typeof empty) => (e: { target: { value: string } }) => setValues((v) => ({ ...v, [k]: e.target.value }));

  useEffect(() => {
    if (window.location.hash === "#support") setValues((v) => ({ ...v, enquiryType: "support" }));
  }, []);

  const choose = (id: string) => {
    setValues((v) => ({ ...v, enquiryType: id }));
    document.getElementById("enquiry")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (values.name.trim().length < 2) e.name = "Enter your name.";
    if (!emailPattern.test(values.email.trim())) e.email = "Enter a valid email address, for example name@organisation.com.";
    if (!values.enquiryType) e.enquiryType = "Select what your enquiry is about.";
    if (values.message.trim().length < 10) e.message = "Add a little more detail (at least 10 characters).";
    if (!consent) e.consent = "Please confirm before sending.";
    return e;
  };

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (state === "submitting") return;
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      setState("error");
      setMessage("Please fix the highlighted fields and send again.");
      const first = Object.keys(e)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"], #${first}`)?.focus();
      return;
    }
    setState("submitting");
    const res = await submitForm({ form: "contact", ...values, consent, website: trap });
    if (res.ok) {
      setState("success");
      setMessage("Thanks. Your enquiry passed our checks. " + PENDING_NOTE);
      setValues(empty);
      setConsent(false);
    } else {
      setErrors(res.errors);
      setState("error");
      setMessage(res.message);
    }
  }

  return (
    <>
      <section aria-labelledby="start-title" className="bg-paper">
        <Container className="pb-14 pt-4 lg:pb-[72px]">
          <SectionHeader id="start-title" index="01" eyebrow="Choose your starting point" title="Where should this go?" className="mb-8 lg:mb-10" />
          <ul className="grid list-none grid-cols-2 gap-3 p-0 md:grid-cols-3 lg:grid-cols-6 lg:gap-[15px]">
            {enquiryRoutes.map((r) => {
              const active = values.enquiryType === r.id;
              const featured = r.id === "project";
              const cls = cn(
                "group/card flex h-full min-h-[132px] w-full flex-col justify-between rounded-[12px] border p-[18px] text-left shadow-[0_2px_8px_-4px_rgba(58,28,13,0.18)] transition-[background-color,box-shadow,border-color] hover:shadow-[0_14px_28px_-18px_rgba(58,28,13,0.4)]",
                featured || active ? "border-brand bg-brand-fill text-white" : "border-hair bg-white text-ink",
              );
              const inner = (
                <>
                  <span className={cn("t-mono text-[11px]", featured || active ? "text-white" : "text-slate")}>{r.index}</span>
                  <span>
                    <span className="block text-[19px] font-medium leading-[24px] tracking-[-0.01em]">{r.label}</span>
                    <ArrowRight aria-hidden className="mt-3 h-4 w-4 transition-transform group-hover/card:translate-x-1" strokeWidth={2} />
                  </span>
                </>
              );
              return (
                <li key={r.id} id={r.anchor} className="scroll-mt-28">
                  {r.href ? (
                    <Link href={r.href} className={cls}>
                      {inner}
                    </Link>
                  ) : (
                    <button type="button" aria-pressed={active} onClick={() => choose(r.id)} className={cls}>
                      {inner}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {between}

      <section id="enquiry" aria-labelledby="enquiry-title" className="scroll-mt-24 bg-paper">
        <Container className="pb-14 pt-4 lg:pb-[72px] lg:pt-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)] lg:gap-16">
            <div>
              <p className="t-eyebrow mb-3">03 / Send an enquiry</p>
              <h2 id="enquiry-title" className="text-[32px] font-medium leading-[38px] tracking-[-0.02em] text-ink lg:text-[40px] lg:leading-[46px]">
                A few useful details. Nothing unnecessary.
              </h2>
              <p className="t-body mt-5 max-w-[400px]">Share enough context for the right team to respond thoughtfully.</p>
              <p className="mt-4 max-w-[400px] text-[14px] leading-[21px] text-slate">
                Your information is used only to handle this enquiry and is not sold or shared for unrelated marketing.
              </p>
              <p className="mt-4 max-w-[400px] rounded-[12px] bg-peach px-4 py-3 text-[13px] leading-5 text-brown">
                <span className="t-mono mr-1 font-bold uppercase">Pending:</span>
                {PENDING_NOTE}
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={onSubmit}
              noValidate
              aria-labelledby="enquiry-title"
              className="relative rounded-[16px] border border-hair bg-white p-5 shadow-[0_10px_30px_-22px_rgba(58,28,13,0.35)] sm:p-7"
            >
              <Honeypot value={trap} onChange={setTrap} />
              <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
                <TextInput id="name" label="Name" required autoComplete="name" placeholder="Your name" value={values.name} onChange={set("name")} error={errors.name} />
                <TextInput id="organisation" label="Organisation" optional autoComplete="organization" placeholder="Organisation name" value={values.organisation} onChange={set("organisation")} error={errors.organisation} />
              </div>
              <div className="mt-5 grid gap-x-4 gap-y-5 md:grid-cols-3">
                <TextInput id="role" label="Role" optional autoComplete="organization-title" placeholder="Your role" value={values.role} onChange={set("role")} error={errors.role} />
                <TextInput id="email" type="email" label="Email" required autoComplete="email" inputMode="email" placeholder="you@organisation.com" value={values.email} onChange={set("email")} error={errors.email} />
                <TextInput id="phone" type="tel" label="Phone" optional autoComplete="tel" inputMode="tel" placeholder="Optional" value={values.phone} onChange={set("phone")} error={errors.phone} />
              </div>
              <div className="mt-5 grid gap-x-4 gap-y-5 sm:grid-cols-2">
                <TextInput id="country" label="Country" optional autoComplete="country-name" placeholder="Country" value={values.country} onChange={set("country")} error={errors.country} />
                <Select id="enquiryType" label="Enquiry type" required placeholder="Select enquiry type" options={enquiryTypeOptions} value={values.enquiryType} onChange={set("enquiryType")} error={errors.enquiryType} />
              </div>
              <div className="mt-5">
                <TextArea id="message" label="Message" required rows={6} placeholder="What are you trying to move forward?" value={values.message} onChange={set("message")} error={errors.message} />
              </div>
              <p className="mt-4 text-[13px] leading-5 text-slate-2">File attachments are not accepted yet. Describe the request in the message and we can ask for documents later.</p>
              <div className="mt-3">
                <Checkbox id="consent" checked={consent} onChange={setConsent} error={errors.consent}>
                  I agree that TechLamp may use these details to respond to this enquiry. See the <Link href="/privacy" className="font-semibold text-ink underline underline-offset-2">privacy notice</Link>.
                </Checkbox>
              </div>
              <div className="mt-4 flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
                <FormStatus state={state} message={message} className="min-w-0 flex-1" />
                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="t-mono inline-flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-[10px] bg-brand-fill px-7 text-[12px] font-bold uppercase tracking-[0.06em] text-white shadow-[0_4px_10px_-5px_rgba(255,90,0,0.5)] transition-colors hover:bg-[#e2500a] disabled:cursor-wait disabled:opacity-70"
                >
                  {state === "submitting" ? "Sending" : "Send enquiry"}
                  <ArrowUpRight aria-hidden className="h-[13px] w-[13px]" strokeWidth={2.4} />
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
