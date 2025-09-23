from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
from .models import Skill, Project, Experience, Education, Contact, PersonalInfo
from .forms import ContactForm


def home(request):
    personal_info = PersonalInfo.objects.first()
    featured_projects = Project.objects.filter(is_featured=True)[:3]
    educations = Education.objects.all()
    recent_experience = Experience.objects.first()
    
    context = {
        'personal_info': personal_info,
        'featured_projects': featured_projects,
        'educations': educations,
        'recent_experience': recent_experience,
    }
    return render(request, 'portfolio/home.html', context)


def about(request):
    personal_info = PersonalInfo.objects.first()
    skills = Skill.objects.all()
    education = Education.objects.all()
    
    context = {
        'personal_info': personal_info,
        'skills': skills,
        'education': education,
    }
    return render(request, 'portfolio/about.html', context)


def projects(request):
    project_type = request.GET.get('type', 'all')
    
    if project_type == 'all':
        projects_list = Project.objects.all()
    else:
        projects_list = Project.objects.filter(project_type=project_type)
    
    project_types = Project.PROJECT_TYPES
    
    context = {
        'projects': projects_list,
        'project_types': project_types,
        'current_type': project_type,
    }
    return render(request, 'portfolio/projects.html', context)


def experience(request):
    experiences = Experience.objects.all()
    education = Education.objects.all()
    
    context = {
        'experiences': experiences,
        'education': education,
    }
    return render(request, 'portfolio/experience.html', context)


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            contact_message = form.save()
            
            try:
                send_mail(
                    subject=f"Portfolio Contact: {contact_message.subject}",
                    message=f"From: {contact_message.name} ({contact_message.email})\n\n{contact_message.message}",
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.DEFAULT_FROM_EMAIL],
                    fail_silently=False,
                )
                messages.success(request, 'Your message has been sent successfully!')
            except Exception as e:
                messages.warning(request, 'Your message was saved but email notification failed.')
            
            if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return JsonResponse({'success': True, 'message': 'Message sent successfully!'})
            
            return redirect('contact')
        else:
            if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return JsonResponse({'success': False, 'errors': form.errors})
    else:
        form = ContactForm()
    
    personal_info = PersonalInfo.objects.first()
    
    context = {
        'form': form,
        'personal_info': personal_info,
    }
    return render(request, 'portfolio/contact.html', context)