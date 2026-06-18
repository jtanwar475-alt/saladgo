import React, { useState } from 'react'
import { Eye, Printer, CheckCircle, Clock, Truck } from 'lucide-react'

export default function AdminOrders() {
  const [orders] = useState([
    { id: 'ORD001', customer: 'John Doe', total: 2450, status: 'delivered', items: 3, date: '2024-06-18', payment: 'razorpay' },
    { id: 'ORD002', customer: 'Jane Smith', total: 1890, status: 'shipped', items: 2, date: '2024-06-18', payment: 'cod' },
    { id: 'ORD003', customer: 'Mike Johnson', total: 3210, status: 'confirmed', items: 4, date: '2024-06-17', payment: 'razorpay' },
    { id: 'ORD004', customer: 'Sarah Williams', total: 2100, status: 'pending', items: 2, date: '2024-06-17', payment: 'cod' },
    { id: 'ORD005', customer: 'Tom Brown', total: 1550, status: 'delivered', items: 1, date: '2024-06-16', payment: 'razorpay' },
  ])

  const [filterStatus, setFilterStatus] = useState('all')

  const filteredOrders = filterStatus === 'all' ? orders : orders.filter(o => o.status === filterStatus)

  const getStatusIcon = (status) => {
    switch(status) {
      case 'delivered': return <CheckCircle className="text-green-600" size={18} />
      case 'shipped': return <Truck className="text-blue-600" size={18} />
      case 'pending': return <Clock className="text-yellow-600" size={18} />
      default: return <CheckCircle className="text-gray-600" size={18} />
    }
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'delivered': return 'bg-green-100 text-green-800'
      case 'shipped': return 'bg-blue-100 text-blue-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'confirmed': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Order Management</h2>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {['all', 'pending', 'confirmed', 'shipped', 'delivered'].map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filterStatus === status
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Order ID</th>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Customer</th>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Total</th>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Items</th>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Payment</th>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Status</th>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                <td className="py-4 px-6 font-semibold text-gray-900">{order.id}</td>
                <td className="py-4 px-6 text-gray-600">{order.customer}</td>
                <td className="py-4 px-6 font-semibold text-green-600">₹{order.total}</td>
                <td className="py-4 px-6 text-gray-600">{order.items} items</td>
                <td className="py-4 px-6">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded">
                    {order.payment.toUpperCase()}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 w-fit ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 text-orange-600 hover:bg-orange-100 rounded-lg transition">
                      <Printer size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
