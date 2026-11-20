export type FormKind = "contact" | "expert" | "project";

export interface SubmitPayload {
  form: FormKind;
  name: string;
  email: string;
  organisation?: string;
  role?: string;
  phone?: string;
  country?: string;
  enquiryType?: string;
  message: string;
  timeline?: string;
  budget?: string;
  /** Extra labelled answers (wizard). Short strings only; the server caps count and length. */
  details?: Record<string, string>;
  consent: boolean;
  /** Honeypot. Must stay empty. */
  website: string;
}

export type SubmitResult = { ok: true } | { ok: false; errors: Record<string, string>; message: string };

/** POST to /api/contact. Never throws; always resolves to a typed result. */
export async function submitForm(payload: SubmitPayload): Promise<SubmitResult> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => null)) as { ok?: boolean; errors?: Record<string, string>; error?: string } | null;
    if (res.ok && data?.ok) return { ok: true };
    return {
      ok: false,
      errors: data?.errors ?? {},
      message: data?.error ?? (data?.errors ? "Please check the highlighted fields." : "Something went wrong. Please try again in a moment."),
    };
  } catch {
    return { ok: false, errors: {}, message: "We could not reach the server. Check your connection and try again." };
  }
}

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Shown wherever a form can be submitted. PENDING: mailbox integration. */
export const PENDING_NOTE =
  "Mailbox integration is still being connected, so a submission may not reach the team yet. If it is urgent, use the email link on the Contact page.";
