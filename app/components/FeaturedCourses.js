'use client';

import { useApp } from '../context/AppContext';

export default function FeaturedCourses() {
  const { courses, addToCart } = useApp();
  const featured = courses.slice(0, 3);

  return (
    <section className="featured-courses" id="featured-courses">
      <div className="courses-grid">
        {featured.map((course) => (
          <div className="course-card reveal" key={course.id}>
            <div className="course-card-image">
              <img src={course.image} alt={course.title} />
              <div className="card-label">{course.label}</div>
              <div className="card-sublabel">{course.sublabel}</div>
            </div>
            <div className="course-card-body">
              <h3>{course.title}</h3>
              <ul>
                {course.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <div className="card-meta">
                <span className="card-price">₹{course.price.toLocaleString()}</span>
                <span className="card-duration">{course.duration}</span>
              </div>
              <button className="enroll-btn" id={`enroll-btn-${course.id}`} onClick={() => addToCart(course)}>
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
