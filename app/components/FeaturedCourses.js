'use client';

const courses = [
  {
    id: 1,
    title: 'Cloud Manager',
    label: 'CLOUD',
    sublabel: 'ENGINEERING',
    image: '/images/b818b7d4bfb485e1301ea35820c498d2936f73e9.png',
    details: [
      'Cloud Manager',
      'Cloud Manager',
      'Cloud Manager',
      'Cloud Manager',
      'Cloud Manager',
    ],
  },
  {
    id: 2,
    title: 'App Development',
    label: 'APP',
    sublabel: 'DEVELOPMENT',
    image: '/images/ebbda7b257cb51d696a5c2fac2f6b2cc5a4faa6a.png',
    details: [
      'Mobile App Design',
      'React Native Basics',
      'API Integration',
      'App Deployment',
      'UI/UX Fundamentals',
    ],
  },
  {
    id: 3,
    title: 'Game Development',
    label: 'GAME',
    sublabel: 'REALLY GREAT',
    image: '/images/d0750684fe17210de53d9bec309b563a1c876971.png',
    details: [
      'Game Engine Basics',
      'Unity 3D Development',
      'Game Physics',
      'Multiplayer Systems',
      'Game Deployment',
    ],
  },
];

export default function FeaturedCourses() {
  return (
    <section className="featured-courses" id="featured-courses">
      <div className="courses-grid">
        {courses.map((course) => (
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
              <button className="enroll-btn" id={`enroll-btn-${course.id}`}>
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
