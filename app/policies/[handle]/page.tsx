import { notFound } from 'next/navigation';
import { getShopPolicy, POLICY_HANDLES } from '@/hooks/use-shopify-policies';
import { site } from '@/config/site';

export function generateStaticParams() {
  return POLICY_HANDLES.map((handle) => ({ handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const policy = await getShopPolicy(handle);

  if (!policy) return { title: 'Policy' };

  return {
    title: policy.title,
    description: `Read the ${policy.title.toLowerCase()} for ${site.storeName}.`,
    alternates: { canonical: `/policies/${policy.handle}` },
  };
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const policy = await getShopPolicy(handle);

  if (!policy) {
    notFound();
  }

  return (
    <main className="max-w-screen-2xl mx-auto w-full px-5 lg:px-10 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-normal text-foreground">
          {policy.title}
        </h1>

        <div
          className="policy-body mt-8 text-[15px] leading-7 text-foreground"
          dangerouslySetInnerHTML={{ __html: policy.body }}
        />
      </div>
    </main>
  );
}
