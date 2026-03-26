import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import OurCourses from './components/OurCourses';
import CategoryBanners from './components/CategoryBanners';
import GalleryShowcase from './components/GalleryShowcase';
import LearnSection from './components/LearnSection';
import StatsSection from './components/StatsSection';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Hero />
      <FeaturedCourses />
      <OurCourses />
      <CategoryBanners />
      <GalleryShowcase />
      <LearnSection />
      <StatsSection />
    </>
  );
}
