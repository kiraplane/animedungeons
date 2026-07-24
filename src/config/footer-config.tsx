'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';

export function useFooterLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Wiki',
      items: [
        { title: 'Codes', href: Routes.Codes, external: false },
        { title: 'Classes', href: Routes.Classes, external: false },
        { title: 'Dungeons', href: Routes.Dungeons, external: false },
        { title: 'All Guides', href: Routes.Guides, external: false },
        {
          title: 'Official Links',
          href: Routes.OfficialLinks,
          external: false,
        },
      ],
    },
    {
      title: 'Player Guides',
      items: [
        {
          title: 'Beginner Route',
          href: Routes.BeginnerGuide,
          external: false,
        },
        {
          title: 'Choose a First Class',
          href: Routes.FirstClassGuide,
          external: false,
        },
        {
          title: 'First Dungeon Route',
          href: Routes.FirstDungeonGuide,
          external: false,
        },
        {
          title: 'Loot Upgrade Checklist',
          href: Routes.LootGuide,
          external: false,
        },
        {
          title: 'Solo vs Party',
          href: Routes.PartyGuide,
          external: false,
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        {
          title: 'Privacy Policy',
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: 'Terms of Service',
          href: Routes.TermsOfService,
          external: false,
        },
        {
          title: 'Cookie Policy',
          href: Routes.CookiePolicy,
          external: false,
        },
        {
          title: 'Disclaimer',
          href: Routes.Disclaimer,
          external: false,
        },
      ],
    },
  ];
}
