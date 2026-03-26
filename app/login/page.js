'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useApp } from '../context/AppContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login, user } = useApp();
  const router = useRouter();

  if (user) {
    router.push('/');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    const result = login(email, password);
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
          <img src="/extracted-imgs/62_MD_COACHING.png" alt="Learn Smartest" />
          <div className="auth-left-overlay">
            <h2>Welcome Back!</h2>
            <p>Login to access your courses, track progress, and continue your learning journey.</p>
          </div>
        </div>
        <div className="auth-right">
          <div className="auth-form-container">
            <h2>Login</h2>
            <p className="auth-subtitle">Sign in to your MD Coaching Hub account</p>

            {error && <div className="auth-error">{error}</div>}

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>
              <button type="submit" className="auth-submit-btn" id="login-submit">
                Login
              </button>
            </form>

            <div className="auth-divider"><span>OR</span></div>

            <div className="demo-credentials">
              <p><strong>Demo Accounts:</strong></p>
              <div className="demo-account" onClick={() => { setEmail('admin@mdcoaching.com'); setPassword('admin123'); }}>
                <span>👨‍💼 Admin:</span> admin@mdcoaching.com / admin123
              </div>
              <div className="demo-account" onClick={() => { setEmail('student@mdcoaching.com'); setPassword('student123'); }}>
                <span>🎓 Student:</span> student@mdcoaching.com / student123
              </div>
            </div>

            <p className="auth-switch">
              Don&apos;t have an account? <Link href="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
