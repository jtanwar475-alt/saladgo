import React from 'react'
import { Mail, Phone, Eye, Trash2 } from 'lucide-react'

export default function AdminCustomers() {
  const [customers] = React.useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '9876543210', orders: 5, total: '₹12,450', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '9876543211', orders: 3, total: '₹8,920', status: 'active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', phone: '9876543212', orders: 8, total: '₹25,680', status: 'active' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', phone: '9876543213', orders: 2, total: '₹5,430', status: 'inactive' },
    { id: 5, name: 'Tom Brown', email: 'tom@example.com', phone: '9876543214', orders: 6, total: '₹18,900', status: 'active' },
  ])

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Customer Management</h2>

      {/* Customers Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Name</th>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Email</th>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Phone</th>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Orders</th>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Total Spent</th>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Status</th>
              <th className="text-left py-4 px-6 text-gray-600 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                <td className="py-4 px-6 font-semibold text-gray-900">{customer.name}</td>
                <td className="py-4 px-6 text-gray-600 flex items-center gap-2">
                  <Mail size={16} className="text-blue-500" />
                  {customer.email}
                </td>
                <td className="py-4 px-6 text-gray-600 flex items-center gap-2">
                  <Phone size={16} className="text-green-500" />
                  {customer.phone}
                </td>
                <td className="py-4 px-6 text-gray-600">{customer.orders} orders</td>
                <td className="py-4 px-6 font-semibold text-green-600">{customer.total}</td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    customer.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {customer.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition">
                      <Trash2 size={18} />
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
