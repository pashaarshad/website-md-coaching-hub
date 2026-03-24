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
             <h1 className="dm-title">🚀 Become a <span>Digital Marketing Expert</span> in 30 Days</h1>
             <p className="dm-subtitle">Master SEO, Ads, Social Media & AI Tools—Even If You&apos;re a Beginner</p>
             
             <div className="dm-urgency-banner">
               <span className="urgency-icon">⚡</span> Early Access Ends in 24 Hours!
               <div className="urgency-glow-line"></div>
             </div>

             <div className="dm-pricing-section">
               <div className="dm-price-old"><span>₹60,000</span></div>
               <div className="dm-price-new">₹15,000</div>
               <div className="dm-offer-tag">
                 <span className="star">⭐</span> 75% OFF Limited Offer!
                 <div className="offer-underline"></div>
               </div>
             </div>

             <div className="dm-cta-row">
               <button className="dm-btn-red pulse" onClick={handleBookNow}>Book Now</button>
               <button className="dm-btn-yellow" onClick={handleBookNow}>Get Early Access</button>
             </div>

             <div className="dm-social-proof">
               <span><span className="sp-icon">⭐</span> 4.8/5 Rating</span>
               <span className="divider">|</span>
               <span><span className="sp-icon">👥</span> 5,000+ Students</span>
               <span className="divider">|</span>
               <span><span className="sp-icon">💼</span> Industry Experts</span>
             </div>
          </div>

          <div className="dm-hero-image">
            <img src="/images/b818b7d4bfb485e1301ea35820c498d2936f73e9.png" alt="Digital Marketing Course" />
            <div className="dm-glow-circle-red"></div>
          </div>
          
          <div className="dm-bottom-timer-bar">
            <div className="timer-content">
              <span className="timer-icon">🕒</span> 
              <span className="timer-text">Offer expires in:</span>
              <div className="countdown-timer-mini">
                <div className="time-block-mini">
                  <span className="time-num-mini">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="time-label-mini">HRS</span>
                </div>
                <div className="time-colon-mini">:</div>
                <div className="time-block-mini">
                  <span className="time-num-mini">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="time-label-mini">MINS</span>
                </div>
                <div className="time-colon-mini">:</div>
                <div className="time-block-mini">
                  <span className="time-num-mini">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="time-label-mini">SECS</span>
                </div>
              </div>
            </div>
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
