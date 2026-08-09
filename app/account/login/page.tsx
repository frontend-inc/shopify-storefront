import AccountForm, { AccountFormLink } from '@/components/shopify/account-form';

export const metadata = { title: 'Sign in' };

export default function Page() {
  return (
    <main className="max-w-screen-2xl mx-auto w-full px-8 py-16">
      <AccountForm
        title="Sign in"
        fields={[
          { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
          {
            name: 'password',
            label: 'Password',
            type: 'password',
            autoComplete: 'current-password',
          },
        ]}
        submitLabel="Sign in"
        endpoint="/api/account/login"
        redirectTo="/account"
        footer={
          <>
            <span>
              New here?{' '}
              <AccountFormLink href="/account/register">
                Create an account
              </AccountFormLink>
            </span>
            <AccountFormLink href="/account/recover">
              Forgot your password?
            </AccountFormLink>
          </>
        }
      />
    </main>
  );
}
