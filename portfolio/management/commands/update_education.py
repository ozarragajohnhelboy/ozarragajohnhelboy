from django.core.management.base import BaseCommand
from portfolio.models import Education
from datetime import date

class Command(BaseCommand):
    help = 'Update education information'

    def handle(self, *args, **options):
        # Clear all existing education records
        Education.objects.all().delete()
        self.stdout.write('Cleared all existing education records')

        # Create new education records
        education_data = [
            {
                'institution': 'Colegio de Montalban',
                'degree': 'Bachelor of Science in Computer Engineering',
                'field_of_study': 'Computer Engineering',
                'start_date': date(2014, 6, 1),
                'end_date': date(2019, 3, 1),
                'description': 'I graduated from Colegio de Montalban with a degree in Bachelor of Science in Computer Engineering. My education provided me with a strong foundation in both hardware and software development, equipping me with the skills needed for system design, programming, and problem-solving in various tech-related projects.'
            },
            {
                'institution': 'DICT (Department of Information and Communications Technology)',
                'degree': 'PHP Web Application Framework: CodeIgniter 4 Certification',
                'field_of_study': 'Web Development',
                'start_date': date(2023, 1, 1),
                'end_date': date(2023, 3, 1),
                'description': 'Certified in PHP Web Application Framework using CodeIgniter 4 from the Department of Information and Communications Technology (DICT).'
            },
            {
                'institution': 'DICT (Department of Information and Communications Technology)',
                'degree': 'Python Web Application Framework: Django & Flask Certification',
                'field_of_study': 'Web Development',
                'start_date': date(2023, 4, 1),
                'end_date': date(2023, 6, 1),
                'description': 'Certified in Python Web Application Framework using Django and Flask from the Department of Information and Communications Technology (DICT).'
            }
        ]

        # Create education records
        for edu_data in education_data:
            education = Education.objects.create(**edu_data)
            self.stdout.write(
                self.style.SUCCESS(f'Created education record: {education.degree} at {education.institution}')
            )

        self.stdout.write(
            self.style.SUCCESS('Successfully updated all education information!')
        )
