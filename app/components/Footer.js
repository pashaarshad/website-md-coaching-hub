'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>
            MD
            <span>Coaching Hub</span>
          </h2>
        </div>

        <div className="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/certification">Certification</Link></li>
            <li><Link href="/placements">Placements</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>About Us</h4>
          <ul>
            <li><Link href="#">Our Story</Link></li>
            <li><Link href="#">Team</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Partners</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Vision Now</h4>
          <ul>
            <li><Link href="#">Mission</Link></li>
            <li><Link href="#">Values</Link></li>
            <li><Link href="#">Goals</Link></li>
            <li><Link href="#">Impact</Link></li>
            <li><Link href="#">Community</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MD Coaching Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}
