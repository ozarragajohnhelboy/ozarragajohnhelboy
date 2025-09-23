from django.core.management.base import BaseCommand
from django.core.mail import send_mail
from django.conf import settings

class Command(BaseCommand):
    help = 'Test email functionality'

    def handle(self, *args, **options):
        try:
            send_mail(
                subject='Portfolio Email Test',
                message='This is a test email from your portfolio website.',
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.DEFAULT_FROM_EMAIL],
                fail_silently=False,
            )
            self.stdout.write(
                self.style.SUCCESS('Email sent successfully!')
            )
        except Exception as e:
            self.stdout.write(
                self.style.ERROR(f'Email failed: {str(e)}')
            )
