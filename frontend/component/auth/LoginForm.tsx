'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, LogIn } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import InputField from '@/component/common/InputField';
import Button from '@/component/common/Button';
// ✅ FIX: Changed the import for 'Alert' from a default to a named import.
import { Alert } from '@/component/common/Alert';

/**
 * A login form component that handles user input, form submission,
 * error handling, and redirection upon successful login.
 */
export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const loggedInUser = await login(email, password);
      
      // Redirect the user based on their role after a successful login.
      if (loggedInUser.role === 'candidate') {
        router.push('/dashboard-candidate/profile');
      } else if (loggedInUser.role === 'employer') {
        router.push('/dashboard-employer/jobs');
      } else {
        router.push('/');
      }

    } catch (err) {
      // Safer and more informative error handling.
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="danger" title="Login Failed">
          {error}
        </Alert>
      )}
      <InputField
        label="Email Address"
        name="email"
        type="email"
        Icon={Mail}
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        placeholder="candidate@example.com"
        required
        autoComplete="email"
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        Icon={Lock}
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        placeholder="password"
        required
        autoComplete="current-password"
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-primary focus:ring-primary-dark border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <Link href="/auth/Forgot-Password" legacyBehavior>
            <a className="font-medium text-blue-600 hover:text-blue-500">
              Forgot your password?
            </a>
          </Link>
        </div>
      </div>

      <Button type="submit" className="w-full" isLoading={isLoading}>
        <LogIn className="mr-2 h-5 w-5" />
        Sign In
      </Button>

      <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        Not a member?{' '}
        <Link href="/auth/Register" legacyBehavior>
          <a className="font-medium text-blue-600 hover:text-blue-500">
            Sign up here
          </a>
        </Link>
      </p>
    </form>
  );
}
