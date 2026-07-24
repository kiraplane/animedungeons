import { FaqSection } from '@/components/animedungeons/faq-section';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { getGuide, guides } from '@/data/animedungeons/guides';
import { getRouteLabel } from '@/data/animedungeons/route-labels';
import { officialGameFacts } from '@/data/animedungeons/sources';
import { LocaleLink } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import { ArrowRight, PlayCircle } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    guides.map((guide) => ({ locale, slug: guide.slug }))
  );
}

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return constructMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    locale,
    pathname: `/guides/${slug}`,
  });
}

export default async function GuidePage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const cover = guide.coverImageUrl;
  const pageUrl = `${officialGameFacts.canonicalUrl}/guides/${guide.slug}`;
  const coverUrl = cover.startsWith('http')
    ? cover
    : `${officialGameFacts.canonicalUrl}${cover}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.title,
        description: guide.seoDescription,
        datePublished: '2026-07-24',
        dateModified: '2026-07-24',
        image: coverUrl,
        mainEntityOfPage: pageUrl,
        publisher: {
          '@type': 'Organization',
          name: officialGameFacts.siteName,
          url: officialGameFacts.canonicalUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Wiki Home',
            item: officialGameFacts.canonicalUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guides',
            item: `${officialGameFacts.canonicalUrl}/guides`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.title,
            item: pageUrl,
          },
        ],
      },
      ...(guide.video
        ? [
            {
              '@type': 'VideoObject',
              name: guide.video.title,
              description: guide.seoDescription,
              thumbnailUrl: guide.video.thumbnailUrl.startsWith('http')
                ? guide.video.thumbnailUrl
                : `${officialGameFacts.canonicalUrl}${guide.video.thumbnailUrl}`,
              uploadDate: guide.video.publishedAt,
              embedUrl: `https://www.youtube.com/embed/${guide.video.id}`,
              contentUrl: guide.video.url,
            },
          ]
        : []),
    ],
  };

  return (
    <article className="space-y-7 py-5 text-slate-100">
      <JsonLd data={jsonLd} />
      <header className="rounded-2xl border border-[#7C5CFF]/25 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,.24),transparent_45%),#101326] p-6 md:p-8">
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-[#46D7FF] text-[#071018]">
            {guide.category}
          </Badge>
          <Badge variant="outline" className="border-white/10 text-slate-300">
            {guide.difficulty}
          </Badge>
          {guide.video ? (
            <Badge className="border border-[#FF5FD2]/20 bg-[#FF5FD2]/10 text-[#FFB8EB]">
              <PlayCircle className="mr-1 size-3" />
              Video cross-checked
            </Badge>
          ) : null}
        </div>
        <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
          {guide.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          {guide.summary}
        </p>
      </header>

      <div className="relative aspect-[16/7] overflow-hidden rounded-2xl border border-white/10 bg-black">
        <Image
          src={cover}
          alt={`${guide.title} cover`}
          fill
          priority
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070812]/60 via-transparent to-transparent" />
      </div>

      {guide.body.map((section, index) => (
        <div key={section.heading} className="contents">
          <section className="rounded-xl border border-white/10 bg-[#101326] p-6">
            <h2 className="text-2xl font-black">{section.heading}</h2>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-300">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {section.bullets ? (
              <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="rounded-lg border border-white/8 bg-black/15 px-3 py-2"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
          {guide.video && index === 1 ? (
            <section className="overflow-hidden rounded-xl border border-[#7C5CFF]/25 bg-black">
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${guide.video.id}?rel=0`}
                title={`${guide.title} gameplay cross-check`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <a
                href={guide.video.url}
                target="_blank"
                rel="noreferrer"
                className="flex min-w-0 items-center justify-between gap-3 border-white/10 border-t bg-[#101326] px-4 py-3 text-sm text-slate-300 hover:text-[#9BEAFF]"
              >
                <span className="min-w-0 whitespace-normal break-words">
                  YouTube guide · {guide.video.channel} · published{' '}
                  {guide.video.publishedAt}
                </span>
                <ArrowRight className="size-4 shrink-0" />
              </a>
            </section>
          ) : null}
        </div>
      ))}

      <FaqSection items={guide.faq} />

      <section className="rounded-xl border border-white/10 bg-[#101326] p-5">
        <h2 className="text-xl font-black">Continue your route</h2>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {guide.relatedRoutes.map((route) => (
            <LocaleLink
              key={route}
              href={route}
              className="flex h-auto min-w-0 items-center justify-between gap-3 whitespace-normal break-words rounded-lg border border-white/10 px-3 py-2 text-left text-sm text-slate-300 hover:border-[#46D7FF]/35 hover:text-[#9BEAFF]"
            >
              <span className="min-w-0">{getRouteLabel(route)}</span>
              <ArrowRight className="size-4 shrink-0" />
            </LocaleLink>
          ))}
        </div>
      </section>
    </article>
  );
}
