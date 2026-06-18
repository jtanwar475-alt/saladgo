import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import AdminDashboard from '../pages/admin/Dashboard'
import AdminProducts from '../pages/admin/Products'
import AdminCategories from '../pages/admin/Categories'
import AdminOrders from '../pages/admin/Orders'
import AdminCustomers from '../pages/admin/Customers'
import AdminAnalytics from '../pages/admin/Analytics'
import AdminSettings from '../pages/admin/Settings'

export default function AdminRoutes() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/products" element={<AdminProducts />} />
        <Route path="/categories" element={<AdminCategories />} />
        <Route path="/orders" element={<AdminOrders />} />
        <Route path="/customers" element={<AdminCustomers />} />
        <Route path="/analytics" element={<AdminAnalytics />} />
        <Route path="/settings" element={<AdminSettings />} />
        <Route path="*" element={<Navigate to="/admin" />} />
      </Routes>
    </AdminLayout>
  )
}

