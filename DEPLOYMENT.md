# Portfolio Deployment Guide for AWS EC2

This guide will help you deploy your Django portfolio to AWS EC2 using a simple, straightforward approach without Docker or complex services.

## Prerequisites

- AWS Account
- EC2 Instance (Ubuntu 20.04 or 22.04 recommended)
- Domain name (optional)
- Gmail account for email functionality

## Step 1: Launch EC2 Instance

1. **Launch Instance**:
   - Go to AWS EC2 Console
   - Click "Launch Instance"
   - Choose Ubuntu Server 20.04 LTS or 22.04 LTS
   - Select t2.micro (free tier) or t3.small for better performance
   - Create or select a key pair for SSH access
   - Configure security group to allow:
     - SSH (port 22) from your IP
     - HTTP (port 80) from anywhere
     - HTTPS (port 443) from anywhere (optional)

2. **Connect to Instance**:
   ```bash
   ssh -i your-key.pem ubuntu@your-server-ip
   ```

## Step 2: Prepare Your Code

1. **Clone Repository** (on your local machine):
   ```bash
   git clone https://github.com/ozarragajohnhelboy/Portfolio-HB.git
   cd Portfolio-HB
   ```

2. **Upload to Server**:
   ```bash
   # Option 1: Using SCP
   scp -i your-key.pem -r . ubuntu@your-server-ip:/home/ubuntu/
   
   # Option 2: Using Git on server
   git clone https://github.com/ozarragajohnhelboy/Portfolio-HB.git
   cd Portfolio-HB
   ```

## Step 3: Configure Environment

1. **Create Environment File**:
   ```bash
   cp env.example .env
   nano .env
   ```

2. **Update Environment Variables**:
   ```bash
   # Django Settings
   SECRET_KEY=your-very-secure-secret-key-here
   DEBUG=False
   ALLOWED_HOSTS=your-server-ip,your-domain.com
   
   # Email Configuration
   EMAIL_HOST_USER=your-email@gmail.com
   EMAIL_HOST_PASSWORD=your-gmail-app-password
   DEFAULT_FROM_EMAIL=your-email@gmail.com
   ```

## Step 4: Run Deployment Script

1. **Make Script Executable**:
   ```bash
   chmod +x deploy.sh
   ```

2. **Run Deployment**:
   ```bash
   ./deploy.sh
   ```

The script will:
- Update system packages
- Install Python, pip, and nginx
- Set up virtual environment
- Install dependencies
- Configure nginx
- Set up systemd service
- Start the application

## Step 5: Post-Deployment Setup

1. **Create Superuser**:
   ```bash
   cd /home/ubuntu/portfolio-app
   source venv/bin/activate
   python manage.py createsuperuser --settings=johnhb.settings_production
   ```

2. **Populate Database** (if needed):
   ```bash
   python manage.py populate_sample_data --settings=johnhb.settings_production
   ```

3. **Check Service Status**:
   ```bash
   sudo systemctl status portfolio
   sudo systemctl status nginx
   ```

## Step 6: Configure Firewall

```bash
# Allow HTTP and HTTPS
sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow 22
sudo ufw enable
```

## Step 7: SSL Certificate (Optional but Recommended)

1. **Install Certbot**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```

2. **Get SSL Certificate**:
   ```bash
   sudo certbot --nginx -d your-domain.com
   ```

## Useful Commands

### Service Management
```bash
# Check service status
sudo systemctl status portfolio
sudo systemctl status nginx

# Restart services
sudo systemctl restart portfolio
sudo systemctl restart nginx

# View logs
sudo journalctl -u portfolio -f
sudo tail -f /var/log/nginx/error.log
```

### Application Management
```bash
# Navigate to app directory
cd /home/ubuntu/portfolio-app

# Activate virtual environment
source venv/bin/activate

# Run Django commands
python manage.py collectstatic --settings=johnhb.settings_production
python manage.py migrate --settings=johnhb.settings_production
```

### Database Management
```bash
# Access Django shell
python manage.py shell --settings=johnhb.settings_production

# Create superuser
python manage.py createsuperuser --settings=johnhb.settings_production
```

## Troubleshooting

### Common Issues

1. **Service Won't Start**:
   ```bash
   sudo journalctl -u portfolio -f
   # Check for errors in logs
   ```

2. **Static Files Not Loading**:
   ```bash
   python manage.py collectstatic --noinput --settings=johnhb.settings_production
   sudo systemctl restart nginx
   ```

3. **Email Not Working**:
   - Verify Gmail App Password is correct
   - Check .env file configuration
   - Ensure 2FA is enabled on Gmail

4. **Permission Issues**:
   ```bash
   sudo chown -R $USER:$USER /home/ubuntu/portfolio-app
   chmod -R 755 /home/ubuntu/portfolio-app
   ```

### Log Locations
- Application logs: `/home/ubuntu/portfolio-app/logs/django.log`
- Nginx logs: `/var/log/nginx/error.log`
- System logs: `sudo journalctl -u portfolio`

## Security Considerations

1. **Keep System Updated**:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Configure Firewall**:
   ```bash
   sudo ufw enable
   sudo ufw default deny incoming
   sudo ufw default allow outgoing
   sudo ufw allow ssh
   sudo ufw allow 80
   sudo ufw allow 443
   ```

3. **Regular Backups**:
   ```bash
   # Backup database
   cp /home/ubuntu/portfolio-app/db.sqlite3 /home/ubuntu/backup-$(date +%Y%m%d).sqlite3
   
   # Backup media files
   tar -czf /home/ubuntu/media-backup-$(date +%Y%m%d).tar.gz /home/ubuntu/portfolio-app/media/
   ```

## Performance Optimization

1. **Enable Gzip Compression** (add to nginx config):
   ```nginx
   gzip on;
   gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   ```

2. **Set Up Log Rotation**:
   ```bash
   sudo nano /etc/logrotate.d/portfolio
   ```

## Monitoring

Consider setting up monitoring with:
- AWS CloudWatch
- Uptime monitoring services
- Log aggregation tools

## Support

If you encounter issues:
1. Check the logs first
2. Verify all environment variables
3. Ensure all services are running
4. Check firewall and security group settings

Your portfolio should now be live at `http://your-server-ip` or `https://your-domain.com`!
