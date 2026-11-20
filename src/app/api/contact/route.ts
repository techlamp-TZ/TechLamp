import { NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * PENDING INTEGRATION: no mailbox, CRM or queue is connected yet. A valid submission is
 * validated, sanitised and acknowledged, then discarded. Nothing is stored, emailed or logged
 * (no personal data goes to logs). Replace the marked block below when the mailbox integration lands.
 *
 * Request JSON: { form: "contact"|"expert"|"project", name, email, message, consent: true, website: "",
 *   organisation?, role?, phone?, country?, enquiryType?, timeline?, budget?, details?: Record<string,string> }
 * Responses:    200 { ok: true }
 *               400 { ok: false, errors: { [field]: string }, error?: string }
 *               429 { ok: false, error: string }
 */

export const dynamic = "force-dynamic";

const FORMS = ["contact", "expert", "project"] as const;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Strip control characters and angle brackets, collapse runaway whitespace, cap length. */
function clean(value: unknown, max: number, multiline = false): string {
  if (typeof value !== "string") return "";
  let v = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").replace(/[<>]/g, "");
  v = multiline ? v.replace(/\n{3,}/g, "\n\n") : v.replace(/\s+/g, " ");
  return v.trim().slice(0, max);
}

// Simple in-memory limiter: 5 requests per 10 minutes per client. Per-instance only; fine as a first guard.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function limited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return false;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  if (limited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many submissions from this connection. Please wait a few minutes and try again." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("shape");
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, errors: {}, error: "The request could not be read." }, { status: 400 });
  }

  // Honeypot: pretend success so bots learn nothing.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const form = FORMS.find((f) => f === body.form);
  const errors: Record<string, string> = {};
  if (!form) errors.form = "Unknown form.";

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const message = clean(body.message, 4000, true);
  if (name.length < 2) errors.name = "Enter your name.";
  if (!EMAIL.test(email)) errors.email = "Enter a valid email address.";
  if (message.length < 10) errors.message = "Add a little more detail (at least 10 characters).";
  if (body.consent !== true) errors.consent = "Please confirm before sending.";

  const optional = {
    organisation: clean(body.organisation, 160),
    role: clean(body.role, 120),
    phone: clean(body.phone, 40),
    country: clean(body.country, 80),
    enquiryType: clean(body.enquiryType, 80),
    timeline: clean(body.timeline, 80),
    budget: clean(body.budget, 80),
  };
  if (optional.phone && !/^[+\d][\d\s().-]{5,}$/.test(optional.phone)) errors.phone = "Enter a valid phone number or leave it blank.";

  const details: Record<string, string> = {};
  if (body.details && typeof body.details === "object" && !Array.isArray(body.details)) {
    for (const [k, v] of Object.entries(body.details as Record<string, unknown>).slice(0, 20)) {
      const key = clean(k, 40);
      const val = clean(v, 400);
      if (key && val) details[key] = val;
    }
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  // --- PENDING INTEGRATION: hand { form, name, email, message, ...optional, details } to the mailbox here. ---
  void details;
  void optional;
  // ------------------------------------------------------------------------------------------------------------

  return NextResponse.json({ ok: true });
}
