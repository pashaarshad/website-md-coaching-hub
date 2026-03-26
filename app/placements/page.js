'use client';

import ScrollReveal from '../components/ScrollReveal';

const companies = [
  'Google', 'Microsoft', 'Amazon', 'Infosys', 'TCS', 'Wipro',
  'Accenture', 'Deloitte', 'HCL Tech', 'Cognizant', 'Tech Mahindra', 'IBM',
];

const testimonials = [
  {
    name: 'Ananya Desai', role: 'Cloud Engineer at AWS', intake: 'Batch 2024',
    text: 'MD Coaching Hub completely transformed my career. The hands-on labs and mentorship helped me crack the AWS interview in my first attempt. The placement team was incredibly supportive throughout.',
    package: '₹18 LPA',
  },
  {
    name: 'Rohan Kapoor', role: 'SDE at Microsoft', intake: 'Batch 2024',
    text: 'The full-stack engineering course was comprehensive and industry-relevant. The mock interviews and system design sessions were exactly what I needed. Highly recommend!',
    package: '₹24 LPA',
  },
  {
    name: 'Meera Nair', role: 'Data Scientist at Google', intake: 'Batch 2023',
    text: 'From a biology background to a data scientist at Google — MD Coaching Hub made this incredible journey possible. The data science course with live projects gave me real confidence.',
    package: '₹32 LPA',
  },
  {
    name: 'Vikash Singh', role: 'Security Analyst at Deloitte', intake: 'Batch 2024',
    text: 'The cybersecurity certification program was top-notch. Real-world scenarios, ethical hacking labs, and dedicated placement support. Got placed even before completing the course!',
    package: '₹14 LPA',
  },
];

export default function PlacementsPage() {
  return (
    <>
      <ScrollReveal />
      <div className="placement-page">
        {/* Hero */}
        <div className="cert-hero">
          <img src="/extracted-imgs/62_MD_COACHING.png" alt="Placements" className="cert-hero-bg" />
          <div className="cert-hero-overlay">
            <h1>Placement Support</h1>
            <p>We don&apos;t just teach — we place. 95% placement rate with top companies worldwide.</p>
          </div>
        </div>

        {/* Placement Stats */}
        <div className="cert-stats">
          <div className="cert-stat-item">
            <strong>95%</strong>
            <span>Placement Rate</span>
          </div>
          <div className="cert-stat-item">
            <strong>₹18L</strong>
            <span>Average Package</span>
          </div>
          <div className="cert-stat-item">
            <strong>₹45L</strong>
            <span>Highest Package</span>
          </div>
          <div className="cert-stat-item">
            <strong>500+</strong>
            <span>Hiring Partners</span>
          </div>
        </div>

        {/* Companies */}
        <div className="placement-companies">
          <h2 className="section-title">Our Hiring Partners</h2>
          <div className="companies-grid">
            {companies.map((company, i) => (
              <div className="company-card reveal" key={i}>
                <span>{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="placement-testimonials">
          <h2 className="section-title">Success Stories</h2>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card reveal" key={i}>
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <h4>{t.name}</h4>
                    <p className="testimonial-role">{t.role}</p>
                    <p className="testimonial-intake">{t.intake}</p>
                  </div>
                  <span className="testimonial-package">{t.package}</span>
                </div>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Process */}
        <div className="cert-process">
          <h2 className="section-title">Placement Process</h2>
          <div className="process-steps">
            <div className="process-step reveal">
              <div className="step-number">1</div>
              <h3>Resume Building</h3>
              <p>Expert-crafted resumes tailored to your skills, projects, and target companies.</p>
            </div>
            <div className="process-step reveal">
              <div className="step-number">2</div>
              <h3>Mock Interviews</h3>
              <p>Practice with industry professionals. Technical rounds, HR rounds, and system design.</p>
            </div>
            <div className="process-step reveal">
              <div className="step-number">3</div>
              <h3>Company Matching</h3>
              <p>We match your profile with our 500+ hiring partners for the best fitopportunities.</p>
            </div>
            <div className="process-step reveal">
              <div className="step-number">4</div>
              <h3>Get Placed</h3>
              <p>Interview confidently and land your dream job with our ongoing support.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
