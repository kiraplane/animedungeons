import { CodeCopyButton } from '@/components/animedungeons/code-copy-button';
import { FaqSection } from '@/components/animedungeons/faq-section';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import {
  activeCodes,
  codeStatusSummary,
  reportedCodes,
} from '@/data/animedungeons/codes';
import { getRouteLabel } from '@/data/animedungeons/route-labels';
import {
  allThingsCodesSource,
  officialGameFacts,
} from '@/data/animedungeons/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  ArrowRight,
  CircleAlert,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Dungeons Codes (July 2026) - Status & Reported Codes',
    description:
      'Check the current Anime Dungeons code status, copy community-reported EARLYACCESS and RELEASE codes, and verify them in the correct Roblox game.',
    locale,
    pathname: '/codes',
  });
}

const faq = [
  {
    question: 'What are the active Anime Dungeons codes?',
    answer:
      'No active code was confirmed by a current official 1B Studio surface when checked on July 24, 2026. EARLYACCESS and RELEASE are fresh community reports, not official confirmations.',
  },
  {
    question: 'Does EARLYACCESS work in Anime Dungeons?',
    answer:
      'A fresh third-party tracker reports EARLYACCESS and a reward of 15 rerolls plus 1,500 gems, but that page links to the unavailable old Place. Test the code in the current 1B Studio experience before relying on it.',
  },
  {
    question: 'Does RELEASE work in Anime Dungeons?',
    answer:
      'RELEASE appears in low-confidence launch coverage, but no current official source used for this check confirms the code or reward. Treat it as a test candidate only.',
  },
  {
    question: 'Why is an Anime Dungeons code not working?',
    answer:
      'Confirm you opened Place 70863683083739, keep the exact capitalization, remove spaces, and try a fresh server. The code may also be expired, disabled, or an inaccurate community report.',
  },
];

export default function CodesPage() {
  const pageUrl = `${officialGameFacts.canonicalUrl}/codes`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Anime Dungeons Codes',
        description:
          'Current official status, reported code candidates, source boundaries, and verification steps for Anime Dungeons.',
        datePublished: '2026-07-24',
        dateModified: '2026-07-24',
        mainEntityOfPage: pageUrl,
        publisher: {
          '@type': 'Organization',
          name: officialGameFacts.siteName,
          url: officialGameFacts.canonicalUrl,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="space-y-7 py-5 text-slate-100">
      <JsonLd data={jsonLd} />
      <header className="rounded-2xl border border-[#FFC55F]/25 bg-[radial-gradient(circle_at_top_right,rgba(255,197,95,.2),transparent_45%),#101326] p-6 md:p-8">
        <Badge className="bg-[#FFC55F] text-[#171006]">
          Checked July 24, 2026
        </Badge>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">
          Anime Dungeons Codes
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          {codeStatusSummary.message} This page separates confirmed facts from
          discovery leads so an old Place or copied reward does not become a
          false active-code claim.
        </p>
      </header>

      <section className="rounded-xl border border-[#46D7FF]/25 bg-[#46D7FF]/5 p-6">
        <div className="flex items-start gap-4">
          <ShieldCheck className="mt-1 size-6 shrink-0 text-[#46D7FF]" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8AE8FF]">
              Official-source result
            </p>
            <h2 className="mt-2 text-2xl font-black">
              No officially confirmed active code
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              The current Roblox description and the official release trailer
              did not publish an active code during this check. That is a valid
              status—not a reason to promote a third-party report as official.
            </p>
            <Badge
              variant="outline"
              className="mt-4 border-[#46D7FF]/25 text-[#8AE8FF]"
            >
              {activeCodes.length} official active entries
            </Badge>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#FF5FD2]">
              Test candidates
            </p>
            <h2 className="mt-2 text-2xl font-black">
              Community-reported codes
            </h2>
          </div>
          <Badge variant="outline" className="border-white/10 text-slate-400">
            {reportedCodes.length} need in-game verification
          </Badge>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {reportedCodes.map((item) => (
            <article
              key={item.code}
              className="min-w-0 rounded-xl border border-[#FFC55F]/20 bg-[#101326] p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <code className="break-all text-2xl font-black text-[#FFD98B]">
                      {item.code}
                    </code>
                    <Badge
                      variant="outline"
                      className="border-[#FFC55F]/25 text-[#FFD98B]"
                    >
                      Needs check
                    </Badge>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.reward}
                  </p>
                </div>
                <CodeCopyButton code={item.code} />
              </div>
              <p className="mt-4 border-white/8 border-t pt-4 text-xs leading-5 text-slate-500">
                {item.notes}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-white/10 bg-[#101326] p-6">
        <h2 className="text-2xl font-black">
          How to test a reported code safely
        </h2>
        <ol className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
          <li className="rounded-lg border border-white/8 bg-black/20 p-3">
            <strong className="text-white">1. Open the current game.</strong>{' '}
            Confirm the URL contains Place ID {officialGameFacts.placeId} and
            the creator is {officialGameFacts.creatorName}.
          </li>
          <li className="rounded-lg border border-white/8 bg-black/20 p-3">
            <strong className="text-white">2. Find the live code input.</strong>{' '}
            Check the current menu or settings interface. If no code box exists,
            do not use instructions copied from the unavailable old Place.
          </li>
          <li className="rounded-lg border border-white/8 bg-black/20 p-3">
            <strong className="text-white">3. Paste one code exactly.</strong>{' '}
            Keep capitalization and remove leading or trailing spaces.
          </li>
          <li className="rounded-lg border border-white/8 bg-black/20 p-3">
            <strong className="text-white">4. Trust the live result.</strong> A
            success message and inventory change are stronger evidence than a
            copied reward table.
          </li>
        </ol>
      </section>

      <section className="rounded-xl border border-[#FFC55F]/25 bg-[#FFC55F]/7 p-6">
        <div className="flex items-start gap-4">
          <CircleAlert className="mt-1 size-6 shrink-0 text-[#FFC55F]" />
          <div>
            <h2 className="text-2xl font-black">Why sources conflict</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              One fresh tracker reports EARLYACCESS but sends its Play button to
              old Place {officialGameFacts.oldPlaceId}, which is unavailable.
              Other videos and posts repeat RELEASE without a reliable reward
              source. Both strings remain useful to test, but neither is labeled
              active until a current official surface or a reproducible live
              redemption confirms it.
            </p>
            <a
              href={allThingsCodesSource.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#FFD98B] hover:text-white"
            >
              View the reported source <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <FaqSection items={faq} />

      <section className="rounded-xl border border-white/10 bg-[#101326] p-5">
        <h2 className="text-xl font-black">Next steps</h2>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {[
            '/guides/beginner-guide',
            '/official-links',
            '/classes',
            '/updates',
          ].map((route) => (
            <LocaleLink
              key={route}
              href={route}
              className="flex min-w-0 items-center justify-between gap-3 rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-300 hover:border-[#46D7FF]/35 hover:text-[#9BEAFF]"
            >
              <span>{getRouteLabel(route)}</span>
              <ArrowRight className="size-4 shrink-0" />
            </LocaleLink>
          ))}
        </div>
      </section>
    </div>
  );
}
