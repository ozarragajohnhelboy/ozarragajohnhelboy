export const personalInfo = {
  firstName: 'John Helboy',
  fullName: 'John Helboy Ozarraga',
  title: 'Python & Full Stack Developer',
  roles: [
    'Python Developer',
    'Django & FastAPI Engineer',
    'Full Stack Web Developer',
    'React & React Native Developer',
  ],
  tagline:
    'I build scalable web applications and REST APIs with Django, Flask and FastAPI — and ship them with React, React Native and AWS.',
  bio: [
    "I'm a mid-level backend developer with almost 5 years of experience, focused on Python and Django. I build REST APIs, design relational databases, and keep production applications reliable.",
    'I also work across the frontend and mobile side with React.js and React Native, and handle database design with MySQL, PostgreSQL and SQLite. On the infrastructure side I deploy and maintain cloud systems on AWS using RDS, S3, IAM and EC2.',
    'That work spans private product teams and local government: Mentra, an AI training platform for VA employees; EchoVQ, an AI-assisted music education app; and municipal systems including Bagong Montalban, Juan Toda, and a 911 emergency application.',
  ],
  email: 'ozarragajohnhelboy@gmail.com',
  phone: '+63 945 743 1982',
  phoneHref: '+639457431982',
  location: 'Rodriguez, Rizal, Philippines',
  availability: 'Available for full-time remote work',
  profileImage: '/images/profile.webp',
  resume: '/files/resume.pdf',
  quote: 'Code with clarity, build with purpose.',
}

export const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/ozarragajohnhelboy',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/john-helboy-ozarraga-285740316/',
    icon: 'linkedin',
  },
  {
    label: 'Facebook',
    href: 'https://web.facebook.com/JANJANAN.11/',
    icon: 'facebook',
  },
  {
    label: 'Email',
    href: `mailto:${personalInfo.email}`,
    icon: 'mail',
  },
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
]

export const values = [
  {
    title: 'Clean Code',
    icon: 'code',
    description:
      'I write maintainable, readable and efficient code that follows best practices and industry standards.',
  },
  {
    title: 'Collaboration',
    icon: 'users',
    description:
      'Great products are built by great teams. I thrive in collaborative environments and enjoy mentoring others.',
  },
  {
    title: 'Innovation',
    icon: 'bulb',
    description:
      'I explore new technologies and look for creative solutions to complex problems.',
  },
  {
    title: 'Performance',
    icon: 'rocket',
    description:
      'I focus on building fast, scalable applications that provide an excellent user experience.',
  },
]

export const services = [
  {
    title: 'Backend & API Development',
    icon: 'server',
    description:
      'Django, Flask and FastAPI services with secure authentication, well-documented REST endpoints and optimized database queries.',
  },
  {
    title: 'Full Stack Web Apps',
    icon: 'layout',
    description:
      'End-to-end web platforms — from data modelling and business logic to responsive React or server-rendered interfaces.',
  },
  {
    title: 'Mobile & Cross Platform',
    icon: 'mobile',
    description:
      'React Native applications that share logic with the web backend so features stay consistent across devices.',
  },
  {
    title: 'Cloud Deployment',
    icon: 'cloud',
    description:
      'Deployment and maintenance on AWS with EC2, RDS, S3 and IAM, plus Docker and Git-based delivery workflows.',
  },
  {
    title: 'AI Integration',
    icon: 'brain',
    description:
      'Bringing TensorFlow, LangChain and OpenAI models into production apps for chat automation and data analysis.',
  },
  {
    title: 'Testing & Maintenance',
    icon: 'bug',
    description:
      'Unit testing, UI/QA passes and performance tuning so releases stay stable as the product grows.',
  },
]
