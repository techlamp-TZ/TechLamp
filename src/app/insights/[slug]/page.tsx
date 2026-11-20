import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TextLink } from "@/components/ui/Button";
import { CtaSection } from "@/features/home/CtaSection";
import { INSIGHTS, getInsight, readingTime } from "@/data/insights";
import { SITE_URL, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};
  return pageMetadata({ title: `${post.title} | TechLamp Insights`, description: post.summary, path: `/insights/${post.slug}` });
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();
  const minutes = readingTime(post);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    author: { "@type": "Organization", name: "TechLamp" },
    publisher: { "@type": "Organization", name: "TechLamp", url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/insights/${post.slug}`,
  };
  const related = INSIGHTS.filter((i) => i.slug !== post.slug).slice(0, 2);

  return (
    <PageShell>
      <PageHero
        eyebrow={`${post.kind} / ${post.topic}`}
        title={<span className="block max-w-[900px] normal-case lg:text-[48px] lg:leading-[54px]">{post.title}</span>}
        lede={post.summary}
        crumbs={[{ label: "Insights", href: "/insights" }, { label: post.title }]}
        actions={
          <>
            <StatusBadge status="pending" />
            <span className="t-mono text-[12px] uppercase tracking-[0.06em] text-brown">
              By TechLamp editorial / {minutes} min read
            </span>
          </>
        }
      />
      <article className="bg-canvas">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <Container className="grid gap-10 py-14 lg:grid-cols-[260px_minmax(0,720px)] lg:gap-16 lg:py-[72px]">
          <nav aria-label="In this note" className="lg:sticky lg:top-28 lg:self-start">
            <p className="t-mono mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-brand-ink">IN THIS NOTE</p>
            <ol className="space-y-1 text-[14px] leading-5 text-slate">
              {post.sections.map((s, i) => (
                <li key={s.heading}>
                  <a href={`#s${i + 1}`} className="inline-flex min-h-[44px] items-center gap-3 hover:text-brand">
                    <span className="t-mono text-[11px] text-brand-ink">{String(i + 1).padStart(2, "0")}</span>
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div>
            <p className="rounded-[16px] bg-cream p-4 text-[14px] leading-6 text-brown">
              Editorial field note written by TechLamp. It describes an approach and contains no statistics or client results. Placeholder content, PENDING PUBLICATION.
            </p>
            {post.sections.map((s, i) => (
              <section key={s.heading} id={`s${i + 1}`} aria-labelledby={`s${i + 1}-h`} className="mt-10 scroll-mt-28">
                <h2 id={`s${i + 1}-h`} className="text-[26px] font-bold leading-8 text-ink">
                  {s.heading}
                </h2>
                {s.paragraphs.map((p) => (
                  <p key={p} className="mt-4 text-[18px] leading-8 text-slate">
                    {p}
                  </p>
                ))}
              </section>
            ))}
            <div className="mt-12 border-t border-hair pt-8">
              <p className="t-mono mb-4 text-[11px] font-bold uppercase tracking-[0.08em] text-brand-ink">KEEP READING</p>
              <ul className="space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <TextLink href={`/insights/${r.slug}`} className="text-[15px]">
                      {r.title}
                    </TextLink>
                  </li>
                ))}
                <li>
                  <TextLink href="/insights" className="text-[15px]">
                    All field notes
                  </TextLink>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </article>
      <CtaSection title="Turn insight into direction." text="Bring the problem you are working on and we will talk through how to approach it." />
    </PageShell>
  );
}
