import { Suspense } from 'react';
import SearchResults from '@/components/shopify/search-results';

export const metadata = {
  title: 'Search',
  description: 'Search the catalogue by product name, description or type.',
};

export default function Page() {
  return (
    // useSearchParams needs a Suspense boundary to prerender this route.
    <Suspense fallback={<div className="py-10" />}>
      <SearchResults />
    </Suspense>
  );
}
