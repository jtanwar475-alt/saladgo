import React, { useState } from 'react'
import { Save, Lock, Bell, DollarSign } from 'lucide-react'

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    storeName: 'SALADGO',
    email: 'info@saladgo.in',
    phone: '9929622655',
    address: 'Jaipur, Rajasthan',
    currency: 'INR',
    taxRate: '5',
    shippingCost: '50',
    lowStockAlert: '20',
  })

  const handleChange = (field, value) => {
    setSettings({ ...settings, [field]: value })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Settings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <DollarSign size={20} className="text-green-600" />
            General Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Store Name</label>
              <input
                type="text"
                value={settings.storeName}
                onChange={(e) => handleChange('storeName', e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                value={settings.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
              <input
                type="text"
                value={settings.address}
                onChange={(e) => handleChange('address', e.target.value)}
                className="input-field"
              />
            </div>
          </div>
        </div>

        {/* Business Settings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <DollarSign size={20} className="text-orange-600" />
            Business Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Currency</label>
              <select
                value={settings.currency}
                onChange={(e) => handleChange('currency', e.target.value)}
                className="input-field"
              >
                <option>INR</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tax Rate (%)</label>
              <input
                type="number"
                value={settings.taxRate}
                onChange={(e) => handleChange('taxRate', e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Shipping Cost (₹)</label>
              <input
                type="number"
                value={settings.shippingCost}
                onChange={(e) => handleChange('shippingCost', e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Low Stock Alert (units)</label>
              <input
                type="number"
                value={settings.lowStockAlert}
                onChange={(e) => handleChange('lowStockAlert', e.target.value)}
                className="input-field"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Bell size={20} className="text-blue-600" />
          Notification Settings
        </h3>
        <div className="space-y-4">
          {[
            { label: 'New Order Notifications', id: 'newOrder' },
            { label: 'Low Stock Alerts', id: 'lowStock' },
            { label: 'Customer Reviews', id: 'reviews' },
            { label: 'Payment Confirmations', id: 'payments' },
          ].map((item) => (
            <label key={item.id} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="text-gray-700 font-medium">{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Lock size={20} className="text-red-600" />
          Security Settings
        </h3>
        <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition">
          Change Password
        </button>
      </div>

      {/* Save Button */}
      <button className="btn-primary flex items-center gap-2 w-full md:w-auto">
        <Save size={20} /> Save Settings
      </button>
    </div>
  )
}
