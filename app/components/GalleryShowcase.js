'use client';

const galleryCategories = [
  {
    title: 'Artificial Intelligence & ML',
    images: [
      { src: '/extracted-imgs/4_White_and_Purple_Modern_Artificial_Intelligence_Presentation.png', alt: 'AI Presentation' },
      { src: '/extracted-imgs/7_Blue_Futuristic_Artificial_Intelligence_Presentation.png', alt: 'Futuristic AI' },
      { src: '/extracted-imgs/8_Black_Minimalist_Modern_AI_Robot_Presentation.png', alt: 'AI Robot' },
      { src: '/extracted-imgs/14_Blue_Futuristic_Artificial_Intelligence_Presentation.png', alt: 'AI Future' },
      { src: '/extracted-imgs/39_Yellow_White_Bold_Best_AI_Websites_YouTube_Thumbnail.png', alt: 'Best AI Websites' },
      { src: '/extracted-imgs/68_Blue_Futuristic_3D_Artificial_Intelligence_Technology_Presentation.png', alt: 'AI 3D Technology' },
    ],
  },
  {
    title: 'Software & Web Development',
    images: [
      { src: '/extracted-imgs/32_Blue_Orange_Modern_Geometric_Software_Development_Presentation.png', alt: 'Software Dev' },
      { src: '/extracted-imgs/53_Blue_Orange_Modern_Geometric_Software_Development_Presentation.png', alt: 'Dev Presentation' },
      { src: '/extracted-imgs/70_Blue_And_White_Modern_Responsive_Website_Development_Services_Instagram_Post-1.png', alt: 'Website Dev' },
      { src: '/extracted-imgs/30_Blue_Textured_Space_Landscape_Hello_World_Desktop_Wallpaper.png', alt: 'Hello World' },
      { src: '/extracted-imgs/51_Blue_Colourful_Tutorial_YouTube_Thumbnail.png', alt: 'Tutorial' },
    ],
  },
  {
    title: 'Cyber Security & IT',
    images: [
      { src: '/extracted-imgs/2_Teal_and_White_Modern_Cyber_Attack_YouTube_Thumbnail.png', alt: 'Cyber Attack' },
      { src: '/extracted-imgs/9_Teal_and_White_Modern_Cyber_Attack_YouTube_Thumbnail.png', alt: 'Cyber Security' },
      { src: '/extracted-imgs/55_Blue_Modern_Futuristic_Cyber_Security_Presentation.png', alt: 'Cyber Security Presentation' },
      { src: '/extracted-imgs/56_Green_Neon_Hacking_Tutorials_YouTube_Thumbnail.png', alt: 'Hacking Tutorials' },
      { src: '/extracted-imgs/10_White_and_Navy_Modern_IT_Consulting_Service_Instagram_Post.png', alt: 'IT Consulting' },
      { src: '/extracted-imgs/60_Digital_Citizenship_Technologies_Presentation_in_Black_Blue_Cyber_Style.png', alt: 'Digital Citizenship' },
    ],
  },
  {
    title: 'Business & Finance',
    images: [
      { src: '/extracted-imgs/3_Black_and_Red_Modern_Business_Tutorial_YouTube_Thumbnail.png', alt: 'Business Tutorial' },
      { src: '/extracted-imgs/17_Black_and_Red_Professional_Business_Youtube_Thumbnail.png', alt: 'Professional Business' },
      { src: '/extracted-imgs/23_Businessmen_Yellow_Blue_Youtube_Thumbnail.png', alt: 'Businessmen' },
      { src: '/extracted-imgs/35_Red_Bold_Finance_YouTube_Thumbnail.png', alt: 'Finance Bold' },
      { src: '/extracted-imgs/37_Green_Modern_How_To_Invest_Your_Money_Youtube_Thumbnail.png', alt: 'Invest Money' },
      { src: '/extracted-imgs/72_Brown_and_White_Modern_Personal_Finance_Tips_YouTube_Thumbnail.png', alt: 'Finance Tips' },
      { src: '/extracted-imgs/19_Bold_Modern_Earn_Money_Tips_YouTube_Thumbnail.png', alt: 'Earn Money Tips' },
      { src: '/extracted-imgs/67_how_to_make_money_in_2022.png', alt: 'How to Make Money' },
    ],
  },
  {
    title: 'Digital Marketing & Growth',
    images: [
      { src: '/extracted-imgs/16_Dark_Blue_Illustrative_Digital_Marketing_Agency_Instagram_Post.png', alt: 'Digital Marketing Agency' },
      { src: '/extracted-imgs/25_Blue_Pink_Modern_Digital_Marketing_Class_YouTube_Thumbnail.png', alt: 'Marketing Class' },
      { src: '/extracted-imgs/34_Blue_White_Isometry_Keyword_Research_Business_Concept_Facebook_Post.png', alt: 'Keyword Research' },
      { src: '/extracted-imgs/71_Orange_and_white_modern_creative_marketing_plan_Presentation_.png', alt: 'Marketing Plan' },
      { src: '/extracted-imgs/29_Blue_Modern_Grow_Your_Business_Blog_Banner.png', alt: 'Grow Business' },
    ],
  },
  {
    title: 'Cloud & IT Solutions',
    images: [
      { src: '/extracted-imgs/21_Black_And_Blue_Modern_Cloud_Based_IT_Solutions_Presentation.png', alt: 'Cloud IT Solutions' },
      { src: '/extracted-imgs/58_Blue_and_White_Simple_Cloud_Computing_Mind_Map.png', alt: 'Cloud Computing' },
      { src: '/extracted-imgs/52_Blue_Gradient_Modern_IT_Solutions_&_Technology_Presentation.png', alt: 'IT Solutions' },
      { src: '/extracted-imgs/40_White_&_Navy_Futuristic_Technology_Facebook_Cover.png', alt: 'Futuristic Tech' },
      { src: '/extracted-imgs/28_Analytic_Dashboard.png', alt: 'Analytics Dashboard' },
      { src: '/extracted-imgs/12_Blue_White_Modern_Data_Recovery_Services_Twitter_Post.png', alt: 'Data Recovery' },
    ],
  },
  {
    title: 'Creative & Multimedia',
    images: [
      { src: '/extracted-imgs/45_Dark_Editing_Video_Tutorial_Youtube_Thumbnail.png', alt: 'Video Editing' },
      { src: '/extracted-imgs/43_Simple_Neon_Stand_Up_Comedy_Show_Youtube_Thumbnail.png', alt: 'Comedy Show' },
      { src: '/extracted-imgs/44_Yellow_And_Black_Modern_Electro_Music_Channel_YouTube_Thumbnail_.png', alt: 'Music Channel' },
      { src: '/extracted-imgs/61_Pink_and_Blue_Electro_Music_Channel_YouTube_Thumbnail.png', alt: 'Electro Music' },
      { src: '/extracted-imgs/65_Aesthetic_Purple_Modern_Music_Studio_Trifold_Brochure.png', alt: 'Music Studio' },
    ],
  },
  {
    title: 'Leadership & Communication',
    images: [
      { src: '/extracted-imgs/15_Purple_And_White_Modern_Effective_Communication_Presentation.png', alt: 'Communication' },
      { src: '/extracted-imgs/41_Blue_and_Gradient_Corporate_Presentation_.png', alt: 'Corporate' },
      { src: '/extracted-imgs/46_Pastel_Blue_Minimalist_Modern_Business_Blog_Banner.png', alt: 'Business Blog' },
      { src: '/extracted-imgs/64_Navy_Red_Modern_Stratup_Funding_Mastery_Youtube_Thumbnail.png', alt: 'Startup Funding' },
    ],
  },
];

export default function GalleryShowcase() {
  return (
    <section className="gallery-showcase" id="gallery-showcase">
      <h2 className="section-title">WHAT WE OFFER</h2>
      <p className="gallery-subtitle">Explore our diverse range of premium courses and programs</p>
      <div className="gallery-categories">
        {galleryCategories.map((cat, i) => (
          <div className="gallery-cat reveal" key={i}>
            <h3 className="gallery-cat-title">{cat.title}</h3>
            <div className="gallery-grid" data-count={cat.images.length}>
              {cat.images.map((img, j) => (
                <div className="gallery-item" key={j}>
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <div className="gallery-overlay">
                    <span>{img.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
