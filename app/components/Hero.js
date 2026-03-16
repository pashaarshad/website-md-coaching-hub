'use client';

export default function Hero() {
  return (
    <section className="hero" id="hero-section">
      <img
        src="/images/6ad842a58149f478fda7e7926e20f5019e53b751.png"
        alt="AI Robot Background"
        className="hero-bg"
      />
      <div className="hero-overlay"></div>
      <div className="hero-content animate-fade-in-up">
        <h2>
          LEARN
          <span className="highlight">SMARTEST</span>
        </h2>
        <button className="hero-cta" id="hero-cta-btn">
          LET&apos;S GET A BIG CHANCE
        </button>
      </div>
    </section>
  );
}
