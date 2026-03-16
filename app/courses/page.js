'use client';

import ScrollReveal from '../components/ScrollReveal';
import { useApp } from '../context/AppContext';

export default function CoursesPage() {
  const { courses, addToCart } = useApp();

  return (
    <>
      <ScrollReveal />
      <div className="courses-page">
        <h2 className="section-title">ALL COURSES</h2>
        <p className="page-description">Choose from our wide range of industry-leading courses designed by experts</p>
        <div className="courses-listing-grid">
          {courses.map((course) => (
            <div className="listing-card reveal" key={course.id}>
              <div className="listing-img">
                <img src={course.image} alt={course.title} />
                <div className="listing-badge">{course.level}</div>
              </div>
              <div className="listing-content">
                <h4 className="listing-title">{course.title}</h4>
                <div className="listing-meta">
                  <span>⏱ {course.duration}</span>
                  <span>⭐ {course.rating}</span>
                </div>
                <div className="listing-price">₹{course.price.toLocaleString()}</div>
                <button className="get-it-btn" id={`get-it-${course.id}`} onClick={() => addToCart(course)}>
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
