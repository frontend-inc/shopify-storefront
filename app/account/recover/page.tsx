import AccountForm, { AccountFormLink } from '@/components/shopify/account-form';

export const metadata = { title: 'Reset password' };

export default function Page() {
  return (
    <main className="max-w-screen-2xl mx-auto w-full px-8 py-16">
      <AccountForm
        title="Reset password"
        description="Enter your email and we'll send you a link to set a new password."
        fields={[
          { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
        ]}
        submitLabel="Send reset link"
        endpoint="/api/account/recover"
        successMessage="If that email has an account, a reset link is on its way."
        footer={
          <AccountFormLink href="/account/login">Back to sign in</AccountFormLink>
        }
      />
    </main>
  );
}
