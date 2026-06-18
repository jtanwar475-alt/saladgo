# SALADGO - Setup & Installation Guide

## 🎯 Quick Start Guide

### System Requirements
- Node.js 16+ (recommended 18+)
- npm 8+ or yarn
- PostgreSQL 12+
- Git

### Installation Steps

#### 1. Clone or Navigate to Project
```bash
cd saladgo
```

#### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local

# Edit .env.local with your database credentials
# DB_HOST=localhost
# DB_PORT=5432
# DB_NAME=saladgo
# DB_USER=postgres
# DB_PASSWORD=your_password
# JWT_SECRET=change_this_to_secure_key_in_production

# Start development server
npm run dev
```

**Backend URL**: http://localhost:5000

#### 3. Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Create environment file
echo "VITE_API_URL=http://localhost:5000/api/v1" > .env.local

# Start development server
npm run dev
```

**Frontend URL**: http://localhost:5173

---

## 📱 Pages & Features Implemented

### ✅ Pages Created
1. **Home Page** - Hero banner, categories, featured products, testimonials
2. **Shop Page** - Product listing with search and filters
3. **Product Details** - Individual product view (route ready)
4. **Shopping Cart** - Cart management with totals
5. **Checkout** - Order summary (route ready)
6. **B2B Supply** - Business bulk ordering and inquiry form
7. **About Us** - Company mission and values
8. **Contact** - Contact form and information
9. **Login** - User authentication
10. **404 Page** - Not found handling

### ✅ Components Created
- **Header** - Navigation with logo, menu, cart icon
- **Footer** - Company info, links, social media
- **ProductCard** - Reusable product display
- **Button** - Primary, secondary, outline variants
- **Forms** - Input fields with Tailwind styling

### ✅ Design System
- **Colors**: Green (#10b981), Orange (#f97316), White
- **Typography**: Poppins, Inter fonts with proper sizing
- **Animations**: Framer Motion slide, fade, hover effects
- **Responsive**: Mobile, tablet, desktop layouts

---

## 🔌 API Endpoints Ready

### Authentication
- `POST /api/v1/auth/signup` - User registration
- `POST /api/v1/auth/login` - User login  
- `GET /api/v1/auth/profile` - Get user profile (protected)

### Products
- `GET /api/v1/products` - List products with filters
- `GET /api/v1/products/:id` - Get product details
- `POST /api/v1/products` - Create product (admin)
- `PUT /api/v1/products/:id` - Update product (admin)
- `DELETE /api/v1/products/:id` - Delete product (admin)

### Health Check
- `GET /api/health` - Server status

---

## 🗄️ Database Models

Pre-built Sequelize models:
- **User** - Customers, admins, suppliers, delivery partners
- **Category** - Product categories
- **Product** - Product details, pricing, stock

Ready to extend with:
- Orders, OrderItems
- Cart, CartItems  
- Payments
- Reviews
- B2B Orders
- Inventory Transactions

---

## 🎨 Styling & Components

All Tailwind CSS utility classes configured with:
- Custom color variables (SALADGO green & orange)
- Reusable `.btn-primary`, `.btn-secondary`, `.card` classes
- Responsive grid system
- Animation utilities

---

## 🚀 Development Workflow

### Run Both Servers Simultaneously

**Terminal 1 - Backend**:
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend**:
```bash
cd frontend
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🧪 Testing the Setup

### Test Frontend
- ✅ Homepage with animations loads
- ✅ Navigation between all pages works
- ✅ Responsive design on mobile view
- ✅ Tailwind styles apply correctly

### Test Backend
```bash
# Check if server is running
curl http://localhost:5000/api/health

# Should return:
# {"status":"OK","message":"Server is running"}
```

### Test Database Connection
Add `.env.local` to backend with PostgreSQL credentials:
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=saladgo
DB_USER=postgres
DB_PASSWORD=your_password
```

Then start server:
```bash
npm run dev
# Should show "Database connected"
```

---

## 📦 Next Steps

### Short-term (Phase 2-3)
1. [ ] Implement cart context and local storage persistence
2. [ ] Connect login form to backend API
3. [ ] Create product detail pages dynamically
4. [ ] Add product review system
5. [ ] Implement wishlist functionality

### Medium-term (Phase 4-6)
1. [ ] Razorpay payment integration
2. [ ] Order management system
3. [ ] B2B quote and order processing
4. [ ] Email notifications
5. [ ] Order tracking with delivery

### Long-term (Phase 7-11)
1. [ ] Admin dashboard with full analytics
2. [ ] Inventory management system
3. [ ] Supplier and delivery management
4. [ ] Advanced reporting and insights
5. [ ] Mobile app (React Native)
6. [ ] Real-time notifications (Socket.io)

---

## 🔧 Useful Commands

### Frontend
```bash
cd frontend
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### Backend
```bash
cd backend
npm run dev        # Start with nodemon
npm start         # Start server
npm run migrate   # Run database migrations
npm run seed      # Seed database
```

---

## 📋 Project Checklist

### Phase 1 - Infrastructure ✅
- [x] Frontend setup (React + Vite + Tailwind)
- [x] Backend setup (Express + PostgreSQL)
- [x] Project structure
- [x] Environment configuration
- [x] Basic models

### Phase 2 - Core Pages 🟢 (In Progress)
- [x] Home page
- [x] Shop page
- [x] Product pages
- [x] Cart page
- [x] B2B page
- [x] About & Contact
- [x] Login page
- [ ] Implement dynamic routing

### Phase 3 - Backend API 🟡 (Next)
- [ ] Order routes
- [ ] Cart routes
- [ ] Payment routes
- [ ] B2B routes
- [ ] Category routes
- [ ] Review routes

### Phase 4 - Frontend Integration 🔴 (Pending)
- [ ] Connect APIs to pages
- [ ] Authentication flow
- [ ] Shopping cart logic
- [ ] Checkout process

---

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Kill process using port 5173 (frontend)
npx kill-port 5173

# Kill process using port 5000 (backend)
npx kill-port 5000
```

### Database Connection Failed
- Ensure PostgreSQL is running
- Check credentials in `.env.local`
- Verify database name exists
- Check firewall/network settings

### Tailwind Styles Not Appearing
- Rebuild: `npm run dev`
- Clear node_modules and reinstall
- Check `tailwind.config.js` includes correct paths

---

## 📞 Support

**Project**: SALADGO E-Commerce  
**Phone**: 9929622655  
**Email**: info@saladgo.in  

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Express.js Guide](https://expressjs.com)
- [Sequelize ORM](https://sequelize.org)

---

**Happy Coding! 🚀**
