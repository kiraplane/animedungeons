import { AnimeDungeonsHomePage } from '@/components/animedungeons/home-page';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Dungeons Wiki - Codes, Classes, Dungeons & Guides',
    description:
      'Anime Dungeons codes, classes, dungeons, weapons, armor, spells, heroes, and beginner guides for the current Roblox experience.',
    locale,
    pathname: '',
  });
}

export default function HomePage() {
  return <AnimeDungeonsHomePage />;
}
