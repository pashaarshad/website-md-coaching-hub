'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useApp } from '../context/AppContext';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { signup, user } = useApp();
  const router = useRouter();

  if (user) {
    router.push('/');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all required fields');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    const result = signup(name, email, password, phone);
    if (result.success) {
      router.push('/');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <img src="/images/6ad842a58149f478fda7e7926e20f5019e53b751.png" alt="Learn Smartest" />
          <div className="auth-left-overlay">
            <h2>Join Us Today!</h2>
            <p>Create your account and get access to 50+ courses, expert mentors, and placement support.</p>
          </div>
        </div>
        <div className="auth-right">
          <div className="auth-form-container">
            <h2>Sign Up</h2>
            <p className="auth-subtitle">Create your MD Coaching Hub account</p>

            {error && <div className="auth-error">{error}</div>}

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text" id="name" placeholder="Enter your full name"
                  value={name} onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="signup-email">Email Address *</label>
                <input
                  type="email" id="signup-email" placeholder="Enter your email"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel" id="phone" placeholder="+91 XXXXX XXXXX"
                  value={phone} onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="signup-password">Password *</label>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="signup-password" placeholder="Min. 6 characters"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password *</label>
                <input
                  type="password" id="confirm-password" placeholder="Re-enter password"
                  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="auth-submit-btn" id="signup-submit">
                Create Account
              </button>
            </form>

            <p className="auth-switch">
              Already have an account? <Link href="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
