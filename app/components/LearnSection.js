'use client';

export default function LearnSection() {
  return (
    <section className="learn-section" id="learn-section">
      <img
        src="/images/6ad842a58149f478fda7e7926e20f5019e53b751.png"
        alt="Learn Background"
        className="learn-bg"
      />
      <div className="learn-overlay"></div>
      <div className="learn-content">
        <div className="learn-text">
          <h2>
            LEARN
            <span className="highlight">SMARTEST</span>
          </h2>
        </div>
        <div className="learn-text-right">
          <h3>Learn From Best Mentors</h3>
          <p>
            MD Coaching Hub provides world-class training programs designed to help you master
            the latest technologies and advance your career. Our expert instructors bring years
            of industry experience to deliver comprehensive, hands-on learning that prepares
            you for real-world challenges. Join thousands of successful students who have
            transformed their careers through our courses.
          </p>
          <p style={{marginTop: '1rem'}}>
            Whether you are a beginner looking to start your tech journey or a professional aiming to
            upskill, our carefully curated curriculum covers everything from cloud engineering
            and app development to game design and cybersecurity. Experience interactive
            learning with live projects, mentorship, and placement support.
          </p>
          <div style={{marginTop: '1.5rem', display: 'flex', justifyContent: 'center'}}>
            <img
              src="/images/dcb318320c74da179b68e7f94405a60be6789ba9.png"
              alt="Business Growth"
              style={{maxHeight: '200px', borderRadius: '10px'}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
