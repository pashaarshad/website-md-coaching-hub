'use client';

import { useState, useEffect } from 'react';
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

export default function CertificationPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCertImage, setSelectedCertImage] = useState(null);
  const [verifiedDB, setVerifiedDB] = useState([]);
  const [dbLoaded, setDbLoaded] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Load the extracted certificate data at runtime
  useEffect(() => {
    fetch('/certificate-data.json')
      .then(res => res.json())
      .then(data => {
        setVerifiedDB(data.certificates || []);
        setDbLoaded(true);
      })
      .catch(err => {
        console.error('Failed to load certificate data:', err);
        setDbLoaded(true);
      });
  }, []);

  // Search logic
  const queryCleaned = searchQuery.trim().toUpperCase().replace(/\s+/g, '');
  
  // Match verified certificate code (case-insensitive, whitespace-insensitive)
  const matchedVerified = verifiedDB.find(c => {
    const codeClean = c.code.toUpperCase().replace(/\s+/g, '');
    return codeClean === queryCleaned;
  });

  // Filter available enrollable certifications by keyword
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
          <div className="cert-search-header">
            <span className="search-badge">🔐 CERTIFICATE VERIFICATION</span>
            <h2>Verify Your Certificate</h2>
            <p>Enter your certificate code (e.g., MDCH/2025/INT-258) to instantly verify authenticity</p>
          </div>
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Enter Certificate Code (e.g., MDCH/2025/INT-258)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="cert-search-input"
              id="cert-verify-input"
            />
            {searchQuery && (
              <button className="search-clear-btn" onClick={() => setSearchQuery('')}>×</button>
            )}
          </div>
          {!dbLoaded && searchQuery && (
            <p className="search-loading">Loading certificate database...</p>
          )}
        </div>

        {/* Content Display */}
        <div className="cert-content">
          {/* Case A: Exact Verified Certificate Found */}
          {matchedVerified ? (
            <div className="verified-result-container">
              <div className="verified-badge-large">
                <span className="badge-check">✓</span> Authenticity Verified — Official MD Coaching Hub Certificate
              </div>
              
              <div className="verified-dashboard-card">
                <div className="dashboard-left">
                  <div className="cert-preview-box" onClick={() => setSelectedPdf(matchedVerified.pdfFile)}>
                    <iframe 
                      src={`${matchedVerified.pdfFile}#toolbar=0&navpanes=0&scrollbar=0`}
                      className="preview-thumbnail-iframe"
                      title="Certificate Preview"
                      style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }}
                    />
                    <div className="preview-overlay">
                      <span className="preview-icon">🔍</span>
                      <span>Click to View Full Certificate</span>
                    </div>
                  </div>
                </div>
                
                <div className="dashboard-right">
                  <span className="cert-type-tag">OFFICIAL MD COACHING HUB CREDENTIAL</span>
                  <h2>Verified Graduate Certificate</h2>
                  
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
                        <td className="detail-label">Duration:</td>
                        <td className="detail-value">{matchedVerified.duration || 'N/A'}</td>
                      </tr>
                      <tr>
                        <td className="detail-label">Certificate Code:</td>
                        <td className="detail-value-code">{matchedVerified.code}</td>
                      </tr>
                      <tr>
                        <td className="detail-label">Issue Date:</td>
                        <td className="detail-value">{matchedVerified.issueDate}</td>
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
                      onClick={() => setSelectedPdf(matchedVerified.pdfFile)}
                    >
                      📄 Open Full Certificate
                    </button>
                    <button className="download-pdf-btn" onClick={() => {
                      const a = document.createElement('a');
                      a.href = matchedVerified.pdfFile;
                      a.download = matchedVerified.code.replace(/\//g, '-') + '.pdf';
                      a.click();
                    }}>
                      ⬇️ Download PDF
                    </button>
                    <button className="download-pdf-btn" onClick={() => window.print()}>
                      🖨️ Print Verification
                    </button>
                  </div>
                </div>
              </div>

              {/* Security Seal */}
              <div className="verification-seal-container">
                <div className="seal-badge">
                  <span className="seal-icon">🛡️</span>
                  <div className="seal-text">
                    <strong>Blockchain-Grade Verification</strong>
                    <span>This certificate has been verified against the official MD Coaching Hub records database. Certificate ID: {matchedVerified.code}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : searchQuery && queryCleaned.includes('MDCH') && !matchedVerified ? (
            /* Case B: Looks like a certificate code but didn't match */
            <div className="no-cert-results-card">
              <span className="warning-icon">⚠️</span>
              <h3>Certificate Not Found</h3>
              <p>No verified certificate matches the code <strong>&quot;{searchQuery}&quot;</strong>. Please double-check the code and try again. Certificate codes follow the format: <code>MDCH/YYYY/INT-XXX</code></p>
              <div className="example-codes">
                <span className="example-label">Example codes:</span>
                {verifiedDB.slice(0, 3).map((c, i) => (
                  <button 
                    key={i} 
                    className="example-code-btn"
                    onClick={() => setSearchQuery(c.code)}
                  >
                    {c.code}
                  </button>
                ))}
              </div>
              <button className="reset-search-btn" onClick={() => setSearchQuery('')}>
                View All Certifications
              </button>
            </div>
          ) : (
            <>
              {/* Case C: Browse Available Certifications */}
              <h2 className="section-title">
                {searchQuery ? `Search Results (${filteredCertifications.length})` : 'Available Certifications'}
              </h2>
              
              {filteredCertifications.length > 0 ? (
                <div className="cert-grid">
                  {filteredCertifications.map((cert) => (
                    <div className="cert-card" key={cert.id}>
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
                <div className="no-cert-results-card">
                  <span className="warning-icon">⚠️</span>
                  <h3>No Results Found</h3>
                  <p>No certifications match <strong>&quot;{searchQuery}&quot;</strong>. Try a certificate code like <code>MDCH/2025/INT-258</code> to verify.</p>
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

        {/* Full-Screen PDF Viewer Modal */}
        {selectedPdf && (
          <div className="cert-lightbox-modal" onClick={() => setSelectedPdf(null)}>
            <button className="lightbox-close-btn" onClick={() => setSelectedPdf(null)}>×</button>
            <div className="lightbox-content lightbox-pdf-content" onClick={(e) => e.stopPropagation()}>
              <iframe 
                src={selectedPdf} 
                className="pdf-viewer-iframe"
                title="Certificate PDF Viewer"
              />
              <div className="lightbox-pdf-actions">
                <a 
                  href={selectedPdf} 
                  download
                  className="lightbox-download-btn"
                >
                  ⬇️ Download Certificate
                </a>
                <button className="lightbox-close-action" onClick={() => setSelectedPdf(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Legacy image lightbox (kept for backward compatibility) */}
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
