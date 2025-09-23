# Email Setup Guide

Your portfolio contact form is ready to send emails! You just need to set up your Gmail App Password.

## Steps to Enable Email:

### 1. Enable 2-Factor Authentication on Gmail

- Go to [Google Account Security](https://myaccount.google.com/security)
- Enable 2-Step Verification if not already enabled

### 2. Generate App Password

- Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
- Select "Mail" and "Other (Custom name)"
- Enter "Portfolio Contact Form" as the name
- Copy the generated 16-character password

### 3. Set Environment Variable

Create a `.env` file in your project root with:

```
EMAIL_PASSWORD=your_16_character_app_password_here
```

### 4. Test Email

Run this command to test:

```bash
source venv/bin/activate
python manage.py test_email
```

## How It Works:

- When someone fills out the contact form, an email is sent to `ozarragajohnhelboy@gmail.com`
- The email includes the sender's name, email, subject, and message
- A success message is shown to the user
- The contact message is also saved in the database

## Security Notes:

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Use App Passwords instead of your regular Gmail password

Your contact form is now ready to receive and send emails! 🎉
