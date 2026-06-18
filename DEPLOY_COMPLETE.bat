@echo off
REM SALADGO Complete Heroku + Vercel Deployment
REM This automates everything possible

cls
echo.
echo ╔══════════════════════════════════════════════════════╗
echo ║     🚀 SALADGO LIVE DEPLOYMENT - STEP 1 & 2         ║
echo ║     Backend to Heroku + Frontend to Vercel          ║
echo ╚══════════════════════════════════════════════════════╝
echo.

REM Check Heroku CLI
echo ✓ Checking Heroku CLI...
where heroku >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Heroku CLI not installed
    echo Installing: npm install -g heroku
    call npm install -g heroku
)

echo.
echo ╔══════════════════════════════════════════════════════╗
echo ║     STEP 1: DEPLOY BACKEND TO HEROKU                ║
echo ╚══════════════════════════════════════════════════════╝
echo.

cd /d %~dp0backend

echo 1️⃣  Creating Heroku app: saladgo-api...
call heroku create saladgo-api 2>nul
if %ERRORLEVEL% NEQ 0 echo (App may already exist - continuing...)

echo.
echo 2️⃣  Adding PostgreSQL database...
call heroku addons:create heroku-postgresql:essential-0 -a saladgo-api 2>nul
if %ERRORLEVEL% NEQ 0 echo (Database may already exist - continuing...)

echo.
echo 3️⃣  Setting environment variables...
call heroku config:set ^
  NODE_ENV=production ^
  JWT_SECRET=saladgo_jwt_secret_key_2024_production_secure ^
  RAZORPAY_KEY_ID=rzp_test_T39VaaCkwurDIm ^
  RAZORPAY_KEY_SECRET=B3XBCjcLF6Cx3nDK23wkraAk ^
  FRONTEND_URL=http://localhost:3000 ^
  -a saladgo-api

echo.
echo 4️⃣  Deploying backend code to Heroku...
cd /d %~dp0
call git push heroku main

echo.
echo ✅ BACKEND DEPLOYED!
echo.

REM Get Heroku app URL
for /f "tokens=*" %%i in ('heroku apps:info -a saladgo-api --json ^| findstr web_url') do (
    set "output=%%i"
)

echo Getting backend URL...
call heroku domains:add api.saladgo.in -a saladgo-api 2>nul

echo.
echo ╔══════════════════════════════════════════════════════╗
echo ║     ⚠️  MANUAL STEP: ADD DNS RECORDS TO GODADDY      ║
echo ╚══════════════════════════════════════════════════════╝
echo.
echo Go to: https://godaddy.com → My Products → saladgo.in → DNS
echo.
echo Add these records:
echo.
echo ┌─ Record 1: Backend API ─────────────────────────────┐
echo │ Type:  CNAME                                         │
echo │ Name:  api                                           │
echo │ Value: saladgo-api-XXXXX.herokuapp.com              │
echo │ TTL:   1 Hour                                        │
echo │ (Replace XXXXX with your Heroku app name)           │
echo └──────────────────────────────────────────────────────┘
echo.
echo ┌─ Record 2: Frontend (www) ──────────────────────────┐
echo │ Type:  CNAME                                         │
echo │ Name:  www                                           │
echo │ Value: cname.vercel.com                             │
echo │ TTL:   1 Hour                                        │
echo └──────────────────────────────────────────────────────┘
echo.
echo ┌─ Record 3: Root Domain ─────────────────────────────┐
echo │ Type:  A                                             │
echo │ Name:  @                                             │
echo │ Value: 76.76.19.89                                   │
echo │ TTL:   1 Hour                                        │
echo └──────────────────────────────────────────────────────┘
echo.

set /p continue="Press Enter after adding DNS records..."

echo.
echo ╔══════════════════════════════════════════════════════╗
echo ║     STEP 2: DEPLOY FRONTEND TO VERCEL               ║
echo ╚══════════════════════════════════════════════════════╝
echo.

cd /d %~dp0frontend

echo 1️⃣  Updating environment variables...
(
    echo VITE_API_URL=https://api.saladgo.in/api/v1
) > .env.local
echo Updated .env.local

echo.
echo 2️⃣  Building frontend...
call npm run build

echo.
echo 3️⃣  Installing Vercel CLI...
call npm install -g vercel

echo.
echo 4️⃣  Deploying to Vercel...
echo Please sign in with your email when prompted...
call vercel --prod

echo.
echo ✅ FRONTEND DEPLOYED!
echo.
echo ╔══════════════════════════════════════════════════════╗
echo ║     🎉 DEPLOYMENT COMPLETE!                          ║
echo ╚══════════════════════════════════════════════════════╝
echo.
echo Your SALADGO platform is now LIVE:
echo.
echo 🌐 Frontend:   https://saladgo.in
echo 🔌 Backend:    https://api.saladgo.in
echo 👨‍💼 Admin:       https://saladgo.in/admin
echo.
echo Note: DNS propagation takes 2-48 hours for full effect
echo.
echo Check backend logs anytime:
echo   heroku logs --tail -a saladgo-api
echo.
pause
