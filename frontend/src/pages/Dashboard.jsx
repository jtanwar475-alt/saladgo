import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { User, ShoppingBag, MapPin, LogOut, Edit2 } from 'lucide-react'

export default function Dashboard() {
  const { user, isAuthenticated, logout } = useAuth()
  const [orders] = useState([
    {
      id: '001',
      date: '2024-06-15',
      total: 499,
      status: 'delivered',
      items: 3,
    },
    {
      id: '002',
      date: '2024-06-10',
      total: 299,
      status: 'pending',
      items: 2,
    },
  ])

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-orange-400 rounded-full flex items-center justify-center text-white text-2xl">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-lg">{user?.name}</p>
                  <p className="text-gray-600 text-sm">{user?.email}</p>
                </div>
              </div>

              <div className="space-y-3 border-t pt-4">
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition flex items-center gap-3">
                  <User size={20} className="text-green-600" />
                  <span className="font-medium">Profile</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition flex items-center gap-3">
                  <ShoppingBag size={20} className="text-green-600" />
                  <span className="font-medium">Orders</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition flex items-center gap-3">
                  <MapPin size={20} className="text-green-600" />
                  <span className="font-medium">Addresses</span>
                </button>
              </div>

              <button
                onClick={logout}
                className="w-full mt-6 px-4 py-3 rounded-lg bg-red-50 text-red-600 font-medium hover:bg-red-100 transition flex items-center justify-center gap-2"
              >
                <LogOut size={20} /> Logout
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Profile Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Profile Information</h2>
                <button className="btn-secondary flex items-center gap-2">
                  <Edit2 size={18} /> Edit
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-600">Full Name</label>
                  <p className="text-lg font-semibold">{user?.name}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Email</label>
                  <p className="text-lg font-semibold">{user?.email}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Phone</label>
                  <p className="text-lg font-semibold">{user?.phone || 'Not added'}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Account Type</label>
                  <p className="text-lg font-semibold capitalize">{user?.role || 'Customer'}</p>
                </div>
              </div>
            </div>

            {/* Orders Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">My Orders</h2>

              {orders.length > 0 ? (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <div>
                          <label className="text-sm text-gray-600">Order ID</label>
                          <p className="font-semibold">#{order.id}</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Date</label>
                          <p className="font-semibold">{new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Items</label>
                          <p className="font-semibold">{order.items} items</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">Total</label>
                          <p className="font-semibold text-green-600">₹{order.total}</p>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <span className={`badge ${order.status === 'delivered' ? 'badge-success' : 'badge-warning'}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                          <button className="text-green-600 hover:text-green-700 text-sm font-medium mt-2">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-center py-8">No orders yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
