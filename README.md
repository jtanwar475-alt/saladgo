# SALADGO - Premium E-Commerce Platform

A modern, full-stack e-commerce platform for fresh produce and healthy food delivery. Built with React, Node.js/Express, PostgreSQL, and Tailwind CSS.

## 🌟 Features

### Customer Features
- **Product Browsing**: Browse fresh vegetables, fruits, salads, juices, smoothies, and more
- **Smart Search & Filters**: Find products by category, price, and ratings
- **Shopping Cart**: Add/remove items, manage quantities
- **Secure Checkout**: Multiple payment options (Razorpay, COD)
- **Order Tracking**: Real-time delivery status tracking
- **User Accounts**: Profile management, order history, wishlist
- **Subscription Plans**: Daily, weekly, and monthly delivery plans

### B2B Features
- **Bulk Ordering**: Special pricing for bulk orders
- **Custom Cutting**: Pre-cut vegetables per business needs
- **Wholesale Pricing**: Dedicated B2B pricing
- **Business Dashboard**: Track orders, invoices, and supply schedules

### Admin Features
- **Product Management**: Create, edit, delete products
- **Category Management**: Organize products by category
- **Inventory Control**: Real-time stock management
- **Order Management**: Process and track orders
- **Customer Management**: View and manage customers
- **Sales Reports**: Analytics and performance insights

## 🛠️ Tech Stack

### Frontend
- **React 19** with Vite for fast development
- **Tailwind CSS** for modern, responsive design
- **React Router DOM** for navigation
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons
- **Axios** for API communication

### Backend
- **Node.js + Express.js** for REST API
- **PostgreSQL** for reliable data management
- **Sequelize ORM** for database operations
- **JWT** for authentication
- **bcryptjs** for password hashing
- **CORS** for cross-origin requests

## 📁 Project Structure

```
saladgo/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── layouts/        # Layout wrappers
│   │   ├── context/        # Context API state
│   │   ├── hooks/          # Custom hooks
│   │   ├── services/       # API service layer
│   │   ├── utils/          # Helper functions
│   │   ├── assets/         # Images, icons
│   │   └── App.jsx         # Root component
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── .env.local
│
├── backend/                  # Express API server
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── controllers/    # Route handlers
│   │   ├── models/         # Sequelize models
│   │   ├── middleware/     # Auth, validation
│   │   ├── services/       # Business logic
│   │   ├── db/            # Database config
│   │   ├── utils/         # Helpers
│   │   └── index.js       # Server entry
│   ├── package.json
│   ├── .env.example
│   └── .env.local
│
└── docs/                     # Documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- PostgreSQL 12+

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env.local
```

4. Update database credentials in `.env.local`:
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=saladgo
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret
```

5. Start the server:
```bash
npm run dev
```

Server runs at `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd ../frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local`:
```
VITE_API_URL=http://localhost:5000/api/v1
```

4. Start development server:
```bash
npm run dev
```

Frontend runs at `http://localhost:5173`

## 📚 API Documentation

### Authentication Endpoints

**POST** `/api/v1/auth/signup`
- Register new user
- Body: `{ name, email, password, phone }`

**POST** `/api/v1/auth/login`
- Login user
- Body: `{ email, password }`
- Returns: JWT token

**GET** `/api/v1/auth/profile`
- Get user profile (requires auth)
- Headers: `Authorization: Bearer <token>`

### Products Endpoints

**GET** `/api/v1/products`
- Get all products
- Query params: `categoryId`, `search`, `limit`, `offset`

**GET** `/api/v1/products/:id`
- Get product details

**POST** `/api/v1/products`
- Create product (admin only)
- Requires: Auth token with admin role

**PUT** `/api/v1/products/:id`
- Update product (admin only)

**DELETE** `/api/v1/products/:id`
- Delete product (admin only)

## 🎨 Design System

### Colors
- **Primary Green**: #10b981
- **Primary Orange**: #f97316
- **White**: #ffffff
- **Text Gray**: #374151

### Typography
- **Font**: Poppins, Inter
- **Headings**: Bold (700)
- **Body**: Regular (400-500)

### Spacing
- 8px-based scale
- Consistent padding/margins

## 🔒 Security Features

- JWT token-based authentication
- Password hashing with bcryptjs
- CORS protection
- Input validation
- SQL injection prevention via Sequelize ORM
- Environment variable management

## 🧪 Testing

### Frontend Testing
```bash
cd frontend
npm run dev
# Open http://localhost:5173
```

### Backend Testing
```bash
# Using Postman or curl
curl http://localhost:5000/api/health
```

## 📦 Build & Deployment

### Frontend Build
```bash
cd frontend
npm run build
# Output in dist/
```

### Deployment
- **Frontend**: Deploy `dist/` folder to Vercel or similar
- **Backend**: Deploy to AWS, Heroku, DigitalOcean, or similar

## 🚧 Future Enhancements

- Payment gateway integration (Razorpay)
- Email notifications
- SMS notifications
- Advanced inventory management
- Supply chain tracking
- AI-based recommendations
- Mobile app (React Native)
- Real-time notifications (WebSockets)

## 📞 Contact

**Phone**: 9929622655  
**Email**: info@saladgo.in  
**Website**: saladgo.in

## 📄 License

ISC

---

**Happy Coding! 🥗**
