'use client';

const banners = [
  { id: 'it', title: 'IT', image: '/images/d0750684fe17210de53d9bec309b563a1c876971.png' },
  { id: 'finance', title: 'FINANCE', image: '/images/b818b7d4bfb485e1301ea35820c498d2936f73e9.png' },
  { id: 'business', title: 'BUSINESS', image: '/images/ebbda7b257cb51d696a5c2fac2f6b2cc5a4faa6a.png' },
];

export default function CategoryBanners() {
  return (
    <section className="category-banners reveal" id="category-banners">
      <div className="banners-grid">
        {banners.map((banner) => (
          <div className="category-banner" key={banner.id} id={`banner-${banner.id}`}>
            <img src={banner.image} alt={banner.title} />
            <div className="banner-overlay">
              <h3>{banner.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
