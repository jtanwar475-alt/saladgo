import React from 'react'
import { BarChart, LineChart, PieChart, TrendingUp, Users, ShoppingBag, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AdminDashboard() {
  const stats = [
    { icon: DollarSign, label: 'Total Revenue', value: '₹45,231', change: '+12.5%', color: 'bg-green-500' },
    { icon: ShoppingBag, label: 'Total Orders', value: '1,342', change: '+8.2%', color: 'bg-blue-500' },
    { icon: Users, label: 'Total Customers', value: '856', change: '+5.1%', color: 'bg-orange-500' },
    { icon: TrendingUp, label: 'Avg Order Value', value: '₹3,420', change: '+3.8%', color: 'bg-purple-500' },
  ]

  const recentOrders = [
    { id: '001', customer: 'John Doe', amount: '₹2,450', status: 'delivered', date: '2024-06-18' },
    { id: '002', customer: 'Jane Smith', amount: '₹1,890', status: 'pending', date: '2024-06-17' },
    { id: '003', customer: 'Mike Johnson', amount: '₹3,210', status: 'shipped', date: '2024-06-17' },
    { id: '004', customer: 'Sarah Williams', amount: '₹2,100', status: 'confirmed', date: '2024-06-16' },
    { id: '005', customer: 'Tom Brown', amount: '₹1,550', status: 'delivered', date: '2024-06-16' },
  ]

  const topProducts = [
    { id: 1, name: 'Fresh Tomatoes', sales: 342, revenue: '₹51,300' },
    { id: 2, name: 'Organic Lettuce', sales: 289, revenue: '₹28,610' },
    { id: 3, name: 'Mixed Salad Pack', sales: 267, revenue: '₹66,435' },
    { id: 4, name: 'Fresh Juice Mix', sales: 198, revenue: '₹31,680' },
    { id: 5, name: 'Smoothie Combo', sales: 156, revenue: '₹24,960' },
  ]

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <p className="text-green-600 text-sm mt-1">{stat.change}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg text-white`}>
                <stat.icon size={28} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <LineChart size={20} className="text-blue-600" />
            Sales Overview
          </h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">📊 Chart will display here</p>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <PieChart size={20} className="text-orange-600" />
            Category Distribution
          </h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">📈 Chart will display here</p>
          </div>
        </div>
      </div>

      {/* Recent Orders & Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4">Recent Orders</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="text-left py-2 px-2 text-gray-600">Order ID</th>
                  <th className="text-left py-2 px-2 text-gray-600">Customer</th>
                  <th className="text-left py-2 px-2 text-gray-600">Amount</th>
                  <th className="text-left py-2 px-2 text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-2 font-medium">#{order.id}</td>
                    <td className="py-3 px-2">{order.customer}</td>
                    <td className="py-3 px-2 font-semibold text-green-600">{order.amount}</td>
                    <td className="py-3 px-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === 'delivered'
                            ? 'bg-green-100 text-green-800'
                            : order.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : order.status === 'shipped'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4">Top Products</h3>
          <div className="space-y-4">
            {topProducts.map((product, idx) => (
              <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.sales} sales</p>
                    </div>
                  </div>
                </div>
                <p className="font-bold text-green-600">{product.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
