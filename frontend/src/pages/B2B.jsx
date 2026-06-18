import React, { useState } from 'react'
import { Building2, Truck, Package, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export default function B2B() {
  const [formData, setFormData] = useState({ company: '', email: '', phone: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('B2B Inquiry:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container-max text-center">
          <h1 className="text-5xl font-bold mb-4">B2B Supply Solutions</h1>
          <p className="text-xl">Bulk orders for Hotels, Restaurants, Cafes & Caterers</p>
        </div>
      </section>

      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Features */}
          <div>
            <h2 className="text-4xl font-bold mb-8">Why Partner With SALADGO?</h2>
            <div className="space-y-6">
              {[
                { icon: Package, title: 'Bulk Supply', desc: 'Wholesale pricing for bulk orders' },
                { icon: Truck, title: 'Daily Delivery', desc: 'Reliable daily supply chain' },
                { icon: Award, title: 'Premium Quality', desc: 'Fresh, high-quality produce' },
                { icon: Building2, title: 'Custom Cutting', desc: 'Pre-cut vegetables per your needs' },
              ].map((item, idx) => (
                <motion.div key={idx} className="flex gap-4" whileHover={{ x: 10 }}>
                  <item.icon className="text-green-600 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Company Name"
                className="input-field"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="input-field"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="input-field"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <textarea
                placeholder="Tell us about your requirements..."
                className="input-field h-32"
              ></textarea>
              <button type="submit" className="btn-primary w-full">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
