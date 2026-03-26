'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AppContext = createContext();

// Course data — images now sourced from extracted PDF assets
const ALL_COURSES = [
  // ===== SKILL COURSES =====
  {
    id: 1, title: 'Cloud Manager', category: 'skill', price: 4999,
    image: '/extracted-imgs/21_Black_And_Blue_Modern_Cloud_Based_IT_Solutions_Presentation.png',
    label: 'CLOUD', sublabel: 'ENGINEERING',
    duration: '12 Weeks', level: 'Beginner', students: 1240, rating: 4.7,
    description: 'Master cloud infrastructure with AWS, Azure, and GCP. Deploy scalable solutions and manage enterprise-level cloud environments.',
    details: ['AWS Cloud Fundamentals', 'Azure Administration', 'GCP Services Overview', 'Cloud Security Best Practices', 'DevOps Integration'],
    instructor: 'Dr. Rajesh Kumar',
  },
  {
    id: 2, title: 'App Development', category: 'skill', price: 5999,
    image: '/extracted-imgs/70_Blue_And_White_Modern_Responsive_Website_Development_Services_Instagram_Post-1.png',
    label: 'APP', sublabel: 'DEVELOPMENT',
    duration: '16 Weeks', level: 'Intermediate', students: 2180, rating: 4.8,
    description: 'Build cross-platform mobile applications with React Native and Flutter. Learn UI/UX design, API integration, and app deployment.',
    details: ['React Native Fundamentals', 'Flutter Development', 'API Integration & REST', 'App Store Deployment', 'UI/UX Mobile Design'],
    instructor: 'Priya Sharma',
  },
  {
    id: 3, title: 'Game Development', category: 'skill', price: 6999,
    image: '/extracted-imgs/5_Blue_Modern_Game_Really_Great_Instagram_Post.png',
    label: 'GAME', sublabel: 'DEVELOPMENT',
    duration: '20 Weeks', level: 'Intermediate', students: 890, rating: 4.6,
    description: 'Create immersive gaming experiences with Unity and Unreal Engine. Master 3D modeling, game physics, and multiplayer development.',
    details: ['Unity 3D Game Engine', 'Unreal Engine Basics', 'Game Physics & Mechanics', 'Multiplayer Networking', 'Game Publishing'],
    instructor: 'Amit Patel',
  },
  {
    id: 4, title: 'Web Development', category: 'skill', price: 3999,
    image: '/extracted-imgs/32_Blue_Orange_Modern_Geometric_Software_Development_Presentation.png',
    label: 'WEB', sublabel: 'DEVELOPMENT',
    duration: '14 Weeks', level: 'Beginner', students: 3200, rating: 4.9,
    description: 'Complete full-stack web development with HTML, CSS, JavaScript, React, Node.js, and database management.',
    details: ['HTML5 & CSS3 Mastery', 'JavaScript ES6+', 'React.js Framework', 'Node.js & Express', 'MongoDB & SQL'],
    instructor: 'Sneha Gupta',
  },
  // ===== MID LEVEL COURSES =====
  {
    id: 5, title: 'Data Science', category: 'mid', price: 7999,
    image: '/extracted-imgs/47_Purple_And_White_Simple_Illustrated_Data_Science_YouTube_Thumbnail.png',
    label: 'DATA', sublabel: 'SCIENCE',
    duration: '18 Weeks', level: 'Intermediate', students: 1560, rating: 4.7,
    description: 'Explore data analytics, machine learning, and AI with Python. Work on real-world projects using TensorFlow and scikit-learn.',
    details: ['Python for Data Science', 'Machine Learning Algorithms', 'Deep Learning with TensorFlow', 'Data Visualization', 'Statistical Analysis'],
    instructor: 'Dr. Vikram Singh',
  },
  {
    id: 6, title: 'Cyber Security', category: 'mid', price: 8999,
    image: '/extracted-imgs/55_Blue_Modern_Futuristic_Cyber_Security_Presentation.png',
    label: 'CYBER', sublabel: 'SECURITY',
    duration: '16 Weeks', level: 'Advanced', students: 780, rating: 4.5,
    description: 'Learn ethical hacking, penetration testing, and network security. Prepare for CEH, CISSP, and CompTIA Security+ certifications.',
    details: ['Ethical Hacking Basics', 'Penetration Testing', 'Network Security', 'Cryptography', 'Security Compliance'],
    instructor: 'Arjun Menon',
  },
  {
    id: 7, title: 'Full Stack Engineer', category: 'mid', price: 9999,
    image: '/extracted-imgs/53_Blue_Orange_Modern_Geometric_Software_Development_Presentation.png',
    label: 'FULL', sublabel: 'STACK',
    duration: '24 Weeks', level: 'Advanced', students: 2400, rating: 4.8,
    description: 'Become a complete full-stack developer with MERN stack, DevOps CI/CD, cloud deployment, and system design.',
    details: ['MERN Stack Mastery', 'GraphQL & REST APIs', 'Docker & Kubernetes', 'CI/CD Pipelines', 'System Design'],
    instructor: 'Rahul Verma',
  },
  {
    id: 8, title: 'DevOps Engineering', category: 'mid', price: 8499,
    image: '/extracted-imgs/52_Blue_Gradient_Modern_IT_Solutions_&_Technology_Presentation.png',
    label: 'DEVOPS', sublabel: 'ENGINEERING',
    duration: '14 Weeks', level: 'Intermediate', students: 950, rating: 4.6,
    description: 'Master CI/CD pipelines, containerization with Docker, orchestration with Kubernetes, and infrastructure as code.',
    details: ['Docker & Containers', 'Kubernetes Orchestration', 'Jenkins CI/CD', 'Terraform & Ansible', 'Monitoring & Logging'],
    instructor: 'Kiran Rao',
  },
  // ===== ADVANCED COURSES =====
  {
    id: 9, title: 'Cloud Architect', category: 'advanced', price: 12999,
    image: '/extracted-imgs/58_Blue_and_White_Simple_Cloud_Computing_Mind_Map.png',
    label: 'CLOUD', sublabel: 'ARCHITECT',
    duration: '24 Weeks', level: 'Expert', students: 420, rating: 4.9,
    description: 'Design enterprise-grade cloud architectures. Prepare for AWS Solutions Architect and GCP Professional certifications.',
    details: ['Multi-Cloud Strategies', 'Microservices Architecture', 'Serverless Computing', 'Cloud Cost Optimization', 'Enterprise Migration'],
    instructor: 'Dr. Rajesh Kumar',
  },
  {
    id: 10, title: 'ML Engineer', category: 'advanced', price: 14999,
    image: '/extracted-imgs/11_Blue_And_White_Illustrative_Machine_Learning_YouTube_Thumbnail_.png',
    label: 'ML', sublabel: 'ENGINEER',
    duration: '28 Weeks', level: 'Expert', students: 340, rating: 4.8,
    description: 'Advanced machine learning engineering with model deployment, MLOps, and production-ready AI systems.',
    details: ['Advanced ML Algorithms', 'MLOps & Model Deployment', 'Natural Language Processing', 'Computer Vision', 'Reinforcement Learning'],
    instructor: 'Dr. Vikram Singh',
  },
  {
    id: 11, title: 'Blockchain Developer', category: 'advanced', price: 11999,
    image: '/extracted-imgs/26_Black_Classic_Vintage_Top_10_Crypto_Coins_YouTube_Thumbnail.png',
    label: 'BLOCK', sublabel: 'CHAIN',
    duration: '20 Weeks', level: 'Advanced', students: 280, rating: 4.5,
    description: 'Build decentralized applications with Ethereum, Solidity, and Web3.js. Master smart contracts and DeFi protocols.',
    details: ['Blockchain Fundamentals', 'Solidity Programming', 'Smart Contracts', 'DeFi Protocols', 'NFT Development'],
    instructor: 'Amit Patel',
  },
  {
    id: 12, title: 'AI Solutions Architect', category: 'advanced', price: 15999,
    image: '/extracted-imgs/50_Blue_Futuristic_Artificial_Intelligence_Presentation.png',
    label: 'AI', sublabel: 'SOLUTIONS',
    duration: '32 Weeks', level: 'Expert', students: 190, rating: 4.9,
    description: 'Design end-to-end AI solutions for enterprises. Master LLMs, generative AI, and AI infrastructure at scale.',
    details: ['Large Language Models', 'Generative AI Systems', 'AI Infrastructure', 'Ethics in AI', 'Enterprise AI Deployment'],
    instructor: 'Dr. Vikram Singh',
  },
  // ===== NEW COURSES from PDF content =====
  {
    id: 13, title: 'Digital Marketing', category: 'skill', price: 4499,
    image: '/extracted-imgs/25_Blue_Pink_Modern_Digital_Marketing_Class_YouTube_Thumbnail.png',
    label: 'DIGITAL', sublabel: 'MARKETING',
    duration: '10 Weeks', level: 'Beginner', students: 2800, rating: 4.7,
    description: 'Master SEO, social media marketing, Google Ads, email campaigns, and content strategy for maximum brand reach.',
    details: ['SEO & SEM Mastery', 'Social Media Strategy', 'Google Ads & Analytics', 'Email Marketing Automation', 'Content Marketing'],
    instructor: 'Neha Kapoor',
  },
  {
    id: 14, title: 'Financial Management', category: 'mid', price: 6999,
    image: '/extracted-imgs/49_Navy_Modern_Financial_Investment_Presentation.png',
    label: 'FINANCE', sublabel: 'MANAGEMENT',
    duration: '12 Weeks', level: 'Intermediate', students: 1100, rating: 4.6,
    description: 'Learn investment strategies, portfolio management, tax planning, and financial analysis for personal and business growth.',
    details: ['Investment Strategies', 'Portfolio Management', 'Tax Planning', 'Financial Modeling', 'Risk Assessment'],
    instructor: 'Dr. Sanjay Mehta',
  },
  {
    id: 15, title: 'Business Startup', category: 'mid', price: 7499,
    image: '/extracted-imgs/33_Purple_And_White_Professional_Business_Start_Up_Presentation_.png',
    label: 'BUSINESS', sublabel: 'STARTUP',
    duration: '14 Weeks', level: 'Intermediate', students: 670, rating: 4.5,
    description: 'From idea to launch—learn business planning, fundraising, marketing, and scaling your startup to success.',
    details: ['Business Plan Creation', 'Startup Funding', 'Product-Market Fit', 'Growth Hacking', 'Scaling Strategies'],
    instructor: 'Rakesh Agarwal',
  },
  {
    id: 16, title: 'E-Commerce Business', category: 'skill', price: 5499,
    image: '/extracted-imgs/48_Blue_and_Orange_Modern_E-Commerce_Business_Plan_Presentation.png',
    label: 'ECOMMERCE', sublabel: 'BUSINESS',
    duration: '10 Weeks', level: 'Beginner', students: 1450, rating: 4.7,
    description: 'Build and grow your online store. Learn Shopify, Amazon FBA, dropshipping, and digital product selling strategies.',
    details: ['Shopify Setup & Design', 'Amazon FBA Strategy', 'Dropshipping Models', 'Payment Gateway Integration', 'Customer Acquisition'],
    instructor: 'Meera Joshi',
  },
];

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('mdch_user');
      const savedCart = localStorage.getItem('mdch_cart');
      if (savedUser) setUser(JSON.parse(savedUser));
      if (savedCart) setCart(JSON.parse(savedCart));
    } catch (e) { /* ignore */ }
    setIsLoaded(true);
  }, []);

  // Persist state
  useEffect(() => {
    if (!isLoaded) return;
    if (user) localStorage.setItem('mdch_user', JSON.stringify(user));
    else localStorage.removeItem('mdch_user');
  }, [user, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem('mdch_cart', JSON.stringify(cart));
  }, [cart, isLoaded]);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => setToast(null), 3000);
  }, []);

  const login = useCallback((email, password) => {
    // Check stored users
    const users = JSON.parse(localStorage.getItem('mdch_users') || '[]');
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      const userData = { name: found.name, email: found.email, phone: found.phone };
      setUser(userData);
      showToast(`Welcome back, ${found.name}!`);
      return { success: true };
    }
    // Default demo accounts
    if (email === 'admin@mdcoaching.com' && password === 'admin123') {
      const userData = { name: 'Admin User', email, phone: '+91 98765 43210' };
      setUser(userData);
      showToast('Welcome back, Admin!');
      return { success: true };
    }
    if (email === 'student@mdcoaching.com' && password === 'student123') {
      const userData = { name: 'Rahul Sharma', email, phone: '+91 87654 32109' };
      setUser(userData);
      showToast('Welcome back, Rahul!');
      return { success: true };
    }
    return { success: false, error: 'Invalid email or password' };
  }, [showToast]);

  const signup = useCallback((name, email, password, phone) => {
    const users = JSON.parse(localStorage.getItem('mdch_users') || '[]');
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'Email already registered' };
    }
    const newUser = { name, email, password, phone };
    users.push(newUser);
    localStorage.setItem('mdch_users', JSON.stringify(users));
    const userData = { name, email, phone };
    setUser(userData);
    showToast(`Welcome to MD Coaching Hub, ${name}!`);
    return { success: true };
  }, [showToast]);

  const logout = useCallback(() => {
    setUser(null);
    showToast('Logged out successfully', 'info');
  }, [showToast]);

  const addToCart = useCallback((course) => {
    setCart(prev => {
      if (prev.find(c => c.id === course.id)) {
        showToast('Course already in cart', 'info');
        return prev;
      }
      showToast(`${course.title} added to cart!`);
      return [...prev, course];
    });
  }, [showToast]);

  const removeFromCart = useCallback((courseId) => {
    setCart(prev => {
      const course = prev.find(c => c.id === courseId);
      if (course) showToast(`${course.title} removed from cart`, 'info');
      return prev.filter(c => c.id !== courseId);
    });
  }, [showToast]);

  const clearCart = useCallback(() => {
    setCart([]);
    showToast('Cart cleared', 'info');
  }, [showToast]);

  const getCartTotal = useCallback(() => {
    return cart.reduce((sum, c) => sum + c.price, 0);
  }, [cart]);

  return (
    <AppContext.Provider value={{
      user, login, signup, logout,
      cart, addToCart, removeFromCart, clearCart, getCartTotal,
      courses: ALL_COURSES,
      toast, showToast,
      isLoaded,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
