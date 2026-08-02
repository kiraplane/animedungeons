import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { codeStatusSummary, reportedCodes } from '@/data/animedungeons/codes';
import { guides } from '@/data/animedungeons/guides';
import { getRouteLabel } from '@/data/animedungeons/route-labels';
import {
  checkedAt,
  officialGameFacts,
  videos,
} from '@/data/animedungeons/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  CircleDollarSign,
  ExternalLink,
  Gamepad2,
  Gem,
  ShieldCheck,
  Sparkles,
  Swords,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import { FaqSection } from './faq-section';
import {
  AnimeDungeonsMobileMenu,
  AnimeDungeonsRouteSidebar,
} from './wiki-navigation';

const quickLinks = [
  { label: 'Codes', href: '/codes', icon: CircleDollarSign },
  { label: 'Classes', href: '/classes', icon: Swords },
  { label: 'Dungeons', href: '/dungeons', icon: Gamepad2 },
  { label: 'Loot', href: '/weapons-and-armor', icon: Gem },
];

const systemLinks = [
  {
    label: 'Classes',
    href: '/classes',
    summary:
      'Compare Warrior, Mage, Assassin and the three reported unlock paths by role.',
    icon: Swords,
  },
  {
    label: 'Dungeons',
    href: '/dungeons',
    summary:
      'Prepare for Demon Train, Frozen Forest, Sand Village and Crimson Sanctum.',
    icon: Gamepad2,
  },
  {
    label: 'Weapons & Armor',
    href: '/weapons-and-armor',
    summary:
      'Make upgrade and reforge decisions around the problem blocking your next clear.',
    icon: ShieldCheck,
  },
  {
    label: 'Heroes',
    href: '/heroes',
    summary:
      'Treat summonable heroes as support for a build, not a replacement for gear.',
    icon: Users,
  },
  {
    label: 'Spells',
    href: '/spells',
    summary:
      'Give every spell slot one job: room clear, boss damage, control, or safety.',
    icon: Sparkles,
  },
  {
    label: 'Discord',
    href: '/discord',
    summary:
      'Open the verified anidg invite and use announcements without risking Roblox credentials.',
    icon: Users,
  },
  {
    label: 'Official Links',
    href: '/official-links',
    summary:
      'Use the verified current Roblox Place, creator group, and launch Discord.',
    icon: ExternalLink,
  },
];

const faq = [
  {
    question: 'What is Anime Dungeons on Roblox?',
    answer:
      'Anime Dungeons is an action RPG and dungeon crawler by 1B Studio. Players choose a class, clear anime-inspired dungeons, defeat bosses, and improve weapons, armor, spells, and heroes.',
  },
  {
    question: 'What is the correct Anime Dungeons game?',
    answer:
      'The current experience uses Place ID 70863683083739 and Universe ID 8718668434 under the 1B Studio Roblox group. An older Place with ID 8862620807 is unavailable and should not be used for current facts or codes.',
  },
  {
    question: 'Are there working Anime Dungeons codes?',
    answer:
      'No active code was confirmed on a current official 1B Studio surface when checked on August 1, 2026. Community-reported entries should be tested in the current game before relying on them.',
  },
  {
    question: 'Which classes are in Anime Dungeons?',
    answer:
      'Launch references list Warrior, Mage, and Assassin as starter classes, with Knight, Archmage, and Void Reaper as later unlock paths. Requirements can change during beta, so confirm them in the live class menu.',
  },
];

