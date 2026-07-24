'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  CircleDollarSign,
  Gamepad2,
  ShieldCheck,
  Swords,
} from 'lucide-react';

export function useNavbarLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Codes',
      href: Routes.Codes,
      external: false,
      icon: <CircleDollarSign className="size-4" />,
    },
    {
      title: 'Classes',
      href: Routes.Classes,
      external: false,
      icon: <Swords className="size-4" />,
    },
    {
      title: 'Guides',
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
    },
    {
      title: 'Dungeons',
      href: Routes.Dungeons,
      external: false,
      icon: <Gamepad2 className="size-4" />,
    },
    {
      title: 'Gear',
      href: Routes.WeaponsAndArmor,
      external: false,
      icon: <ShieldCheck className="size-4" />,
    },
    {
      title: 'Official Links',
      href: Routes.OfficialLinks,
      external: false,
      icon: <ShieldCheck className="size-4" />,
    },
  ];
}
