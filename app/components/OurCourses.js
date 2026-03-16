'use client';

const gameImg = '/images/d0750684fe17210de53d9bec309b563a1c876971.png';
const cloudImg = '/images/b818b7d4bfb485e1301ea35820c498d2936f73e9.png';
const appImg = '/images/ebbda7b257cb51d696a5c2fac2f6b2cc5a4faa6a.png';

const categories = [
  {
    title: 'Skill Courses',
    courses: [
      { id: 's1', name: 'Cloud Basics', image: cloudImg },
      { id: 's2', name: 'Web Dev', image: appImg },
      { id: 's3', name: 'Data Science', image: gameImg },
      { id: 's4', name: 'Cyber Security', image: gameImg },
    ],
  },
  {
    title: 'Mid Level Courses',
    courses: [
      { id: 'm1', name: 'Full Stack', image: appImg },
      { id: 'm2', name: 'DevOps', image: cloudImg },
      { id: 'm3', name: 'AI/ML', image: gameImg },
      { id: 'm4', name: 'Blockchain', image: gameImg },
    ],
  },
  {
    title: 'Advanced Courses',
    courses: [
      { id: 'a1', name: 'Cloud Architect', image: cloudImg },
      { id: 'a2', name: 'ML Engineer', image: gameImg },
      { id: 'a3', name: 'Security Expert', image: gameImg },
      { id: 'a4', name: 'Solutions Arch', image: appImg },
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
