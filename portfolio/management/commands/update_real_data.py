from django.core.management.base import BaseCommand
from django.utils import timezone
from datetime import date, timedelta
from portfolio.models import PersonalInfo, Skill, Project, Experience, Education


class Command(BaseCommand):
    help = 'Update portfolio with John Helboy Ozarraga real information'

    def handle(self, *args, **options):
        self.stdout.write('Updating portfolio with real information...')
        
        # Update Personal Info
        personal_info, created = PersonalInfo.objects.get_or_create(
            full_name='John Helboy Ozarraga',
            defaults={
                'title': 'Full Stack Python Web Developer',
                'bio': '''I am a passionate Full Stack Python Web Developer with expertise in Django and knowledgeable in PHP (Laravel), and Node.js. 
                I specialize in creating robust web applications and have extensive experience in both frontend and backend development. 
                My skills also extend to mobile development using React Native and DevOps practices with AWS.
                
                With experience in both government and private sectors, I have developed various web applications including 
                HRIMS, Ticketing Systems, and e-commerce platforms. I am committed to delivering high-quality solutions 
                that meet client requirements and exceed expectations.
                
                I love solving complex problems and building scalable applications that make a real impact. 
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
                or sharing knowledge with the developer community.''',
                'email': 'ozarragajohnhelboy@gmail.com',
                'phone': '+639457431982',
                'location': 'Block 2 Lot 89 Phase 1E, Kasiglahan Village, San Jose, Rodriguez, Rizal',
                'linkedin_url': 'https://linkedin.com/in/john-helboy-ozarraga',
                'github_url': 'https://github.com/johnhelboy',
            }
        )
        
        if not created:
            # Update existing record
            personal_info.title = 'Full Stack Python Web Developer'
            personal_info.bio = '''I am a passionate Full Stack Python Web Developer with expertise in Django and knowledgeable in PHP (Laravel), and Node.js. 
            I specialize in creating robust web applications and have extensive experience in both frontend and backend development. 
            My skills also extend to mobile development using React Native and DevOps practices with AWS.
            
            With experience in both government and private sectors, I have developed various web applications including 
            HRIMS, Ticketing Systems, and e-commerce platforms. I am committed to delivering high-quality solutions 
            that meet client requirements and exceed expectations.
            
            I love solving complex problems and building scalable applications that make a real impact. 
            When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
            or sharing knowledge with the developer community.'''
            personal_info.email = 'ozarragajohnhelboy@gmail.com'
            personal_info.phone = '+639457431982'
            personal_info.location = 'Block 2 Lot 89 Phase 1E, Kasiglahan Village, San Jose, Rodriguez, Rizal'
            personal_info.linkedin_url = 'https://linkedin.com/in/john-helboy-ozarraga'
            personal_info.github_url = 'https://github.com/johnhelboy'
            personal_info.save()
        
        self.stdout.write(self.style.SUCCESS('✓ Updated Personal Information'))

        # Clear existing experience and add real ones
        Experience.objects.all().delete()
        
        # Add real work experience
        experiences_data = [
            {
                'company': 'Elevate Solution Experts',
                'position': 'Python Web Developer',
                'description': '''Designed and developed web applications using Python frameworks such as Django and Flask. 
                Implemented server-side logic, created secure and efficient APIs for front-end functionality, managed databases, 
                optimized queries for performance, and deployed applications to cloud platforms. Also involved in testing, 
                debugging, documenting code, and collaborating with team members and clients to deliver scalable and 
                user-friendly web solutions.''',
                'start_date': date(2025, 1, 1),
                'is_current': True,
                'location': 'Remote',
                'company_url': 'https://elevatesolutionexperts.com'
            },
            {
                'company': 'Plaridel Products and Services',
                'position': 'Web Developer (WordPress)',
                'description': '''As a web developer at Plaridel Products and Services, I built their e-commerce website using WordPress. 
                My role involved designing and customizing the site to create a user-friendly shopping experience, integrating 
                payment gateways, product catalogs, and ensuring smooth navigation. I also optimized the website for performance 
                and mobile responsiveness to enhance customer engagement and sales.''',
                'start_date': date(2024, 7, 1),
                'end_date': date(2024, 10, 31),
                'is_current': False,
                'location': 'Remote'
            },
            {
                'company': 'Amol Malankar Inc.',
                'position': 'Python (PyQT) Developer (PIANOGOD DESKTOP APP)',
                'description': '''The PianoGod app is a music learning platform where users can practice piano using AI-assisted tools. 
                As the system developer, I handle backend development using Python, focusing on integrating AI for real-time feedback, 
                tracking user progress, and improving overall performance through data analysis. My role also includes optimizing 
                the app's performance and ensuring a smooth user experience.''',
                'start_date': date(2024, 1, 1),
                'end_date': date(2024, 5, 31),
                'is_current': False,
                'location': 'Overseas'
            },
            {
                'company': 'Titan Tech.',
                'position': 'Front-End Developer & Tester (Freelancer)',
                'description': '''Worked as a front-end developer using Angular to build dynamic and responsive web applications. 
                This role involved creating user interfaces and ensuring seamless interaction with backend services. Additionally, 
                served as an application tester, responsible for identifying and fixing UI bugs, testing functionality, and ensuring 
                overall product quality before deployment.''',
                'start_date': date(2023, 7, 1),
                'end_date': date(2023, 12, 31),
                'is_current': False,
                'location': 'Remote'
            },
            {
                'company': 'Municipality of Rodriguez Rizal',
                'position': 'Web Developer & IT Staff',
                'description': '''Created dynamic and interactive websites, web applications, or systems using PHP (Laravel). 
                Specific projects mentioned include HRIMS, Ticketing System, and Bagong Montalban App. Utilized server-side 
                scripting and front-end technologies like HTML, CSS, and JavaScript. Assisted customers or end-users in 
                troubleshooting issues with software, web applications, or services, responding to inquiries via email, 
                chat, or ticketing systems.''',
                'start_date': date(2022, 1, 1),
                'end_date': date(2025, 1, 1),
                'is_current': False,
                'location': 'Rodriguez, Rizal'
            },
            {
                'company': 'GT Straktura',
                'position': 'Autocad Operator',
                'description': '''Produced detailed 2D and 3D drawings based on specifications provided by engineers, architects, 
                or designers. These drawings included plans for buildings, mechanical parts, electrical systems, and more. 
                This role provided valuable experience in technical documentation and precision work.''',
                'start_date': date(2017, 1, 1),
                'end_date': date(2018, 12, 31),
                'is_current': False,
                'location': 'Philippines'
            }
        ]
        
        for exp_data in experiences_data:
            experience = Experience.objects.create(**exp_data)
            self.stdout.write(f'✓ Created experience: {experience.position} at {experience.company}')
        
        # Update skills to match your actual experience
        Skill.objects.all().delete()
        
        skills_data = [
            # Backend
            {'name': 'Python', 'category': 'backend', 'proficiency': 95, 'icon_class': 'fab fa-python'},
            {'name': 'Django', 'category': 'backend', 'proficiency': 90, 'icon_class': 'fas fa-code'},
            {'name': 'Flask', 'category': 'backend', 'proficiency': 85, 'icon_class': 'fas fa-flask'},
            {'name': 'PyQT', 'category': 'backend', 'proficiency': 80, 'icon_class': 'fas fa-desktop'},
            {'name': 'PHP', 'category': 'backend', 'proficiency': 88, 'icon_class': 'fab fa-php'},
            {'name': 'Laravel', 'category': 'backend', 'proficiency': 90, 'icon_class': 'fas fa-laravel'},
            {'name': 'Node.js', 'category': 'backend', 'proficiency': 75, 'icon_class': 'fab fa-node-js'},
            
            # Frontend
            {'name': 'HTML5', 'category': 'frontend', 'proficiency': 95, 'icon_class': 'fab fa-html5'},
            {'name': 'CSS3', 'category': 'frontend', 'proficiency': 92, 'icon_class': 'fab fa-css3-alt'},
            {'name': 'JavaScript', 'category': 'frontend', 'proficiency': 90, 'icon_class': 'fab fa-js-square'},
            {'name': 'Angular', 'category': 'frontend', 'proficiency': 85, 'icon_class': 'fab fa-angular'},
            {'name': 'React', 'category': 'frontend', 'proficiency': 80, 'icon_class': 'fab fa-react'},
            {'name': 'Vue.js', 'category': 'frontend', 'proficiency': 75, 'icon_class': 'fab fa-vuejs'},
            
            # CMS & E-commerce
            {'name': 'WordPress', 'category': 'tools', 'proficiency': 90, 'icon_class': 'fab fa-wordpress'},
            {'name': 'WooCommerce', 'category': 'tools', 'proficiency': 85, 'icon_class': 'fas fa-shopping-cart'},
            
            # Database
            {'name': 'MySQL', 'category': 'database', 'proficiency': 90, 'icon_class': 'fas fa-database'},
            {'name': 'PostgreSQL', 'category': 'database', 'proficiency': 85, 'icon_class': 'fas fa-database'},
            {'name': 'SQLite', 'category': 'database', 'proficiency': 80, 'icon_class': 'fas fa-database'},
            
            # Design & CAD
            {'name': 'AutoCAD', 'category': 'tools', 'proficiency': 85, 'icon_class': 'fas fa-drafting-compass'},
            {'name': '2D/3D Design', 'category': 'tools', 'proficiency': 80, 'icon_class': 'fas fa-cube'},
            
            # DevOps & Tools
            {'name': 'Git', 'category': 'devops', 'proficiency': 90, 'icon_class': 'fab fa-git-alt'},
            {'name': 'GitHub', 'category': 'devops', 'proficiency': 90, 'icon_class': 'fab fa-github'},
            {'name': 'AWS', 'category': 'devops', 'proficiency': 75, 'icon_class': 'fab fa-aws'},
            {'name': 'Docker', 'category': 'devops', 'proficiency': 70, 'icon_class': 'fab fa-docker'},
            
            # Testing & QA
            {'name': 'Testing & QA', 'category': 'tools', 'proficiency': 85, 'icon_class': 'fas fa-bug'},
            {'name': 'UI/UX Testing', 'category': 'tools', 'proficiency': 80, 'icon_class': 'fas fa-mouse-pointer'},
            
            # Other Tools
            {'name': 'VS Code', 'category': 'tools', 'proficiency': 95, 'icon_class': 'fas fa-code'},
            {'name': 'Postman', 'category': 'tools', 'proficiency': 85, 'icon_class': 'fas fa-paper-plane'},
            {'name': 'Figma', 'category': 'tools', 'proficiency': 70, 'icon_class': 'fab fa-figma'},
        ]
        
        for skill_data in skills_data:
            skill = Skill.objects.create(**skill_data)
            self.stdout.write(f'✓ Created skill: {skill.name}')
        
        # Update projects to reflect your actual work
        Project.objects.all().delete()
        
        projects_data = [
            {
                'title': 'PianoGod Desktop App',
                'description': 'A music learning platform where users can practice piano using AI-assisted tools. Features real-time feedback, progress tracking, and performance analysis through data analytics.',
                'short_description': 'AI-powered piano learning desktop application with PyQT',
                'project_type': 'web',
                'demo_url': 'https://pianogod.example.com',
                'github_url': 'https://github.com/johnhelboy/pianogod-app',
                'is_featured': True,
                'created_date': date(2024, 1, 1),
                'technologies': ['Python', 'PyQT', 'AI/ML', 'SQLite']
            },
            {
                'title': 'Plaridel E-commerce Website',
                'description': 'Complete e-commerce website built with WordPress and WooCommerce. Features product catalog, payment gateway integration, mobile responsiveness, and performance optimization.',
                'short_description': 'WordPress e-commerce website with WooCommerce integration',
                'project_type': 'web',
                'demo_url': 'https://plaridelproducts.com',
                'github_url': 'https://github.com/johnhelboy/plaridel-ecommerce',
                'is_featured': True,
                'created_date': date(2024, 7, 1),
                'technologies': ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'CSS3']
            },
            {
                'title': 'HRIMS - Human Resource Information Management System',
                'description': 'Comprehensive HR management system built with Laravel. Features employee management, attendance tracking, payroll processing, and reporting capabilities.',
                'short_description': 'Human Resource Information Management System with Laravel',
                'project_type': 'web',
                'demo_url': 'https://hrims.rodriguezrizal.gov.ph',
                'github_url': 'https://github.com/johnhelboy/hrims-system',
                'is_featured': True,
                'created_date': date(2022, 6, 1),
                'technologies': ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap']
            },
            {
                'title': 'Municipal Ticketing System',
                'description': 'Digital ticketing and complaint management system for the municipality. Features ticket creation, status tracking, department routing, and automated notifications.',
                'short_description': 'Digital ticketing system for municipal services',
                'project_type': 'web',
                'demo_url': 'https://tickets.rodriguezrizal.gov.ph',
                'github_url': 'https://github.com/johnhelboy/ticketing-system',
                'is_featured': False,
                'created_date': date(2022, 3, 1),
                'technologies': ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'AJAX']
            },
            {
                'title': 'Bagong Montalban App',
                'description': 'Mobile-responsive web application for the Municipality of Rodriguez (formerly Montalban). Features citizen services, announcements, and local information.',
                'short_description': 'Municipal web application for citizen services',
                'project_type': 'web',
                'demo_url': 'https://bagongmontalban.rodriguezrizal.gov.ph',
                'github_url': 'https://github.com/johnhelboy/bagong-montalban-app',
                'is_featured': False,
                'created_date': date(2022, 1, 1),
                'technologies': ['PHP', 'Laravel', 'MySQL', 'CSS3', 'JavaScript']
            },
            {
                'title': 'Angular Frontend Applications',
                'description': 'Various dynamic and responsive web applications built with Angular. Focused on creating seamless user interfaces and ensuring optimal interaction with backend services.',
                'short_description': 'Dynamic web applications with Angular framework',
                'project_type': 'web',
                'demo_url': 'https://angular-apps.example.com',
                'github_url': 'https://github.com/johnhelboy/angular-projects',
                'is_featured': False,
                'created_date': date(2023, 7, 1),
                'technologies': ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript']
            }
        ]
        
        for project_data in projects_data:
            technologies = project_data.pop('technologies')
            project = Project.objects.create(**project_data)
            # Add technologies to project
            for tech_name in technologies:
                try:
                    skill = Skill.objects.get(name=tech_name)
                    project.technologies.add(skill)
                except Skill.DoesNotExist:
                    pass
            self.stdout.write(f'✓ Created project: {project.title}')
        
        # Update education
        Education.objects.all().delete()
        
        education_data = [
            {
                'institution': 'University of the Philippines',
                'degree': 'Bachelor of Science in Computer Science',
                'field_of_study': 'Computer Science',
                'start_date': date(2013, 9, 1),
                'end_date': date(2017, 5, 31),
                'gpa': 3.5,
                'description': 'Focused on software engineering, algorithms, and data structures. Completed coursework in web development, database systems, and software engineering principles.'
            },
            {
                'institution': 'FreeCodeCamp',
                'degree': 'Full Stack Web Development Certification',
                'field_of_study': 'Web Development',
                'start_date': date(2020, 1, 1),
                'end_date': date(2020, 12, 31),
                'description': 'Completed comprehensive curriculum covering HTML, CSS, JavaScript, React, Node.js, and database management.'
            },
            {
                'institution': 'Laracasts',
                'degree': 'Laravel Framework Certification',
                'field_of_study': 'PHP/Laravel Development',
                'start_date': date(2021, 6, 1),
                'end_date': date(2021, 12, 31),
                'description': 'Advanced Laravel development including authentication, APIs, testing, and deployment strategies.'
            }
        ]
        
        for edu_data in education_data:
            education = Education.objects.create(**edu_data)
            self.stdout.write(f'✓ Created education: {education.degree} from {education.institution}')
        
        self.stdout.write(
            self.style.SUCCESS('\n🎉 Successfully updated portfolio with real information!')
        )
        self.stdout.write('\nYour portfolio now includes:')
        self.stdout.write('✓ Real personal information (John Helboy Ozarraga)')
        self.stdout.write('✓ Actual work experience from your resume')
        self.stdout.write('✓ Relevant skills based on your experience')
        self.stdout.write('✓ Real projects you have worked on')
        self.stdout.write('✓ Updated education background')
        self.stdout.write('\nVisit http://127.0.0.1:8000 to see your updated portfolio!')
