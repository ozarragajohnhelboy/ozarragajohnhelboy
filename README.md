# Jomari's Professional Portfolio

A modern, responsive portfolio website built with Django showcasing your skills as a Full Stack Python Web Developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Dynamic skill bars, project filtering, and smooth scrolling
- **Contact Form**: Functional contact form with email notifications
- **Admin Interface**: Easy content management through Django admin
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance Optimized**: Fast loading with optimized assets

## 🛠️ Technologies Used

### Backend

- **Django 5.2.6** - Web framework
- **Python 3.12** - Programming language
- **SQLite** - Database (easily configurable for PostgreSQL/MySQL)
- **Pillow** - Image processing

### Frontend

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter font family)

## 📁 Project Structure

```
portfolio/
├── johnhb/                 # Django project settings
├── portfolio/              # Main portfolio app
│   ├── models.py          # Database models
│   ├── views.py           # View functions
│   ├── urls.py            # URL routing
│   ├── admin.py           # Admin interface
│   ├── forms.py           # Contact form
│   └── management/        # Custom management commands
├── templates/             # HTML templates
│   └── portfolio/
├── static/                # Static files
│   ├── css/
│   ├── js/
│   └── images/
├── media/                 # User uploaded files
└── manage.py
```

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- pip (Python package installer)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Create and activate virtual environment**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations**

   ```bash
   python manage.py migrate
   ```

5. **Create superuser**

   ```bash
   python manage.py createsuperuser
   ```

6. **Populate with sample data (optional)**

   ```bash
   python manage.py populate_sample_data
   ```

7. **Run development server**

   ```bash
   python manage.py runserver
   ```

8. **Visit your portfolio**
   - Portfolio: http://127.0.0.1:8000
   - Admin: http://127.0.0.1:8000/admin

## 📝 Content Management

### Adding Your Information

1. **Personal Information**

   - Go to Admin → Personal Information
   - Add your name, title, bio, contact details
   - Upload profile image and resume

2. **Skills**

   - Go to Admin → Skills
   - Add your technical skills with proficiency levels
   - Categorize by Backend, Frontend, Mobile, DevOps, Database, Tools

3. **Projects**

   - Go to Admin → Projects
   - Add your portfolio projects
   - Include descriptions, technologies, and links
   - Mark featured projects

4. **Experience**

   - Go to Admin → Experience
   - Add your work history
   - Include company, position, dates, and descriptions

5. **Education**
   - Go to Admin → Education
   - Add your educational background
   - Include degrees, institutions, and achievements

### Customizing the Design

1. **Colors and Styling**

   - Edit `static/css/style.css`
   - Modify CSS custom properties in `:root` section

2. **Content and Text**

   - Update templates in `templates/portfolio/`
   - Modify static text and sections

3. **Images and Assets**
   - Add your images to `static/images/`
   - Update image references in templates

## 🎨 Customization Guide

### Changing Colors

Edit the CSS custom properties in `static/css/style.css`:

```css
:root {
  --primary-color: #2563eb; /* Main brand color */
  --secondary-color: #64748b; /* Secondary text */
  --accent-color: #f59e0b; /* Accent color */
  /* ... more colors */
}
```

### Adding New Sections

1. Create new models in `portfolio/models.py`
2. Add views in `portfolio/views.py`
3. Create templates in `templates/portfolio/`
4. Update URL routing in `portfolio/urls.py`

### Modifying Animations

Edit JavaScript animations in `static/js/main.js`:

```javascript
// Customize scroll animations
function initializeScrollReveal() {
  // Your custom animation code
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 767px and below

## 🔧 Configuration

### Email Settings

Configure email in `johnhb/settings.py`:

```python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'your-smtp-server.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'your-email@example.com'
EMAIL_HOST_PASSWORD = 'your-password'
DEFAULT_FROM_EMAIL = 'your-email@example.com'
```

### Database Configuration

For production, update database settings:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'portfolio_db',
        'USER': 'your_username',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

## 🚀 Deployment

### Production Checklist

1. Set `DEBUG = False` in settings
2. Configure production database
3. Set up static file serving
4. Configure email settings
5. Set up SSL certificate
6. Configure domain and DNS

### Recommended Hosting

- **Heroku**: Easy deployment with git
- **DigitalOcean**: VPS with full control
- **AWS**: Scalable cloud hosting
- **Vercel**: Modern deployment platform

## 📊 Performance Optimization

- **Image Optimization**: Compress images before upload
- **Caching**: Implement Redis for session caching
- **CDN**: Use CloudFlare or AWS CloudFront
- **Database**: Optimize queries and add indexes
- **Static Files**: Use WhiteNoise for static file serving

## 🔒 Security Features

- CSRF protection enabled
- XSS protection
- SQL injection prevention
- Secure password validation
- Admin interface protection

## 📈 SEO Features

- Meta tags for each page
- Open Graph tags for social sharing
- Structured data markup
- Sitemap generation
- Mobile-friendly design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help:

- Create an issue on GitHub
- Email: jomari@example.com
- LinkedIn: [Your LinkedIn Profile]

## 🎯 Future Enhancements

- [ ] Blog section
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Advanced project filtering
- [ ] Testimonials section
- [ ] Analytics integration
- [ ] Contact form spam protection
- [ ] Image gallery
- [ ] Resume download tracking

---

**Built with ❤️ by Jomari**

_Professional portfolio showcasing modern web development skills and best practices._
