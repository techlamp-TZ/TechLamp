import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { CAREER_AREAS, DISCIPLINES, MISSION, STEPS, VALUES } from "@/data/company";

/** Each function renders one topic's body only — no section-level heading, since the
 *  standalone page's PageHero already carries the title. Used at /company/[slug]. */

export function StoryBody() {
  return (
    <Section tone="canvas">
      <div className="max-w-[760px] space-y-5">
        <p className="t-body text-ink">
          TechLamp works where technology, people and operating change meet. We bring together engineering, data, cloud, enterprise platforms and learning so that transformation is practical.
        </p>
        <p className="t-body">Our approach is deliberately connected: understand the context, make the system work, build the capability around it, then measure what changed.</p>
        <p className="t-mono text-[11px] uppercase tracking-[0.06em] text-slate-2">Founding story, locations and team size: PENDING PUBLICATION.</p>
      </div>
    </Section>
  );
}

export function MissionBody() {
  return (
    <Section tone="peach">
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {MISSION.map((m, i) => (
          <li key={m.title} className={i === 3 ? "rounded-[20px] bg-brand-fill p-6 text-white" : "rounded-[20px] border border-hair bg-white p-6 text-ink"}>
            <p className="text-[24px] font-bold uppercase leading-7">{m.title}</p>
            <p className="mt-2 text-[15px]">{m.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function CapabilityModelBody() {
  return (
    <Section tone="paper">
      <p className="t-body mb-6 max-w-[600px]">How expertise comes together around the problem.</p>
      <div className="rounded-[28px] bg-mint p-6 lg:p-10">
        <div className="mx-auto mb-6 grid h-[110px] max-w-[340px] place-items-center rounded-[50%] bg-brand-fill text-center">
          <span className="text-[22px] font-bold uppercase leading-6 text-white">
            TechLamp
            <br />
            capability
          </span>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {DISCIPLINES.map((d) => (
            <li key={d} className="rounded-[12px] bg-cream p-4">
              <p className="text-[15px] font-bold text-ink">{d}</p>
              <p className="t-mono mt-1 text-[11px] uppercase text-slate">DISCIPLINE / DELIVERY</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function DeliveryBody() {
  return (
    <Section id="delivery" tone="canvas">
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(([name, text], i) => (
          <li key={name} className={i === STEPS.length - 1 ? "rounded-[20px] bg-brand-fill p-5 text-white" : "rounded-[20px] bg-graphite p-5 text-white"}>
            <p className="t-mono text-[11px] font-bold text-white">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-4 text-[18px] font-bold uppercase leading-6">{name}</h3>
            <p className="mt-2 text-[14px] leading-[22px] text-white">{text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function ExpertiseBody() {
  return (
    <Section tone="paper">
      <div className="grid gap-6 lg:grid-cols-2">
        <p className="t-body max-w-[520px]">
          Platform expertise is described as capability coverage only. Certifications, partner status and awards are added here when they can be verified.
        </p>
        <div className="rounded-[28px] border border-hair bg-white p-7">
          <StatusBadge status="pending" />
          <ul className="mt-5 space-y-3 text-[16px] leading-6 text-ink">
            <li>Certifications held by the team: PENDING PUBLICATION</li>
            <li>Vendor partnerships: PENDING PUBLICATION</li>
            <li>Awards and recognition: PENDING PUBLICATION</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function ValuesBody() {
  return (
    <Section tone="canvas">
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {VALUES.map(([t, d], i) => (
          <li key={t} className="rounded-[20px] border border-hair bg-white p-6">
            <p className="t-mono text-[11px] font-bold text-brand-ink">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-6 text-[20px] font-bold leading-6 text-ink">{t}</h3>
            <p className="mt-2 text-[15px] leading-6 text-slate">{d}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function CareersBody() {
  return (
    <section id="careers" aria-label="Careers at TechLamp" className="scroll-mt-24 bg-paper">
      <Container className="pb-14 lg:pb-[72px]">
        <div className="grid gap-8 rounded-[28px] bg-brand-fill p-8 text-white lg:grid-cols-2 lg:p-12">
          <div>
            <p className="t-body max-w-[520px] text-white">
              We are interested in people who care about engineering quality, evidence, learning and the outcomes technology makes possible. There are no open roles listed here. Send us a note about the work you do and what you want to build.
            </p>
            <p className="t-mono mt-4 text-[11px] uppercase tracking-[0.06em]">Open roles: PENDING PUBLICATION</p>
            <div className="mt-6">
              <Button href="/contact" variant="onBrand" icon="arrow">
                Get in touch
              </Button>
            </div>
          </div>
          <ul className="space-y-3 self-center text-[20px] font-semibold">
            {CAREER_AREAS.map((a) => (
              <li key={a} className="border-b border-white/30 pb-3">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
