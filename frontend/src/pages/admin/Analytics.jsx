import React from 'react'
import { BarChart3, TrendingUp, Users, ShoppingCart } from 'lucide-react'

export default function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Revenue', value: '₹1,85,420', icon: TrendingUp, color: 'bg-green-500' },
          { label: 'Total Orders', value: '342', icon: ShoppingCart, color: 'bg-blue-500' },
          { label: 'New Customers', value: '87', icon: Users, color: 'bg-purple-500' },
          { label: 'Avg Order Value', value: '₹5,420', icon: BarChart3, color: 'bg-orange-500' },
        ].map((metric, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{metric.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{metric.value}</p>
              </div>
              <div className={`${metric.color} p-3 rounded-lg text-white`}>
                <metric.icon size={28} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4">Monthly Sales</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">📊 Sales trend chart</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4">Customer Growth</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">📈 Growth chart</p>
          </div>
        </div>
      </div>

      {/* Category Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4">Category Performance</h3>
          <div className="space-y-3">
            {['Vegetables', 'Fruits', 'Salads', 'Juices'].map((cat, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{cat}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${[85, 72, 68, 54][idx]}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-lg font-bold text-green-600">{[85, 72, 68, 54][idx]}%</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4">Payment Methods</h3>
          <div className="space-y-4">
            {[
              { method: 'Razorpay', count: 245, percentage: 72 },
              { method: 'COD', count: 95, percentage: 28 },
            ].map((payment, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-gray-900">{payment.method}</p>
                  <p className="text-lg font-bold text-green-600">{payment.count} orders</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full"
                    style={{ width: `${payment.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
