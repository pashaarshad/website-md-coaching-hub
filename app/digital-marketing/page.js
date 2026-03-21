'use client';

import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';

export default function DigitalMarketingLanding() {
  const { showToast } = useApp();
  
  // Fake countdown state
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleBookNow = () => {
    showToast('✨ Feature activating soon! You are on the waitlist.', 'info');
  };

  const tools = [
    { name: 'SEO Analyzer Pro', desc: 'Real-time site auditing and keyword tracking.', icon: '🔍' },
    { name: 'Social Scheduler', desc: 'Auto-post content across all platforms effortlessly.', icon: '📱' },
    { name: 'Email Funnel Builder', desc: 'Drag-and-drop workflow for automated campaigns.', icon: '📧' },
    { name: 'Ad Conversion Tracker', desc: 'Unified pixel analytics for Facebook, Google & LinkedIn.', icon: '📈' },
    { name: 'AI Copywriter', desc: 'Generate high-converting ad copy in seconds.', icon: '🤖' },
    { name: 'Competitor Spy', desc: 'Analyze competitor backlinks and top-performing pages.', icon: '🕵️' },
  ];

  return (
    <>
      <ScrollReveal />
      <div className="landing-page-dm">
        
        {/* Hero Banner */}
        <section className="dm-hero reveal">
          <div className="dm-hero-content">
             <div className="dm-badge">🚀 NEW LAUNCH</div>
             <h1 className="dm-title">The Ultimate <span>Digital Marketing</span> Toolkit</h1>
             <p className="dm-subtitle">Everything you need to automate your campaigns, boost ROI, and scale your business to 7-figures. Exclusively available to MD Coaching Hub members.</p>
             
             {/* Countdown Panel */}
             <div className="dm-countdown-box">
                <div className="countdown-header">⏰ Book Now! Early Access Ends In: </div>
                <div className="countdown-timer">
                  <div className="time-block">
                    <span className="time-num">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="time-label">HOURS</span>
                  </div>
                  <div className="time-colon">:</div>
                  <div className="time-block">
                    <span className="time-num">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="time-label">MINS</span>
                  </div>
                  <div className="time-colon">:</div>
                  <div className="time-block">
                    <span className="time-num">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="time-label">SECS</span>
                  </div>
                </div>
             </div>

             <div className="dm-cta-group">
               <button className="dm-btn-primary" onClick={handleBookNow}>Book Now - Secure Your Spot</button>
               <Link href="#tools" className="dm-btn-secondary">Explore Tools</Link>
             </div>
          </div>
          <div className="dm-hero-image">
            <img src="/images/b818b7d4bfb485e1301ea35820c498d2936f73e9.png" alt="Digital Marketing Strategy" />
            <div className="dm-glow-circle"></div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="dm-tools-section">
          <div className="dm-tools-header reveal">
            <h2>Your Growth Arsenal</h2>
            <p>6 Premium tools integrated into one dashboard.</p>
          </div>
          
          <div className="dm-tools-grid">
            {tools.map((tool, index) => (
              <div className="dm-tool-card reveal" key={index}>
                <div className="dm-tool-icon">{tool.icon}</div>
                <h3>{tool.name}</h3>
                <p>{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Bottom CTA */}
        <section className="dm-bottom-cta reveal">
          <h2>Don&apos;t Let Your Competitors Win.</h2>
          <p>Join 10,000+ marketers already utilizing our toolkit.</p>
          <button className="dm-btn-primary dm-btn-large" onClick={handleBookNow}>Claim Your Access Now</button>
        </section>

      </div>
    </>
  );
}
