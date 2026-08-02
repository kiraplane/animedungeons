import {
  AdsterraNativeBanner,
  AdsterraTopBanner,
} from '@/components/ads/adsterra-ad';
import { AnimeDungeonsPageShell } from '@/components/animedungeons/wiki-navigation';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { ReactNode } from 'react';

export default function AnimeDungeonsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#070812]">
      <Navbar scroll={true} />
      <AdsterraTopBanner />
      <main className="flex-1">
        <AnimeDungeonsPageShell>{children}</AnimeDungeonsPageShell>
      </main>
      <AdsterraNativeBanner className="border-[#332A55] border-t bg-[#070812]" />
      <Footer />
    </div>
  );
}
