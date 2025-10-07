from django.core.management.base import BaseCommand
from portfolio.models import Skill


class Command(BaseCommand):
    help = 'Update skills to match only actual technologies from John Helboy Ozarraga experience'

    def handle(self, *args, **options):
        self.stdout.write('Updating skills to match actual experience...')
        
        # Clear all existing skills
        Skill.objects.all().delete()
        
        # Add only skills based on actual work experience
        skills_data = [
            # Backend Technologies (from experience)
            {'name': 'Python', 'category': 'backend', 'proficiency': 90, 'icon_class': 'fab fa-python'},
            {'name': 'Django', 'category': 'backend', 'proficiency': 85, 'icon_class': 'fab fa-python'},
            {'name': 'Flask', 'category': 'backend', 'proficiency': 80, 'icon_class': 'fas fa-flask'},
            {'name': 'FastAPI', 'category': 'backend', 'proficiency': 85, 'icon_class': 'fas fa-server'},
            {'name': 'PyQT', 'category': 'backend', 'proficiency': 85, 'icon_class': 'fas fa-desktop'},
            {'name': 'PHP', 'category': 'backend', 'proficiency': 90, 'icon_class': 'fab fa-php'},
            {'name': 'Laravel', 'category': 'backend', 'proficiency': 90, 'icon_class': 'fas fa-laravel'},
            
            # Frontend Technologies (from experience)
            {'name': 'HTML5', 'category': 'frontend', 'proficiency': 95, 'icon_class': 'fab fa-html5'},
            {'name': 'CSS3', 'category': 'frontend', 'proficiency': 90, 'icon_class': 'fab fa-css3-alt'},
            {'name': 'JavaScript', 'category': 'frontend', 'proficiency': 85, 'icon_class': 'fab fa-js-square'},
            {'name': 'Angular', 'category': 'frontend', 'proficiency': 80, 'icon_class': 'fab fa-angular'},
            
            # CMS & E-commerce (from experience)
            {'name': 'WordPress', 'category': 'tools', 'proficiency': 90, 'icon_class': 'fab fa-wordpress'},
            {'name': 'WooCommerce', 'category': 'tools', 'proficiency': 85, 'icon_class': 'fas fa-shopping-cart'},
            
            # Database (from experience)
            {'name': 'MySQL', 'category': 'database', 'proficiency': 90, 'icon_class': 'fas fa-database'},
            {'name': 'SQLite', 'category': 'database', 'proficiency': 85, 'icon_class': 'fas fa-database'},
            {'name': 'ChromaDB', 'category': 'database', 'proficiency': 80, 'icon_class': 'fas fa-database'},
            {'name': 'Redis', 'category': 'database', 'proficiency': 80, 'icon_class': 'fas fa-database'},
            
            # AI/ML Technologies (from experience)
            {'name': 'TensorFlow', 'category': 'tools', 'proficiency': 85, 'icon_class': 'fas fa-brain'},
            {'name': 'LangChain', 'category': 'tools', 'proficiency': 80, 'icon_class': 'fas fa-link'},
            {'name': 'Celery', 'category': 'tools', 'proficiency': 75, 'icon_class': 'fas fa-tasks'},
            
            # Design & CAD (from experience)
            {'name': 'AutoCAD', 'category': 'tools', 'proficiency': 85, 'icon_class': 'fas fa-drafting-compass'},
            {'name': '2D/3D Design', 'category': 'tools', 'proficiency': 80, 'icon_class': 'fas fa-cube'},
            
            # Development Tools (from experience)
            {'name': 'Git', 'category': 'devops', 'proficiency': 85, 'icon_class': 'fab fa-git-alt'},
            {'name': 'GitHub', 'category': 'devops', 'proficiency': 85, 'icon_class': 'fab fa-github'},
            
            # Testing & QA (from experience)
            {'name': 'Testing & QA', 'category': 'tools', 'proficiency': 80, 'icon_class': 'fas fa-bug'},
            {'name': 'UI/UX Testing', 'category': 'tools', 'proficiency': 75, 'icon_class': 'fas fa-mouse-pointer'},
            
            # Development Environment (from experience)
            {'name': 'VS Code', 'category': 'tools', 'proficiency': 90, 'icon_class': 'fas fa-code'},
        ]
        
        for skill_data in skills_data:
            skill = Skill.objects.create(**skill_data)
            self.stdout.write(f'✓ Created skill: {skill.name} ({skill.get_category_display()})')
        
        self.stdout.write(
            self.style.SUCCESS('\n🎉 Successfully updated skills to match actual experience!')
        )
        self.stdout.write('\nSkills now include only technologies from your work experience:')
        self.stdout.write('✓ Backend: Python, Django, Flask, FastAPI, PyQT, PHP, Laravel')
        self.stdout.write('✓ Frontend: HTML5, CSS3, JavaScript, Angular')
        self.stdout.write('✓ CMS: WordPress, WooCommerce')
        self.stdout.write('✓ Database: MySQL, SQLite, ChromaDB, Redis')
        self.stdout.write('✓ AI/ML: TensorFlow, LangChain, Celery')
        self.stdout.write('✓ Design: AutoCAD, 2D/3D Design')
        self.stdout.write('✓ Tools: Git, GitHub, Testing, VS Code')
