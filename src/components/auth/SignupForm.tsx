import { useState } from 'preact/hooks';
import Input from '../ui/Input';
import Button from '../ui/Button';
import AccountTypeSelector from './AccountTypeSelector';

// Icon components
const UserIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MailIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LockIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

interface FormData {
  accountType: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

export default function SignUpForm() {
  const [formData, setFormData] = useState<FormData>({
    accountType: 'customer',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (field: keyof FormData) => (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm">
      <AccountTypeSelector 
        selectedType={formData.accountType}
        onSelect={(type: string) => setFormData({ ...formData, accountType: type })}
      />

      <Input
        label="Full Name"
        placeholder="John Doe"
        icon={UserIcon}
        value={formData.fullName}
        onChange={handleChange('fullName')}
        required
      />

      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        icon={MailIcon}
        value={formData.email}
        onChange={handleChange('email')}
        required
      />

      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        icon={LockIcon}
        value={formData.password}
        onChange={handleChange('password')}
        required
      />

      <Input
        label="Confirm Password"
        type="password"
        placeholder="••••••••"
        icon={LockIcon}
        value={formData.confirmPassword}
        onChange={handleChange('confirmPassword')}
        required
      />

      <div className="mb-4 text-xs text-gray-600">
        At least 8 characters
      </div>

      <div className="mb-6">
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={handleChange('agreeToTerms')}
            className="mt-0.5"
            required
          />
          <span className="text-sm text-gray-600">
            I agree to the{' '}
            <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
          </span>
        </label>
      </div>

      <Button type="submit" fullWidth onClick={() => {}}>
        Create Account →
      </Button>

      <p className="text-center text-sm text-gray-500 mt-4">
        Demo mode: Any valid form creates an account
      </p>
    </form>
  );
}