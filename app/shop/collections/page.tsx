import type { Metadata } from 'next';
import Collections from '@/components/shopify/collections';

export const metadata: Metadata = {
  title: 'Collections',
  description: 'Browse every collection in the store.',
  // Same listing as /collections; point crawlers at the canonical route.
  alternates: { canonical: '/collections' },
};

export default function Page() {
  return <Collections title="Our Collections" />;
}
