'use client';

import ScrollReveal from '../components/ScrollReveal';

const certifications = [
  {
    id: 1, title: 'AWS Cloud Practitioner',
    provider: 'Amazon Web Services', duration: '8 Weeks',
    description: 'Validate your cloud knowledge with the industry-recognized AWS Cloud Practitioner certification. Covers AWS core services, security, pricing, and architecture.',
    image: '/extracted-imgs/21_Black_And_Blue_Modern_Cloud_Based_IT_Solutions_Presentation.png',
    benefits: ['Globally Recognized', 'Industry Demand', 'Career Growth', 'Hands-on Labs'],
  },
  {
    id: 2, title: 'Google Associate Cloud Engineer',
    provider: 'Google Cloud', duration: '10 Weeks',
    description: 'Deploy applications, monitor operations, and manage enterprise solutions on GCP. This certification proves your ability to set up cloud environments.',
    image: '/extracted-imgs/58_Blue_and_White_Simple_Cloud_Computing_Mind_Map.png',
    benefits: ['GCP Expertise', 'Real Projects', 'Exam Prep', 'Job Ready'],
  },
  {
    id: 3, title: 'Meta React Developer',
    provider: 'Meta (Facebook)', duration: '12 Weeks',
    description: 'Master React.js and modern frontend development. This professional certificate from Meta covers component architecture, hooks, testing, and deployment.',
    image: '/extracted-imgs/70_Blue_And_White_Modern_Responsive_Website_Development_Services_Instagram_Post-1.png',
    benefits: ['React Mastery', 'Portfolio Projects', 'Professional Certificate', 'Interview Prep'],
  },
  {
    id: 4, title: 'Unity Certified Developer',
    provider: 'Unity Technologies', duration: '14 Weeks',
    description: 'Demonstrate your skills in game development with Unity. Covers 3D/2D game design, scripting, VR/AR development, and optimization.',
    image: '/extracted-imgs/5_Blue_Modern_Game_Really_Great_Instagram_Post.png',
    benefits: ['Game Industry Ready', 'VR/AR Skills', 'Unity Expert', 'Studio Partner'],
  },
  {
    id: 5, title: 'CompTIA Security+',
    provider: 'CompTIA', duration: '10 Weeks',
    description: 'Launch your cybersecurity career with the globally trusted Security+ certification. Learn threat management, cryptography, and network security.',
    image: '/extracted-imgs/55_Blue_Modern_Futuristic_Cyber_Security_Presentation.png',
    benefits: ['DoD Approved', 'Vendor Neutral', 'Cyber Security', 'High Demand'],
  },
  {
    id: 6, title: 'Certified Kubernetes Administrator',
    provider: 'Cloud Native Computing Foundation', duration: '8 Weeks',
    description: 'Prove your Kubernetes expertise. Master container orchestration, cluster management, and cloud-native application deployment.',
    image: '/extracted-imgs/52_Blue_Gradient_Modern_IT_Solutions_&_Technology_Presentation.png',
    benefits: ['DevOps Essential', 'Industry Standard', 'Hands-on Exam', 'Career Boost'],
  },
];

export default function CertificationPage() {
  return (
    <>
      <ScrollReveal />
      <div className="cert-page">
        {/* Hero Banner */}
        <div className="cert-hero">
          <img src="/extracted-imgs/66_Blue_and_Black_Modern_Gradient_Technology_Virtual_Reality_Presentation.png" alt="Certifications" className="cert-hero-bg" />
          <div className="cert-hero-overlay">
            <h1>Professional Certifications</h1>
            <p>Industry-recognized certifications to accelerate your career. Prepared by experts, trusted by employers worldwide.</p>
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

        {/* Certifications Grid */}
        <div className="cert-content">
          <h2 className="section-title">Available Certifications</h2>
          <div className="cert-grid">
            {certifications.map((cert) => (
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
      </div>
    </>
  );
}
