'use client';

import { Badge } from '@/components/ui/badge';
import { codeStatusSummary } from '@/data/animedungeons/codes';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  CircleDollarSign,
  Compass,
  Gamepad2,
  Gem,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Swords,
  Users,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface WikiNavGroup {
  title: string;
  icon: typeof BookOpen;
  links: Array<{ href: string; label: string }>;
}

export const wikiNavGroups: WikiNavGroup[] = [
  {
    title: 'Start Here',
    icon: Compass,
    links: [
      { href: '/', label: 'Wiki Home' },
      { href: '/codes', label: 'Codes Status' },
      { href: '/guides', label: 'All Guides' },
      { href: '/guides/beginner-guide', label: 'Beginner Guide' },
      { href: '/discord', label: 'Discord' },
      { href: '/official-links', label: 'Official Links' },
    ],
  },
  {
    title: 'Build Systems',
    icon: Swords,
    links: [
      { href: '/classes', label: 'Classes' },
      { href: '/guides/choose-first-class', label: 'Choose a First Class' },
      { href: '/weapons-and-armor', label: 'Weapons & Armor' },
      { href: '/spells', label: 'Spells' },
      { href: '/heroes', label: 'Heroes' },
    ],
  },
  {
    title: 'Dungeon Runs',
    icon: Gamepad2,
    links: [
      { href: '/dungeons', label: 'Dungeon Hub' },
      { href: '/guides/first-dungeon-route', label: 'First Dungeon Route' },
      { href: '/guides/solo-vs-party', label: 'Solo vs Party' },
      {
        href: '/guides/loot-upgrade-checklist',
        label: 'Loot Upgrade Checklist',
      },
    ],
  },
  {
    title: 'Freshness & Safety',
    icon: RefreshCw,
    links: [
      { href: '/updates', label: 'Updates' },
      { href: '/disclaimer', label: 'Disclaimer' },
    ],
  },
];

const iconMap = {
  '/': Compass,
  '/codes': CircleDollarSign,
  '/guides': BookOpen,
  '/guides/beginner-guide': Compass,
  '/classes': Swords,
  '/guides/choose-first-class': Swords,
  '/weapons-and-armor': ShieldCheck,
  '/spells': Sparkles,
  '/heroes': Users,
  '/dungeons': Gamepad2,
  '/guides/first-dungeon-route': Gamepad2,
  '/guides/solo-vs-party': Users,
  '/guides/loot-upgrade-checklist': Gem,
  '/official-links': ShieldCheck,
  '/discord': Users,
  '/updates': RefreshCw,
};

function isActivePath(currentPath: string | undefined, href: string) {
  return currentPath === href;
}

function groupIsActive(currentPath: string | undefined, group: WikiNavGroup) {
  if (!currentPath) return false;
  return group.links.some((link) => isActivePath(currentPath, link.href));
}

function NavLink({
  currentPath,
  href,
  label,
}: { currentPath?: string; href: string; label: string }) {
  const active = isActivePath(currentPath, href);
  const Icon = iconMap[href as keyof typeof iconMap] ?? ArrowRight;
  return (
    <LocaleLink
      href={href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'group flex min-w-0 items-center justify-between gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition',
        active
          ? 'border-[#8AE8FF]/70 bg-[#46D7FF] font-bold text-[#071018] shadow-[0_0_22px_rgba(70,215,255,.16)]'
          : 'border-white/8 bg-white/[.025] text-slate-300 hover:border-[#7C5CFF]/45 hover:bg-[#7C5CFF]/8 hover:text-white'
      )}
    >
      <span className="inline-flex min-w-0 items-start gap-2.5">
        <Icon className="mt-0.5 size-4 shrink-0" />
        <span className="min-w-0 break-words">{label}</span>
      </span>
      <ArrowRight
        className={cn(
          'mt-0.5 size-3.5 shrink-0 transition group-hover:translate-x-0.5',
          active ? 'text-[#071018]' : 'text-[#FF5FD2]'
        )}
      />
    </LocaleLink>
  );
}

function NavGroups({ currentPath }: { currentPath?: string }) {
  return (
    <div className="space-y-3">
      {wikiNavGroups.map((group) => {
        const Icon = group.icon;
        return (
          <details
            key={group.title}
            open={groupIsActive(currentPath, group)}
            className="group/nav"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-2 py-2 font-semibold text-slate-200 text-sm hover:bg-white/5 [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-center gap-2">
                <Icon className="size-4 text-[#46D7FF]" />
                {group.title}
              </span>
              <span className="inline-flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="h-5 border-white/10 px-1.5 text-[10px] text-slate-400"
                >
                  {group.links.length}
                </Badge>
                <ChevronDown className="size-4 transition group-open/nav:rotate-180" />
              </span>
            </summary>
            <div className="mt-1 grid gap-1.5">
              {group.links.map((link) => (
                <NavLink key={link.href} currentPath={currentPath} {...link} />
              ))}
            </div>
          </details>
        );
      })}
    </div>
  );
}

export function AnimeDungeonsMobileMenu({
  currentPath,
}: { currentPath?: string }) {
  return (
    <details className="rounded-xl border border-[#7C5CFF]/25 bg-[#101326] p-4 shadow-xl lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-white [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <Compass className="size-5 text-[#46D7FF]" />
          Open Wiki Menu
        </span>
        <ChevronDown className="size-5" />
      </summary>
      <div className="mt-4">
        <NavGroups currentPath={currentPath} />
      </div>
    </details>
  );
}

export function AnimeDungeonsRouteSidebar({
  currentPath,
}: { currentPath?: string }) {
  return (
    <aside className="sticky top-24 hidden max-h-[calc(100vh-7rem)] w-[276px] shrink-0 self-start overflow-y-auto rounded-xl border border-[#7C5CFF]/20 bg-[#101326] p-4 shadow-2xl shadow-black/30 lg:block">
      <div className="mb-4 rounded-xl border border-[#46D7FF]/20 bg-[radial-gradient(circle_at_top_right,rgba(255,95,210,.18),transparent_48%),linear-gradient(135deg,#151939,#090B18)] p-4">
        <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#46D7FF]">
          Anime Dungeons
        </p>
        <h2 className="mt-1 text-xl font-black text-white">Wiki Navigation</h2>
        <p className="mt-2 text-xs leading-5 text-slate-400">
          Codes, classes, dungeons, gear, spells, heroes, and current guides.
        </p>
      </div>
      <NavGroups currentPath={currentPath} />
      <LocaleLink
        href="/codes"
        className="mt-4 flex min-w-0 items-center justify-between gap-3 rounded-lg border border-[#FFC55F]/20 bg-[#FFC55F]/5 p-3 text-sm text-[#FFD98B] hover:bg-[#FFC55F]/10"
      >
        <span className="min-w-0">
          <strong className="block text-white">Codes checked Jul 24</strong>
          {codeStatusSummary.officialActiveCount} official ·{' '}
          {codeStatusSummary.reportedCount} reported
        </span>
        <CircleDollarSign className="size-5 shrink-0" />
      </LocaleLink>
    </aside>
  );
}

export function AnimeDungeonsPageShell({ children }: { children: ReactNode }) {
  const currentPath = useLocalePathname();
  if (currentPath === '/') return <>{children}</>;
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6">
      <AnimeDungeonsMobileMenu currentPath={currentPath} />
      <div className="mt-6 grid gap-8 lg:mt-0 lg:grid-cols-[minmax(0,1fr)_276px]">
        <div className="min-w-0">{children}</div>
        <AnimeDungeonsRouteSidebar currentPath={currentPath} />
      </div>
    </div>
  );
}
