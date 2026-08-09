import type { Metadata } from 'next';
import CollectionDetail from '@/components/shopify/collection-detail';
import { getCollectionProductsPage } from '@/services/shopify/catalog';
import { truncate } from '@/lib/utils';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;

  // No collection-only query exists, so ask for the smallest page of products
  // and use just the collection node off it.
  const { collection } = await getCollectionProductsPage(handle, {
    first: 1,
  }).catch(() => ({ collection: null }));

  if (!collection) return { title: 'Collection' };

  const description = collection.description
    ? truncate(collection.description, 160)
    : `Shop the ${collection.title} collection.`;

  return {
    title: collection.title,
    description,
    alternates: { canonical: `/collections/${collection.handle}` },
    openGraph: {
      title: collection.title,
      description,
      url: `/collections/${collection.handle}`,
      images: collection.image
        ? [
            {
              url: collection.image.url,
              alt: collection.image.altText ?? collection.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: collection.title,
      description,
      images: collection.image ? [collection.image.url] : undefined,
    },
  };
}

export default function Page() {
  return <CollectionDetail />;
}
