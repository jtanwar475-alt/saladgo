# SALADGO API Documentation

## Base URL
```
http://localhost:5000/api/v1
```

## 📋 Table of Contents
1. [Authentication](#authentication)
2. [Products](#products)
3. [Categories](#categories)
4. [Orders](#orders)
5. [Error Handling](#error-handling)

---

## Authentication

### Register User
**POST** `/auth/signup`

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123",
  "phone": "+919929622655"
}
```

Response (201):
```json
{
  "message": "User created successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "customer"
  }
}
```

---

### Login User
**POST** `/auth/login`

Request body:
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

Response (200):
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "customer"
  }
}
```

---

### Get User Profile
**GET** `/auth/profile`

Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

Response (200):
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919929622655",
  "role": "customer",
  "isActive": true,
  "createdAt": "2024-06-18T10:30:00Z",
  "updatedAt": "2024-06-18T10:30:00Z"
}
```

---

## Products

### Get All Products
**GET** `/products`

Query parameters:
- `categoryId` (optional) - Filter by category UUID
- `search` (optional) - Search by product name
- `limit` (optional, default: 10) - Number of products
- `offset` (optional, default: 0) - Pagination offset

Example request:
```
GET /products?search=tomato&limit=20&offset=0
```

Response (200):
```json
{
  "total": 15,
  "products": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "name": "Fresh Tomatoes",
      "description": "Organic fresh tomatoes",
      "price": "149.00",
      "discountPrice": "129.00",
      "stock": 100,
      "image": "https://...",
      "categoryId": "550e8400-e29b-41d4-a716-446655440002",
      "unit": "kg",
      "weight": "1.0",
      "rating": "4.5",
      "isActive": true,
      "isFeatured": true,
      "createdAt": "2024-06-18T10:30:00Z"
    }
  ],
  "limit": 20,
  "offset": 0
}
```

---

### Get Product Details
**GET** `/products/:id`

Path parameters:
- `id` - Product UUID

Response (200):
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440001",
  "name": "Fresh Tomatoes",
  "description": "Organic fresh tomatoes from farms",
  "price": "149.00",
  "discountPrice": "129.00",
  "stock": 100,
  "image": "https://...",
  "images": ["https://...", "https://..."],
  "categoryId": "550e8400-e29b-41d4-a716-446655440002",
  "category": {
    "id": "550e8400-e29b-41d4-a716-446655440002",
    "name": "Vegetables"
  },
  "unit": "kg",
  "weight": "1.0",
  "rating": "4.5",
  "isActive": true,
  "isFeatured": true
}
```

---

### Create Product
**POST** `/products`

Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

Request body:
```json
{
  "name": "Fresh Carrots",
  "description": "Orange fresh carrots",
  "price": 99.00,
  "discountPrice": 79.00,
  "stock": 150,
  "image": "https://...",
  "categoryId": "550e8400-e29b-41d4-a716-446655440002",
  "unit": "kg",
  "weight": 1.0,
  "rating": 4.5,
  "isActive": true,
  "isFeatured": false
}
```

Response (201):
```json
{
  "message": "Product created successfully",
  "product": {
    "id": "550e8400-e29b-41d4-a716-446655440005",
    "name": "Fresh Carrots",
    ...
  }
}
```

---

### Update Product
**PUT** `/products/:id`

Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

Request body (partial update):
```json
{
  "price": 89.00,
  "stock": 120
}
```

Response (200):
```json
{
  "message": "Product updated successfully",
  "product": {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "name": "Fresh Tomatoes",
    "price": "89.00",
    ...
  }
}
```

---

### Delete Product
**DELETE** `/products/:id`

Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

Response (200):
```json
{
  "message": "Product deleted successfully"
}
```

---

## Categories

### Get All Categories
**GET** `/categories`

Response (200):
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440002",
    "name": "Vegetables",
    "slug": "vegetables",
    "description": "Fresh vegetables",
    "image": "https://...",
    "isActive": true
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440003",
    "name": "Fruits",
    "slug": "fruits",
    "description": "Fresh fruits",
    "image": "https://...",
    "isActive": true
  }
]
```

---

## Orders

### Create Order
**POST** `/orders`

Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

Request body:
```json
{
  "items": [
    {
      "productId": "550e8400-e29b-41d4-a716-446655440001",
      "quantity": 2
    },
    {
      "productId": "550e8400-e29b-41d4-a716-446655440005",
      "quantity": 1
    }
  ],
  "deliveryAddress": {
    "street": "123 Main St",
    "city": "Jaipur",
    "state": "Rajasthan",
    "zipCode": "302001"
  },
  "paymentMethod": "razorpay"
}
```

Response (201):
```json
{
  "message": "Order created successfully",
  "order": {
    "id": "550e8400-e29b-41d4-a716-446655440010",
    "userId": "550e8400-e29b-41d4-a716-446655440000",
    "totalAmount": 258.00,
    "status": "pending",
    "paymentStatus": "pending",
    "items": [...],
    "deliveryAddress": {...},
    "createdAt": "2024-06-18T10:30:00Z"
  }
}
```

---

### Get User Orders
**GET** `/orders`

Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

Response (200):
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440010",
    "totalAmount": 258.00,
    "status": "delivered",
    "paymentStatus": "completed",
    "createdAt": "2024-06-18T10:30:00Z"
  }
]
```

---

### Get Order Details
**GET** `/orders/:id`

Headers:
```
Authorization: Bearer <JWT_TOKEN>
```

Response (200):
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440010",
  "userId": "550e8400-e29b-41d4-a716-446655440000",
  "totalAmount": 258.00,
  "status": "delivered",
  "paymentStatus": "completed",
  "items": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440011",
      "productId": "550e8400-e29b-41d4-a716-446655440001",
      "productName": "Fresh Tomatoes",
      "quantity": 2,
      "price": "129.00"
    }
  ],
  "deliveryAddress": {
    "street": "123 Main St",
    "city": "Jaipur",
    "state": "Rajasthan"
  },
  "createdAt": "2024-06-18T10:30:00Z",
  "deliveredAt": "2024-06-20T14:30:00Z"
}
```

---

## Error Handling

### Error Response Format
```json
{
  "message": "Error message here",
  "error": {}
}
```

### Common Error Codes

| Status | Message | Description |
|--------|---------|-------------|
| 400 | Bad Request | Invalid input data |
| 401 | Unauthorized | Missing or invalid token |
| 403 | Forbidden | Insufficient permissions (e.g., not admin) |
| 404 | Not Found | Resource not found |
| 500 | Server Error | Internal server error |

### Example Error Responses

**400 - Bad Request**
```json
{
  "message": "Email already exists"
}
```

**401 - Unauthorized**
```json
{
  "message": "No token provided"
}
```

**403 - Forbidden**
```json
{
  "message": "Unauthorized"
}
```

**404 - Not Found**
```json
{
  "message": "Product not found"
}
```

---

## Authentication Notes

- All protected endpoints require JWT token in `Authorization` header
- Token format: `Bearer <token>`
- Token expires in 7 days by default
- Include `JWT_SECRET` in backend `.env` file

---

## Rate Limiting

Currently not implemented. To be added in production.

---

## Pagination

Default limit: 10 items per page
Maximum limit: 100 items per page

Example:
```
GET /products?limit=20&offset=40
```

Returns items 40-60 (second page of 20 items)

---

## Sorting

Not yet implemented. To be added based on requirements.

---

## Version History

- **v1.0** (2024-06-18) - Initial API setup
  - Auth endpoints
  - Product CRUD
  - Basic order handling

---

For more information, visit: **saladgo.in** or call **9929622655**
