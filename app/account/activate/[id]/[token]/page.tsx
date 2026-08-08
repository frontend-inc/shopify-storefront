import AccountForm from '@/components/shopify/account-form';

export const metadata = { title: 'Activate your account — Shop' };

// Shopify's emailed activation link is /account/activate/{id}/{token}.
export default async function Page({
  params,
}: {
  params: Promise<{ id: string; token: string }>;
}) {
  const { id, token } = await params;

  return (
    <main className="max-w-screen-2xl mx-auto w-full px-8 py-16">
      <AccountForm
        title="Activate your account"
        description="Choose a password to finish setting up your account."
        fields={[
          {
            name: 'password',
            label: 'Password',
            type: 'password',
            autoComplete: 'new-password',
          },
        ]}
        submitLabel="Activate account"
        endpoint="/api/account/activate"
        extraPayload={{ id, activationToken: token }}
        redirectTo="/account"
      />
    </main>
  );
}
