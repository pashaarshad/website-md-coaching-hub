'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { target: 10095, label: 'Business' },
  { target: 9958, label: 'Students' },
  { target: 75, label: 'Instructors' },
  { target: 26, label: 'Courses' },
];

function useCountUp(target, duration = 2000, isVisible) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, isVisible]);

  return count;
}

function StatItem({ target, label, isVisible }) {
  const count = useCountUp(target, 2000, isVisible);
  return (
    <div className="stat-item">
      <div className="stat-number">{count.toLocaleString()}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" id="stats-section" ref={sectionRef}>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            target={stat.target}
            label={stat.label}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
}
