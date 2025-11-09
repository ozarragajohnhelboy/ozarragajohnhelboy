from django.core.management.base import BaseCommand
from django.utils import timezone
from datetime import date, timedelta
from portfolio.models import Project, Skill


class Command(BaseCommand):
    help = 'Update projects with John Helboy Ozarraga real projects'

    def handle(self, *args, **options):
        self.stdout.write('Updating projects with real projects...')
        
        # Clear all existing projects
        Project.objects.all().delete()
        
        # Add real projects
        projects_data = [
            {
                'title': 'Bagong Montalban App',
                'description': 'Mobile application for the Municipality of Rodriguez (formerly Montalban). Features citizen services, announcements, local information, and municipal services. Available on Google Play Store for easy access by residents.',
                'short_description': 'Municipal mobile application for citizen services - Available on Google Play Store',
                'project_type': 'mobile',
                'demo_url': 'https://play.google.com/store/search?q=bagong%20montalban%20app&c=apps&hl=en',
                'github_url': '',
                'is_featured': True,
                'created_date': date(2023, 11, 1),
                'image': 'static/images/bagong-montalban-app.png',
                'technologies': ['PHP', 'Laravel', 'MySQL', 'CSS3', 'JavaScript']
            },
            {
                'title': 'JCSGO Church Management System',
                'description': 'Comprehensive church management system for JCSGO Church. Features member management, event scheduling, financial tracking, and administrative tools. Built with modern web technologies for efficient church operations.',
                'short_description': 'Comprehensive church management system with member and event management',
                'project_type': 'web',
                'demo_url': 'http://3.106.123.140',
                'github_url': 'https://github.com/ozarragajohnhelboy/JCSGO-Church-System',
                'is_featured': True,
                'created_date': date(2025, 8, 1),
                'image': 'static/images/jcsgo-church-management-system.png',
                'technologies': ['PHP', 'Laravel', 'MySQL', 'CSS3', 'JavaScript']
            },
            {
                'title': 'Schedule System',
                'description': 'AI-powered Music Ministry Attendance System with intelligent chatbot automation for event creation. Features advanced calendar management, member tracking, automated event scheduling through AI chatbot, and comprehensive reporting capabilities. The system now includes natural language processing for seamless event creation and management, streamlining music ministry operations with cutting-edge AI technology.',
                'short_description': 'AI-powered Music Ministry System with chatbot automation for event creation',
                'project_type': 'web',
                'demo_url': 'http://13.239.209.85',
                'github_url': 'https://github.com/ozarragajohnhelboy/Music-Ministry-Attendance-System',
                'is_featured': True,
                'created_date': date(2025, 9, 1),
                'image': 'static/images/calendar-system.png',
                'technologies': ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'OpenAI']
            },
            {
                'title': 'EchoVQ',
                'description': 'AI-powered audio analysis platform for feedback that supports teachers and empowers students. Features advanced audio processing, AI analysis, and educational insights. Built with modern technologies for educational enhancement.',
                'short_description': 'AI-powered audio analysis platform for educational feedback',
                'project_type': 'web',
                'demo_url': 'https://echovq.com/',
                'github_url': 'https://github.com/daveechovq/audio-analysis',
                'is_featured': False,
                'created_date': date(2025, 1, 1),
                'image': 'static/images/EchoVQ.png',
                'technologies': ['Python', 'Django', 'MySQL', 'CSS3', 'JavaScript']
            },
            {
                'title': 'School Management System',
                'description': 'Comprehensive Learning Management System (LMS) for Holy Face School. Features student management, course administration, grade tracking, and educational tools. Built to streamline school operations and enhance learning experience.',
                'short_description': 'Learning Management System for Holy Face School',
                'project_type': 'web',
                'demo_url': 'http://lms.holyface.school',
                'github_url': 'https://github.com/phpMyYang/holyface-lms',
                'is_featured': False,
                'created_date': date(2025, 3, 1),
                'image': '',
                'technologies': ['PHP', 'Laravel', 'MySQL', 'CSS3', 'JavaScript']
            },
            {
                'title': 'Jobzing App',
                'description': 'Job search and career platform connecting job seekers with employers. Features job listings, application tracking, resume management, and career resources. Built to simplify the job search process and improve employment opportunities.',
                'short_description': 'Job search and career platform for job seekers and employers',
                'project_type': 'web',
                'demo_url': 'https://jobzing.app/',
                'github_url': 'https://github.com/JomariHinayon/jobzing-app',
                'is_featured': False,
                'created_date': date(2025, 2, 1),
                'image': 'static/images/Jobzing.png',
                'technologies': ['PHP', 'Laravel', 'MySQL', 'CSS3', 'JavaScript']
            },
            {
                'title': 'AI Chatbot with Task Automation',
                'description': 'Advanced AI-powered chatbot system with intelligent task automation capabilities. Features natural language processing, machine learning models, vector database integration, and automated task scheduling. Built with modern AI/ML technologies including TensorFlow, LangChain, and ChromaDB for enhanced conversational AI experience.',
                'short_description': 'AI-powered chatbot with intelligent task automation and ML capabilities',
                'project_type': 'fullstack',
                'demo_url': '',
                'github_url': 'https://github.com/ozarragajohnhelboy/AI-Chatbot-with-Task-Automation',
                'is_featured': True,
                'created_date': date(2024, 12, 1),
                'image': '',
                'technologies': ['Python', 'FastAPI', 'TensorFlow', 'LangChain', 'ChromaDB', 'Celery', 'Redis', 'HTML', 'CSS3', 'JavaScript']
            },
            {
                'title': 'B-SIMS (Barangay Smart Information Management System)',
                'description': 'Comprehensive barangay management system built with Django REST API backend and React.js frontend. Features resident management with QR code generation, household management, document management with PDF generation, blotter system for incident reporting, comprehensive reports & analytics dashboard, and real-time clock with Philippines timezone. Designed for efficient barangay operations and citizen services.',
                'short_description': 'Comprehensive barangay management system with Django REST API and React.js',
                'project_type': 'fullstack',
                'demo_url': '',
                'github_url': 'https://github.com/ozarragajohnhelboy/B-SIMS',
                'is_featured': True,
                'created_date': date(2025, 1, 15),
                'image': '',
                'technologies': ['Python', 'Django', 'Django REST Framework', 'React.js', 'PostgreSQL', 'JWT', 'TailwindCSS', 'JavaScript']
            }
        ]
        
        for project_data in projects_data:
            technologies = project_data.pop('technologies')
            image_path = project_data.pop('image', '')
            
            # Create project
            project = Project.objects.create(**project_data)
            
            # Add technologies to project
            for tech_name in technologies:
                try:
                    skill = Skill.objects.get(name=tech_name)
                    project.technologies.add(skill)
                except Skill.DoesNotExist:
                    pass
            
            self.stdout.write(f'✓ Created project: {project.title}')
        
        self.stdout.write(
            self.style.SUCCESS('\n🎉 Successfully updated projects with real projects!')
        )
        self.stdout.write('\nReal projects added:')
        self.stdout.write('✓ Bagong Montalban App (Google Play Store)')
        self.stdout.write('✓ JCSGO Church Management System')
        self.stdout.write('✓ Schedule System (Music Ministry)')
        self.stdout.write('✓ EchoVQ (AI Audio Analysis)')
        self.stdout.write('✓ School Management System (Holy Face LMS)')
        self.stdout.write('✓ Jobzing App (Job Search Platform)')
        self.stdout.write('✓ AI Chatbot with Task Automation (AI/ML Project)')
        self.stdout.write('✓ B-SIMS (Barangay Smart Information Management System)')
