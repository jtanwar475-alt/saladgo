#!/bin/bash

# SALADGO Heroku Deployment Script
# Run this on your local machine

set -e

echo "🚀 SALADGO Heroku Deployment Starting..."
echo ""

# Check if Heroku CLI is installed
if ! command -v heroku &> /dev/null; then
  echo "❌ Heroku CLI not found. Install it first:"
  echo "npm install -g heroku"
  exit 1
fi

# Check git status
echo "📦 Checking git status..."
git status
echo ""

# Commit changes if any
read -p "Commit current changes? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  git add .
  git commit -m "Ready for Heroku deployment"
fi

echo "📝 Creating Heroku app..."
cd backend

# Create app
heroku create saladgo-api 2>/dev/null || echo "App may already exist"

echo "🗄️  Adding PostgreSQL database..."
heroku addons:create heroku-postgresql:essential-0 2>/dev/null || echo "Database may already exist"

echo "🔐 Setting environment variables..."
heroku config:set \
  NODE_ENV="production" \
  JWT_SECRET="saladgo_jwt_secret_key_2024_production_secure" \
  RAZORPAY_KEY_ID="rzp_test_T39VaaCkwurDIm" \
  RAZORPAY_KEY_SECRET="B3XBCjcLF6Cx3nDK23wkraAk" \
  FRONTEND_URL="http://localhost:3000"

echo "🚀 Deploying backend to Heroku..."
cd ..
git push heroku main

echo ""
echo "✅ Backend deployment complete!"
echo ""
echo "🔍 Getting backend URL..."
BACKEND_URL=$(heroku apps:info -a saladgo-api --json | grep -o '"web_url":"[^"]*' | cut -d'"' -f4)
echo "Backend URL: $BACKEND_URL"

echo ""
echo "📱 Frontend deployment next!"
echo "1. Update frontend/.env.local:"
echo "   VITE_API_URL=$BACKEND_URL/api/v1"
echo ""
echo "2. Deploy frontend to Vercel:"
echo "   cd frontend"
echo "   npm run build"
echo "   vercel --prod"
echo ""
echo "3. Check logs anytime:"
echo "   heroku logs --tail -a saladgo-api"
