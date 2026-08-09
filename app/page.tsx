import type { Metadata } from 'next';
import Products from '@/components/shopify/products';
import { site } from '@/config/site';

// The home page keeps the bare store name, so `title.absolute` opts out of the
// root template rather than rendering "Shop — Shop".
export const metadata: Metadata = {
  title: { absolute: site.storeName },
  description: site.description,
};

export default function Page() {
  return (
    <Products
      title="Shopify Hydrogen Storefront"
      subtitle="An agent-friendly Shopify storefront built with Next.js and Hydrogen."
    />
  );
}
