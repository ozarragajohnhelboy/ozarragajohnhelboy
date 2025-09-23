from django.core.management.base import BaseCommand
from portfolio.models import Project, Skill

class Command(BaseCommand):
    help = 'Update project technologies with correct tech stack'

    def handle(self, *args, **options):
        # Define project technologies mapping
        project_technologies = {
            'Schedule System': [
                'Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'SQLite', 'AWS'
            ],
            'JCSGO Church Management System': [
                'Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'SQLite', 'AWS'
            ],
            'Bagong Montalban App': [
                'React Native', 'Firebase', 'Xcode', 'Android Studio'
            ],
            'School Management System': [
                'PHP', 'HTML5', 'Bootstrap', 'JavaScript', 'CSS3', 'MySQL'
            ],
            'EchoVQ': [
                'Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'PostgreSQL', 'AWS', 'SendGrid', 'Stripe'
            ],
            'Jobzing App': [
                'Python', 'Django', 'Vue.js', 'PostgreSQL', 'AWS'
            ]
        }

        # Create or get skills
        all_skills = {}
        for tech_list in project_technologies.values():
            for tech in tech_list:
                if tech not in all_skills:
                    skill, created = Skill.objects.get_or_create(
                        name=tech,
                        defaults={
                            'category': 'Backend' if tech in ['Python', 'Django', 'PHP', 'PostgreSQL', 'SQLite', 'MySQL'] 
                                      else 'Frontend' if tech in ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Vue.js', 'React Native']
                                      else 'Mobile' if tech in ['Xcode', 'Android Studio']
                                      else 'Database' if tech in ['Firebase']
                                      else 'DevOps' if tech in ['AWS']
                                      else 'Third Party' if tech in ['SendGrid', 'Stripe']
                                      else 'Other',
                            'proficiency': 85,
                            'icon_class': self.get_icon_class(tech)
                        }
                    )
                    all_skills[tech] = skill

        # Update each project
        for project_name, tech_list in project_technologies.items():
            try:
                project = Project.objects.get(title=project_name)
                
                # Clear existing technologies and add new ones
                project.technologies.clear()
                for tech in tech_list:
                    if tech in all_skills:
                        project.technologies.add(all_skills[tech])
                
                self.stdout.write(
                    self.style.SUCCESS(f'Updated {project_name} with technologies: {", ".join(tech_list)}')
                )
                
            except Project.DoesNotExist:
                self.stdout.write(
                    self.style.ERROR(f'Project {project_name} not found')
                )

        self.stdout.write(
            self.style.SUCCESS('Successfully updated all project technologies!')
        )

    def get_icon_class(self, tech):
        icon_mapping = {
            'Python': 'fab fa-python',
            'Django': 'fas fa-code',
            'HTML5': 'fab fa-html5',
            'CSS3': 'fab fa-css3-alt',
            'JavaScript': 'fab fa-js-square',
            'SQLite': 'fas fa-database',
            'AWS': 'fab fa-aws',
            'React Native': 'fab fa-react',
            'Firebase': 'fab fa-google',
            'Xcode': 'fab fa-apple',
            'Android Studio': 'fab fa-android',
            'PHP': 'fab fa-php',
            'Bootstrap': 'fab fa-bootstrap',
            'MySQL': 'fas fa-database',
            'PostgreSQL': 'fas fa-database',
            'SendGrid': 'fas fa-envelope',
            'Stripe': 'fab fa-stripe',
            'Vue.js': 'fab fa-vuejs'
        }
        return icon_mapping.get(tech, 'fas fa-code')
