import type { Metadata } from 'next';
import JsonLd from '@/components/json-ld';
import Greeting from '@/features/home/greeting';
import WhatIDo from '@/features/home/what-i-do';
import { SITE_DESCRIPTION } from '@/config/site';
import { homeJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <Greeting />
      <WhatIDo />
    </>
  );
}
