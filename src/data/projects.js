export const projectTypes = [
  { id: 'all', label: 'All Work' },
  { id: 'web', label: 'Web Application' },
  { id: 'mobile', label: 'Mobile Application' },
  { id: 'web_mobile', label: 'Web & Mobile' },
  { id: 'fullstack', label: 'Full Stack' },
]

export const projectTypeLabels = {
  web: 'Web Application',
  mobile: 'Mobile Application',
  web_mobile: 'Web & Mobile Application',
  fullstack: 'Full Stack',
  api: 'API / Backend',
  devops: 'DevOps / Infrastructure',
}

export const projects = [
  {
    slug: 'b-sims',
    title: 'B-SIMS — Barangay Smart Information Management System',
    shortDescription:
      'Comprehensive barangay management platform available as both a web and mobile application.',
    description:
      'A barangay management system built with a Django REST API backend and a React.js frontend. It covers resident management with QR code generation, household records, document management with PDF generation, a blotter system for incident reporting, a reports and analytics dashboard, and a real-time clock set to the Philippines timezone.',
    type: 'web_mobile',
    tech: [
      'Python',
      'Django',
      'Django REST Framework',
      'React.js',
      'PostgreSQL',
      'JWT',
      'TailwindCSS',
    ],
    image: '/images/bsims.webp',
    demoUrl: '',
    githubUrl: 'https://github.com/ozarragajohnhelboy/B-SIMS',
    featured: true,
    date: '2025-01',
  },
  {
    slug: 'schedule-system',
    title: 'Schedule System — AI Music Ministry Attendance',
    shortDescription:
      'AI-powered music ministry attendance system with chatbot automation for event creation.',
    description:
      'An attendance and scheduling system for a music ministry, with calendar management, member tracking and reporting. Event creation runs through an AI chatbot that uses natural language processing, so coordinators can schedule and manage events conversationally instead of filling in forms.',
    type: 'web',
    tech: ['Python', 'Django', 'MySQL', 'OpenAI', 'JavaScript', 'CSS3'],
    image: '/images/schedule-system.webp',
    demoUrl: 'http://13.239.209.85',
    githubUrl: 'https://github.com/ozarragajohnhelboy/Music-Ministry-Attendance-System',
    featured: true,
    date: '2025-09',
  },
  {
    slug: 'jcsgo-church',
    title: 'JCSGO Church Management System',
    shortDescription:
      'Church management system with member, event and financial tracking modules.',
    description:
      'A management system for JCSGO Church covering member management, event scheduling, financial tracking and administrative tools. Built to keep multiple ministries and branches organised through one admin interface.',
    type: 'web',
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'CSS3'],
    image: '/images/jcsgo-church.webp',
    demoUrl: 'http://3.106.123.140',
    githubUrl: 'https://github.com/ozarragajohnhelboy/JCSGO-Church-System',
    featured: true,
    date: '2025-08',
  },
  {
    slug: 'ai-chatbot',
    title: 'AI Chatbot with Task Automation',
    shortDescription:
      'Conversational AI assistant with intelligent task automation and ML capabilities.',
    description:
      'An AI chatbot system with task automation built on natural language processing, machine learning models, vector database retrieval and automated task scheduling. Uses TensorFlow and LangChain for the model layer, ChromaDB for embeddings, and Celery with Redis for background jobs.',
    type: 'fullstack',
    tech: ['Python', 'FastAPI', 'TensorFlow', 'LangChain', 'ChromaDB', 'Celery', 'Redis'],
    image: '/images/ai-chatbot.webp',
    demoUrl: '',
    githubUrl: 'https://github.com/ozarragajohnhelboy/AI-Chatbot-with-Task-Automation',
    featured: true,
    date: '2024-12',
  },
  {
    slug: 'mentra',
    title: 'Mentra — Corporate Microlearning Platform',
    shortDescription:
      'Multi-organization training platform with microtrainings, quizzes and gamified learner progress.',
    description:
      'A corporate learning platform built on a Django REST Framework API with a React.js frontend. Learners get a personalised feed of video microtrainings with quizzes, streaks and XP, while admins manage users, departments, documents, analytics, a social feed and broadcast email across multiple organizations.',
    type: 'web',
    tech: ['Python', 'Django', 'Django REST Framework', 'React.js'],
    image: '/images/mentra-admin.webp',
    gallery: ['/images/mentra-admin.webp', '/images/mentra-learner.webp'],
    demoUrl: 'https://app2.mentra-train.ai',
    githubUrl: '',
    featured: false,
    date: '2026-04',
  },
  {
    slug: 'bagong-montalban',
    title: 'Bagong Montalban App',
    shortDescription:
      'Municipal mobile app for citizen services — published on the Google Play Store.',
    description:
      'A mobile application for the Municipality of Rodriguez (formerly Montalban) that gives residents access to citizen services, announcements, local information and municipal contacts. Published on the Google Play Store for easy access by residents.',
    type: 'mobile',
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'CSS3'],
    image: '/images/bagong-montalban.webp',
    demoUrl:
      'https://play.google.com/store/search?q=bagong%20montalban%20app&c=apps&hl=en',
    githubUrl: '',
    featured: false,
    date: '2023-11',
  },
  {
    slug: 'echovq',
    title: 'EchoVQ — AI Audio Analysis',
    shortDescription:
      'AI-powered audio analysis platform that gives teachers and students actionable feedback.',
    description:
      'An audio analysis platform that processes recordings and returns AI-generated feedback, built to support teachers and empower students with clearer educational insights.',
    type: 'web',
    tech: ['Python', 'Django', 'MySQL', 'JavaScript', 'CSS3'],
    image: '/images/echovq.webp',
    demoUrl: 'https://echovq.com/',
    githubUrl: 'https://github.com/daveechovq/audio-analysis',
    featured: false,
    date: '2025-01',
  },
  {
    slug: 'holyface-lms',
    title: 'Holy Face School LMS',
    shortDescription:
      'Learning management system for student, course and grade administration.',
    description:
      'A learning management system for Holy Face School covering student management, course administration, grade tracking and teaching tools, built to streamline day-to-day school operations.',
    type: 'web',
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'CSS3'],
    image: '/images/holyface-lms.webp',
    demoUrl: 'http://lms.holyface.school',
    githubUrl: 'https://github.com/phpMyYang/holyface-lms',
    featured: false,
    date: '2025-03',
  },
  {
    slug: 'jobzing',
    title: 'Jobzing App',
    shortDescription:
      'Job search and career platform connecting job seekers with employers.',
    description:
      'A career platform with job listings, application tracking, resume management and career resources. Built on a Django backend with a Vue.js frontend, PostgreSQL database and AWS deployment.',
    type: 'web',
    tech: ['Python', 'Django', 'Vue.js', 'PostgreSQL', 'AWS'],
    image: '/images/jobzing.webp',
    demoUrl: 'https://jobzing.app/',
    githubUrl: 'https://github.com/JomariHinayon/jobzing-app',
    featured: false,
    date: '2025-02',
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
