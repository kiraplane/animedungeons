import { TopicPage } from '@/components/animedungeons/topic-page';
import { getTopic } from '@/data/animedungeons/topics';
import { constructMetadata } from '@/lib/metadata';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const topic = getTopic('spells');
  return constructMetadata({
    title: topic.title,
    description: topic.description,
    locale,
    pathname: topic.route,
  });
}

export default function SpellsPage() {
  return <TopicPage topic={getTopic('spells')} />;
}
