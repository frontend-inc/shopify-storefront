import type { NavLink } from '@/components/shopify/header';

/** Chrome shared by every route — rendered once in the root layout. */
export const site = {
  storeName: 'Shop',
  description:
    'An agent-friendly Shopify storefront built with Next.js and Hydrogen.',
  // Absolute origin behind `metadataBase`, so Open Graph images resolve to full
  // URLs. Vercel injects VERCEL_PROJECT_PRODUCTION_URL on deployed builds.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000'),
  logoUrl: '',
  copyright: '© 2026 Shop. All rights reserved.',
  navLinks: [
    { label: 'Products', url: '/' },
    { label: 'Collections', url: '/collections' },
  ] as NavLink[],
};
