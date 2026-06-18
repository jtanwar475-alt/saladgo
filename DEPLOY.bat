@echo off
REM SALADGO Heroku Deployment Script (Windows)
REM Run this on your local machine

echo.
echo 🚀 SALADGO Heroku Deployment Starting...
echo.

REM Check if Heroku CLI is installed
where heroku >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Heroku CLI not found. Install it first:
    echo npm install -g heroku
    pause
    exit /b 1
)

echo 📦 Checking git status...
git status
echo.

set /p commit="Commit current changes? (y/n): "
if /i "%commit%"=="y" (
    git add .
    git commit -m "Ready for Heroku deployment"
)

echo 📝 Creating Heroku app...
cd backend

heroku create saladgo-api 2>nul || echo App may already exist

echo 🗄️  Adding PostgreSQL database...
heroku addons:create heroku-postgresql:essential-0 2>nul || echo Database may already exist

echo 🔐 Setting environment variables...
heroku config:set ^
  NODE_ENV=production ^
  JWT_SECRET=saladgo_jwt_secret_key_2024_production_secure ^
  RAZORPAY_KEY_ID=rzp_test_T39VaaCkwurDIm ^
  RAZORPAY_KEY_SECRET=B3XBCjcLF6Cx3nDK23wkraAk ^
  FRONTEND_URL=http://localhost:3000

echo 🚀 Deploying backend to Heroku...
cd ..
git push heroku main

echo.
echo ✅ Backend deployment complete!
echo.
echo 🔍 Getting backend URL...
for /f "tokens=*" %%i in ('heroku apps:info -a saladgo-api --json ^| findstr "web_url"') do set BACKEND_URL=%%i
echo Backend URL: %BACKEND_URL%

echo.
echo 📱 Frontend deployment next!
echo 1. Update frontend\.env.local:
echo    VITE_API_URL=%BACKEND_URL%/api/v1
echo.
echo 2. Deploy frontend to Vercel:
echo    cd frontend
echo    npm run build
echo    vercel --prod
echo.
echo 3. Check logs anytime:
echo    heroku logs --tail -a saladgo-api
echo.
pause
