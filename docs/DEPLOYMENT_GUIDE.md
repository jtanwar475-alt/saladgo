# 🚀 SALADGO - Deployment Guide (Go Live)

## 📋 Pre-Deployment Checklist

- [x] Frontend code ready
- [x] Backend APIs working
- [x] Admin panel complete
- [ ] Database configured
- [ ] Environment variables set
- [ ] SSL certificates ready
- [ ] Domain purchased
- [ ] Payment gateway configured
- [ ] Email service setup
- [ ] CDN configured

---

## 🌐 Deployment Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Users                             │
└────────────────────┬────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
   ┌────▼─────┐          ┌───────▼──────┐
   │  Vercel  │          │  CloudFlare  │
   │(Frontend)│          │    (CDN)     │
   └────┬─────┘          └──────────────┘
        │
    ┌───▼──────────────────────┐
    │   Backend Server         │
    │  (AWS/GCP/DigitalOcean) │
    └───┬──────────────────────┘
        │
    ┌───▼──────────────────────┐
    │    PostgreSQL Database   │
    │   (AWS RDS / Managed)    │
    └──────────────────────────┘
```

---

## 📱 PART 1: Frontend Deployment (Vercel)

### **Step 1: Prepare Frontend**

```bash
# Update environment variables
cd frontend
echo "VITE_API_URL=https://api.saladgo.in" > .env.production

# Build for production
npm run build

# Test production build locally
npm run preview
```

### **Step 2: Deploy to Vercel**

**Option A: Using Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

**Option B: GitHub Integration (Recommended)**

```bash
# Push code to GitHub
git init
git add .
git commit -m "Initial SALADGO frontend"
git remote add origin https://github.com/your-username/saladgo-frontend.git
git branch -M main
git push -u origin main
```

Then:
1. Go to https://vercel.com
2. Click "Import Project"
3. Select GitHub repository
4. Configure:
   - Framework: React
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add Environment Variables:
   - `VITE_API_URL`: `https://api.saladgo.in`
6. Click "Deploy"

### **Step 3: Configure Custom Domain**

1. Buy domain from GoDaddy, Namecheap, etc.
2. In Vercel Dashboard:
   - Go to Settings → Domains
   - Add your domain
   - Update DNS records (instructions provided by Vercel)

**Expected DNS Records:**
```
A Record:     76.76.19.89
CNAME Record: cname.vercel.com
```

### **Step 4: Enable SSL**

Vercel automatically provides free SSL certificates! 🔒

---

## 🔧 PART 2: Backend Deployment

### **Option 1: AWS EC2 (Recommended)**

#### **Step 1: Launch EC2 Instance**

```bash
# Create EC2 instance
- OS: Ubuntu 22.04 LTS
- Instance Type: t3.medium (1 vCPU, 1GB RAM)
- Storage: 30GB SSD
- Security Group: Allow ports 22, 80, 443
```

#### **Step 2: Connect & Setup**

```bash
# SSH into instance
ssh -i your-key.pem ubuntu@your-instance-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PostgreSQL
sudo apt install -y postgresql postgresql-contrib

# Install Nginx
sudo apt install -y nginx
```

#### **Step 3: Setup PostgreSQL Database**

```bash
# Connect to PostgreSQL
sudo -i -u postgres psql

# Create database and user
CREATE DATABASE saladgo;
CREATE USER saladgo_user WITH PASSWORD 'strong_password_here';
ALTER ROLE saladgo_user SET client_encoding TO 'utf8';
ALTER ROLE saladgo_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE saladgo_user SET default_transaction_deferrable TO on;
ALTER ROLE saladgo_user SET default_transaction_read_committed TO on;
GRANT ALL PRIVILEGES ON DATABASE saladgo TO saladgo_user;
\q
```

#### **Step 4: Deploy Backend Code**

```bash
# Clone repository
cd /var/www
sudo git clone https://github.com/your-username/saladgo-backend.git
cd saladgo-backend

# Install dependencies
npm install --production

# Create .env file
sudo nano .env

# Add:
NODE_ENV=production
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=saladgo
DB_USER=saladgo_user
DB_PASSWORD=strong_password_here
JWT_SECRET=your_super_secret_jwt_key_here
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
FRONTEND_URL=https://saladgo.in
```

