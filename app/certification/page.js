'use client';

import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

// Standard available certifications (for enrollment)
const availableCertifications = [
  {
    id: 1, title: 'AWS Cloud Practitioner',
    provider: 'Amazon Web Services', duration: '8 Weeks',
    description: 'Validate your cloud knowledge with the industry-recognized AWS Cloud Practitioner certification. Covers AWS core services, security, pricing, and architecture.',
    image: '/images/b818b7d4bfb485e1301ea35820c498d2936f73e9.png',
    benefits: ['Globally Recognized', 'Industry Demand', 'Career Growth', 'Hands-on Labs'],
  },
  {
    id: 2, title: 'Google Associate Cloud Engineer',
    provider: 'Google Cloud', duration: '10 Weeks',
    description: 'Deploy applications, monitor operations, and manage enterprise solutions on GCP. This certification proves your ability to set up cloud environments.',
    image: '/images/b818b7d4bfb485e1301ea35820c498d2936f73e9.png',
    benefits: ['GCP Expertise', 'Real Projects', 'Exam Prep', 'Job Ready'],
  },
  {
    id: 3, title: 'Meta React Developer',
    provider: 'Meta (Facebook)', duration: '12 Weeks',
    description: 'Master React.js and modern frontend development. This professional certificate from Meta covers component architecture, hooks, testing, and deployment.',
    image: '/images/ebbda7b257cb51d696a5c2fac2f6b2cc5a4faa6a.png',
    benefits: ['React Mastery', 'Portfolio Projects', 'Professional Certificate', 'Interview Prep'],
  },
  {
    id: 4, title: 'Unity Certified Developer',
    provider: 'Unity Technologies', duration: '14 Weeks',
    description: 'Demonstrate your skills in game development with Unity. Covers 3D/2D game design, scripting, VR/AR development, and optimization.',
    image: '/images/d0750684fe17210de53d9bec309b563a1c876971.png',
    benefits: ['Game Industry Ready', 'VR/AR Skills', 'Unity Expert', 'Studio Partner'],
  },
  {
    id: 5, title: 'CompTIA Security+',
    provider: 'CompTIA', duration: '10 Weeks',
    description: 'Launch your cybersecurity career with the globally trusted Security+ certification. Learn threat management, cryptography, and network security.',
    image: '/images/d0750684fe17210de53d9bec309b563a1c876971.png',
    benefits: ['DoD Approved', 'Vendor Neutral', 'Cyber Security', 'High Demand'],
  },
  {
    id: 6, title: 'Certified Kubernetes Administrator',
    provider: 'Cloud Native Computing Foundation', duration: '8 Weeks',
    description: 'Prove your Kubernetes expertise. Master container orchestration, cluster management, and cloud-native application deployment.',
    image: '/images/b818b7d4bfb485e1301ea35820c498d2936f73e9.png',
    benefits: ['DevOps Essential', 'Industry Standard', 'Hands-on Exam', 'Career Boost'],
  },
];

// Database of verified student certificates
const verifiedCertificates = [
  {
    code: 'MD2026',
    studentName: 'Rohit Sharma',
    course: 'Digital Marketing Masterclass',
    issueDate: 'May 31, 2026',
    grade: 'A+ (Elite Distinction)',
    status: 'Verified & Active',
    image: '/images/md_certificate.png'
  },
  {
    code: 'MD2026-DEV',
    studentName: 'Aman Choudhary',
    course: 'Full Stack Web Development',
    issueDate: 'April 15, 2026',
    grade: 'A (High Honors)',
    status: 'Verified & Active',
    image: '/images/md_certificate.png'
  },
  {
    code: 'MD2026-SMM',
    studentName: 'Priya Verma',
    course: 'Social Media Marketing Specialist',
    issueDate: 'June 01, 2026',
    grade: 'A+ (Elite Distinction)',
    status: 'Verified & Active',
    image: '/images/md_certificate.png'
  }
];

