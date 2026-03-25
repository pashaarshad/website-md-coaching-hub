'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const images = [
    '/hero-slid/1.png',
    '/hero-slid/2.png',
    '/hero-slid/3.png',
    '/hero-slid/4.png',
    '/hero-slid/5.png'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Slits automatically every 2.5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="hero-section">
      <div 
        className="hero-slider-container" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Hero slide ${i + 1}`}
            className="hero-slide-img"
          />
        ))}
      </div>
      
      {/* Slider Indicators */}
      <div className="hero-slider-dots">
        {images.map((_, i) => (
          <span 
            key={i} 
            className={`hero-dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
