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
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

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

      {/* Left / Right Arrow Navigation */}
      <button className="hero-arrow hero-arrow-left" onClick={goToPrev} aria-label="Previous slide">
        &#8249;
      </button>
      <button className="hero-arrow hero-arrow-right" onClick={goToNext} aria-label="Next slide">
        &#8250;
      </button>
    </section>
  );
}

