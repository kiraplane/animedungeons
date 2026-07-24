import Container from '@/components/layout/container';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Disclaimer | Anime Dungeons Wiki',
    description:
      'Independence, trademark, accuracy and external-link disclaimer for Anime Dungeons Wiki.',
    locale,
    pathname: '/disclaimer',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#070812] py-12 text-slate-100">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="text-4xl font-black">Disclaimer</h1>
        <p className="leading-8 text-slate-300">
          Anime Dungeons Wiki is an independent information site. It is not
          affiliated with, endorsed by, sponsored by, or operated by Roblox, 1B
          Studio, or the Anime Dungeons development team.
        </p>
        <p className="leading-8 text-slate-300">
          Roblox, Anime Dungeons, game artwork, and related marks belong to
          their respective owners. Official media is used for identification and
          guide context.
        </p>
        <p className="leading-8 text-slate-300">
          Codes, rewards, class requirements, drops, reforging costs, balance,
          and availability can change without notice. Check the live game and
          official channels before spending currency.
        </p>
        <p className="leading-8 text-slate-300">
          External Roblox, YouTube, and publisher links are provided for
          reference. We do not control their availability, content, or privacy
          practices.
        </p>
      </Container>
    </div>
  );
}
