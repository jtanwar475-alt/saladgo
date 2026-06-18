# SALADGO DEPLOYMENT QUICK REFERENCE

## YOUR CREDENTIALS (TEST)
- Razorpay Key ID: `rzp_test_T39VaaCkwurDIm`
- Razorpay Secret: `B3XBCjcLF6Cx3nDK23wkraAk`
- JWT Secret: `saladgo_jwt_secret_key_2024_production_secure`
- Domain: `saladgo.in`

## DEPLOYMENT URLS (AFTER LIVE)
- Frontend: `https://saladgo.in`
- Backend: `https://api.saladgo.in`
- Admin Panel: `https://saladgo.in/admin`
- API Health: `https://api.saladgo.in/api/health`

## DNS RECORDS FOR GODADDY
```
CNAME Record 1:
Name:  api
Value: saladgo-api-XXXXX.herokuapp.com
(Replace XXXXX with Heroku app name)

CNAME Record 2:
Name:  www
Value: cname.vercel.com

A Record (Optional):
Name:  @ (blank)
Value: 76.76.19.89
```

## FILES TO RUN

### On Your PC (Windows):
```bash
cd e:\saladgo
DEPLOY_COMPLETE.bat
```

### Manual Steps:
1. Add DNS records to GoDaddy
2. Verify with: `nslookup api.saladgo.in`
3. Wait 2-48 hours for full propagation

## HELPFUL COMMANDS

Check backend logs:
```bash
heroku logs --tail -a saladgo-api
```

Restart backend:
```bash
heroku restart -a saladgo-api
```

View apps:
```bash
heroku apps
```

Check domain status:
```bash
nslookup saladgo.in
nslookup api.saladgo.in
```

## TEST PAYMENT CARD
- Number: `4111111111111111`
- Expiry: `12/25`
- CVV: `123`

## TROUBLESHOOTING

**"DNS not working?"**
- Wait 2-48 hours
- Run: `nslookup api.saladgo.in`

**"Backend error?"**
- Check logs: `heroku logs --tail -a saladgo-api`
- Restart: `heroku restart -a saladgo-api`

**"Frontend can't reach API?"**
- Verify VITE_API_URL in .env.local
- Redeploy: `vercel --prod`

**"Database error?"**
- Heroku auto-creates PostgreSQL
- URL stored in DATABASE_URL env var

## NEXT STEPS

1. Run DEPLOY_COMPLETE.bat
2. Add DNS records to GoDaddy
3. Wait for DNS propagation
4. Test at saladgo.in
5. Monitor logs: `heroku logs --tail -a saladgo-api`
6. Update Razorpay to production keys when ready