#### **Step 5: Setup PM2 (Process Manager)**

```bash
# Install PM2
sudo npm install -g pm2

# Start application
pm2 start src/index.js --name "saladgo-api"

# Enable startup
pm2 startup
pm2 save

# Monitor
pm2 monit
```

#### **Step 6: Configure Nginx (Reverse Proxy)**

```bash
# Create Nginx config
sudo nano /etc/nginx/sites-available/saladgo

# Add:
server {
    listen 80;
    server_name api.saladgo.in;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Enable site
sudo ln -s /etc/nginx/sites-available/saladgo /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

#### **Step 7: SSL Certificate (Let's Encrypt)**

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot certonly --standalone -d api.saladgo.in

# Auto-renew
sudo systemctl enable certbot.timer
```

---

### **Option 2: DigitalOcean App Platform (Easier)**

1. Push code to GitHub
2. Go to DigitalOcean → Apps
3. Click "Create App"
4. Connect GitHub repository
5. Configure:
   - Runtime: Node.js
   - Build Command: `npm install`
   - Run Command: `npm start`
6. Add Environment Variables
7. Add PostgreSQL database
8. Deploy!

---

### **Option 3: Heroku (Simplest)**

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create saladgo-api

# Add PostgreSQL
heroku addons:create heroku-postgresql:hobby-dev

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your_secret_key
heroku config:set RAZORPAY_KEY_ID=your_key
heroku config:set RAZORPAY_KEY_SECRET=your_secret

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

---

## 💳 PART 3: Payment Gateway Setup (Razorpay)

### **Step 1: Create Razorpay Account**

1. Go to https://razorpay.com
2. Sign up and verify
3. Complete KYC verification
4. Go to Settings → API Keys
5. Copy:
   - Key ID
   - Key Secret

### **Step 2: Add to Environment Variables**

**Frontend** (`.env.production`):
```
VITE_RAZORPAY_KEY_ID=your_key_id
```

**Backend** (`.env`):
```
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

### **Step 3: Test Payment**

Use Razorpay test mode:
```
Card Number: 4111111111111111
Expiry: 12/25
CVV: 123
```

---

## 📧 PART 4: Email Setup (SendGrid / AWS SES)

### **SendGrid (Recommended)**

```bash
# Install SendGrid
npm install @sendgrid/mail

# Get API Key from https://sendgrid.com
# Add to .env:
SENDGRID_API_KEY=your_sendgrid_key
SENDGRID_FROM_EMAIL=noreply@saladgo.in
```

**Create Email Service** (`src/services/email.js`):
```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendOrderConfirmation = async (email, orderData) => {
  const msg = {
    to: email,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject: 'Order Confirmation - SALADGO',
    html: `<h1>Order Confirmed!</h1><p>Order ID: ${orderData.id}</p>`,
  };
  await sgMail.send(msg);
};
```

---

## 🗄️ PART 5: Database Backup & Monitoring

### **Automated Backups**

```bash
# Create backup script
sudo nano /usr/local/bin/backup-db.sh

#!/bin/bash
BACKUP_DIR="/backups/saladgo"
DATE=$(date +%Y%m%d_%H%M%S)
pg_dump -U saladgo_user saladgo | gzip > $BACKUP_DIR/backup_$DATE.sql.gz

# Schedule with cron
sudo crontab -e
# Add: 0 2 * * * /usr/local/bin/backup-db.sh
```

### **Monitoring Setup**

```bash
# Install monitoring tools
npm install pm2-monitoring

# View dashboard
pm2 web

# Access: http://localhost:9615
```

---

## 🔍 PART 6: Domain Setup & DNS

### **DNS Configuration**

Update your domain registrar with:

```
Frontend:
  Type: CNAME
  Name: www
  Value: cname.vercel.com

Backend:
  Type: A
  Name: api
  Value: your_aws_ip_or_load_balancer

Mail:
  Type: TXT (SPF)
  Value: v=spf1 sendgrid.net ~all

  Type: CNAME (DKIM)
  Value: sendgrid verification records
