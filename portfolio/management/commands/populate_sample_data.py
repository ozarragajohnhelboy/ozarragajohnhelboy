from django.core.management.base import BaseCommand
from django.utils import timezone
from datetime import date, timedelta
from portfolio.models import PersonalInfo, Skill, Project, Experience, Education


class Command(BaseCommand):
    help = 'Populate the database with sample portfolio data'

    def handle(self, *args, **options):
        self.stdout.write('Creating sample portfolio data...')
        
        # Create Personal Info
        personal_info, created = PersonalInfo.objects.get_or_create(
            full_name='John Helboy Ozarraga',
            defaults={
                'title': 'Full Stack Python Web Developer',
                'bio': '''I am a passionate Full Stack Python Web Developer with expertise in Django and knowledgeable in PHP (Laravel), and Node.js. 
                I specialize in creating robust web applications and have extensive experience in both frontend and backend development. 
                My skills also extend to mobile development using React Native and DevOps practices with AWS.
                
                I love solving complex problems and building scalable applications that make a real impact. 
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
                or sharing knowledge with the developer community.''',
                'email': 'ozarragajohnhelboy@gmail.com',
                'phone': '+639457431982',
                'location': 'Block 2 Lot 89 Phase 1E, Kasiglahan Village, San Jose, Rodriguez, Rizal',
                'linkedin_url': 'https://www.linkedin.com/in/john-helboy-ozarraga-285740316/',
                'github_url': 'https://github.com/ozarragajohnhelboy',
            }
        )
        
        if created:
            self.stdout.write(self.style.SUCCESS('✓ Created Personal Info'))
        else:
            self.stdout.write(self.style.WARNING('Personal Info already exists'))

        # Create Skills
        skills_data = [
            # Backend
            {'name': 'Python', 'category': 'backend', 'proficiency': 95, 'icon_class': 'fab fa-python'},
            {'name': 'Django', 'category': 'backend', 'proficiency': 90, 'icon_class': 'fas fa-code'},
            {'name': 'PHP', 'category': 'backend', 'proficiency': 85, 'icon_class': 'fab fa-php'},
            {'name': 'Laravel', 'category': 'backend', 'proficiency': 88, 'icon_class': 'fas fa-laravel'},
            {'name': 'Node.js', 'category': 'backend', 'proficiency': 82, 'icon_class': 'fab fa-node-js'},
            
            # Frontend
            {'name': 'HTML5', 'category': 'frontend', 'proficiency': 95, 'icon_class': 'fab fa-html5'},
            {'name': 'CSS3', 'category': 'frontend', 'proficiency': 92, 'icon_class': 'fab fa-css3-alt'},
            {'name': 'JavaScript', 'category': 'frontend', 'proficiency': 90, 'icon_class': 'fab fa-js-square'},
            {'name': 'Vue.js', 'category': 'frontend', 'proficiency': 85, 'icon_class': 'fab fa-vuejs'},
            {'name': 'React', 'category': 'frontend', 'proficiency': 80, 'icon_class': 'fab fa-react'},
            
            # Mobile
            {'name': 'React Native', 'category': 'mobile', 'proficiency': 75, 'icon_class': 'fab fa-react'},
            {'name': 'Expo', 'category': 'mobile', 'proficiency': 70, 'icon_class': 'fas fa-mobile-alt'},
            {'name': 'Android Studio', 'category': 'mobile', 'proficiency': 65, 'icon_class': 'fab fa-android'},
            {'name': 'Xcode', 'category': 'mobile', 'proficiency': 60, 'icon_class': 'fab fa-apple'},
            
            # DevOps
            {'name': 'AWS', 'category': 'devops', 'proficiency': 80, 'icon_class': 'fab fa-aws'},
            {'name': 'Docker', 'category': 'devops', 'proficiency': 75, 'icon_class': 'fab fa-docker'},
            {'name': 'Git', 'category': 'devops', 'proficiency': 90, 'icon_class': 'fab fa-git-alt'},
            {'name': 'CI/CD', 'category': 'devops', 'proficiency': 70, 'icon_class': 'fas fa-sync'},
            
            # Database
            {'name': 'PostgreSQL', 'category': 'database', 'proficiency': 85, 'icon_class': 'fas fa-database'},
            {'name': 'MySQL', 'category': 'database', 'proficiency': 80, 'icon_class': 'fas fa-database'},
            {'name': 'Sqlite', 'category': 'database', 'proficiency': 75, 'icon_class': 'fas fa-leaf'},
            
            # Tools
            {'name': 'VS Code', 'category': 'tools', 'proficiency': 95, 'icon_class': 'fas fa-code'},
            {'name': 'GitHub', 'category': 'tools', 'proficiency': 90, 'icon_class': 'fab fa-github'},
        ]
        
        for skill_data in skills_data:
            skill, created = Skill.objects.get_or_create(
                name=skill_data['name'],
                defaults=skill_data
            )
            if created:
                self.stdout.write(f'✓ Created skill: {skill.name}')
        
        # Create Projects
        projects_data = [
            {
                'title': 'E-Commerce Platform',
                'description': 'A full-featured e-commerce platform built with Django and Vue.js. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.',
                'short_description': 'Full-featured e-commerce platform with Django backend and Vue.js frontend',
                'project_type': 'fullstack',
                'demo_url': 'https://demo-ecommerce.example.com',
                'github_url': 'https://github.com/jomari/ecommerce-platform',
                'is_featured': True,
                'created_date': date.today() - timedelta(days=30),
                'technologies': ['Python', 'Django', 'Vue.js', 'PostgreSQL', 'AWS']
            },
            {
                'title': 'Task Management API',
                'description': 'RESTful API for task management built with Laravel. Includes user authentication, CRUD operations, file uploads, and real-time notifications using WebSockets.',
                'short_description': 'RESTful API for task management with real-time features',
                'project_type': 'api',
                'demo_url': 'https://api-tasks.example.com',
                'github_url': 'https://github.com/jomari/task-api',
                'is_featured': True,
                'created_date': date.today() - timedelta(days=60),
                'technologies': ['PHP', 'Laravel', 'MySQL', 'Redis', 'WebSockets']
            },
            {
                'title': 'Mobile Banking App',
                'description': 'Cross-platform mobile banking application built with React Native. Features include account management, money transfers, bill payments, and biometric authentication.',
                'short_description': 'Cross-platform mobile banking app with React Native',
                'project_type': 'mobile',
                'demo_url': 'https://play.google.com/store/apps/details?id=com.bankapp',
                'github_url': 'https://github.com/jomari/banking-app',
                'is_featured': True,
                'created_date': date.today() - timedelta(days=90),
                'technologies': ['React Native', 'Node.js', 'MongoDB', 'Expo', 'AWS']
            },
            {
                'title': 'DevOps Dashboard',
                'description': 'A comprehensive DevOps dashboard for monitoring and managing cloud infrastructure. Built with Node.js and React, featuring real-time monitoring, automated deployments, and alerting.',
                'short_description': 'DevOps dashboard for cloud infrastructure monitoring',
                'project_type': 'web',
                'demo_url': 'https://devops-dashboard.example.com',
                'github_url': 'https://github.com/jomari/devops-dashboard',
                'is_featured': False,
                'created_date': date.today() - timedelta(days=120),
                'technologies': ['Node.js', 'React', 'Docker', 'AWS', 'Grafana']
            },
            {
                'title': 'Social Media Analytics',
                'description': 'Analytics platform for social media metrics built with Django and JavaScript. Features include data visualization, sentiment analysis, and automated reporting.',
                'short_description': 'Social media analytics platform with data visualization',
                'project_type': 'web',
                'demo_url': 'https://analytics.example.com',
                'github_url': 'https://github.com/jomari/social-analytics',
                'is_featured': False,
                'created_date': date.today() - timedelta(days=150),
                'technologies': ['Python', 'Django', 'JavaScript', 'Chart.js', 'PostgreSQL']
            },
            {
                'title': 'Real Estate Portal',
                'description': 'Property listing and management portal built with Laravel and Vue.js. Features include property search, virtual tours, mortgage calculator, and agent management.',
                'short_description': 'Property listing portal with virtual tours and mortgage calculator',
                'project_type': 'fullstack',
                'demo_url': 'https://realestate.example.com',
                'github_url': 'https://github.com/jomari/real-estate-portal',
                'is_featured': False,
                'created_date': date.today() - timedelta(days=180),
                'technologies': ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'AWS']
            }
        ]
        
        for project_data in projects_data:
            technologies = project_data.pop('technologies')
            project, created = Project.objects.get_or_create(
                title=project_data['title'],
                defaults=project_data
            )
            if created:
                # Add technologies to project
                for tech_name in technologies:
                    try:
                        skill = Skill.objects.get(name=tech_name)
                        project.technologies.add(skill)
                    except Skill.DoesNotExist:
                        pass
                self.stdout.write(f'✓ Created project: {project.title}')
        
        # Create Experience
        experiences_data = [
            {
                'company': 'TechCorp Solutions',
                'position': 'Senior Full Stack Developer',
                'description': '''Lead development of enterprise web applications using Django and Vue.js. 
                Mentored junior developers and implemented CI/CD pipelines using AWS and Docker. 
                Improved application performance by 40% through code optimization and caching strategies.
                Collaborated with cross-functional teams to deliver high-quality software solutions.''',
                'start_date': date(2022, 1, 1),
                'is_current': True,
                'location': 'San Francisco, CA',
                'company_url': 'https://techcorp.example.com'
            },
            {
                'company': 'StartupXYZ',
                'position': 'Full Stack Developer',
                'description': '''Developed and maintained multiple web applications using Laravel and React. 
                Built RESTful APIs and integrated third-party services. 
                Implemented automated testing and deployment processes.
                Worked closely with product managers to define technical requirements.''',
                'start_date': date(2020, 6, 1),
                'end_date': date(2021, 12, 31),
                'is_current': False,
                'location': 'Remote',
                'company_url': 'https://startupxyz.example.com'
            },
            {
                'company': 'WebDev Agency',
                'position': 'Junior Web Developer',
                'description': '''Developed responsive websites using HTML, CSS, JavaScript, and PHP. 
                Worked with WordPress and custom CMS solutions. 
                Collaborated with designers to implement pixel-perfect designs.
                Gained experience in version control and agile development methodologies.''',
                'start_date': date(2019, 3, 1),
                'end_date': date(2020, 5, 31),
                'is_current': False,
                'location': 'Los Angeles, CA'
            }
        ]
        
        for exp_data in experiences_data:
            experience, created = Experience.objects.get_or_create(
                company=exp_data['company'],
                position=exp_data['position'],
                start_date=exp_data['start_date'],
                defaults=exp_data
            )
            if created:
                self.stdout.write(f'✓ Created experience: {experience.position} at {experience.company}')
        
        # Create Education
        education_data = [
            {
                'institution': 'University of California, Berkeley',
                'degree': 'Bachelor of Science in Computer Science',
                'field_of_study': 'Computer Science',
                'start_date': date(2015, 9, 1),
                'end_date': date(2019, 5, 31),
                'gpa': 3.8,
                'description': 'Focused on software engineering, algorithms, and data structures. Completed coursework in web development, mobile app development, and database systems.'
            },
            {
                'institution': 'FreeCodeCamp',
                'degree': 'Full Stack Web Development Certification',
                'field_of_study': 'Web Development',
                'start_date': date(2018, 1, 1),
                'end_date': date(2018, 12, 31),
                'description': 'Completed comprehensive curriculum covering HTML, CSS, JavaScript, React, Node.js, and database management.'
            }
        ]
        
        for edu_data in education_data:
            education, created = Education.objects.get_or_create(
                institution=edu_data['institution'],
                degree=edu_data['degree'],
                start_date=edu_data['start_date'],
                defaults=edu_data
            )
            if created:
                self.stdout.write(f'✓ Created education: {education.degree} from {education.institution}')
        
        self.stdout.write(
            self.style.SUCCESS('\n🎉 Successfully populated database with sample data!')
        )
        self.stdout.write('\nYou can now:')
        self.stdout.write('1. Visit http://127.0.0.1:8000 to see your portfolio')
        self.stdout.write('2. Go to http://127.0.0.1:8000/admin to manage content')
        self.stdout.write('3. Login with username: admin (password was set during superuser creation)')
