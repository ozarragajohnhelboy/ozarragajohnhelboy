from django.contrib import admin
from .models import Skill, Project, Experience, Education, Contact, PersonalInfo


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'proficiency', 'order']
    list_filter = ['category']
    list_editable = ['proficiency', 'order']
    ordering = ['category', 'order', 'name']


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'project_type', 'is_featured', 'created_date', 'order']
    list_filter = ['project_type', 'is_featured', 'technologies']
    list_editable = ['is_featured', 'order']
    filter_horizontal = ['technologies']
    ordering = ['-is_featured', 'order', '-created_date']
    search_fields = ['title', 'description']


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ['position', 'company', 'start_date', 'end_date', 'is_current']
    list_filter = ['is_current']
    list_editable = ['is_current']
    ordering = ['-start_date']
    search_fields = ['company', 'position']


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ['degree', 'institution', 'start_date', 'end_date']
    ordering = ['-start_date']
    search_fields = ['institution', 'degree', 'field_of_study']


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'created_at', 'is_read']
    list_filter = ['is_read', 'created_at']
    list_editable = ['is_read']
    readonly_fields = ['name', 'email', 'subject', 'message', 'created_at']
    ordering = ['-created_at']
    search_fields = ['name', 'email', 'subject']


@admin.register(PersonalInfo)
class PersonalInfoAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'title', 'email']
    
    def has_add_permission(self, request):
        if PersonalInfo.objects.exists():
            return False
        return super().has_add_permission(request)
    
    def has_delete_permission(self, request, obj=None):
        return False