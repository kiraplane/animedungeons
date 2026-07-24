import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { guides } from '@/data/animedungeons/guides';
import { officialGameFacts } from '@/data/animedungeons/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { ArrowRight, PlayCircle } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Dungeons Guides - Classes, Dungeons, Loot & Co-op',
    description:
      'Anime Dungeons guides for beginners, starter classes, first dungeon clears, loot upgrades, reforging decisions, and solo or party play.',
    locale,
    pathname: '/guides',
  });
}

export default function GuidesPage() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Anime Dungeons Guides',
    numberOfItems: guides.length,
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: guide.title,
      url: `${officialGameFacts.canonicalUrl}/guides/${guide.slug}`,
    })),
  };

  return (
    <div className="space-y-8 py-5 text-slate-100">
      <JsonLd data={itemList} />
      <header className="rounded-2xl border border-[#7C5CFF]/25 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,.24),transparent_45%),#101326] p-6 md:p-8">
        <Badge className="bg-[#46D7FF] text-[#071018]">
          {guides.length} original player routes
        </Badge>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">
          Anime Dungeons Guides
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Choose a starter class, build a repeatable first clear, audit loot,
          and decide when a party actually helps. Each guide separates verified
          launch systems from volatile beta values.
        </p>
      </header>

      <section aria-labelledby="guide-library-heading">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#46D7FF]">
              Choose the current problem
            </p>
            <h2 id="guide-library-heading" className="mt-2 text-2xl font-black">
              Browse all guides
            </h2>
          </div>
          <span className="text-sm text-slate-400">
            Decision-first, not transcript summaries
          </span>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {guides.map((guide) => (
            <LocaleLink
              href={`/guides/${guide.slug}`}
              key={guide.slug}
              className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#101326] transition hover:-translate-y-0.5 hover:border-[#46D7FF]/40"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  sizes="(min-width: 768px) 420px, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101326]/95 via-transparent to-black/10" />
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-2 p-3">
                  <Badge className="border border-[#46D7FF]/25 bg-[#071018]/90 text-[#8AE8FF] backdrop-blur">
                    {guide.category}
                  </Badge>
                  {guide.video ? (
                    <Badge className="border border-[#FF5FD2]/25 bg-[#251025]/90 text-[#FFB8EB] backdrop-blur">
                      <PlayCircle className="mr-1 size-3.5" />
                      Video cross-check
                    </Badge>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center justify-between gap-3">
                  <Badge
                    variant="outline"
                    className="border-white/10 text-slate-400"
                  >
                    {guide.difficulty}
                  </Badge>
                  <ArrowRight className="size-4 text-[#46D7FF] transition group-hover:translate-x-1" />
                </div>
                <h3 className="mt-3 break-words text-lg font-black text-white group-hover:text-[#9BEAFF]">
                  {guide.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-400">
                  {guide.summary}
                </p>
                <div className="mt-auto flex flex-wrap gap-x-2 gap-y-1 pt-3">
                  {guide.tags.map((tag) => (
                    <span key={tag} className="text-xs text-[#9C88FF]">
                      #{tag.replaceAll(' ', '')}
                    </span>
                  ))}
                </div>
              </div>
            </LocaleLink>
          ))}
        </div>
      </section>
    </div>
  );
}
