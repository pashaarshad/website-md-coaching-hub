'use client';

const categories = [
  {
    title: 'Skill Courses',
    courses: [
      { id: 's1', name: 'Cloud Basics', image: '/images/game-development.png' },
      { id: 's2', name: 'Web Dev', image: '/images/game-development.png' },
      { id: 's3', name: 'Data Science', image: '/images/game-development.png' },
      { id: 's4', name: 'Cyber Security', image: '/images/game-development.png' },
    ],
  },
  {
    title: 'Mid Level Courses',
    courses: [
      { id: 'm1', name: 'Full Stack', image: '/images/game-development.png' },
      { id: 'm2', name: 'DevOps', image: '/images/game-development.png' },
      { id: 'm3', name: 'AI/ML', image: '/images/game-development.png' },
      { id: 'm4', name: 'Blockchain', image: '/images/game-development.png' },
    ],
  },
  {
    title: 'Advanced Courses',
    courses: [
      { id: 'a1', name: 'Cloud Architect', image: '/images/game-development.png' },
      { id: 'a2', name: 'ML Engineer', image: '/images/game-development.png' },
      { id: 'a3', name: 'Security Expert', image: '/images/game-development.png' },
      { id: 'a4', name: 'Solutions Arch', image: '/images/game-development.png' },
    ],
  },
];

export default function OurCourses() {
  return (
    <section className="our-courses" id="our-courses">
      <h2 className="section-title">OUR COURSES</h2>
      <div className="section-content">
        {categories.map((cat, idx) => (
          <div className="course-category reveal" key={idx}>
            <h3>{cat.title}</h3>
            <div className="category-grid">
              {cat.courses.map((course) => (
                <div className="mini-course-card" key={course.id}>
                  <div className="card-img">
                    <img src={course.image} alt={course.name} />
                  </div>
                  <div className="card-content">
                    <button className="enroll-btn" id={`enroll-${course.id}`}>
                      Enroll Now
                    </button>
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
