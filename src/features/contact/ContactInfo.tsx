import { Container } from "@/components/layout/Container";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { CONTACT_EMAIL, contactFaq } from "@/data/contact";

const label = "t-mono mb-4 text-[11px] font-bold uppercase leading-4 tracking-[0.06em] text-brand-ink";

/** Verified details, social placeholder and FAQ. Only the owner's email is published. */
export function ContactInfo() {
  return (
    <section aria-label="Contact details and FAQ" className="bg-paper">
      <Container className="pb-14 lg:pb-[88px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr_1.1fr] lg:gap-14">
          <div className="lg:px-4">
            <h2 className={label}>Contact details</h2>
            <p className="text-[15px] leading-[23px] text-slate">
              Email fallback:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-ink underline underline-offset-2">
                {CONTACT_EMAIL}
              </a>
              . Use it if the form does not work or the matter is urgent.
            </p>
            <dl className="mt-4 space-y-2 text-[14px] text-slate">
              {["Phone", "Office address", "Opening hours"].map((k) => (
                <div key={k} className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <dt className="min-w-[110px]">{k}</dt>
                  <dd>
                    <StatusBadge status="pending" />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:px-4">
            <h2 className={label}>Social channels</h2>
            <p className="text-[15px] leading-[23px] text-slate">Verified LinkedIn and social links will be added here when they are available.</p>
          </div>
          <div className="rounded-[12px] bg-graphite p-6 text-white lg:min-h-[210px]">
            <h2 className="t-mono mb-4 text-[11px] font-bold uppercase leading-4 tracking-[0.06em] text-brand">FAQ</h2>
            <p className="text-[16px] font-medium leading-6">{contactFaq.q}</p>
            <p className="mt-2 text-[15px] leading-[23px] text-[#d9d4ce]">{contactFaq.a}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
