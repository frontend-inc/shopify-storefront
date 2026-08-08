import React from 'react';
import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/shopify/header';
import Footer from '@/components/shopify/footer';
import StoreAssistant from '@/components/shopify/store-assistant';
import { site } from '@/config/site';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-body antialiased bg-background text-foreground m-0 p-0 flex min-h-screen flex-col">
        {/* Header owns the cart drawer, search and account menu, so every
            route gets them by rendering here rather than page by page. */}
        <Header
          storeName={site.storeName}
          logoUrl={site.logoUrl}
          links={site.navLinks}
        />
        <div className="flex-1">{children}</div>
        <Footer storeName={site.storeName} copyright={site.copyright} />
        <StoreAssistant />
      </body>
    </html>
  );
}
