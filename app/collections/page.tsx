import type { Metadata } from 'next';
import Collections from '@/components/shopify/collections';

export const metadata: Metadata = {
  title: 'Collections',
  description: 'Browse every collection in the store.',
};

export default function Page() {
  return <Collections title="Our Collections" />;
}
