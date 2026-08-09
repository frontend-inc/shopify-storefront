import type { Metadata } from 'next';
import ProductDetail from '@/components/shopify/product-detail';
import ProductRecommendations from '@/components/shopify/product-recommendations';
import { getProduct } from '@/services/shopify/catalog';
import { truncate } from '@/lib/utils';
import { site } from '@/config/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;

  // ProductDetail fetches client-side and renders its own empty state, so a
  // failed lookup here falls back to generic tags rather than a 500.
  const product = await getProduct(handle).catch(() => null);
  if (!product) return { title: 'Product' };

  const description = product.description
    ? truncate(product.description, 160)
    : site.description;
  const image = product.images.edges[0]?.node;

  return {
    title: product.title,
    description,
    alternates: { canonical: `/products/${product.handle}` },
    openGraph: {
      title: product.title,
      description,
      url: `/products/${product.handle}`,
      images: image
        ? [{ url: image.url, alt: image.altText ?? product.title }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description,
      images: image ? [image.url] : undefined,
    },
  };
}

export default function Page() {
  return (
    <>
      <ProductDetail addToCartLabel="Add to Cart" />
      <ProductRecommendations title="You May Also Like" />
    </>
  );
}