export default function CertificationPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCertImage, setSelectedCertImage] = useState(null);

  // Search logic
  const queryCleaned = searchQuery.trim().toUpperCase();
  
  // 1. Check if the query matches a verified certificate code exactly
  const matchedVerified = verifiedCertificates.find(
    c => c.code.toUpperCase() === queryCleaned
  );

  // 2. Filter available enrollable certifications by keyword if not matching a verified code
  const filteredCertifications = availableCertifications.filter(c =>
    c.title.toUpperCase().includes(queryCleaned) ||
    c.provider.toUpperCase().includes(queryCleaned)
  );

  return (
    <>
      <ScrollReveal />
      <div className="cert-page">
        {/* Hero Banner */}
        <div className="cert-hero">
          <img src="/images/6ad842a58149f478fda7e7926e20f5019e53b751.png" alt="Certifications" className="cert-hero-bg" />
          <div className="cert-hero-overlay">
            <h1>Professional Certifications</h1>
            <p>Industry-recognized credentials to accelerate your career. Search and verify authentic student certifications instantly.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="cert-stats">
          <div className="cert-stat-item">
            <strong>50+</strong>
            <span>Certification Programs</span>
          </div>
          <div className="cert-stat-item">
            <strong>95%</strong>
            <span>Pass Rate</span>
          </div>
          <div className="cert-stat-item">
            <strong>5000+</strong>
            <span>Certified Students</span>
          </div>
          <div className="cert-stat-item">
            <strong>100+</strong>
            <span>Hiring Partners</span>
          </div>
        </div>

        {/* Search Engine Section */}
        <div className="cert-search-section reveal">
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Verify Certificate Code (e.g., MD2026) or search programs..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="cert-search-input"
            />
            {searchQuery && (
              <button className="search-clear-btn" onClick={() => setSearchQuery('')}>×</button>
            )}
          </div>
          <p className="search-hint">Enter your student ID or verification code to check authentication status.</p>
        </div>

        {/* Content Display */}
        <div className="cert-content">
          {/* Case A: Exact Verified Certificate Found */}
          {matchedVerified ? (
            <div className="verified-result-container reveal">
              <div className="verified-badge-large">
                <span className="badge-check">✓</span> Authenticity Verified
              </div>
              
              <div className="verified-dashboard-card">
                <div className="dashboard-left">
                  <div className="cert-preview-box" onClick={() => setSelectedCertImage(matchedVerified.image)}>
                    <img src={matchedVerified.image} alt="MD Coaching Hub Certificate" className="preview-thumbnail" />
                    <div className="preview-overlay">
                      <span className="preview-icon">🔍</span>
                      <span>Click to View Full Certificate</span>
                    </div>
                  </div>
                </div>
                
                <div className="dashboard-right">
                  <span className="cert-type-tag">OFFICIAL MD CREDENTIAL</span>
                  <h2>MD Coaching Hub Certified Graduate</h2>
                  
                  <table className="verification-details-table">
                    <tbody>
                      <tr>
                        <td className="detail-label">Student Name:</td>
                        <td className="detail-value">{matchedVerified.studentName}</td>
                      </tr>
                      <tr>
                        <td className="detail-label">Program Completed:</td>
                        <td className="detail-value">{matchedVerified.course}</td>
                      </tr>
                      <tr>
                        <td className="detail-label">Verification Code:</td>
                        <td className="detail-value-code">{matchedVerified.code}</td>
                      </tr>
                      <tr>
                        <td className="detail-label">Graduation Date:</td>
                        <td className="detail-value">{matchedVerified.issueDate}</td>
                      </tr>
                      <tr>
                        <td className="detail-label">Grade / Distinction:</td>
                        <td className="detail-value-grade">{matchedVerified.grade}</td>
                      </tr>
                      <tr>
                        <td className="detail-label">Status:</td>
                        <td className="detail-value-status">
                          <span className="status-dot"></span> {matchedVerified.status}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="verification-actions">
                    <button 
                      className="view-full-cert-btn" 
                      onClick={() => setSelectedCertImage(matchedVerified.image)}
                    >
                      Open Full Certificate
                    </button>
                    <button className="download-pdf-btn" onClick={() => window.print()}>
                      Print Verification
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Case B: Keyword Search Results */}
              <h2 className="section-title">
                {searchQuery ? `Search Results (${filteredCertifications.length})` : 'Available Certifications'}
              </h2>
              
              {filteredCertifications.length > 0 ? (
                <div className="cert-grid">
                  {filteredCertifications.map((cert) => (
                    <div className="cert-card reveal" key={cert.id}>
                      <div className="cert-card-img">
                        <img src={cert.image} alt={cert.title} />
                        <div className="cert-provider">{cert.provider}</div>
                      </div>
                      <div className="cert-card-body">
                        <h3>{cert.title}</h3>
                        <p className="cert-duration">⏱ {cert.duration}</p>
                        <p className="cert-desc">{cert.description}</p>
                        <div className="cert-benefits">
                          {cert.benefits.map((b, i) => (
                            <span className="cert-badge" key={i}>{b}</span>
                          ))}
                        </div>
                        <button className="enroll-btn" id={`cert-enroll-${cert.id}`}>
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Case C: No results found at all */
                <div className="no-cert-results-card reveal">
                  <span className="warning-icon">⚠️</span>
                  <h3>No Verified Credentials Found</h3>
                  <p>We could not find any active student certificates matching <strong>&quot;{searchQuery}&quot;</strong>. Please check the spelling or verify the credential code.</p>
                  <button className="reset-search-btn" onClick={() => setSearchQuery('')}>
                    View All Certifications
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Process */}
        <div className="cert-process">
          <h2 className="section-title">Certification Process</h2>
          <div className="process-steps">
            <div className="process-step reveal">
              <div className="step-number">1</div>
              <h3>Enroll</h3>
              <p>Choose your certification program and enroll with flexible payment options.</p>
            </div>
            <div className="process-step reveal">
              <div className="step-number">2</div>
              <h3>Learn</h3>
              <p>Complete interactive lessons, hands-on labs, and practice exams with expert guidance.</p>
            </div>
            <div className="process-step reveal">
              <div className="step-number">3</div>
              <h3>Practice</h3>
              <p>Take mock exams, work on real projects, and get personalized feedback from mentors.</p>
            </div>
            <div className="process-step reveal">
              <div className="step-number">4</div>
              <h3>Get Certified</h3>
              <p>Pass the official exam and receive your industry-recognized certification.</p>
            </div>
          </div>
        </div>

        {/* Full-Screen Lightbox Modal for Certificate Viewing */}
        {selectedCertImage && (
          <div className="cert-lightbox-modal" onClick={() => setSelectedCertImage(null)}>
            <button className="lightbox-close-btn" onClick={() => setSelectedCertImage(null)}>×</button>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedCertImage} alt="Verified Certificate Full Resolution" className="lightbox-image" />
              <p className="lightbox-caption">MD Coaching Hub Official Verified Graduate Certificate</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
