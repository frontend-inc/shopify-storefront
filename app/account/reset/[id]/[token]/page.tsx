import AccountForm from '@/components/shopify/account-form';

export const metadata = { title: 'Set a new password — Shop' };

// Shopify's emailed reset link is /account/reset/{id}/{token}.
export default async function Page({
  params,
}: {
  params: Promise<{ id: string; token: string }>;
}) {
  const { id, token } = await params;

  return (
    <main className="max-w-screen-2xl mx-auto w-full px-8 py-16">
      <AccountForm
        title="Set a new password"
        fields={[
          {
            name: 'password',
            label: 'New password',
            type: 'password',
            autoComplete: 'new-password',
          },
        ]}
        submitLabel="Save password"
        endpoint="/api/account/reset"
        extraPayload={{ id, resetToken: token }}
        redirectTo="/account"
      />
    </main>
  );
}
