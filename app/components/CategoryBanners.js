'use client';

const banners = [
  { id: 'it', title: 'IT', image: '/extracted-imgs/27_Blue_and_Orange_Modern_It_Technology_and_Solution_Service_Instagram_Post.png' },
  { id: 'finance', title: 'FINANCE', image: '/extracted-imgs/18_Green_and_White_Illustrative_Finance_Presentation.png' },
  { id: 'business', title: 'BUSINESS', image: '/extracted-imgs/1_Busines_Webinar_(Facebook_Post).png' },
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
