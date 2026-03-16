'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout, cart } = useApp();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Course' },
    { href: '/certification', label: 'Certification' },
    { href: '/placements', label: 'Placements' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <>
      <nav className="navbar" id="main-navbar">
        <Link href="/" className="navbar-brand">
          <h1>
            MD
            <span>Coaching Hub</span>
          </h1>
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-icons">
          <Link href="/cart" className="nav-icon-link" id="cart-btn" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </Link>

          {user ? (
            <div className="user-menu">
              <button className="user-avatar-btn" id="user-btn" aria-label="User Menu">
                <div className="user-avatar">{user.name.charAt(0).toUpperCase()}</div>
              </button>
              <div className="user-dropdown">
                <div className="user-dropdown-header">
                  <strong>{user.name}</strong>
                  <small>{user.email}</small>
                </div>
                <div className="user-dropdown-divider"></div>
                <button onClick={logout} className="user-dropdown-item">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link href="/login" className="nav-icon-link" id="user-btn" aria-label="Login">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>
          )}

          <button
            className="hamburger"
            id="hamburger-btn"
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}></span>
            <span style={menuOpen ? { opacity: 0 } : {}}></span>
            <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={pathname === link.href ? 'active' : ''}
          >
            {link.label}
          </Link>
        ))}
        {!user ? (
          <Link href="/login" onClick={() => setMenuOpen(false)} className="mobile-login-btn">
            Login / Sign Up
          </Link>
        ) : (
          <button onClick={() => { logout(); setMenuOpen(false); }} className="mobile-login-btn">
            Logout ({user.name})
          </button>
        )}
      </div>
    </>
  );
}
