import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact Form:', formData)
    alert('Thank you! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-600 to-orange-500 text-white py-16">
        <div className="container-max text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with SALADGO</p>
        </div>
      </section>

      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>

            {[
              { icon: Phone, title: 'Phone', info: '9929622655' },
              { icon: Mail, title: 'Email', info: 'info@saladgo.in' },
              { icon: MapPin, title: 'Website', info: 'saladgo.in' },
              { icon: Clock, title: 'Hours', info: 'Mon-Sun: 6AM - 11PM' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <item.icon className="text-green-600 flex-shrink-0" size={32} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.info}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input-field"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input-field"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <textarea
                placeholder="Your Message"
                className="input-field h-32"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-8">Find Us on Map</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-600">Google Map will be integrated here</p>
          </div>
        </div>
      </section>
    </div>
  )
}
