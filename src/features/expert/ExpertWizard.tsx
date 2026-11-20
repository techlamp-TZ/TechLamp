"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ChoiceCards } from "@/components/forms/ChoiceCards";
import { StepProgress } from "@/components/forms/StepProgress";
import { TextInput } from "@/components/forms/TextInput";
import { TextArea } from "@/components/forms/TextArea";
import { Select } from "@/components/forms/Select";
import { Checkbox } from "@/components/forms/Checkbox";
import { Honeypot } from "@/components/forms/Honeypot";
import { FormStatus, type SubmitState } from "@/components/forms/FormStatus";
import { emailPattern, submitForm, PENDING_NOTE } from "@/components/forms/submit";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { branchNames, branchOf, optionsFor, pathFor, goals, type Question, type WizardStep } from "@/data/expert-wizard";

type Answers = Record<string, string | string[]>;

const str = (a: Answers, k: string) => (typeof a[k] === "string" ? (a[k] as string) : "");
const arr = (a: Answers, k: string) => (Array.isArray(a[k]) ? (a[k] as string[]) : []);

export function ExpertWizard() {
  const [answers, setAnswers] = useState<Answers>({});
  const [index, setIndex] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [consent, setConsent] = useState(false);
  const [trap, setTrap] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);
  const reduced = useReducedMotion();

  const goal = str(answers, "goal");
  const branch = branchOf(goal);
  const path = useMemo(() => pathFor(goal), [goal]);
  const step: WizardStep = path[Math.min(index, path.length - 1)];
  const total = path.length;

  // Move focus to the new step heading (not on first paint).
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus({ preventScroll: true });
    headingRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, done]);

  const optLabel = (q: Question, v: string) => optionsFor(q, branch).find((o) => o.value === v)?.label ?? v;

  const setAnswer = (id: string, v: string | string[]) => {
    setErrors((e) => ({ ...e, [id]: "" }));
    setAnswers((a) => {
      const next = { ...a, [id]: v };
      if (id === "goal" && branchOf(v as string) !== branchOf(a.goal as string)) delete next.focus;
      return next;
    });
  };

  const validateStep = (s: WizardStep) => {
    const e: Record<string, string> = {};
    for (const q of s.questions) {
      const v = answers[q.id];
      const text = typeof v === "string" ? v.trim() : "";
      if (q.required && (Array.isArray(v) ? v.length === 0 : !text)) {
        e[q.id] = q.kind === "single" || q.kind === "multi" ? "Choose one option to continue." : "This field is required.";
      } else if (q.id === "name" && text.length < 2) e[q.id] = "Enter your name.";
      else if (q.kind === "email" && !emailPattern.test(text)) e[q.id] = "Enter a valid email address.";
      else if (q.id === "message" && text.length < 10) e[q.id] = "Add a little more detail (at least 10 characters).";
    }
    if (s.final && !consent) e.consent = "Please confirm before sending.";
    return e;
  };

  const focusFirstError = (e: Record<string, string>) => {
    const key = Object.keys(e).find((k) => e[k]);
    if (!key) return;
    requestAnimationFrame(() => {
      const root = document.getElementById("wizard-form");
      const el = root?.querySelector<HTMLElement>(`#q-${key}, input[name="q-${key}"], #${key}`);
      el?.focus();
    });
  };

  const goNext = () => {
    const e = validateStep(step);
    setErrors(e);
    if (Object.values(e).some(Boolean)) return focusFirstError(e);
    setIndex((i) => Math.min(i + 1, total - 1));
  };

  const buildDetails = () => {
    const d: Record<string, string> = {};
    const put = (k: string, v: string) => v && (d[k] = v);
    put("Branch", branch ? branchNames[branch] : "");
    put("Goal", goals.find((g) => g.value === goal)?.label ?? "");
    const focusQ = path.find((s) => s.id === "focus")?.questions[0];
    put("Problem", focusQ ? optLabel(focusQ, str(answers, "focus")) : "");
    put("Platforms", arr(answers, "platforms").join(", "));
    for (const [k, id] of [["Stage", "stage"], ["Organisation type", "orgType"], ["Industry", "industry"], ["Size", "size"], ["Country", "country"], ["Systems and data", "systems"]] as const) {
      const q = steps_find(path, id);
      put(k, q ? optLabel(q, str(answers, id)) : "");
    }
    return d;
  };

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (state === "submitting") return;
    if (!step.final) return goNext();
    const e = validateStep(step);
    setErrors(e);
    if (Object.values(e).some(Boolean)) {
      setState("error");
      setMessage("Please fix the highlighted fields and send again.");
      return focusFirstError(e);
    }
    setState("submitting");
    const timelineQ = steps_find(path, "timeline");
    const budgetQ = steps_find(path, "budget");
    const res = await submitForm({
      form: "expert",
      name: str(answers, "name"),
      email: str(answers, "email"),
      organisation: str(answers, "organisation"),
      role: str(answers, "role"),
      message: str(answers, "message"),
      timeline: timelineQ ? optLabel(timelineQ, str(answers, "timeline")) : "",
      budget: budgetQ ? optLabel(budgetQ, str(answers, "budget")) : "",
      details: buildDetails(),
      consent,
      website: trap,
    });
    if (res.ok) {
      setState("idle");
      setDone(true);
    } else {
      setErrors(res.errors);
      setState("error");
      setMessage(res.message);
    }
  }

  const summary = useMemo(() => {
    const rows: { label: string; value: string }[] = [];
    for (const s of path) {
      if (s.final) continue;
      for (const q of s.questions) {
        const v = answers[q.id];
        const text = Array.isArray(v) ? v.map((x) => optLabel(q, x)).join(", ") : typeof v === "string" && v ? (q.kind === "textarea" ? (v.length > 90 ? v.slice(0, 90) + "…" : v) : optLabel(q, v)) : "";
        if (text) rows.push({ label: q.label.replace(/ \(optional\)/, ""), value: text });
      }
    }
    return rows;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers, path, branch]);

  const railSteps = path.map((s) => ({ id: s.id, label: s.rail }));

  if (done) {
    return (
      <Container className="pb-16 pt-2 lg:pb-[88px]">
        <div className="rounded-[16px] border border-hair bg-white p-6 sm:p-10">
          <p className="t-eyebrow mb-3">Final screen / Request received</p>
          <h2 ref={headingRef} tabIndex={-1} className="text-[36px] font-extrabold uppercase leading-[40px] tracking-[-0.02em] text-ink outline-none sm:text-[48px] sm:leading-[52px]">
            Thank you.
          </h2>
          <p className="t-body mt-4 max-w-[640px]">
            Your answers passed our checks and are summarised below. {PENDING_NOTE} We are not promising a response time.
          </p>
          <SummaryList rows={summary} />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex h-[48px] items-center rounded-[10px] border border-hair bg-[#fffefa] px-5 text-[14px] font-semibold text-ink hover:bg-white">
              Contact page and email fallback
            </Link>
            <Link href="/" className="inline-flex h-[48px] items-center px-2 text-[14px] font-semibold text-ink underline underline-offset-4">
              Back to the home page
            </Link>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container className="pb-14 pt-2 lg:pb-[72px]">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-7">
        <aside className="h-fit rounded-[16px] border border-hair bg-cream p-5 lg:p-6">
          <StepProgress
            steps={railSteps}
            current={index}
            onJump={(i) => {
              setErrors({});
              setIndex(i);
            }}
          />
        </aside>

        <form id="wizard-form" onSubmit={onSubmit} noValidate className="relative rounded-[16px] border border-hair bg-white p-5 sm:p-8 lg:p-10">
          <Honeypot value={trap} onChange={setTrap} />
          <p className="t-eyebrow mb-3" aria-hidden="false">
            Step {index + 1} / {step.eyebrow}
          </p>
          <h2 ref={headingRef} tabIndex={-1} className="max-w-[760px] text-[26px] font-medium leading-[32px] tracking-[-0.02em] text-ink outline-none sm:text-[32px] sm:leading-[38px]">
            {step.title}
            <span className="sr-only">
              {" "}
              (step {index + 1} of {total})
            </span>
          </h2>
          {step.intro && <p className="t-body mt-3 max-w-[640px]">{step.intro}</p>}

          <div className="mt-7 grid gap-6">
            {step.questions.map((q) => {
              const id = `q-${q.id}`;
              const err = errors[q.id] || undefined;
              if (q.kind === "single" || q.kind === "multi") {
                return (
                  <ChoiceCards
                    key={q.id}
                    name={id}
                    legend={q.label}
                    hideLegend={step.questions.length === 1}
                    multiple={q.kind === "multi"}
                    choices={optionsFor(q, branch)}
                    value={q.kind === "multi" ? arr(answers, q.id) : str(answers, q.id)}
                    onChange={(v) => setAnswer(q.id, v)}
                    error={err}
                    columns={q.columns}
                  />
                );
              }
              if (q.kind === "select") {
                return <Select key={q.id} id={id} label={q.label} optional={!q.required} options={optionsFor(q, branch)} value={str(answers, q.id)} onChange={(e) => setAnswer(q.id, e.target.value)} error={err} />;
              }
              if (q.kind === "textarea") {
                return <TextArea key={q.id} id={id} label={q.label} required={q.required} optional={!q.required} rows={6} placeholder={q.placeholder} value={str(answers, q.id)} onChange={(e) => setAnswer(q.id, e.target.value)} error={err} maxLength={2000} />;
              }
              return (
                <TextInput
                  key={q.id}
                  id={id}
                  type={q.kind === "email" ? "email" : "text"}
                  label={q.label}
                  required={q.required}
                  optional={!q.required}
                  placeholder={q.placeholder}
                  autoComplete={q.autoComplete}
                  value={str(answers, q.id)}
                  onChange={(e) => setAnswer(q.id, e.target.value)}
                  error={err}
                />
              );
            })}
          </div>

          {step.final && (
            <div className="mt-6 grid gap-4">
              <SummaryList rows={summary} compact />
              <Checkbox id="consent" checked={consent} onChange={(v) => { setConsent(v); setErrors((e) => ({ ...e, consent: "" })); }} error={errors.consent}>
                I agree that TechLamp may use these details to respond to this request. See the <Link href="/privacy" className="font-semibold text-ink underline underline-offset-2">privacy notice</Link>.
              </Checkbox>
              <p className="rounded-[12px] bg-peach px-4 py-3 text-[13px] leading-5 text-brown">
                <span className="t-mono mr-1 font-bold uppercase">Pending:</span>
                {PENDING_NOTE}
              </p>
            </div>
          )}

          <FormStatus state={state} message={message} className="mt-5" />

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => {
                setErrors({});
                setIndex((i) => Math.max(0, i - 1));
              }}
              disabled={index === 0}
              className="t-mono inline-flex min-h-[44px] items-center gap-2 rounded-[8px] px-2 text-[11px] font-bold uppercase tracking-[0.06em] text-slate hover:text-ink disabled:invisible"
            >
              <ArrowLeft aria-hidden className="h-3.5 w-3.5" /> Back
            </button>
            <button
              type="submit"
              disabled={state === "submitting"}
              className="t-mono inline-flex h-[52px] min-w-[160px] items-center justify-center gap-2 rounded-[10px] bg-graphite px-7 text-[12px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-black disabled:cursor-wait disabled:opacity-70 data-[final=true]:bg-brand-fill data-[final=true]:hover:bg-[#ff6a1a]"
              data-final={step.final ? "true" : "false"}
            >
              {step.final ? (state === "submitting" ? "Sending" : "Submit") : "Continue"}
              {step.final ? <ArrowUpRight aria-hidden className="h-[13px] w-[13px]" strokeWidth={2.4} /> : <ArrowRight aria-hidden className="h-[13px] w-[13px]" strokeWidth={2.4} />}
            </button>
          </div>

          {!step.final && summary.length > 0 && (
            <div className="mt-8 border-t border-hair pt-6">
              <SummaryList rows={summary} compact />
            </div>
          )}
        </form>
      </div>
    </Container>
  );
}

function steps_find(path: WizardStep[], questionId: string): Question | undefined {
  for (const s of path) {
    const q = s.questions.find((x) => x.id === questionId);
    if (q) return q;
  }
  return undefined;
}

function SummaryList({ rows, compact }: { rows: { label: string; value: string }[]; compact?: boolean }) {
  if (rows.length === 0) return compact ? null : <p className="mt-6 text-[14px] text-slate">No answers were given.</p>;
  return (
    <div className={compact ? "rounded-[12px] border border-hair bg-cream p-4" : "mt-8 rounded-[12px] border border-hair bg-cream p-5"}>
      <h3 className="t-eyebrow mb-3">Your request</h3>
      <ul className="grid gap-2">
        {rows.map((r) => (
          <li key={r.label} className="flex items-start gap-2.5 text-[14px] leading-[21px] text-ink">
            <Check aria-hidden className="mt-1 h-3.5 w-3.5 shrink-0 text-signal-green" strokeWidth={3} />
            <span>
              <span className="text-slate">{r.label}: </span>
              {r.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