export function AnimeDungeonsHomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: officialGameFacts.siteName,
        url: officialGameFacts.canonicalUrl,
        description:
          'Independent Anime Dungeons wiki with current codes, classes, dungeons, equipment, heroes, spells, and beginner guides.',
        inLanguage: 'en-US',
      },
      {
        '@type': 'Organization',
        name: officialGameFacts.siteName,
        url: officialGameFacts.canonicalUrl,
        logo: `${officialGameFacts.canonicalUrl}${officialGameFacts.iconImage}`,
      },
      {
        '@type': 'VideoGame',
        name: officialGameFacts.name,
        url: officialGameFacts.robloxUrl,
        gamePlatform: 'Roblox',
        genre: officialGameFacts.genre,
        author: {
          '@type': 'Organization',
          name: officialGameFacts.creatorName,
          url: officialGameFacts.creatorGroupUrl,
        },
      },
      {
        '@type': 'VideoObject',
        name: videos.releaseTrailer.title,
        description:
          'Official Anime Dungeons release trailer showing classes, dungeons, loot systems, heroes, and reforging.',
        thumbnailUrl: videos.releaseTrailer.thumbnailUrl,
        uploadDate: videos.releaseTrailer.publishedAt,
        embedUrl: `https://www.youtube.com/embed/${videos.releaseTrailer.id}`,
        contentUrl: videos.releaseTrailer.url,
      },
    ],
  };

  return (
    <div className="overflow-x-hidden bg-[#070812] text-slate-100">
      <JsonLd data={jsonLd} />
      <section className="relative overflow-hidden border-white/10 border-b">
        <Image
          src={officialGameFacts.heroImage}
          alt="Official Anime Dungeons experience artwork"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,8,18,.99)_0%,rgba(7,8,18,.91)_50%,rgba(7,8,18,.58)_100%),linear-gradient(0deg,#070812_0%,transparent_62%)]" />
        <Container className="relative grid min-h-[450px] items-center gap-8 px-4 py-10 lg:grid-cols-[1.04fr_.96fr]">
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-[#46D7FF] text-[#071018]">
                Roblox action RPG
              </Badge>
              <Badge className="border border-[#FF5FD2]/35 bg-[#FF5FD2]/10 text-[#FFB8EB]">
                Independent wiki · checked {checkedAt}
              </Badge>
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[.96] tracking-tight sm:text-6xl lg:text-7xl">
              Anime Dungeons <span className="text-[#46D7FF]">Wiki</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Current codes and decision-first guides for classes, dungeon
              clears, weapons, armor, spells, heroes, and early progression.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[#46D7FF] font-bold text-[#071018] hover:bg-[#87E7FF]"
              >
                <a
                  href={officialGameFacts.robloxUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Play current game <ExternalLink className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#7C5CFF]/55 bg-black/50 text-white hover:bg-[#7C5CFF]/15"
              >
                <LocaleLink href="/guides/beginner-guide">
                  Start here <ArrowRight className="size-4" />
                </LocaleLink>
              </Button>
            </div>
            <div className="mt-6 flex max-w-3xl flex-wrap gap-2">
              {quickLinks.map(({ label, href, icon: Icon }) => (
                <LocaleLink
                  key={href}
                  href={href}
                  className="inline-flex min-w-0 items-center gap-2 rounded-lg border border-white/10 bg-black/45 px-3 py-2 text-sm font-semibold text-slate-200 backdrop-blur hover:border-[#46D7FF]/45 hover:text-[#9BEAFF]"
                >
                  <Icon className="size-4 shrink-0 text-[#46D7FF]" />
                  {label}
                </LocaleLink>
              ))}
            </div>
          </div>
          <div className="min-w-0 overflow-hidden rounded-2xl border border-[#7C5CFF]/40 bg-black shadow-[0_0_80px_rgba(124,92,255,.2)]">
            <iframe
              className="aspect-video w-full"
              src={`https://www.youtube.com/embed/${videos.releaseTrailer.id}?rel=0`}
              title="Official Anime Dungeons release trailer"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <div className="flex items-center justify-between gap-3 border-white/10 border-t bg-[#0D1020] px-4 py-3 text-xs text-slate-400">
              <span>
                Official release trailer · {videos.releaseTrailer.channel}
              </span>
              <Badge
                variant="outline"
                className="border-[#46D7FF]/25 text-[#8AE8FF]"
              >
                Source checked
              </Badge>
            </div>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8">
        <AnimeDungeonsMobileMenu currentPath="/" />
        <div className="mt-6 grid gap-8 lg:mt-0 lg:grid-cols-[minmax(0,1fr)_276px]">
          <main className="min-w-0 space-y-10">
            <section>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#46D7FF]">
                Live snapshot
              </p>
              <h2 className="mt-2 text-3xl font-black text-white">
                Verify the fast-changing facts first
              </h2>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <article className="rounded-xl border border-[#FFC55F]/25 bg-[#FFC55F]/7 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#FFD98B]">
                    Codes
                  </p>
                  <p className="mt-2 text-2xl font-black">
                    {codeStatusSummary.officialActiveCount} confirmed
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {codeStatusSummary.reportedCount} reported codes are kept
                    separate for in-game testing.
                  </p>
                </article>
                <article className="rounded-xl border border-[#46D7FF]/20 bg-[#46D7FF]/5 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#8AE8FF]">
                    Current identity
                  </p>
                  <p className="mt-2 text-2xl font-black">
                    Place {officialGameFacts.placeId}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Published by {officialGameFacts.creatorName}; the old Place
                    is unavailable.
                  </p>
                </article>
                <article className="rounded-xl border border-[#FF5FD2]/20 bg-[#FF5FD2]/5 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#FFB8EB]">
                    Launch content
                  </p>
                  <p className="mt-2 text-2xl font-black">
                    6 classes · 4 dungeons
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Names are cross-checked; volatile unlock and drop values
                    stay tied to the live game.
                  </p>
                </article>
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-[#46D7FF]">
                    System hubs
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    Build the next clear
                  </h2>
                </div>
                <LocaleLink
                  href="/guides"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#8AE8FF] hover:text-white"
                >
                  All guides <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {systemLinks.map(({ label, href, summary, icon: Icon }) => (
                  <LocaleLink
                    key={href}
                    href={href}
                    className="group flex min-w-0 gap-4 rounded-xl border border-white/10 bg-[#101326] p-5 transition hover:-translate-y-0.5 hover:border-[#7C5CFF]/50"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#7C5CFF]/15 text-[#9C88FF]">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <strong className="flex items-center gap-2 text-lg text-white group-hover:text-[#9BEAFF]">
                        {label}
                        <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                      </strong>
                      <span className="mt-2 block text-sm leading-6 text-slate-400">
                        {summary}
                      </span>
                    </span>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-[#FF5FD2]">
                    Start here
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    Player-first guides
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="border-white/10 text-slate-400"
                >
                  {guides.length} original routes
                </Badge>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {guides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group overflow-hidden rounded-xl border border-white/10 bg-[#101326] hover:border-[#46D7FF]/40"
                  >
                    <div className="relative aspect-[16/7]">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} guide cover`}
                        fill
                        sizes="(min-width: 768px) 420px, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#101326] via-transparent to-transparent" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between gap-3">
                        <Badge className="bg-[#7C5CFF]/20 text-[#B8AAFF]">
                          {guide.category}
                        </Badge>
                        <ArrowRight className="size-4 text-[#46D7FF] transition group-hover:translate-x-1" />
                      </div>
                      <h3 className="mt-3 text-lg font-black text-white">
                        {guide.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-400">
                        {guide.summary}
                      </p>
                    </div>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-[#FFC55F]/25 bg-[#FFC55F]/7 p-6">
              <div className="flex items-start gap-4">
                <Boxes className="mt-1 size-6 shrink-0 text-[#FFC55F]" />
                <div>
                  <h2 className="text-2xl font-black">Current game boundary</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    This site covers the 1B Studio experience at Place{' '}
                    {officialGameFacts.placeId}. Place{' '}
                    {officialGameFacts.oldPlaceId} belongs to an unavailable
                    older listing, so its codes, ownership, and progression
                    claims are not merged into the current wiki.
                  </p>
                  <LocaleLink
                    href="/official-links"
                    className="mt-4 inline-flex items-center gap-2 font-bold text-[#FFD98B] hover:text-white"
                  >
                    Open verified links <ArrowRight className="size-4" />
                  </LocaleLink>
                </div>
              </div>
            </section>

            <FaqSection items={faq} />

            <section className="rounded-xl border border-white/10 bg-[#101326] p-5">
              <h2 className="text-xl font-black">
                Explore every current route
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  '/codes',
                  '/classes',
                  '/dungeons',
                  '/heroes',
                  '/weapons-and-armor',
                  '/spells',
                  '/discord',
                  '/updates',
                  '/guides',
                ].map((route) => (
                  <LocaleLink
                    key={route}
                    href={route}
                    className="rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-300 hover:border-[#46D7FF]/40 hover:text-[#9BEAFF]"
                  >
                    {getRouteLabel(route)}
                  </LocaleLink>
                ))}
              </div>
              {reportedCodes.length ? (
                <p className="mt-4 text-xs leading-5 text-slate-500">
                  Reported codes are discovery leads, not confirmed rewards.
                  Recheck them in the current Place before sharing.
                </p>
              ) : null}
            </section>
          </main>
          <AnimeDungeonsRouteSidebar currentPath="/" />
        </div>
      </Container>
    </div>
  );
}
