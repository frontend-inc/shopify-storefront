import AccountForm, { AccountFormLink } from '@/components/shopify/account-form';

export const metadata = { title: 'Create account — Shop' };

export default function Page() {
  return (
    <main className="max-w-screen-2xl mx-auto w-full px-8 py-16">
      <AccountForm
        title="Create account"
        fields={[
          {
            name: 'firstName',
            label: 'First name',
            autoComplete: 'given-name',
            required: false,
          },
          {
            name: 'lastName',
            label: 'Last name',
            autoComplete: 'family-name',
            required: false,
          },
          { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
          {
            name: 'password',
            label: 'Password',
            type: 'password',
            autoComplete: 'new-password',
          },
        ]}
        submitLabel="Create account"
        endpoint="/api/account/register"
        redirectTo="/account"
        footer={
          <span>
            Already have an account?{' '}
            <AccountFormLink href="/account/login">Sign in</AccountFormLink>
          </span>
        }
      />
    </main>
  );
}
