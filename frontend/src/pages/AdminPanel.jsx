import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AdminLayout from '../layouts/AdminLayout'
import AdminRoutes from '../components/AdminRoutes'

export default function AdminPanel() {
  const { user, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  if (user?.role !== 'admin') {
    return <Navigate to="/" />
  }

  return <AdminRoutes />
}
