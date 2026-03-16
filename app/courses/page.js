'use client';

import ScrollReveal from '../components/ScrollReveal';

const gameImg = '/images/d0750684fe17210de53d9bec309b563a1c876971.png';

const allCourses = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Course ${i + 1}`,
  image: gameImg,
}));

export default function CoursesPage() {
  return (
    <>
      <ScrollReveal />
      <div className="courses-page">
        <h2 className="section-title">ALL COURSES</h2>
        <div className="courses-listing-grid">
          {allCourses.map((course) => (
            <div className="listing-card reveal" key={course.id}>
              <div className="listing-img">
                <img src={course.image} alt={course.name} />
              </div>
              <div className="listing-content">
                <button className="get-it-btn" id={`get-it-${course.id}`}>
                  GET IT NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
