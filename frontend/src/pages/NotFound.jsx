import React from 'react'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-orange-50">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">Sorry, we couldn't find what you're looking for.</p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <Home size={20} /> Go Home
        </Link>
      </div>
    </div>
  )
}
