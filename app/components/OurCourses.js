'use client';

import { useApp } from '../context/AppContext';

export default function OurCourses() {
  const { courses, addToCart } = useApp();

  const categories = [
    { title: 'Skill Courses', key: 'skill' },
    { title: 'Mid Level Courses', key: 'mid' },
    { title: 'Advanced Courses', key: 'advanced' },
  ];

  return (
    <section className="our-courses" id="our-courses">
      <h2 className="section-title">OUR COURSES</h2>
      <div className="section-content">
        {categories.map((cat) => {
          const filtered = courses.filter(c => c.category === cat.key);
          return (
            <div className="course-category reveal" key={cat.key}>
              <h3>{cat.title}</h3>
              <div className="category-grid">
                {filtered.map((course) => (
                  <div className="mini-course-card" key={course.id}>
                    <div className="card-img">
                      <img src={course.image} alt={course.title} />
                      <div className="mini-card-overlay">
                        <span className="mini-card-title">{course.title}</span>
                        <span className="mini-card-price">₹{course.price.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="card-content">
                      <button className="enroll-btn" id={`enroll-${course.id}`} onClick={() => addToCart(course)}>
                        Enroll Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
