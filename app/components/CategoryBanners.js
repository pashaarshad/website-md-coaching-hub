'use client';

const banners = [
  { id: 'it', title: 'IT', image: '/images/category-it.png' },
  { id: 'finance', title: 'FINANCE', image: '/images/category-finance.png' },
  { id: 'business', title: 'BUSINESS', image: '/images/category-business.png' },
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
