import { redirect } from 'next/navigation';
import OrderHistory from '@/components/shopify/order-history';
import { getSessionToken } from '@/services/shopify/session';
import { getCustomer } from '@/services/shopify/customer';

export const metadata = { title: 'Order history' };

export default async function Page() {
  const token = await getSessionToken();
  if (!token) redirect('/account/login');

  const customer = await getCustomer(token, 20);
  // An expired or revoked token reads as signed out.
  if (!customer) redirect('/account/login');

  return (
    <main className="max-w-screen-2xl mx-auto w-full px-8 py-12">
      <h1 className="text-2xl md:text-3xl font-normal text-foreground">
        Order history
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {customer.displayName} · {customer.email}
      </p>

      <div className="mt-10">
        <OrderHistory customer={customer} />
      </div>
    </main>
  );
}
