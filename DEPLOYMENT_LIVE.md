# 🚀 SALADGO Live Deployment - Complete Guide

## ✅ Everything is Ready!

Your SALADGO platform is fully prepared for live deployment. Follow these 3 steps:

---

## **STEP 1: Deploy Backend to Heroku (5 min)**

### On Your Windows PC:
```bash
cd e:\saladgo
DEPLOY.bat
```

**What happens:**
- Installs Heroku CLI
- Creates your backend at `https://saladgo-api-xxxxx.herokuapp.com`
- Adds PostgreSQL database (free 5MB)
- Sets up payments & security keys
- Deploys code

**After it finishes, note your backend URL** (shown at end)

Example: `https://saladgo-api-12345.herokuapp.com`

---

## **STEP 2: Add DNS Records to GoDaddy (5 min)**

### Login to GoDaddy:
1. Go to **godaddy.com** → Sign in
2. Click **"My Products"** (top right)
3. Find **saladgo.in** → Click **DNS** button

### Add These Records:

**Record 1 - Backend API:**
```
Type:  CNAME
Name:  api
Value: saladgo-api-XXXXX.herokuapp.com
TTL:   1 Hour
```
*(Replace XXXXX with your Heroku app name from Step 1)*

**Record 2 - Frontend (www):**
```
Type:  CNAME
Name:  www
Value: cname.vercel.com
TTL:   1 Hour
```

**Record 3 - Root Domain (optional):**
```
Type:  A
Name:  @ (or blank)
Value: 76.76.19.89
TTL:   1 Hour
```

✅ Click Save after each record

---

## **STEP 3: Deploy Frontend to Vercel (5 min)**

### First, update frontend environment:

Open `frontend/.env.local` and update:
```
VITE_API_URL=https://api.saladgo.in/api/v1
```

### Then deploy:
```bash
cd frontend
npm run build
npm install -g vercel
vercel --prod
```

**Follow Vercel prompts:**
- Email to sign in: (use your email)
- Link to existing project? **No** (first time)
- Project name: **saladgo**
- Framework: **Vite**
- Build command: **npm run build** (press Enter)
- Output directory: **dist** (press Enter)

Once deployed, add your domain in Vercel:
1. Vercel Dashboard → Your Project → Settings → Domains
2. Add: `saladgo.in`
3. Vercel will show DNS records (usually auto-detected)

---

## **🌐 Your Live URLs:**

Once DNS propagates (2-48 hours):

- **Frontend:** https://saladgo.in
- **Backend API:** https://api.saladgo.in
- **Admin Panel:** https://saladgo.in/admin
- **Health Check:** https://api.saladgo.in/api/health

---

## **📋 Quick Checklist:**

- [ ] Run `DEPLOY.bat` on your PC
- [ ] Note Heroku app name (saladgo-api-XXXXX)
- [ ] Add 3 DNS records to GoDaddy
- [ ] Wait 5-10 minutes for DNS propagation
- [ ] Update `frontend/.env.local` with API URL
- [ ] Deploy frontend to Vercel
- [ ] Add saladgo.in domain to Vercel
- [ ] Wait 2-48 hours for full DNS propagation
- [ ] Test: Visit https://saladgo.in

---

## **🔒 SSL Certificates:**

Both Heroku and Vercel provide **FREE automatic SSL certificates**. Your site will be secure (https://) automatically! ✅

---

## **🔧 Troubleshooting:**

**"DNS not working yet?"**
- DNS takes 2-48 hours to fully propagate
- Check: `nslookup api.saladgo.in` (Windows)

**"Backend not connecting?"**
- Check Heroku logs: `heroku logs --tail -a saladgo-api`

**"Payment not working?"**
- Razorpay test keys are active
- Use test card: 4111111111111111, 12/25, 123

**"Database error?"**
- Heroku auto-setup PostgreSQL
- Connection string is in `DATABASE_URL` env var

---

## **📞 Support:**

**View backend logs anytime:**
```bash
heroku logs --tail -a saladgo-api
```

**Restart backend if needed:**
```bash
heroku restart -a saladgo-api
```

**View your apps:**
```bash
heroku apps
```

---

## **🎉 Success Indicators:**

✅ Heroku deployment successful  
✅ DNS records added to GoDaddy  
✅ Vercel deployment successful  
✅ saladgo.in domain added to Vercel  
✅ SSL certificates active (green 🔒)  
✅ Backend responding at api.saladgo.in  

**You're LIVE! 🚀**

---

**Questions?** I can help debug any errors. Just show me the error message!
