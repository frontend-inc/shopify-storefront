import type { NavLink } from '@/components/shopify/header';

/** Chrome shared by every route — rendered once in the root layout. */
export const site = {
  storeName: 'Shop',
  logoUrl: '',
  copyright: '© 2026 Shop. All rights reserved.',
  navLinks: [
    { label: 'Products', url: '/' },
    { label: 'Collections', url: '/collections' },
  ] as NavLink[],
};
