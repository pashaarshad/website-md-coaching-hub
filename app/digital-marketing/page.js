'use client';

import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useRouter } from 'next/navigation';
import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';

export default function DigitalMarketingLanding() {
  const { addToCart, showToast } = useApp();
  const router = useRouter();
  
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
        if (prev.minutes > 0) return { ...prev, minutes: prev.seconds === 0 ? prev.minutes - 1 : prev.minutes, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Testimonials Auto-sliding State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  const testimonials = [
    {
      name: 'Rohit Sharma',
      age: 22,
      city: 'Jaipur',
      role: 'Digital Marketing Executive @ TechSpark Agency',
      quote: 'I had zero knowledge of Meta Ads or Google Analytics. MD Coaching Hub taught me live campaigns, not just theory. Got placed within 3 months. Started at ₹18K — now at ₹32K in 8 months.'
    },
    {
      name: 'Priya Verma',
      age: 24,
      city: 'Sikar',
      role: 'Social Media Manager @ D2C Brand',
      quote: 'No coding background, no experience. But the practical training here — real projects, ad copy, content strategy — got me my first client in just 2 months. Total game changer.'
    },
    {
      name: 'Aman Choudhary',
      age: 26,
      city: 'Alwar',
      role: 'Freelancer | ₹40,000+/month',
      quote: 'SEO, paid ads, funnel strategy — everything was taught so clearly that I could confidently pitch clients. Today I have 4 active clients. MD Coaching Hub made freelancing real for me.'
    },
    {
      name: 'Neha Gupta',
      age: 23,
      city: 'Delhi',
      role: 'Performance Marketer @ Startup',
      quote: 'They asked me about ROAS and CPA in my interview — I nailed it because I had actually practiced it here. Got an internship, full-time offer in 45 days.'
    },
    {
      name: 'Deepak Saini',
      age: 25,
      city: 'Bharatpur',
      role: 'Google Ads Specialist @ Agency',
      quote: 'Tried learning from YouTube — too scattered. Here I got a proper roadmap, quick doubt solving, and even mock interviews. Felt like someone genuinely wanted me to succeed.'
    },
    {
      name: 'Anjali Meena',
      age: 21,
      city: 'Tonk',
      role: 'Remote Job | Hired in 60 Days',
      quote: 'Digital marketing opened a door I didn\'t know existed. Got a remote job within 60 days of completing the course. MD Coaching Hub didn\'t just teach — they placed me.'
    }
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setCurrentSlide(prev => (prev + 1) % testimonials.length);
        setFadeState('fade-in');
      }, 300);
    }, 2500);
    return () => clearInterval(slideTimer);
  }, [testimonials.length]);

  const handleBuyNow = () => {
    const dmCourse = {
      id: 101,
      title: 'Digital Marketing Masterclass',
      price: 15000,
      image: '/vedios-and-photos/poster.PNG',
      label: 'DIGITAL',
      sublabel: 'MARKETING',
      duration: '4 Weeks',
      level: 'Beginner to Pro',
      description: 'Master Meta Ads, Google Ads, SEO, SMM, and AI tools with live campaigns.'
    };
    addToCart(dmCourse);
    router.push('/cart');
  };

  const handleContactUs = () => {
    router.push('/contact');
  };

  const modules = [
    { name: 'Meta Ads', desc: 'Master hyper-targeted Facebook & Instagram campaigns, custom audiences, custom conversion funnels, and high-ROAS creative scaling.', icon: '🎯' },
    { name: 'Google Ads', desc: 'Conquer Google Search, Display, Performance Max, and YouTube campaigns. Learn deep keyword bid strategies and exact conversion tracking.', icon: '📈' },
    { name: 'SEO (Search Engine Optimization)', desc: 'Learn technical site audits, semantic keyword mapping, search intent optimization, and high-authority premium backlink acquisition.', icon: '🔍' },
    { name: 'SMM (Social Media Marketing)', desc: 'Build viral organic strategies, content calendars, brand communication, and high-engagement social media pages across platforms.', icon: '📱' },
    { name: 'AI Marketing', desc: 'Accelerate your workflow with modern AI copywriting, automated prompt engineering, audience analytics models, and auto-bot lead nurturing.', icon: '🤖' },
    { name: 'Influencer Collaboration', desc: 'Discover high-converting micro-influencers, run ROI-driven outreach campaigns, manage content contracts, and scale brand awareness.', icon: '🤝' },
  ];

  // Student snapshots from videos-and-photos
  const studentSnapshots = [
    '/vedios-and-photos/SnapInsta.to_670566784_18085789823581881_7238643967236599453_n.jpg.jpeg',
    '/vedios-and-photos/SnapInsta.to_670589085_18085789865581881_3062715464507749088_n.jpg.jpeg',
    '/vedios-and-photos/SnapInsta.to_670833420_18085789847581881_7480066450309375831_n.jpg.jpeg',
    '/vedios-and-photos/SnapInsta.to_670860895_18085789832581881_274540085624233984_n.jpg.jpeg',
    '/vedios-and-photos/SnapInsta.to_671058814_18085789874581881_1152826359781236174_n.jpg.jpeg',
    '/vedios-and-photos/SnapInsta.to_671108377_18085789862581881_5097290585760954277_n.jpg.jpeg'
  ];

  // Student videos from videos-and-photos (9:16 aspect ratio vertical clips)
  const studentVideos = [
    { src: '/vedios-and-photos/SnapInsta.to_AQMn7-Mbp1h44iI95UGX680uGmF6KTayWXFMS7NqzN2WHWgx-4YWc6TPO38MFJD6xBdp4-OOeVossj9FZmKTiiET.mp4', title: 'Student Success Story 1' },
    { src: '/vedios-and-photos/SnapInsta.to_AQO-xtq0q84QpnmzWLj4gnhtsJbPv1g0OIGagaLBvJvu6Ow5kd7BuLWi0RQ6v3bsP_0cR6IDItOuiCO3SeqAHM05vHSwM6BTtNLbsz8.mp4', title: 'Student Success Story 2' },
    { src: '/vedios-and-photos/SnapInsta.to_AQO0XCNKvB_g21ncu_c4A5pbMaDV6DFdGDNHOFdAylmglBPbtKIMu46XnZgLHIEXi6yWhd-EQOepwsXD84wAmPi6NAL0muy903KA9GY.mp4', title: 'Student Success Story 3' },
    { src: '/vedios-and-photos/SnapInsta.to_AQOCqrAetqgOQf6e2-paNdfilCX2pACZf7EuaGb8Z9IqlN9jqGztyhTzmoiNlNNfYQTvoW6lrCysURnJP_qESHOo6tWqExaN-uUGXiI.mp4', title: 'Student Success Story 4' },
    { src: '/vedios-and-photos/SnapInsta.to_AQOnnj2MYzki3rQmyCvJ1JW3nd9f8O5-11SrlxnjqKzw5XB3suCe6-xgCE7XQZZqnYA4Ksv2cmhUciNBXxvruZ472HoXmJeE0XJVWOA.mp4', title: 'Student Success Story 5' },
    { src: '/vedios-and-photos/SnapInsta.to_AQOoJhT8wDERFpBP4-LSqfnnznl5CXzt2NQZyGtwiCTvOzybjLioIRq9TSuoqFeQJq1Mo9DNa3Qg21r2O_o8Yn9aiwxwRvF04h3SRGY.mp4', title: 'Student Success Story 6' }
  ];

  const [activePhoto, setActivePhoto] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);

  // Auto-playing Slider for Certificate Ceremony (No manual operations needed)
  useEffect(() => {
    const photoTimer = setInterval(() => {
      setActivePhoto(prev => (prev + 1) % studentSnapshots.length);
    }, 3000); // changes photo every 3 seconds
    return () => clearInterval(photoTimer);
  }, [studentSnapshots.length]);

  return (
    <>
      <ScrollReveal />
      <div className="landing-page-dm">
        
        {/* Hero Banner */}
        <section className="dm-hero reveal">
          <div className="dm-hero-container">
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
                  <button className="dm-btn-premium-buy pulse" onClick={handleBuyNow}>Buy Now</button>
                  <button className="dm-btn-premium-contact" onClick={handleContactUs}>Contact Us</button>
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
              <img src="/vedios-and-photos/poster.PNG" alt="Digital Marketing Course Poster" />
              <div className="dm-glow-circle-red"></div>
            </div>
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

        {/* Modules Section */}
        <section id="modules" className="dm-tools-section">
          <div className="dm-tools-header reveal">
            <h2>6 Premium Top Modules</h2>
            <p>Our ultra-premium, practical curriculum tailored for high-paying roles.</p>
          </div>
          
          <div className="dm-tools-grid">
            {modules.map((module, index) => (
              <div className="dm-tool-card reveal" key={index}>
                <div className="dm-tool-icon">{module.icon}</div>
                <h3>{module.name}</h3>
                <p>{module.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="dm-why-choose-section">
          <div className="dm-why-choose-container reveal">
            <div className="dm-why-choose-left">
              <div className="certificate-wrapper">
                <img 
                  src="/images/md_certificate.png" 
                  alt="MD Coaching Hub Sample Certificate of Completion" 
                  className="certificate-image"
                />
                <div className="certificate-badge-overlay">SAMPLE CERTIFICATE</div>
                <div className="certificate-glow"></div>
              </div>
            </div>
            <div className="dm-why-choose-right">
              <span className="dm-section-badge">WHY CHOOSE US</span>
              <h2>Why Choose <span>MD Coaching Hub</span>?</h2>
              <p className="dm-why-intro">We provide a practical, goal-oriented education system designed to make you an industry leader rather than just teaching you tools.</p>
              
              <ul className="why-benefits-list">
                <li>
                  <span className="benefit-icon">💡</span>
                  <div>
                    <h4>100% Practical Training</h4>
                    <p>Work on live client campaigns, manage actual budgets, and build dynamic lead pipelines.</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">🏆</span>
                  <div>
                    <h4>Industry Recognized Certification</h4>
                    <p>Earn a highly valued certificate of completion to validate your expertise in top digital agencies.</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">🚀</span>
                  <div>
                    <h4>Assured Interview & Placements</h4>
                    <p>Dedicated mock interviews, resume refinement, and placement portals to launch your tech career.</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">🎓</span>
                  <div>
                    <h4>Elite 1-on-1 Mentorship</h4>
                    <p>Receive direct feedback and roadmaps from active digital performance marketing heads.</p>
                  </div>
                </li>
              </ul>

              <div className="why-cta-wrapper">
                <button className="dm-btn-premium-buy pulse" onClick={handleBuyNow}>Buy Now</button>
              </div>
            </div>
          </div>
        </section>

        {/* Brand New: Student Success Celebrations Section (White Background) */}
        <section className="dm-celebrations-section reveal light-bg">
          <div className="dm-celebrations-header dark-text">
            <span className="dm-section-badge-light">CELEBRATIONS</span>
            <h2>Our Students, Our Pride! 🌟</h2>
            <p>Watch our students receive their official certifications and share their stories.</p>
          </div>

          <div className="dm-celebrations-container">
            {/* Left Column: Image Gallery (Certificate Ceremony Snapshots - Autoplay Slider) */}
            <div className="dm-celebrations-left">
              <h3 className="celebration-title dark-text-title">📸 Certificate Ceremony Moments</h3>
              <div className="celebration-main-photo-wrapper">
                <img 
                  src={studentSnapshots[activePhoto]} 
                  alt="Student receiving certificate ceremony" 
                  className="celebration-main-photo" 
                />
                <div className="photo-navigation-bar">
                  <span className="photo-indicator-text">Auto-playing • Snapshot {activePhoto + 1} of {studentSnapshots.length}</span>
                </div>
              </div>
              <div className="celebration-thumbnails-grid">
                {studentSnapshots.map((src, index) => (
                  <div 
                    key={index}
                    className={`celebration-thumb-light ${activePhoto === index ? 'active' : ''}`}
                    onClick={() => setActivePhoto(index)}
                  >
                    <img src={src} alt={`Ceremony Snapshot ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Live Student Feedback Video (9:16 aspect ratio vertical view) */}
            <div className="dm-celebrations-right">
              <h3 className="celebration-title dark-text-title">🎥 Student Register Stories</h3>
              <div className="celebration-video-mobile-mockup">
                <div className="mobile-speaker"></div>
                <div className="mobile-screen-container">
                  <video 
                    key={activeVideo}
                    controls 
                    preload="metadata"
                    className="celebration-vertical-video"
                    autoPlay={false}
                    poster="/vedios-and-photos/poster.PNG"
                  >
                    <source src={studentVideos[activeVideo].src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="mobile-home-button"></div>
              </div>
              
              {/* Button playlist row under player */}
              <div className="celebration-video-pill-selector">
                {studentVideos.map((video, index) => (
                  <button 
                    key={index}
                    className={`video-pill-btn ${activeVideo === index ? 'active' : ''}`}
                    onClick={() => setActiveVideo(index)}
                  >
                    {video.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Swiper.js-like Testimonials Section (10% viewport height themed) */}
        <section className="dm-compact-testimonials-section">
          <div className="slider-wrapper">
            <div className={`testimonial-slide ${fadeState}`}>
              <div className="slide-content">
                <span className="quote-mark">“</span>
                <p className="quote-text">{testimonials[currentSlide].quote}</p>
                <div className="testimonial-author-meta">
                  <span className="author-name">{testimonials[currentSlide].name}</span>
                  <span className="author-age-city">({testimonials[currentSlide].age} | {testimonials[currentSlide].city})</span>
                  <span className="author-role">{testimonials[currentSlide].role}</span>
                </div>
              </div>
            </div>
            
            {/* Slide Indicators */}
            <div className="slide-dots">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`dot ${currentSlide === idx ? 'active' : ''}`}
                  onClick={() => {
                    setFadeState('fade-out');
                    setTimeout(() => {
                      setCurrentSlide(idx);
                      setFadeState('fade-in');
                    }, 300);
                  }}
                ></button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Creative Bottom CTA Section */}
        <section className="dm-creative-cta reveal">
          <div className="dm-creative-cta-container">
            <span className="dm-creative-cta-tag">LIMITED SEATS AVAILABLE</span>
            <h2>Ready to Scale Your Career to the Next Level?</h2>
            <p>Secure your spot in the masterclass today and gain immediate access to premium live-campaign training, agency-recognized certification, and direct client placement portals.</p>
            <button className="dm-btn-premium-buy pulse" onClick={handleBuyNow}>Buy Now & Get 75% Off</button>
          </div>
        </section>

      </div>
    </>
  );
}