```

---

## ✅ Pre-Launch Checklist

### **Backend**
- [ ] Database migrations run
- [ ] Environment variables set
- [ ] SSL certificate active
- [ ] PM2 auto-restart configured
- [ ] Monitoring setup
- [ ] Backup scheduled
- [ ] Logs configured
- [ ] Error tracking setup (Sentry)

### **Frontend**
- [ ] API URLs updated
- [ ] Build tested locally
- [ ] Analytics setup (Google Analytics)
- [ ] SEO optimized
- [ ] Performance optimized (< 3s load)
- [ ] Mobile responsive verified
- [ ] All routes tested
- [ ] Error pages working

### **Infrastructure**
- [ ] SSL certificates installed
- [ ] Domain configured
- [ ] CDN setup (CloudFlare)
- [ ] Email service active
- [ ] Payment gateway tested
- [ ] Security headers configured
- [ ] DDoS protection enabled
- [ ] Rate limiting active

---

## 🚀 Launch Day Steps

```bash
# 1. Final backup
sudo /usr/local/bin/backup-db.sh

# 2. Run migrations
npm run migrate

# 3. Seed data
npm run seed

# 4. Health check
curl https://api.saladgo.in/api/health

# 5. Test payment
# Use test card in Razorpay

# 6. Monitor logs
pm2 logs saladgo-api

# 7. Check uptime
# Monitor dashboard for errors
```

---

## 📊 Monitoring & Analytics

### **Setup Google Analytics**

```javascript
// In frontend App.jsx
import ReactGA from 'react-ga';

ReactGA.initialize('GA_MEASUREMENT_ID');

// Track page views
useEffect(() => {
  ReactGA.pageview(window.location.pathname);
}, []);
```

### **Error Tracking (Sentry)**

```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your_sentry_dsn",
  environment: "production",
});
```

---

## 💰 Estimated Monthly Costs

| Service | Cost | Notes |
|---------|------|-------|
| Vercel (Frontend) | $20 | Pro plan |
| AWS EC2 | $10-20 | t3.medium instance |
| PostgreSQL | $15 | Managed database |
| Domain | $10 | Annual |
| SSL Certificate | Free | Let's Encrypt |
| SendGrid | $20 | Email service |
| Razorpay | 2% | Payment fees |
| **Total** | **~$85-95/month** | |

---

## 🆘 Troubleshooting

### **502 Bad Gateway**
```bash
# Check backend status
pm2 status

# Restart if needed
pm2 restart saladgo-api

# Check logs
pm2 logs saladgo-api
```

### **Database Connection Error**
```bash
# Check PostgreSQL
sudo systemctl status postgresql

# Check credentials
sudo -u postgres psql -U saladgo_user -d saladgo
```

### **SSL Certificate Issue**
```bash
# Renew certificate
sudo certbot renew --force-renewal
```

---

## 📈 Post-Launch Optimization

1. **Monitor Performance**
   - Use Google PageSpeed
   - Monitor Core Web Vitals
   - Check response times

2. **Optimize Images**
   - Use WebP format
   - Implement lazy loading
   - Compress images

3. **Enable Caching**
   - Browser caching
   - Server caching
   - CDN caching

4. **Scale Infrastructure**
   - Monitor CPU/Memory
   - Add load balancing
   - Scale database if needed

---

## 📞 Support & Maintenance

**Daily Tasks:**
- Monitor error logs
- Check server health
- Monitor database performance

**Weekly Tasks:**
- Review analytics
- Check backups
- Update dependencies

**Monthly Tasks:**
- Performance audit
- Security audit
- Cost optimization
- Backup verification

---

## 🎯 Deployment Summary

```
Step 1: Frontend → Vercel (5 min)
Step 2: Backend → AWS/DigitalOcean (15 min)
Step 3: Database → PostgreSQL (10 min)
Step 4: Domain → Configure DNS (30 min)
Step 5: SSL → Let's Encrypt (10 min)
Step 6: Email → SendGrid (10 min)
Step 7: Payment → Razorpay (5 min)
Step 8: Monitoring → Setup tools (15 min)

Total Time: ~1.5 hours
Total Cost: ~$85-95/month
```

---

**Your SALADGO platform is ready to go LIVE!** 🎉

**Current Status:**
- ✅ Development: Complete
- ✅ Testing: Ready
- ✅ Production: Ready to deploy

**Next Steps:**
1. Choose hosting provider
2. Setup domains
3. Configure databases
4. Deploy to production
5. Monitor & optimize

---

**Questions?** Check troubleshooting section or review cloud provider documentation.

